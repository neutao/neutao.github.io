import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

export default function JoinHero() {
  return (
    <section className="relative bg-[#0F172A] overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #0EA5E9 0, transparent 40%), radial-gradient(circle at 80% 60%, #0D9488 0, transparent 40%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-20">
        <div className="max-w-3xl">
          <SectionLabel label="Join the CAB Lab" className="text-[#0EA5E9] mb-6 block" />
          <h1
            className="font-heading font-medium text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight mb-6"
            style={{ letterSpacing: "-0.03em" }}
          >
            Join the Computational and Applied Biomechanics (CAB) Lab
          </h1>
          <p className="text-[#0EA5E9] text-lg sm:text-xl font-medium leading-relaxed mb-4">
            Advance the future of biomechanics through computational modelling, wearable technologies,
            machine learning, and human movement research.
          </p>
          <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-2xl">
            The CAB Lab at Ontario Tech University welcomes outstanding students who are passionate about
            computational biomechanics, human movement, wearable technologies, musculoskeletal modelling,
            and artificial intelligence. We offer exciting opportunities to work on interdisciplinary
            research with applications in healthcare, sport, rehabilitation, and industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0EA5E9] text-white font-medium rounded-md hover:bg-[#0284C7] transition-colors min-h-[44px] text-sm"
            >
              Apply Now
              <ArrowRight size={16} />
            </a>
            <Link
              to="/research"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-colors min-h-[44px] text-sm"
            >
              Research Areas
            </Link>
            <a
              href="#openings"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-colors min-h-[44px] text-sm"
            >
              Current Opportunities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}