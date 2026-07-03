const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xyy8vtod',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-06-12',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
});

async function updateAddress() {
  const docId = 'siteSettings';
  const addressText = `Visionaire Services\n\nPlot No. 960,\nBeside Aditya Fortuner,\nNear Kushi Shop,\nMidhilapuri VUDA Colony,\nMadhurawada,\nVisakhapatnam,\nAndhra Pradesh – 530041`;
  
  try {
    console.log("Checking if siteSettings document exists...");
    const existing = await client.getDocument(docId);
    
    if (!existing) {
      console.log("siteSettings does not exist. Creating default document...");
      await client.create({
        _id: docId,
        _type: 'siteSettings',
        title: 'Visionaire Services',
        officeAddress: addressText,
      });
      console.log("Created siteSettings document with address.");
    } else {
      console.log("siteSettings exists. Patching address and title...");
      await client.patch(docId)
        .set({ 
          title: 'Visionaire Services',
          officeAddress: addressText 
        })
        .commit();
      console.log("Patched siteSettings address successfully.");
    }
  } catch (error) {
    console.error("Failed to update siteSettings address:", error);
    process.exit(1);
  }
}

updateAddress();
