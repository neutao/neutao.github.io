import React from "react";
import { motion } from "framer-motion";
import { Cpu, FlaskConical, HeartPulse, Rocket } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const STAGES = [
  { icon: Cpu, title: "Computational Modelling", desc: "Finite element & musculoskeletal simulation" },
  { icon: FlaskConical, title: "Experimental Biomechanics", desc: "Human movement & pressure data collection" },
  { icon: HeartPulse, title: "Clinical / Industry Collaboration", desc: "Partnerships with clinicians and industry" },
  { icon: Rocket, title: "Real-World Applications", desc: "Footwear design, performance & injury prevention" },
];

export default function ResearchEnvironment() {
  return (
    <section className="bg-[#F1F5F9] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <SectionLabel label="Research Environment" className="mb-3 block" />
          <h2
            className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            A Broader Research Ecosystem
          </h2>
          <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
            Students in the CAB Lab work within an interdisciplinary research ecosystem that spans computational
            methods, experimental validation, and real-world translation — developing expertise that goes well
            beyond any single research method.
          </p>
        </div>

        {/* Flow pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 relative">
          {STAGES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.12, ease: "easeOut" }}
              className="relative bg-white rounded-2xl border border-slate-100 p-6 lg:mx-2 hover:shadow-lg hover:border-[#0EA5E9]/30 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0EA5E9] flex items-center justify-center">
                  <s.icon size={22} />
                </div>
                <span className="font-mono text-xs text-slate-300 font-semibold">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-heading font-medium text-[#0F172A] text-base lg:text-lg tracking-tight mb-2">
                {s.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              {/* Connector arrow (desktop) */}
              {i < STAGES.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-200 items-center justify-center shadow-sm">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5 H8 M5 2 L8 5 L5 8" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}