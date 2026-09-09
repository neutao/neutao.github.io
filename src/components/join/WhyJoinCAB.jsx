import React from "react";
import { Cpu, Users, Globe, Award, Briefcase, Handshake } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const CARDS = [
  {
    icon: Cpu,
    title: "Technical Development",
    desc: "Training and mentorship in finite element analysis, musculoskeletal modelling, programming, experimental biomechanics, and research methodology.",
  },
  {
    icon: Users,
    title: "Interdisciplinary Research",
    desc: "Opportunities to collaborate with researchers, clinicians, and industry partners across engineering, healthcare, and human performance.",
  },
  {
    icon: Globe,
    title: "International Exposure",
    desc: "Support for participation in national and international conferences, workshops, and research visits.",
  },
  {
    icon: Award,
    title: "Scholarships & Awards",
    desc: "Active mentorship and support for scholarship, fellowship, travel award, and research award applications.",
  },
  {
    icon: Briefcase,
    title: "Career Development",
    desc: "Opportunities to strengthen scientific communication, academic writing, presentation, collaboration, and project management skills.",
  },
  {
    icon: Handshake,
    title: "Industry Collaboration",
    desc: "Gain exposure to real-world engineering challenges through collaborations with industry partners. Students may have opportunities to contribute to industry-driven research, product development, testing, and translation of biomechanics research into practical applications.",
  },
];

export default function WhyJoinCAB() {
  return (
    <section className="bg-white pt-10 lg:pt-12 pb-8 lg:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <SectionLabel label="Why Our Lab" className="mb-3 block" />
          <h2
            className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl lg:text-4xl tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Why Join the CAB Lab?
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CARDS.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-xl border border-slate-200 p-5 lg:p-6 hover:border-[#0EA5E9]/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0EA5E9] flex items-center justify-center mb-4">
                  <c.icon size={22} />
                </div>
                <h3
                  className="font-heading font-medium text-[#0F172A] text-base lg:text-lg tracking-tight mb-2"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {c.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <div className="rounded-xl bg-teal-50/70 border border-teal-200/70 px-5 lg:px-6 py-4 lg:py-5 text-center">
              <p className="text-slate-700 text-sm lg:text-base leading-relaxed max-w-3xl mx-auto">
                We welcome students from{" "}
                <span className="font-semibold text-teal-700">diverse academic and cultural backgrounds</span> who are{" "}
                <span className="font-semibold text-teal-700">curious, motivated</span>, and interested in developing{" "}
                <span className="font-semibold text-teal-700">interdisciplinary expertise</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}