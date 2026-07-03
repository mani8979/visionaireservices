const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xyy8vtod',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-06-12',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
});

const clientsData = [
  {
    name: "Dr Chaitanya",
    role: "anaesthesia",
    text: "The precision and attention to detail Visionaire Services brought to our home design was truly exceptional. The soothing ambiance they created is perfect after a long day at the hospital."
  },
  {
    name: "Dr. Padala Ashok",
    role: "orthopedist",
    text: "They designed an incredibly ergonomic and beautifully structured living space. The entire process was seamless, and the final result exceeded our expectations."
  },
  {
    name: "Dr.Petla Naidu",
    role: "scientist",
    text: "I was thoroughly impressed by their innovative approach to space utilization. Visionaire Services perfectly blended modern aesthetics with practical functionality."
  },
  {
    name: "Mr Sateesh",
    role: "Jaya enterprises",
    text: "Visionaire Services transformed our commercial space into a premium, highly functional environment. Their professionalism and timely delivery were outstanding."
  },
  {
    name: "Dr Akhila",
    role: "pathologist",
    text: "The meticulous design and elegant interiors have completely revitalized our home. I highly recommend their exceptional interior and architectural services."
  }
];

async function updateClients() {
  const docId = 'siteSettings';
  try {
    console.log("Checking if siteSettings document exists...");
    const existing = await client.getDocument(docId);
    
    if (!existing) {
      console.log("siteSettings does not exist. Creating default document...");
      await client.create({
        _id: docId,
        _type: 'siteSettings',
        title: 'Visionaire Services',
        clients: clientsData
      });
      console.log("Created siteSettings document with clients.");
    } else {
      console.log("siteSettings exists. Patching client data...");
      await client.patch(docId)
        .set({ clients: clientsData })
        .commit();
      console.log("Patched siteSettings clients list successfully.");
    }
  } catch (error) {
    console.error("Failed to update siteSettings:", error);
    process.exit(1);
  }
}

updateClients();
