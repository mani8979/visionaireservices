export const dynamic = 'force-dynamic';

import { client } from "@/sanity/client";
import InteriorsClient from "./InteriorsClient";

export default async function InteriorsPage() {
  const data = await client.fetch(`*[_type == "interiorsPage"][0] {
    heroTitle,
    "heroImageUrl": heroImage.secure_url,
    introText,
    livingTitle,
    livingText,
    "livingImageUrl": livingImage.secure_url,
    kitchenTitle,
    kitchenText,
    "kitchenImageUrl": kitchenImage.secure_url,
    bedroomTitle,
    bedroomText,
    "bedroomImageUrl": bedroomImage.secure_url,
    testimonialsTitle,
    testimonial1Text,
    testimonial1Author,
    testimonial1Role,
    testimonial2Text,
    testimonial2Author,
    testimonial2Role
  }`);

  return <InteriorsClient data={data} />;
}
