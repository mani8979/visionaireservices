"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PuttyPaintingData {
  heroTitle: string;
  heroImageUrl: string;
  introText: string;
  mainTitle: string;
  mainText: string;
  beforeImageUrl: string;
  afterImageUrl: string;
}

interface Props {
  data: PuttyPaintingData;
}

export default function PuttyPaintingClient({ data }: Props) {
  return (
    <div className="bg-secondary text-primary">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={data?.heroImageUrl || "/images/putty_painting.png"}
            alt="Putty Painting Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-primary/50"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-secondary tracking-tight mb-6 leading-tight whitespace-pre-wrap"
          >
            {data?.heroTitle || "Putty Painting"}
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
          {data?.introText || "Luxury smooth wall finishing that serves as the perfect canvas for your interior."}
        </motion.p>
      </section>

      {/* Before / After Showcase */}
      <section className="py-32 px-6 lg:px-12 bg-primary text-secondary">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-secondary"
          >
            {data?.mainTitle || "Putty Painting"}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-secondary/70 font-light tracking-wide max-w-2xl mx-auto text-lg whitespace-pre-wrap"
          >
            {data?.mainText || "From rough surface preparation to a flawless, smooth finish."}
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[3/4] md:aspect-[4/5] group overflow-hidden rounded-sm shadow-xl"
          >
            <Image src={data?.beforeImageUrl || "/images/constructions_hero.png"} alt="Surface Preparation" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
              <span className="text-secondary font-serif text-2xl lg:text-3xl tracking-wide">Before / Prep</span>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-[3/4] md:aspect-[4/5] group overflow-hidden rounded-sm shadow-xl"
          >
            <Image src={data?.afterImageUrl || "/images/putty_painting.png"} alt="Flawless Finish" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
              <span className="text-secondary font-serif text-2xl lg:text-3xl tracking-wide">Flawless Finish</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
