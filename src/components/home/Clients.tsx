"use client";

import { motion } from "framer-motion";

export interface ClientType {
  name: string;
  role: string;
  text?: string;
}

export default function Clients({ clients: sanityClients }: { clients?: ClientType[] }) {
  const defaultClients = [
    { name: "Dr Chaitanya", role: "anaesthesia", text: "The precision and attention to detail Visionaire Services brought to our home design was truly exceptional. The soothing ambiance they created is perfect after a long day at the hospital." },
    { name: "Dr. Padala Ashok", role: "orthopedist", text: "They designed an incredibly ergonomic and beautifully structured living space. The entire process was seamless, and the final result exceeded our expectations." },
    { name: "Dr.Petla Naidu", role: "scientist", text: "I was thoroughly impressed by their innovative approach to space utilization. Visionaire Services perfectly blended modern aesthetics with practical functionality." },
    { name: "Mr Sateesh", role: "Jaya enterprises", text: "Visionaire Services transformed our commercial space into a premium, highly functional environment. Their professionalism and timely delivery were outstanding." },
    { name: "Dr Akhila", role: "pathologist", text: "The meticulous design and elegant interiors have completely revitalized our home. I highly recommend their exceptional interior and architectural services." },
  ];

  const clients = sanityClients && sanityClients.length > 0 ? sanityClients : defaultClients;

  return (
    <section className="py-24 px-6 lg:px-12 bg-primary text-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-secondary">Client Perspectives</h2>
          <div className="w-16 h-[1px] bg-accent mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-secondary/5 p-8 md:p-10 rounded-sm shadow-xl backdrop-blur-sm border border-secondary/10 flex flex-col justify-start text-center"
            >
              <h4 className="font-serif text-2xl text-secondary mb-2">{client.name}</h4>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-accent/80 mb-6">{client.role}</p>
              {client.text && (
                <p className="text-sm md:text-base font-light leading-relaxed font-serif italic text-secondary/80">
                  "{client.text}"
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
