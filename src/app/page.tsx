import { client } from "@/sanity/client";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Showcase from "@/components/home/Showcase";
import ContactCTA from "@/components/home/ContactCTA";

export default async function Home() {
  const homeData = await client.fetch(`*[_type == "homePage"][0] {
    heroTitle,
    heroSubtitle,
    "heroImageUrl": heroImage.secure_url,
    aboutTitle,
    aboutText,
    "aboutImageUrl": aboutImage.secure_url
  }`);

  const servicesData = await client.fetch(`*[_type == "service"] | order(id asc) {
    id,
    title,
    "imageUrl": image.secure_url,
    link
  }`);

  const processData = await client.fetch(`*[_type == "processStep"] | order(num asc) {
    num,
    title,
    desc
  }`);

  const projectsData = await client.fetch(`*[_type == "project"] {
    title,
    category,
    "imageUrl": image.secure_url,
    link
  }`);

  return (
    <>
      <Hero data={homeData} />
      <About data={homeData} />
      <Services services={servicesData} />
      <Process steps={processData} />
      <Showcase projects={projectsData} />
      <ContactCTA />
    </>
  );
}
