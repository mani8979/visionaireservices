const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xyy8vtod',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-06-12',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
});

async function run() {
  try {
    console.log("Updating architecturePage stats...");
    await client.patch('architecturePage').set({
      awardsWon: '12+',
      designsDelivered: '75+',
      clientSatisfaction: '100%'
    }).commit();

    console.log("Stats updated successfully!");
  } catch (error) {
    console.error("Error updating stats:", error);
  }
}

run();
