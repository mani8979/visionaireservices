export const revalidate = 60;

import { client } from "@/sanity/client";
import FinishingDetailsClient from "./FinishingDetailsClient";

export default async function FinishingDetailsPage() {
  const data = await client.fetch(`*[_type == "finishingDetailsPage"][0] {
    heroTitle,
    "heroImageUrl": heroImage.secure_url,
    introText,
    falseCeilingTitle,
    falseCeilingText,
    "falseCeilingImageUrl": falseCeilingImage.secure_url,
    profileLightingTitle,
    profileLightingText,
    "profileLightingImageUrl": profileLightingImage.secure_url,
    puttyPaintingTitle,
    puttyPaintingText,
    "puttyBeforeImageUrl": beforeImage.secure_url,
    "puttyAfterImageUrl": afterImage.secure_url
  }`);

  return <FinishingDetailsClient data={data} />;
}
