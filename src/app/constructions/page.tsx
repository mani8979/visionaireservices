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
