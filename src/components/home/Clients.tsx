"use client";

import { motion } from "framer-motion";

export default function Clients() {
  const clients = [
    { name: "Dr Chaitanya", role: "anaesthesia" },
    { name: "Dr. Padala Ashok", role: "orthopedist" },
    { name: "Dr.Petla Naidu", role: "scientist" },
    { name: "Mr Sateesh", role: "Jaya enterprises" },
    { name: "Dr Akhila", role: "pathologist" },
  ];

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
              className="bg-secondary/5 p-8 md:p-10 rounded-sm shadow-xl backdrop-blur-sm border border-secondary/10 flex flex-col justify-center text-center"
            >
              <h4 className="font-serif text-2xl text-secondary mb-2">{client.name}</h4>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-accent/80">{client.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
