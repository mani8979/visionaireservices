import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile Lighting',
  description: 'Innovative profile lighting and architectural lighting solutions in Visakhapatnam to elevate the mood and aesthetics of your space.',
  alternates: {
    canonical: 'https://visionaireservices.com/profile-lighting',
  },
  openGraph: {
    title: 'Profile Lighting | VISIONAIRE SERVICES',
    description: 'Innovative profile lighting and architectural lighting solutions in Visakhapatnam to elevate the mood and aesthetics of your space.',
    url: 'https://visionaireservices.com/profile-lighting',
  }
};

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
