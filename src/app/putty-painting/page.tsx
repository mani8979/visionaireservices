import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Putty Painting',
  description: 'High-quality wall putty and painting services in Visakhapatnam. Achieve flawless finishes and vibrant colors for your interiors and exteriors.',
  alternates: {
    canonical: 'https://visionaireservices.com/putty-painting',
  },
  openGraph: {
    title: 'Putty Painting | VISIONAIRE SERVICES',
    description: 'High-quality wall putty and painting services in Visakhapatnam. Achieve flawless finishes and vibrant colors for your interiors and exteriors.',
    url: 'https://visionaireservices.com/putty-painting',
  }
};

export const dynamic = 'force-dynamic';

import { client } from "@/sanity/client";
import PuttyPaintingClient from "./PuttyPaintingClient";

export default async function PuttyPaintingPage() {
  const data = await client.fetch(`*[_type == "puttyPaintingPage"][0] {
    heroTitle,
    "heroImageUrl": heroImage.secure_url,
    introText,
    mainTitle,
    mainText,
    "beforeImageUrl": beforeImage.secure_url,
    "afterImageUrl": afterImage.secure_url
  }`);

  return <PuttyPaintingClient data={data} />;
}
