"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_architecture.png"
          alt="Modern Architecture"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-primary/40"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-secondary tracking-tight mb-6 uppercase"
        >
          INFINITY<br/>THOUGHTS
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-xs md:text-sm text-secondary/90 font-medium tracking-[0.25em] uppercase mb-8"
        >
          END TO END SERVICES
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-sm md:text-lg text-secondary/80 font-light mb-12 max-w-2xl mx-auto"
        >
          Do you want to beautify your home like a rainbow? Contact Visionaire Engineering & Interiors now.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/constructions" className="px-8 py-4 bg-accent text-secondary text-xs font-semibold tracking-[0.2em] uppercase hover:bg-accent/80 transition-colors duration-300 w-full sm:w-auto text-center rounded-sm">
            Explore Projects
          </Link>
          <Link href="#contact" className="px-8 py-4 bg-transparent border border-secondary/50 text-secondary text-xs font-semibold tracking-[0.2em] uppercase hover:bg-secondary hover:text-primary transition-all duration-300 w-full sm:w-auto text-center rounded-sm">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
