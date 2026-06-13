import { Metadata } from 'next';
export const metadata: Metadata = { title: 'Profile Lighting' };

export const dynamic = 'force-dynamic';

import { client } from "@/sanity/client";
import ProfileLightingClient from "./ProfileLightingClient";

export default async function ProfileLightingPage() {
  const data = await client.fetch(`*[_type == "profileLightingPage"][0] {
    heroTitle,
    "heroImageUrl": heroImage.secure_url,
    introText,
    mainTitle,
    mainText,
    "mainImageUrl": mainImage.secure_url
  }`);

  return <ProfileLightingClient data={data} />;
}
