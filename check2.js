const { createClient } = require('@sanity/client');
const client = createClient({ projectId: 'xyy8vtod', dataset: 'production', apiVersion: '2024-06-12', useCdn: false });
client.fetch('*[_type == "profileLightingPage"]{ _id, "heroImageUrl": heroImage.secure_url, "mainImageUrl": mainImage.secure_url }').then(console.log);
