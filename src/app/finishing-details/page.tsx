"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FinishingDetailsPage() {
  return (
    <div className="bg-secondary text-primary">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/finishing_hero.png"
            alt="Luxury Ceiling"
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
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-secondary tracking-tight mb-6 leading-tight"
          >
            Finishing Details<br/>That Define Spaces
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
          className="text-2xl md:text-3xl lg:text-4xl font-light text-primary/80 leading-relaxed font-serif"
        >
          The difference between good design and exceptional architecture lies in the final layers. We specialize in premium ceiling layouts, ambient lighting, and flawless wall finishing.
        </motion.p>
      </section>

      {/* Section 1: False Ceiling */}
      <section className="py-32 px-6 lg:px-12 bg-primary text-secondary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8">False Ceiling</h2>
            <p className="text-secondary/70 font-light leading-relaxed mb-8 text-lg">
              Modern gypsum and premium ceiling layouts that do more than hide utilities—they sculpt the volume of the room. From minimalist floating planes to intricate coffered designs.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-video w-full rounded-sm overflow-hidden shadow-2xl"
          >
            <Image src="/images/finishing_hero.png" alt="False Ceiling" fill className="object-cover transition-transform duration-[2s] hover:scale-105" />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Profile Lighting */}
      <section className="py-32 px-6 lg:px-12 bg-secondary text-primary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] md:aspect-square w-full rounded-sm overflow-hidden order-2 lg:order-1 shadow-2xl"
          >
            <Image src="/images/profile_lighting.png" alt="Profile Lighting" fill className="object-cover transition-transform duration-[2s] hover:scale-105" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8">Profile Lighting</h2>
            <p className="text-primary/70 font-light leading-relaxed mb-8 text-lg">
              Linear lighting and warm architectural glow integrated seamlessly into ceilings and walls. We craft premium ambiance that highlights textures and guides the eye through the space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Putty Painting */}
      <section className="py-32 px-6 lg:px-12 bg-primary text-secondary">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-secondary"
          >
            Putty Painting
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-secondary/70 font-light tracking-wide max-w-2xl mx-auto text-lg"
          >
            Luxury smooth wall finishing that serves as the perfect canvas for your interior.
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
            <Image src="/images/constructions_hero.png" alt="Surface Preparation" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
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
            <Image src="/images/putty_painting.png" alt="Flawless Finish" fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
            <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
              <span className="text-secondary font-serif text-2xl lg:text-3xl tracking-wide">Flawless Finish</span>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
