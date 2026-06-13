import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Architectures',
  description: 'Expert architectural design services in Visakhapatnam. We conceptualize and design residential and commercial spaces that are beautiful and highly functional.',
  alternates: {
    canonical: 'https://visionaireservices.com/architecture',
  },
  openGraph: {
    title: 'Architectures | VISIONAIRE SERVICES',
    description: 'Expert architectural design services in Visakhapatnam. We conceptualize and design residential and commercial spaces that are beautiful and highly functional.',
    url: 'https://visionaireservices.com/architecture',
  }
};

export const dynamic = 'force-dynamic';

import { client } from "@/sanity/client";
import ArchitectureClient from "./ArchitectureClient";

export default async function ArchitecturePage() {
  const data = await client.fetch(`*[_type == "architecturePage"][0] {
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

  return <ArchitectureClient data={data} />;
}
