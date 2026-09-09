import React from "react";
import { motion } from "framer-motion";
import { Box, Activity, FlaskConical, Code2, Footprints } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const PILLARS = [
  {
    icon: Box,
    title: "Finite Element Modelling",
    desc: "Build detailed foot and footwear models to simulate stress, strain, and contact mechanics.",
  },
  {
    icon: Activity,
    title: "Musculoskeletal Modelling",
    desc: "Simulate muscle forces and joint loads using OpenSim and AnyBody to understand human movement.",
  },
  {
    icon: FlaskConical,
    title: "Experimental Biomechanics",
    desc: "Collect and analyse human movement, pressure, and force data to validate computational models.",
  },
  {
    icon: Code2,
    title: "Programming & Data Analysis",
    desc: "Develop Python and MATLAB workflows for simulation automation and large-scale data analysis.",
  },
  {
    icon: Footprints,
    title: "Footwear Biomechanics & Design",
    desc: "Translate modelling insights into improved footwear for performance, comfort, and injury prevention.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function ResearchOpportunity() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <SectionLabel label="Research Opportunity" className="mb-3 block" />
          <h2
            className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-5"
            style={{ letterSpacing: "-0.02em" }}
          >
            Developing Computational Tools for Foot–Footwear Interaction
          </h2>
          <div className="space-y-4 text-slate-600 text-base lg:text-lg leading-relaxed">
            <p>
              Applications are invited for a fully funded Ph.D. position, with strong M.Sc. applicants also
              considered, in the Department of Mechanical and Manufacturing Engineering at Ontario Tech University.
            </p>
            <p>
              The successful applicant will investigate{" "}
              <span className="font-semibold text-[#0F172A]">
                foot–ground and foot–footwear interactions using computational biomechanics
              </span>
              , integrating several interconnected research areas into a single, coherent workflow.
            </p>
          </div>
        </div>

        {/* Interconnected pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className={`group relative rounded-2xl border border-slate-100 bg-[#F8FAFC] p-6 hover:border-[#0EA5E9]/40 hover:bg-white hover:shadow-lg hover:shadow-sky-100/50 transition-all ${
                i === 0 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0EA5E9] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <p.icon size={22} />
              </div>
              <h3 className="font-heading font-medium text-[#0F172A] text-lg tracking-tight mb-2">
                {p.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Goal statement */}
        <div className="mt-10 lg:mt-12 rounded-2xl bg-gradient-to-br from-[#0EA5E9]/5 to-[#0D9488]/5 border border-sky-100 p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#0EA5E9] text-white flex items-center justify-center shrink-0">
              <Footprints size={24} />
            </div>
            <p className="text-slate-700 text-base lg:text-lg leading-relaxed">
              The goal is to{" "}
              <span className="font-semibold text-[#0F172A]">
                translate fundamental biomechanical knowledge into practical applications
              </span>{" "}
              in footwear design, human performance, and injury prevention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}