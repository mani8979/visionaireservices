const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'xyy8vtod',
  dataset: 'production',
  apiVersion: '2024-06-12',
  useCdn: false,
});

async function check() {
  const docs = await client.fetch(`*[_type == "profileLightingPage"]{ _id, _updatedAt, "heroImageUrl": heroImage.secure_url }`);
  console.log("Documents found:", docs.length);
  console.log(JSON.stringify(docs, null, 2));
}

check().catch(console.error);
