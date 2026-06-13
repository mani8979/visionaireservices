"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProfileLightingData {
  heroTitle: string;
  heroImageUrl: string;
  introText: string;
  mainTitle: string;
  mainText: string;
  mainImageUrl: string;
}

interface Props {
  data: ProfileLightingData;
}

export default function ProfileLightingClient({ data }: Props) {
  return (
    <div className="bg-secondary text-primary">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={data?.heroImageUrl || "/images/profile_lighting.png"} alt="Profile Lighting Hero" fill className="object-cover object-center"
            priority
            unoptimized={true}
          />
          <div className="absolute inset-0 bg-primary/50"></div>
        </div>
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-secondary tracking-tight mb-6 leading-tight whitespace-pre-wrap"
          >
            {data?.heroTitle || "Profile Lighting"}
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
          {data?.introText || "Craft premium ambiance that highlights textures and guides the eye through the space."}
        </motion.p>
      </section>

      {/* Main Section */}
      <section className="py-32 px-6 lg:px-12 bg-primary text-secondary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-video w-full rounded-sm overflow-hidden shadow-2xl order-2 lg:order-1"
          >
            <Image src={data?.mainImageUrl || "/images/profile_lighting.png"} alt="Profile Lighting Details" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="w-full h-auto object-cover transition-transform duration-[2s] hover:scale-105" unoptimized={true} />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8">{data?.mainTitle || "Profile Lighting"}</h2>
            <p className="text-secondary/70 font-light leading-relaxed mb-8 text-lg whitespace-pre-wrap">
              {data?.mainText || "Linear lighting and warm architectural glow integrated seamlessly into ceilings and walls."}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
