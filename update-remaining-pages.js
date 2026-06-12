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
    const plHeroPath = "C:\\Users\\Manibabu\\.gemini\\antigravity-ide\\brain\\98fde383-b7f8-411b-9917-57d2f130f2a0\\profile_lighting_hero_1781272233607.png";
    const plMainPath = "C:\\Users\\Manibabu\\.gemini\\antigravity-ide\\brain\\98fde383-b7f8-411b-9917-57d2f130f2a0\\profile_lighting_main_1781272247084.png";

    const ppHeroPath = "C:\\Users\\Manibabu\\.gemini\\antigravity-ide\\brain\\98fde383-b7f8-411b-9917-57d2f130f2a0\\putty_painting_hero_1781272268325.png";
    const ppBeforePath = "C:\\Users\\Manibabu\\.gemini\\antigravity-ide\\brain\\98fde383-b7f8-411b-9917-57d2f130f2a0\\putty_painting_before_1781272280298.png";
    const ppAfterPath = "C:\\Users\\Manibabu\\.gemini\\antigravity-ide\\brain\\98fde383-b7f8-411b-9917-57d2f130f2a0\\putty_painting_after_1781272291768.png";

    console.log("Uploading Profile Lighting Images...");
    const plHeroObj = await uploadToCloudinary(plHeroPath);
    const plMainObj = await uploadToCloudinary(plMainPath);

    console.log("Uploading Putty Painting Images...");
    const ppHeroObj = await uploadToCloudinary(ppHeroPath);
    const ppBeforeObj = await uploadToCloudinary(ppBeforePath);
    const ppAfterObj = await uploadToCloudinary(ppAfterPath);

    console.log("Updating profileLightingPage in Sanity...");
    await client
      .patch('profileLightingPage')
      .set({
        heroTitle: 'Profile Lighting',
        heroImage: plHeroObj,
        introText: 'Linear lighting and warm architectural glow integrated seamlessly into ceilings and walls. Transform the atmosphere of any room with precision lighting design.',
        mainTitle: 'Precision Illumination',
        mainText: 'We craft premium ambiance that highlights textures and guides the eye through the space. From minimalist recessed strips to bold geometric layouts, our profile lighting solutions redefine modern luxury.',
        mainImage: plMainObj
      })
      .commit();

    console.log("Updating puttyPaintingPage in Sanity...");
    await client
      .patch('puttyPaintingPage')
      .set({
        heroTitle: 'Putty Painting',
        heroImage: ppHeroObj,
        introText: 'Achieve smooth, flawless walls with professional putty painting solutions. We prepare surfaces for a premium finish, improve paint durability, and deliver clean, elegant interiors.',
        mainTitle: 'Flawless Finish',
        mainText: 'The difference between a good wall and a spectacular one lies in the preparation. Our expert putty application removes all imperfections, creating the ultimate canvas for your luxury paint or wallpaper.',
        beforeImage: ppBeforeObj,
        afterImage: ppAfterObj
      })
      .commit();

    console.log("All pages updated successfully!");
  } catch (error) {
    console.error("Error updating pages:", error);
  }
}

run();
