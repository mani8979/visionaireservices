"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

interface InteriorsData {
  heroTitle: string;
  heroImageUrl: string;
  introText: string;
  livingTitle: string;
  livingText: string;
  livingImageUrl: string;
  kitchenTitle: string;
  kitchenText: string;
  kitchenImageUrl: string;
  bedroomTitle: string;
  bedroomText: string;
  bedroomImageUrl: string;
  testimonialsTitle: string;
  testimonial1Text: string;
  testimonial1Author: string;
  testimonial1Role: string;
  testimonial2Text: string;
  testimonial2Author: string;
  testimonial2Role: string;
}

interface Props {
  data: InteriorsData;
}

export default function InteriorsClient({ data }: Props) {
  return (
    <div className="bg-secondary text-primary">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={data?.heroImageUrl || "/images/interiors_hero.png"} 
            alt="Luxury Interior" 
            fill
            className="object-cover object-center"
            priority
          unoptimized={true} />
          <div className="absolute inset-0 bg-primary/40"></div>
        </div>
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-secondary tracking-tight mb-6 leading-tight whitespace-pre-wrap"
          >
            {data?.heroTitle || "Designed Around\\nHow You Live"}
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-32 md:py-48 px-6 lg:px-12 max-w-5xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl lg:text-4xl font-light text-primary/80 leading-relaxed font-serif whitespace-pre-wrap"
        >
          {data?.introText || "We curate spaces that are not only visually stunning but profoundly functional."}
        </motion.p>
      </section>

      {/* Magazine Layout Gallery */}
      <section className="py-20 px-6 lg:px-12 max-w-[90rem] mx-auto">
        {/* Living Spaces */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-32 md:mb-56">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-8 text-primary">{data?.livingTitle || "Living Spaces"}</h2>
            <p className="text-primary/70 font-light leading-relaxed text-lg mb-8 whitespace-pre-wrap">
              {data?.livingText || "The heart of your home, designed for comfort and connection."}
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-8 relative aspect-[4/5] md:aspect-[16/9] order-1 lg:order-2 w-full shadow-2xl"
          >
            <Image src={data?.livingImageUrl || "/images/interiors_hero.png"} alt="Living Spaces" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="w-full h-auto object-cover" unoptimized={true} />
          </motion.div>
        </div>

        {/* Kitchen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-32 md:mb-56">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 relative aspect-[4/5] md:aspect-[4/3] w-full shadow-2xl"
          >
            <Image src={data?.kitchenImageUrl || "/images/kitchen_interior.png"} alt="Kitchen Design" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="w-full h-auto object-cover" unoptimized={true} />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-8 text-primary">{data?.kitchenTitle || "Culinary Excellence"}</h2>
            <p className="text-primary/70 font-light leading-relaxed text-lg mb-8 whitespace-pre-wrap">
              {data?.kitchenText || "Premium kitchens that balance high-end culinary functionality with striking aesthetics."}
            </p>
          </motion.div>
        </div>

        {/* Bedrooms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-32 mb-32 md:mb-56">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-8 text-primary">{data?.bedroomTitle || "Master Suites"}</h2>
            <p className="text-primary/70 font-light leading-relaxed text-lg mb-8 whitespace-pre-wrap">
              {data?.bedroomText || "Tranquil retreats designed for ultimate relaxation."}
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[3/4] md:aspect-square w-full shadow-2xl order-1 md:order-2"
          >
            <Image src={data?.bedroomImageUrl || "/images/bedroom_interior.png"} alt="Bedroom Design" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="w-full h-auto object-cover" unoptimized={true} />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 md:py-48 px-6 lg:px-12 bg-primary text-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24 md:mb-32"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-secondary">{data?.testimonialsTitle || "Client Perspectives"}</h2>
            <div className="w-16 h-[1px] bg-accent mx-auto mt-12" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Dr Chaitanya", role: "anaesthesia" },
              { name: "Dr. Padala Ashok", role: "orthopedist" },
              { name: "Dr.Petla Naidu", role: "scientist" },
              { name: "Mr Sateesh", role: "Jaya enterprises" },
              { name: "Dr Akhila", role: "pathologist" },
            ].map((client, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-secondary/5 p-8 md:p-10 rounded-sm shadow-xl backdrop-blur-sm border border-secondary/10 flex flex-col justify-center text-center"
              >
                <h4 className="font-serif text-2xl text-secondary mb-2">{client.name}</h4>
                <p className="text-xs uppercase tracking-[0.2em] font-semibold text-accent/80">{client.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
