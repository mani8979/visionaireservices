export const revalidate = 60;

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
