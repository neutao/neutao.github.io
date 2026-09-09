import React from "react";
import { Lightbulb, Microscope, Handshake, GraduationCap, FileText, Presentation } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const FEATURES = [
  {
    icon: Lightbulb,
    title: "Cutting-edge Research",
    description: "Work at the intersection of biomechanics, wearable sensors, AI, and computational modelling.",
    color: "bg-sky-50 text-[#0EA5E9]",
  },
  {
    icon: Microscope,
    title: "Advanced Facilities",
    description: "Access motion capture, wearable sensors, computational modelling, and the ACE Climatic Wind Tunnel.",
    color: "bg-teal-50 text-[#0D9488]",
  },
  {
    icon: Handshake,
    title: "Industry Collaboration",
    description: "Collaborate with healthcare organizations and industrial partners to translate research into real-world applications.",
    color: "bg-sky-50 text-[#0EA5E9]",
  },
  {
    icon: GraduationCap,
    title: "Graduate Training",
    description: "Develop strong research, programming, communication, and leadership skills.",
    color: "bg-teal-50 text-[#0D9488]",
  },
  {
    icon: FileText,
    title: "Publication Opportunities",
    description: "Publish in leading biomechanics and biomedical engineering journals.",
    color: "bg-sky-50 text-[#0EA5E9]",
  },
  {
    icon: Presentation,
    title: "Conference Support",
    description: "Present research at national and international conferences.",
    color: "bg-teal-50 text-[#0D9488]",
  },
];

export default function WhyJoin() {
  return (
    <section className="bg-[#F1F5F9] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionLabel label="Why Join CAB Lab" className="mb-3 block" />
          <h2
            className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            A Place to Grow as a Researcher
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl border border-slate-100 p-6 lg:p-8 hover:border-[#0EA5E9]/30 hover:shadow-md transition-all"
            >
              <div className={`w-12 h-12 rounded-lg ${f.color} flex items-center justify-center mb-5`}>
                <f.icon size={22} />
              </div>
              <h3 className="font-heading font-medium text-[#0F172A] text-lg mb-2 group-hover:text-[#0EA5E9] transition-colors">
                {f.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}