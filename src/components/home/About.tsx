"use client";

import { motion } from "framer-motion";

interface AboutProps {
  data: {
    aboutText: string;
  };
}

export default function About({ data }: AboutProps) {
  return (
    <section className="py-32 md:py-48 px-6 lg:px-12 bg-secondary text-primary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl lg:text-5xl font-serif leading-relaxed text-primary/90 whitespace-pre-wrap"
        >
          {data?.aboutText || "Modern architecture and construction solutions designed with precision, elegance, and functionality. We transform ideas into premium living and commercial environments."}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-24 h-[1px] bg-accent mx-auto mt-16 origin-center"
        />
      </div>
    </section>
  );
}
