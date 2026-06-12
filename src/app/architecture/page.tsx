"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ArchitecturePage() {
  return (
    <div className="bg-secondary text-primary">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_architecture.png"
            alt="Architecture Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-secondary tracking-tight mb-6 leading-tight"
          >
            Visionary Architecture.<br/>Enduring Legacy.
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
          We design spaces that inspire. Our architectural approach blends modern aesthetics with practical functionality to create iconic structures that stand the test of time.
        </motion.p>
      </section>

      {/* Split Layouts */}
      <section className="py-32 px-6 lg:px-12 bg-primary text-secondary">
        <div className="max-w-7xl mx-auto space-y-32 lg:space-y-48">
          
          {/* Conceptual Design */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative aspect-square md:aspect-[4/3] w-full"
            >
              <Image src="/images/residential_const.png" alt="Conceptual Design" fill className="object-cover rounded-sm shadow-2xl" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Conceptual Design</h2>
              <p className="text-secondary/70 font-light leading-relaxed mb-10 text-lg">
                Every great building starts with a profound idea. Our team of expert architects works closely with clients to translate their vision into innovative, functional, and striking conceptual designs.
              </p>
              <ul className="space-y-6 text-sm font-light tracking-wide text-secondary/80">
                <li className="flex items-center gap-6 border-b border-secondary/10 pb-4"><span className="w-2 h-2 bg-accent rounded-full"></span> Spatial Planning</li>
                <li className="flex items-center gap-6 border-b border-secondary/10 pb-4"><span className="w-2 h-2 bg-accent rounded-full"></span> 3D Visualization & Modeling</li>
                <li className="flex items-center gap-6 pb-4"><span className="w-2 h-2 bg-accent rounded-full"></span> Feasibility Studies</li>
              </ul>
            </motion.div>
          </div>

          {/* Master Planning */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative aspect-square md:aspect-[4/3] w-full"
            >
              <Image src="/images/constructions_hero.png" alt="Master Planning" fill className="object-cover rounded-sm shadow-2xl" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Master Planning</h2>
              <p className="text-secondary/70 font-light leading-relaxed mb-10 text-lg">
                Creating cohesive environments that harmonize with their surroundings. From urban landscapes to sprawling estates, our master plans are designed for sustainability and long-term growth.
              </p>
              <ul className="space-y-6 text-sm font-light tracking-wide text-secondary/80">
                <li className="flex items-center gap-6 border-b border-secondary/10 pb-4"><span className="w-2 h-2 bg-accent rounded-full"></span> Urban Integration</li>
                <li className="flex items-center gap-6 border-b border-secondary/10 pb-4"><span className="w-2 h-2 bg-accent rounded-full"></span> Landscape Architecture</li>
                <li className="flex items-center gap-6 pb-4"><span className="w-2 h-2 bg-accent rounded-full"></span> Sustainable Development</li>
              </ul>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Footer CTA-like section */}
      <section className="py-24 px-6 lg:px-12 text-center bg-secondary">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-8 text-primary">Ready to build your vision?</h2>
          <p className="text-primary/70 font-light mb-12 text-lg">
            Connect with our architects to discuss your next landmark project.
          </p>
          <a href="#contact" className="inline-block bg-accent text-secondary px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-primary transition-colors duration-300">
            Consult With Us
          </a>
        </motion.div>
      </section>
    </div>
  );
}
