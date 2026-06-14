import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interiors',
  description: 'Luxury interior design services in Visakhapatnam. Transforming spaces with premium aesthetics, custom wardrobes, modular kitchens, and elegant furnishings.',
  alternates: {
    canonical: 'https://visionaireservices.com/interiors',
  },
  openGraph: {
    title: 'Interiors | VISIONAIRE SERVICES',
    description: 'Luxury interior design services in Visakhapatnam. Transforming spaces with premium aesthetics, custom wardrobes, modular kitchens, and elegant furnishings.',
    url: 'https://visionaireservices.com/interiors',
  }
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

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
  }`, {}, { cache: "no-store" });

  const siteSettings = await client.fetch(`*[_type == "siteSettings"][0] { clients }`);

  return <InteriorsClient data={data} clients={siteSettings?.clients} />;
}
