"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { id: 1, src: "/images/residential_const.png", aspect: "aspect-[3/4]" },
  { id: 2, src: "/images/kitchen_interior.png", aspect: "aspect-[4/3]" },
  { id: 3, src: "/images/interiors_hero.png", aspect: "aspect-square" },
  { id: 4, src: "/images/bedroom_interior.png", aspect: "aspect-[3/4]" },
  { id: 5, src: "/images/hero_architecture.png", aspect: "aspect-[16/9]" },
];

export default function Showcase() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-primary text-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-secondary">Featured Works</h2>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative w-full overflow-hidden rounded-sm group break-inside-avoid ${project.aspect}`}
            >
              <Image
                src={project.src}
                alt="Project Showcase"
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
