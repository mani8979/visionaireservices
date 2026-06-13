import { Metadata } from 'next';
export const metadata: Metadata = { title: 'Putty Painting' };

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
