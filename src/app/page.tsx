import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Interior Designers in Visakhapatnam | Home & Office Interiors | Visionaire Services",
  description: "Looking for the best interior designers in Visakhapatnam? Visionaire Services offers premium home interiors, office interiors, modular kitchens, wardrobes, false ceilings, TV units and turnkey interior solutions across Andhra Pradesh & Telangana.",
  alternates: {
    canonical: "https://visionaireservices.com",
  },
  openGraph: {
    title: "Best Interior Designers in Visakhapatnam | Home & Office Interiors | Visionaire Services",
    description: "Looking for the best interior designers in Visakhapatnam? Visionaire Services offers premium home interiors, office interiors, modular kitchens, wardrobes, false ceilings, TV units and turnkey interior solutions across Andhra Pradesh & Telangana.",
    url: "https://visionaireservices.com",
    siteName: "Visionaire Services",
    images: [
      {
        url: "/icon.jpeg",
        width: 1200,
        height: 630,
        alt: "Visionaire Services Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Interior Designers in Visakhapatnam | Home & Office Interiors | Visionaire Services",
    description: "Looking for the best interior designers in Visakhapatnam? Visionaire Services offers premium home interiors, office interiors, modular kitchens, wardrobes, false ceilings, TV units and turnkey interior solutions across Andhra Pradesh & Telangana.",
    images: ["/icon.jpeg"],
  },
};

export const dynamic = 'force-dynamic';

import { client } from "@/sanity/client";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Showcase from "@/components/home/Showcase";
import ContactCTA from "@/components/home/ContactCTA";
import Clients from "@/components/home/Clients";

export default async function Home() {
  const homeData = await client.fetch(`*[_type == "homePage"][0] {
    heroTitle,
    heroSubtitle,
    "heroImageUrl": heroImage.secure_url,
    aboutTitle,
    aboutText,
    "aboutImageUrl": aboutImage.secure_url,
    expertiseTitle,
    expertiseSubtitle,
    services[] {
      id,
      title,
      "imageUrl": image.secure_url,
      link
    },
    processTitle,
    processSubtitle,
    processSteps[] {
      num,
      title,
      desc
    },
    featuredWorkTitle,
    featuredWorkSubtitle,
    featuredProjects[] {
      title,
      category,
      "imageUrl": image.secure_url,
      link
    }
  }`);

  const siteSettings = await client.fetch(`*[_type == "siteSettings"][0] { clients }`);

  return (
    <>
      <Hero data={homeData} />
      <About data={homeData} />
      <Services data={{
        title: homeData.expertiseTitle,
        subtitle: homeData.expertiseSubtitle,
        services: homeData.services
      }} />
      <Process data={{
        title: homeData.processTitle,
        subtitle: homeData.processSubtitle,
        steps: homeData.processSteps
      }} />
      <Showcase data={{
        title: homeData.featuredWorkTitle,
        subtitle: homeData.featuredWorkSubtitle,
        projects: homeData.featuredProjects
      }} />
      <Clients clients={siteSettings?.clients} />
      <ContactCTA />
    </>
  );
}
