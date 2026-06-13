import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Constructions',
  description: 'Premium construction services in Visakhapatnam. Delivering high-quality residential, commercial, and industrial construction projects on time and within budget.',
  alternates: {
    canonical: 'https://visionaireservices.com/constructions',
  },
  openGraph: {
    title: 'Constructions | VISIONAIRE SERVICES',
    description: 'Premium construction services in Visakhapatnam. Delivering high-quality residential, commercial, and industrial construction projects on time and within budget.',
    url: 'https://visionaireservices.com/constructions',
  }
};

export const dynamic = 'force-dynamic';

import { client } from "@/sanity/client";
import ConstructionsClient from "./ConstructionsClient";

export default async function ConstructionsPage() {
  const data = await client.fetch(`*[_type == "constructionsPage"][0] {
    heroTitle,
    "heroImageUrl": heroImage.secure_url,
    yearsExperience,
    projectsCompleted,
    clientSatisfaction,
    residentialTitle,
    residentialText,
    residentialPoints,
    "residentialImageUrl": residentialImage.secure_url,
    commercialTitle,
    commercialText,
    commercialPoints,
    "commercialImageUrl": commercialImage.secure_url,
    transformationsTitle,
    transformationsText,
    "beforeImageUrl": beforeImage.secure_url,
    "afterImageUrl": afterImage.secure_url
  }`);

  return <ConstructionsClient data={data} />;
}
