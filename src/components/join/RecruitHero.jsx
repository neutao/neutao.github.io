import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Banknote, MapPin, CalendarClock, Cpu } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const BADGES = [
  { icon: Banknote, label: "Fully Funded" },
  { icon: GraduationCap, label: "M.Sc. / Ph.D." },
  { icon: MapPin, label: "Ontario Tech University, Canada" },
  { icon: CalendarClock, label: "Target Start: January 2027" },
  { icon: Cpu, label: "Computational Biomechanics" },
];

export default function RecruitHero() {
  return (
    <section className="relative bg-[#0B1220] overflow-hidden">
      {/* Subtle finite-element mesh overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.13] pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="feMesh" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M0 0 L56 56 M56 0 L0 56" fill="none" stroke="#38BDF8" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="1.4" fill="#38BDF8" />
            <circle cx="56" cy="0" r="1.4" fill="#38BDF8" />
            <circle cx="0" cy="56" r="1.4" fill="#38BDF8" />
            <circle cx="56" cy="56" r="1.4" fill="#38BDF8" />
            <circle cx="28" cy="28" r="1.4" fill="#38BDF8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#feMesh)" />
      </svg>
      {/* Glow gradients */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 20%, #0EA5E9 0, transparent 42%), radial-gradient(circle at 82% 70%, #0D9488 0, transparent 42%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl">
          <SectionLabel label="Graduate Recruitment · CAB Lab" className="text-[#38BDF8] mb-6 block" />
          <h1
            className="font-heading font-semibold text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.08] tracking-tight mb-6"
            style={{ letterSpacing: "-0.03em" }}
          >
            Fully Funded M.Sc./Ph.D. Position in Computational Footwear Biomechanics
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-3xl">
            Join the Computational and Applied Biomechanics (CAB) Lab at Ontario Tech University and develop the
            next generation of computational tools for understanding foot–ground and foot–footwear interaction.
          </p>

          <div className="flex flex-wrap gap-2.5 mb-10">
            {BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium bg-white/10 text-white border border-white/15 backdrop-blur-sm"
              >
                <Icon size={15} className="text-[#38BDF8]" />
                {label}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0EA5E9] text-white font-semibold rounded-md hover:bg-[#0284C7] transition-colors min-h-[48px] text-sm shadow-lg shadow-sky-500/20"
            >
              Apply Now
              <ArrowRight size={16} />
            </a>
            <Link
              to="/research"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/25 text-white font-medium rounded-md hover:bg-white/10 transition-colors min-h-[48px] text-sm"
            >
              Explore Our Research
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}