import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'False Ceiling',
  description: 'Professional false ceiling and gypsum ceiling installations in Visakhapatnam for modern homes and commercial spaces.',
  alternates: {
    canonical: 'https://visionaireservices.com/false-ceiling',
  },
  openGraph: {
    title: 'False Ceiling | VISIONAIRE SERVICES',
    description: 'Professional false ceiling and gypsum ceiling installations in Visakhapatnam for modern homes and commercial spaces.',
    url: 'https://visionaireservices.com/false-ceiling',
  }
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { client } from "@/sanity/client";
import FalseCeilingClient from "./FalseCeilingClient";

export default async function FalseCeilingPage() {
  const data = await client.fetch(`*[_type == "falseCeilingPage"][0] {
    heroTitle,
    "heroImageUrl": heroImage.secure_url,
    introText,
    mainTitle,
    mainText,
    "mainImageUrl": mainImage.secure_url
  }`, {}, { cache: "no-store" });

  return <FalseCeilingClient data={data} />;
}
