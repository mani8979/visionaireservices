"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

interface ShowcaseProps {
  data: {
    title: string;
    subtitle: string;
    projects: Project[];
  };
}

export default function Showcase({ data }: ShowcaseProps) {
  // Fallback
  const displayProjects = data?.projects?.length > 0 ? data.projects : [];

  return (
    <section className="py-32 px-6 lg:px-12 bg-primary text-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 whitespace-pre-wrap">{data?.title || "Featured Work"}</h2>
            <p className="text-secondary/70 font-light tracking-wide max-w-xl text-lg whitespace-pre-wrap">
              {data?.subtitle || "A curated selection of our finest projects."}
            </p>
          </motion.div>
          <Link href="/constructions" className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase hover:text-accent transition-colors group pb-2">
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {displayProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden bg-secondary/5 rounded-sm"
            >
              <Link href={project.link || "#"} className="block w-full">
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={project.imageUrl || "/images/placeholder.png"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain transition-transform duration-[2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                <div className="pt-8 pb-4 flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-serif mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-xs tracking-[0.2em] uppercase text-primary/60">{project.category}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-secondary transition-all duration-300">
                    <ArrowRight className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
