const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xyy8vtod',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
  apiVersion: '2024-06-12',
});

async function migrate() {
  console.log('Fetching existing data...');
  
  // 1. Fetch process steps
  const processSteps = await client.fetch(`*[_type == "processStep"] | order(num asc)`);
  console.log(`Found ${processSteps.length} process steps.`);
  
  // 2. Fetch featured projects
  const projects = await client.fetch(`*[_type == "project"]`);
  console.log(`Found ${projects.length} featured projects.`);
  
  // 3. Define the new 6 services
  const newServices = [
    { _key: 'srv1', id: '01', title: 'Architectures', link: '/architecture' },
    { _key: 'srv2', id: '02', title: 'Constructions', link: '/constructions' },
    { _key: 'srv3', id: '03', title: 'Interiors', link: '/interiors' },
    { _key: 'srv4', id: '04', title: 'False ceiling', link: '/finishing-details' },
    { _key: 'srv5', id: '05', title: 'Profile lighting', link: '/finishing-details' },
    { _key: 'srv6', id: '06', title: 'Putty painting', link: '/finishing-details' }
  ];

  // 4. Format process steps
  const inlineProcessSteps = processSteps.map((step, index) => ({
    _key: `step${index}`,
    num: step.num,
    title: step.title,
    desc: step.desc
  }));

  // 5. Format projects
  const inlineProjects = projects.map((proj, index) => ({
    _key: `proj${index}`,
    title: proj.title,
    category: proj.category,
    image: proj.image,
    link: proj.link
  }));

  // 6. Patch the homePage document
  console.log('Patching homePage document...');
  await client.patch('homePage')
    .set({
      expertiseTitle: 'Expertise',
      expertiseSubtitle: 'Elevating spaces through expert craftsmanship and innovative design solutions tailored to your unique lifestyle.',
      services: newServices,
      processTitle: 'The Process',
      processSubtitle: 'A seamless journey from initial concept to the final premium finish.',
      processSteps: inlineProcessSteps,
      featuredWorkTitle: 'Featured Work',
      featuredWorkSubtitle: 'A curated selection of our finest projects.',
      featuredProjects: inlineProjects
    })
    .commit();
    
  console.log('Successfully patched homePage!');

  // 7. Delete the old documents
  console.log('Deleting old documents...');
  const servicesDocs = await client.fetch(`*[_type == "service"]._id`);
  
  const allDocIdsToDelete = [
    ...servicesDocs,
    ...processSteps.map(s => s._id),
    ...projects.map(p => p._id)
  ];
  
  for (const id of allDocIdsToDelete) {
    try {
      await client.delete(id);
      console.log(`Deleted ${id}`);
    } catch(err) {
      console.error(`Failed to delete ${id}`, err.message);
    }
  }

  console.log('Migration complete!');
}

migrate().catch(console.error);
