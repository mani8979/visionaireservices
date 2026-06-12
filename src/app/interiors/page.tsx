"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function InteriorsPage() {
  return (
    <div className="bg-secondary text-primary">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/interiors_hero.png"
            alt="Luxury Interior"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-primary/40"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-secondary tracking-tight mb-6 leading-tight"
          >
            Designed Around<br/>How You Live
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
          We curate spaces that are not only visually stunning but profoundly functional. Every texture, lighting choice, and spatial arrangement is meticulously planned to enhance your daily life.
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
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-8 text-primary">Living Spaces</h2>
            <p className="text-primary/70 font-light leading-relaxed text-lg mb-8">
              The heart of your home, designed for comfort and connection. We blend bespoke furniture with ambient lighting to create a warm, inviting atmosphere.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-8 relative aspect-[4/5] md:aspect-[16/9] order-1 lg:order-2 w-full shadow-2xl"
          >
            <Image src="/images/interiors_hero.png" alt="Living Spaces" fill className="object-cover" />
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
            <Image src="/images/kitchen_interior.png" alt="Kitchen Design" fill className="object-cover" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-8 text-primary">Culinary Excellence</h2>
            <p className="text-primary/70 font-light leading-relaxed text-lg mb-8">
              Premium kitchens that balance high-end culinary functionality with striking aesthetics. Minimalist cabinetry, stone countertops, and integrated appliances.
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
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-8 text-primary">Master Suites</h2>
            <p className="text-primary/70 font-light leading-relaxed text-lg mb-8">
              Tranquil retreats designed for ultimate relaxation. We incorporate soft textiles, muted palettes, and custom wardrobes for a serene bedroom environment.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[3/4] md:aspect-square w-full shadow-2xl order-1 md:order-2"
          >
            <Image src="/images/bedroom_interior.png" alt="Bedroom Design" fill className="object-cover" />
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-secondary">Client Perspectives</h2>
            <div className="w-16 h-[1px] bg-accent mx-auto mt-12" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-secondary/5 p-12 md:p-16 rounded-sm relative shadow-xl backdrop-blur-sm border border-secondary/10"
            >
              <Quote className="absolute top-8 left-8 text-secondary/10 w-20 h-20" />
              <p className="text-lg md:text-2xl font-light leading-relaxed mb-12 relative z-10 font-serif italic text-secondary/90">
                "Visionaire Services transformed our penthouse into a masterpiece. The attention to detail and material selection is unparalleled. It feels both incredibly luxurious and completely like home."
              </p>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-accent font-serif text-2xl border border-secondary/20">A</div>
                <div>
                  <h4 className="font-serif text-xl text-secondary mb-1">Alexander M.</h4>
                  <p className="text-xs uppercase tracking-[0.2em] font-semibold text-accent/80">Private Residence</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-secondary/5 p-12 md:p-16 rounded-sm relative shadow-xl backdrop-blur-sm border border-secondary/10"
            >
              <Quote className="absolute top-8 left-8 text-secondary/10 w-20 h-20" />
              <p className="text-lg md:text-2xl font-light leading-relaxed mb-12 relative z-10 font-serif italic text-secondary/90">
                "Their approach to commercial interiors completely revitalized our office space. The workflow has improved, and clients are consistently amazed by the elegant, modern design."
              </p>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-accent font-serif text-2xl border border-secondary/20">E</div>
                <div>
                  <h4 className="font-serif text-xl text-secondary mb-1">Elena R.</h4>
                  <p className="text-xs uppercase tracking-[0.2em] font-semibold text-accent/80">Corporate Headquarters</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
