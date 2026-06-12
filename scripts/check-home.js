const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xyy8vtod',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-06-12',
});

async function run() {
  const data = await client.fetch(`*[_type == "homePage"][0]`);
  console.log(JSON.stringify(data, null, 2));
}

run();
