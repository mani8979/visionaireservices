const { createClient } = require('@sanity/client');
const cloudinary = require('cloudinary').v2;
require('dotenv').config({ path: '.env.local' });

cloudinary.config({
  cloud_name: 'dyx9dzxwa',
  api_key: '521646221462269',
  api_secret: 'ro8vRiI7NMo11QTt2uTyUKUwsD8'
});

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xyy8vtod',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-06-12',
  token: process.env.SANITY_AUTH_TOKEN
});

const uploadToCloudinary = async (imageUrl) => {
  if (!imageUrl) return null;
  console.log(`Uploading ${imageUrl} to Cloudinary...`);
  const result = await cloudinary.uploader.upload(imageUrl, { folder: 'visionaire' });
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

async function run() {
  try {
    const pages = await client.fetch(`
      *[_type in ["constructionsPage", "architecturePage", "interiorsPage", "finishingDetailsPage"]] {
        _id,
        _type,
        "heroImageUrl": heroImage.asset->url,
        "residentialImageUrl": residentialImage.asset->url,
        "commercialImageUrl": commercialImage.asset->url,
        "beforeImageUrl": beforeImage.asset->url,
        "afterImageUrl": afterImage.asset->url,
        "kitchenImageUrl": kitchenImage.asset->url,
        "bedroomImageUrl": bedroomImage.asset->url,
        "livingImageUrl": livingImage.asset->url,
        "falseCeilingImageUrl": falseCeilingImage.asset->url,
        "profileLightingImageUrl": profileLightingImage.asset->url
      }
    `);

    for (const doc of pages) {
      const patches = {};
      if (doc.heroImageUrl) patches.heroImage = await uploadToCloudinary(doc.heroImageUrl);
      if (doc.residentialImageUrl) patches.residentialImage = await uploadToCloudinary(doc.residentialImageUrl);
      if (doc.commercialImageUrl) patches.commercialImage = await uploadToCloudinary(doc.commercialImageUrl);
      if (doc.beforeImageUrl) patches.beforeImage = await uploadToCloudinary(doc.beforeImageUrl);
      if (doc.afterImageUrl) patches.afterImage = await uploadToCloudinary(doc.afterImageUrl);
      if (doc.kitchenImageUrl) patches.kitchenImage = await uploadToCloudinary(doc.kitchenImageUrl);
      if (doc.bedroomImageUrl) patches.bedroomImage = await uploadToCloudinary(doc.bedroomImageUrl);
      if (doc.livingImageUrl) patches.livingImage = await uploadToCloudinary(doc.livingImageUrl);
      if (doc.falseCeilingImageUrl) patches.falseCeilingImage = await uploadToCloudinary(doc.falseCeilingImageUrl);
      if (doc.profileLightingImageUrl) patches.profileLightingImage = await uploadToCloudinary(doc.profileLightingImageUrl);
      
      if (Object.keys(patches).length > 0) {
        console.log(`Patching inner page document ${doc._id} (${doc._type})`);
        await client.patch(doc._id).set(patches).commit();
      }
    }
    console.log('Inner pages migrated.');
  } catch (err) {
    console.error(err);
  }
}

run();
