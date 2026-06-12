const { createClient } = require('@sanity/client');
const cloudinary = require('cloudinary').v2;
const path = require('path');
require('dotenv').config({ path: '.env.local' });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'dyx9dzxwa',
  api_key: process.env.CLOUDINARY_API_KEY || '521646221462269',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'ro8vRiI7NMo11QTt2uTyUKUwsD8'
});

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
    const imagesDir = path.join(__dirname, 'public', 'images');
    
    console.log("Uploading generic images...");
    const archHero = await uploadToCloudinary(path.join(imagesDir, 'hero_architecture.png'));
    const constHero = await uploadToCloudinary(path.join(imagesDir, 'constructions_hero.png'));
    const intHero = await uploadToCloudinary(path.join(imagesDir, 'interiors_hero.png'));
    const resConst = await uploadToCloudinary(path.join(imagesDir, 'residential_const.png'));
    const bedInt = await uploadToCloudinary(path.join(imagesDir, 'bedroom_interior.png'));
    const kitchInt = await uploadToCloudinary(path.join(imagesDir, 'kitchen_interior.png'));

    console.log("Updating architecturePage...");
    await client.patch('architecturePage').set({
      heroTitle: 'Visionary Architecture.\nEnduring Legacy.',
      heroImage: archHero,
      awardsWon: '25+',
      designsDelivered: '150+',
      clientSatisfaction: '100%',
      residentialTitle: 'Residential Architecture',
      residentialText: 'We conceptualize and design homes that are not just beautiful, but deeply personal and highly functional.',
      residentialPoints: ['Custom Home Design', 'Sustainable Living Concepts', 'Landscape & Exterior Integration'],
      residentialImage: resConst,
      commercialTitle: 'Commercial Architecture',
      commercialText: 'Designing iconic commercial spaces that elevate brand identity and optimize workflow.',
      commercialPoints: ['Corporate Offices', 'Retail Boutiques', 'Mixed-Use Complexes'],
      commercialImage: archHero,
      transformationsTitle: 'From Concept to Reality',
      transformationsText: 'See how our architectural blueprints translate into stunning physical spaces.',
      beforeImage: constHero,
      afterImage: archHero
    }).commit();

    console.log("Updating constructionsPage...");
    await client.patch('constructionsPage').set({
      heroTitle: 'Precision Construction.\nTimeless Results.',
      heroImage: constHero,
      yearsExperience: '12+',
      projectsCompleted: '75+',
      clientSatisfaction: '100%',
      residentialTitle: 'Residential Construction',
      residentialText: 'We build luxury homes that reflect your personal style and stand the test of time. From bespoke villas to modern minimalist houses, every project is executed with unparalleled attention to detail and structural integrity.',
      residentialPoints: ['Custom Home Building', 'Luxury Villas & Mansions', 'Major Structural Renovations'],
      residentialImage: resConst,
      commercialTitle: 'Commercial Construction',
      commercialText: 'Delivering high-performance commercial spaces that inspire productivity and impress clients. Our commercial division handles large-scale projects with strict adherence to timelines and safety standards.',
      commercialPoints: ['Corporate Headquarters', 'Retail & Hospitality Spaces', 'Mixed-Use Developments'],
      commercialImage: constHero,
      transformationsTitle: 'Transformations',
      transformationsText: 'Witness the evolution from raw structure to refined architecture.',
      beforeImage: resConst,
      afterImage: constHero
    }).commit();

    console.log("Updating interiorsPage...");
    await client.patch('interiorsPage').set({
      heroTitle: 'Designed Around\nHow You Live',
      heroImage: intHero,
      awardsWon: '25+',
      designsDelivered: '150+',
      clientSatisfaction: '100%',
      livingSpacesTitle: 'Living Spaces',
      livingSpacesText: 'The heart of your home, designed for comfort and connection. We blend bespoke furniture with ambient lighting to create a warm, inviting atmosphere.',
      livingSpacesPoints: ['Bespoke Furniture', 'Ambient Lighting', 'Space Optimization'],
      livingSpacesImage: intHero,
      kitchenTitle: 'Culinary Excellence',
      kitchenText: 'Premium kitchens that balance high-end culinary functionality with striking aesthetics. Minimalist cabinetry, stone countertops, and integrated appliances.',
      kitchenPoints: ['Minimalist Cabinetry', 'Stone Countertops', 'Integrated Appliances'],
      kitchenImage: kitchInt,
      masterSuitesTitle: 'Master Suites',
      masterSuitesText: 'Tranquil retreats designed for ultimate relaxation. We incorporate soft textiles, muted palettes, and custom wardrobes for a serene bedroom environment.',
      masterSuitesPoints: ['Soft Textiles', 'Muted Palettes', 'Custom Wardrobes'],
      masterSuitesImage: bedInt,
      clientPerspectivesTitle: 'Client Perspectives',
      clientPerspectivesText: '"Visionaire Services transformed our penthouse into a masterpiece." - Alexander M.\n\n"Their approach to commercial interiors completely revitalized our office space." - Elena R.'
    }).commit();

    console.log("All main pages updated successfully!");
  } catch (error) {
    console.error("Error updating pages:", error);
  }
}

run();
