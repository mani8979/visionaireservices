const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xyy8vtod',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-06-12',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
});

async function seedPages() {
  const pages = [
    { _type: 'architecturePage', _id: 'architecturePage' },
    { _type: 'interiorsPage', _id: 'interiorsPage' },
    { _type: 'falseCeilingPage', _id: 'falseCeilingPage' },
    { _type: 'profileLightingPage', _id: 'profileLightingPage' },
    { _type: 'puttyPaintingPage', _id: 'puttyPaintingPage' },
    { _type: 'constructionsPage', _id: 'constructionsPage' }
  ];

  for (const page of pages) {
    try {
      const existing = await client.getDocument(page._id);
      if (!existing) {
        console.log(`Creating ${page._type}...`);
        await client.createIfNotExists({
          ...page,
          heroTitle: `Welcome to ${page._type}`,
        });
        console.log(`Created ${page._type} successfully.`);
      } else {
        console.log(`${page._type} already exists.`);
      }
    } catch (error) {
      console.error(`Failed to create ${page._type}:`, error.message);
    }
  }
}

seedPages();
