const { createClient } = require('@sanity/client');
const cloudinary = require('cloudinary').v2;
require('dotenv').config({ path: '.env.local' });

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dyx9dzxwa',
  api_key: '521646221462269',
  api_secret: 'ro8vRiI7NMo11QTt2uTyUKUwsD8'
});

// Configure Sanity
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xyy8vtod',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-06-12',
  token: process.env.SANITY_AUTH_TOKEN
});

async function run() {
  try {
    console.log('Fetching documents with images from Sanity...');
    // Query documents that have an image field. We resolve the asset url directly.
    const docs = await client.fetch(`
      *[_type in ["homePage", "constructionsPage", "architecturePage", "interiorsPage", "finishingDetailsPage", "project", "service"] && defined(image.asset)] {
        _id,
        _type,
        "imageUrl": image.asset->url
      }
    `);

    // For homePage, heroImage and aboutImage
    const homeDocs = await client.fetch(`
      *[_type == "homePage"] {
        _id,
        "heroImageUrl": heroImage.asset->url,
        "aboutImageUrl": aboutImage.asset->url
      }
    `);

    console.log(`Found ${docs.length} general documents and ${homeDocs.length} homePage documents to process.`);

    const uploadToCloudinary = async (imageUrl) => {
      if (!imageUrl) return null;
      console.log(`Uploading ${imageUrl} to Cloudinary...`);
      const result = await cloudinary.uploader.upload(imageUrl, {
        folder: 'visionaire'
      });
      return {
        _type: 'cloudinary.asset',
        version: result.version,
        public_id: result.public_id,
        format: result.format,
        resource_type: result.resource_type,
        url: result.url,
        secure_url: result.secure_url,
        width: result.width,
        height: result.height,
        bytes: result.bytes,
      };
    };

    // Process general documents (projects, services, inner pages)
    for (const doc of docs) {
      if (doc.imageUrl) {
        const cloudinaryAsset = await uploadToCloudinary(doc.imageUrl);
        if (cloudinaryAsset) {
          console.log(`Patching document ${doc._id} (${doc._type})`);
          await client.patch(doc._id).set({ image: cloudinaryAsset }).commit();
        }
      }
    }

    // Process homePage
    for (const doc of homeDocs) {
      const patches = {};
      if (doc.heroImageUrl) {
        patches.heroImage = await uploadToCloudinary(doc.heroImageUrl);
      }
      if (doc.aboutImageUrl) {
        patches.aboutImage = await uploadToCloudinary(doc.aboutImageUrl);
      }
      if (Object.keys(patches).length > 0) {
        console.log(`Patching homePage document ${doc._id}`);
        await client.patch(doc._id).set(patches).commit();
      }
    }

    console.log('Migration to Cloudinary complete!');
  } catch (error) {
    console.error('Error migrating:', error);
  }
}

run();
