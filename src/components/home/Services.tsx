"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Service {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
}

interface ServicesProps {
  data: {
    title: string;
    subtitle: string;
    services: Service[];
  };
}

export default function Services({ data }: ServicesProps) {
  // Fallback to empty array if no services passed
  const displayServices = data?.services?.length > 0 ? data.services : [];

  return (
    <section className="py-32 px-6 lg:px-12 bg-primary text-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-secondary/20 pb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-secondary whitespace-pre-wrap">{data?.title || "Expertise"}</h2>
            <p className="text-secondary/70 font-light tracking-wide max-w-xl text-lg whitespace-pre-wrap">
              {data?.subtitle || "Elevating spaces through expert craftsmanship and innovative design solutions tailored to your unique lifestyle."}
            </p>
          </div>
          <Link href="/constructions" className="flex items-center gap-3 text-accent text-xs font-semibold tracking-[0.2em] uppercase hover:text-secondary transition-colors group">
            All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 items-start">
          {displayServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden bg-secondary/5 rounded-sm h-fit ${index === 0 || index === 3 ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <Link href={service.link || "#"} className="block w-full">
                <Image
                  src={service.imageUrl || "/images/placeholder.png"}
                  alt={service.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-between">
                  <span className="text-accent font-serif text-xl lg:text-2xl">{service.id}</span>
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-3xl md:text-4xl font-serif text-secondary mb-4">{service.title}</h3>
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Explore</span>
                      <ArrowRight className="w-4 h-4 text-accent" />
                    </div>
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
