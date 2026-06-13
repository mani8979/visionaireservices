import { Metadata } from 'next';
export const metadata: Metadata = { title: 'False Ceiling' };

export const dynamic = 'force-dynamic';

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
  }`);

  return <FalseCeilingClient data={data} />;
}
