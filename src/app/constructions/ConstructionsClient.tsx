"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ConstructionsData {
  heroTitle: string;
  heroImageUrl: string;
  yearsExperience: string;
  projectsCompleted: string;
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
  data: ConstructionsData;
}

export default function ConstructionsClient({ data }: Props) {
  return (
    <div className="bg-secondary text-primary">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] w-full flex items-center justify-center overflow-hidden bg-primary pt-24 md:pt-0">
        <div className="absolute inset-0 z-0">
          <Image 
            src={data?.heroImageUrl || "/images/constructions_hero.png"} 
            alt="Hero Image" 
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-primary/40"></div>
          
          {/* Desktop Text Overlay */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
            <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-secondary tracking-tight mb-6 leading-tight whitespace-pre-wrap mt-16 md:mt-0"
          >
            {data?.heroTitle || "Precision Construction.\\nTimeless Results."}
          </motion.h1>
          </div>
        </div>
      </section>

      {/* Intro Stats */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-primary/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:divide-x divide-primary/20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-accent mb-4">{data?.yearsExperience || "12+"}</h3>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold text-primary/60">Years Experience</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-accent mb-4">{data?.projectsCompleted || "75+"}</h3>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold text-primary/60">Projects Completed</p>
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
          
          {/* Residential */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 w-full h-fit relative rounded-sm overflow-hidden"
            >
              <Image src={data?.residentialImageUrl || "/images/residential_const.png"} alt="Residential Construction" width={800} height={800} className="w-full max-h-[70vh] object-contain rounded-sm shadow-2xl" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8">{data?.residentialTitle || "Residential Construction"}</h2>
              <p className="text-secondary/70 font-light leading-relaxed mb-10 text-lg whitespace-pre-wrap">
                {data?.residentialText || "We build luxury homes that reflect your personal style and stand the test of time."}
              </p>
              <ul className="space-y-6 text-sm font-light tracking-wide text-secondary/80">
                {data?.residentialPoints?.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-6 border-b border-secondary/10 pb-4"><span className="w-2 h-2 bg-accent rounded-full"></span> {point}</li>
                )) || (
                  <>
                    <li className="flex items-center gap-6 border-b border-secondary/10 pb-4"><span className="w-2 h-2 bg-accent rounded-full"></span> Custom Home Building</li>
                    <li className="flex items-center gap-6 border-b border-secondary/10 pb-4"><span className="w-2 h-2 bg-accent rounded-full"></span> Luxury Villas & Mansions</li>
                    <li className="flex items-center gap-6 pb-4"><span className="w-2 h-2 bg-accent rounded-full"></span> Major Structural Renovations</li>
                  </>
                )}
              </ul>
            </motion.div>
          </div>

          {/* Commercial */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 w-full h-fit relative rounded-sm overflow-hidden"
            >
              <Image src={data?.commercialImageUrl || "/images/hero_architecture.png"} alt="Commercial Construction" width={800} height={800} className="w-full max-h-[70vh] object-contain rounded-sm shadow-2xl" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8">{data?.commercialTitle || "Commercial Construction"}</h2>
              <p className="text-secondary/70 font-light leading-relaxed mb-10 text-lg whitespace-pre-wrap">
                {data?.commercialText || "Delivering high-performance commercial spaces that inspire productivity."}
              </p>
              <ul className="space-y-6 text-sm font-light tracking-wide text-secondary/80">
                {data?.commercialPoints?.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-6 border-b border-secondary/10 pb-4"><span className="w-2 h-2 bg-accent rounded-full"></span> {point}</li>
                )) || (
                  <>
                    <li className="flex items-center gap-6 border-b border-secondary/10 pb-4"><span className="w-2 h-2 bg-accent rounded-full"></span> Corporate Headquarters</li>
                    <li className="flex items-center gap-6 border-b border-secondary/10 pb-4"><span className="w-2 h-2 bg-accent rounded-full"></span> Retail & Hospitality Spaces</li>
                    <li className="flex items-center gap-6 pb-4"><span className="w-2 h-2 bg-accent rounded-full"></span> Mixed-Use Developments</li>
                  </>
                )}
              </ul>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Before/After Conceptual Showcase */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-primary">{data?.transformationsTitle || "Transformations"}</h2>
          <p className="text-primary/70 font-light tracking-wide max-w-2xl mx-auto text-lg whitespace-pre-wrap">
            {data?.transformationsText || "Witness the evolution from raw structure to refined architecture."}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="relative w-full h-fit group overflow-hidden rounded-sm shadow-lg">
             <Image src={data?.beforeImageUrl || "/images/constructions_hero.png"} alt="Before Construction" width={800} height={800} className="w-full max-h-[70vh] object-contain transition-transform duration-[2s] group-hover:scale-105" />
             <div className="absolute top-6 left-6 bg-primary/90 text-secondary px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-sm">Site Execution</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="relative w-full h-fit group overflow-hidden rounded-sm shadow-lg">
             <Image src={data?.afterImageUrl || "/images/hero_architecture.png"} alt="After Construction" width={800} height={800} className="w-full max-h-[70vh] object-contain transition-transform duration-[2s] group-hover:scale-105" />
             <div className="absolute top-6 right-6 bg-accent/90 text-secondary px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase backdrop-blur-sm">Final Delivery</div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
