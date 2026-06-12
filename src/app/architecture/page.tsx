import { client } from "@/sanity/client";
import ArchitectureClient from "./ArchitectureClient";

export default async function ArchitecturePage() {
  const data = await client.fetch(`*[_type == "architecturePage"][0] {
    heroTitle,
    "heroImageUrl": heroImage.secure_url,
    awardsWon,
    designsDelivered,
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
