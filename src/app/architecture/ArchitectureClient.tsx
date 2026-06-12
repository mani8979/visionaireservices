"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ArchitectureData {
  heroTitle: string;
  heroImageUrl: string;
  awardsWon: string;
  designsDelivered: string;
  clientSatisfaction: string;
  residentialTitle: string;
  residentialText: string;
  residentialPoints: string[];
  residentialImageUrl: string;
  commercialTitle: string;
  commercialText: string;
  commercialPoints: string[];
  commercialImageUrl: string;
  transformationsTitle: string;
  transformationsText: string;
  beforeImageUrl: string;
  afterImageUrl: string;
}

interface Props {
  data: ArchitectureData;
}

export default function ArchitectureClient({ data }: Props) {
  return (
    <div className="bg-secondary text-primary">
      {/* Hero Section */}
      <section className="relative w-full flex items-center justify-center bg-primary">
        <div className="w-full h-auto relative flex">
          <Image src={data?.heroImageUrl || "/images/hero_architecture.png"} alt="Architecture Hero" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="w-full h-auto object-contain object-center"
            priority
          />
          <div className="absolute inset-0 bg-primary/40"></div>
        </div>
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-secondary tracking-tight mb-6 leading-tight whitespace-pre-wrap"
          >
            {data?.heroTitle || "Visionary Architecture.\\nTimeless Design."}
          </motion.h1>
        </div>
      </section>

      {/* Intro Stats */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-primary/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:divide-x divide-primary/20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-accent mb-4">{data?.awardsWon || "25+"}</h3>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold text-primary/60">Awards Won</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-accent mb-4">{data?.designsDelivered || "150+"}</h3>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold text-primary/60">Designs Delivered</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-accent mb-4">{data?.clientSatisfaction || "100%"}</h3>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold text-primary/60">Client Satisfaction</p>
          </motion.div>
        </div>
      </section>

      {/* Split Layouts */}
      <section className="py-32 px-6 lg:px-12 bg-primary text-secondary">
        <div className="max-w-7xl mx-auto space-y-32 lg:space-y-48">
          
          {/* Residential Architecture */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 w-full h-fit relative rounded-sm overflow-hidden"
            >
              <Image src={data?.residentialImageUrl || "/images/residential_const.png"} alt="Residential Architecture" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="w-full h-auto object-contain rounded-sm shadow-2xl" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8">{data?.residentialTitle || "Residential Architecture"}</h2>
              <p className="text-secondary/70 font-light leading-relaxed mb-10 text-lg whitespace-pre-wrap">
                {data?.residentialText || "We conceptualize and design homes that are not just beautiful, but deeply personal and highly functional."}
              </p>
              <ul className="space-y-6 text-sm font-light tracking-wide text-secondary/80">
                {data?.residentialPoints?.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-6 border-b border-secondary/10 pb-4"><span className="w-2 h-2 bg-accent rounded-full"></span> {point}</li>
                )) || (
                  <>
                    <li className="flex items-center gap-6 border-b border-secondary/10 pb-4"><span className="w-2 h-2 bg-accent rounded-full"></span> Custom Home Design</li>
                    <li className="flex items-center gap-6 border-b border-secondary/10 pb-4"><span className="w-2 h-2 bg-accent rounded-full"></span> Sustainable Living Concepts</li>
                    <li className="flex items-center gap-6 pb-4"><span className="w-2 h-2 bg-accent rounded-full"></span> Landscape & Exterior Integration</li>
                  </>
                )}
              </ul>
            </motion.div>
          </div>

          {/* Commercial Architecture */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 w-full h-fit relative rounded-sm overflow-hidden"
            >
              <Image src={data?.commercialImageUrl || "/images/hero_architecture.png"} alt="Commercial Architecture" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="w-full h-auto object-contain rounded-sm shadow-2xl" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8">{data?.commercialTitle || "Commercial Architecture"}</h2>
              <p className="text-secondary/70 font-light leading-relaxed mb-10 text-lg whitespace-pre-wrap">
                {data?.commercialText || "Designing iconic commercial spaces that elevate brand identity and optimize workflow."}
              </p>
              <ul className="space-y-6 text-sm font-light tracking-wide text-secondary/80">
                {data?.commercialPoints?.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-6 border-b border-secondary/10 pb-4"><span className="w-2 h-2 bg-accent rounded-full"></span> {point}</li>
                )) || (
                  <>
                    <li className="flex items-center gap-6 border-b border-secondary/10 pb-4"><span className="w-2 h-2 bg-accent rounded-full"></span> Corporate Offices</li>
                    <li className="flex items-center gap-6 border-b border-secondary/10 pb-4"><span className="w-2 h-2 bg-accent rounded-full"></span> Retail Boutiques</li>
                    <li className="flex items-center gap-6 pb-4"><span className="w-2 h-2 bg-accent rounded-full"></span> Mixed-Use Complexes</li>
                  </>
                )}
              </ul>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Conceptual Showcase */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-primary">{data?.transformationsTitle || "From Concept to Reality"}</h2>
          <p className="text-primary/70 font-light tracking-wide max-w-2xl mx-auto text-lg whitespace-pre-wrap">
            {data?.transformationsText || "See how our architectural blueprints translate into stunning physical spaces."}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative w-full h-fit group overflow-hidden rounded-sm shadow-lg">
             <Image src={data?.beforeImageUrl || "/images/constructions_hero.png"} alt="Blueprint" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="w-full h-auto object-contain transition-transform duration-[2s] group-hover:scale-105" />
             <div className="absolute top-6 left-6 bg-primary/90 text-secondary px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-sm">Blueprint Phase</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="relative w-full h-fit group overflow-hidden rounded-sm shadow-lg">
             <Image src={data?.afterImageUrl || "/images/hero_architecture.png"} alt="Finished Structure" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} className="w-full h-auto object-contain transition-transform duration-[2s] group-hover:scale-105" />
             <div className="absolute top-6 right-6 bg-accent/90 text-secondary px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-sm">Final Structure</div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
