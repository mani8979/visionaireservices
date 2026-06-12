"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Consultation", desc: "Understanding your vision, requirements, and project scope." },
  { num: "02", title: "Planning", desc: "Developing comprehensive architectural and execution strategies." },
  { num: "03", title: "Design", desc: "Crafting premium aesthetics and material selections." },
  { num: "04", title: "Construction", desc: "Executing with precision, quality control, and expert management." },
  { num: "05", title: "Finishing", desc: "Delivering flawless details and turning over the keys to your new space." },
];

export default function Process() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-secondary text-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6">The Process</h2>
          <p className="text-primary/70 font-light tracking-wide max-w-2xl mx-auto text-lg">
            A seamless journey from initial concept to the final premium finish.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-primary/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary border border-primary/20 flex items-center justify-center mb-8 group-hover:border-accent group-hover:text-accent transition-colors duration-500">
                  <span className="font-serif text-xl md:text-2xl">{step.num}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif mb-4">{step.title}</h3>
                <p className="text-sm text-primary/60 font-light leading-relaxed px-4">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
