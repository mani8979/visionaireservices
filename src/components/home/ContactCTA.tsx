"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-48 px-6 lg:px-12 bg-secondary text-primary relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif mb-16 text-primary leading-tight"
        >
          Let's Build Something Exceptional
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a href="https://wa.me/919502656037" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 bg-primary text-secondary text-sm font-semibold tracking-[0.25em] uppercase hover:bg-accent transition-colors duration-500 rounded-sm shadow-md hover:shadow-lg">
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
