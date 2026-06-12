const { createClient } = require('@sanity/client');
const cloudinary = require('cloudinary').v2;
require('dotenv').config({ path: '.env.local' });

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dyx9dzxwa',
  api_key: process.env.CLOUDINARY_API_KEY || '521646221462269',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'ro8vRiI7NMo11QTt2uTyUKUwsD8'
});

// Configure Sanity
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xyy8vtod',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-06-12',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
});

async function uploadToCloudinary(filePath) {
  console.log(`Uploading ${filePath} to Cloudinary...`);
  const result = await cloudinary.uploader.upload(filePath);
  return {
    _type: 'cloudinary.asset',
    public_id: result.public_id,
    secure_url: result.secure_url,
    version: result.version,
    format: result.format,
    resource_type: result.resource_type,
    type: result.type,
    width: result.width,
    height: result.height,
    url: result.url
  };
}

async function run() {
  try {
    const heroImagePath = "C:\\Users\\Manibabu\\.gemini\\antigravity-ide\\brain\\98fde383-b7f8-411b-9917-57d2f130f2a0\\false_ceiling_hero_1781271825090.png";
    const mainImagePath = "C:\\Users\\Manibabu\\.gemini\\antigravity-ide\\brain\\98fde383-b7f8-411b-9917-57d2f130f2a0\\false_ceiling_main_1781271848398.png";

    const heroImageObj = await uploadToCloudinary(heroImagePath);
    const mainImageObj = await uploadToCloudinary(mainImagePath);

    console.log("Updating falseCeilingPage in Sanity...");
    await client
      .patch('falseCeilingPage')
      .set({
        heroTitle: 'False Ceiling',
        heroImage: heroImageObj,
        introText: 'Sculpt the volume of your room with premium ceiling layouts. Modern gypsum and premium ceiling layouts that do more than hide utilities—they sculpt the volume of the room. From minimalist floating planes to intricate coffered designs.',
        mainTitle: 'False Ceiling Layouts',
        mainText: 'Modern gypsum and premium ceiling layouts that do more than hide utilities—they sculpt the volume of the room. From minimalist floating planes to intricate coffered designs. We craft premium ambiance that highlights textures and guides the eye through the space.',
        mainImage: mainImageObj
      })
      .commit();

    console.log("falseCeilingPage updated successfully!");
  } catch (error) {
    console.error("Error updating page:", error);
  }
}

run();
