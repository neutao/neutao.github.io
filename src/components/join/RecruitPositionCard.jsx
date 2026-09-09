import React from "react";
import { MapPin, Building2, CalendarClock, CheckCircle2, Circle } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const RESEARCH_AREAS = [
  "Computational Footwear Biomechanics",
  "Finite Element Analysis",
  "Musculoskeletal Modelling",
  "Foot–Ground Interaction",
  "Foot–Footwear Interaction",
  "Experimental Biomechanics",
  "Human Movement",
  "Footwear Design and Performance",
];

const FACTS = [
  { icon: Building2, label: "Department", value: "Mechanical and Manufacturing Engineering" },
  { icon: CalendarClock, label: "Target Start Date", value: "May, September 2027 or as mutually agreed" },
];

const REQUIRED = [
  "Knowledge and experience in finite element analysis, preferably using ABAQUS",
  "Experience with musculoskeletal modelling software such as OpenSim or AnyBody",
  "Strong communication and interpersonal skills",
  "High motivation and demonstrated ability to work independently",
  "Strong interest in computational biomechanics and practical or healthcare applications",
];

const PREFERRED = [
  "Proficiency in Python and/or MATLAB",
  "Hands-on experience with biomechanical or human movement data collection",
  "Background in Mechanical Engineering, Biomechanics, Biomedical Engineering, or a related discipline",
];

export default function RecruitPositionCard() {
  return (
    <section className="bg-white pt-16 lg:pt-20 pb-6 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <SectionLabel label="Position Overview" className="mb-3 block" />
          <h2
            className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-2"
            style={{ letterSpacing: "-0.02em" }}
          >
            PhD Positions
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] overflow-hidden">
          {/* Card header */}
          <div className="bg-gradient-to-br from-[#0F172A] to-[#0B1220] p-6 lg:p-8">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                NOW RECRUITING
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-sky-500/15 text-sky-300 border border-sky-400/30">
                Fully Funded
              </span>
            </div>
            <h3 className="font-heading font-semibold text-white text-xl sm:text-2xl lg:text-3xl tracking-tight mb-3" style={{ letterSpacing: "-0.02em" }}>
              Fully Funded M.Sc./Ph.D. Position in Computational Footwear Biomechanics
            </h3>
            <div className="flex items-center gap-2 text-slate-300 text-sm">
              <MapPin size={15} className="text-[#38BDF8]" />
              Ontario Tech University · Ontario, Canada
            </div>
          </div>

          {/* Card body */}
          <div className="p-6 lg:p-8">
            <div className="space-y-3 text-sm text-slate-600 leading-relaxed mb-6">
              <p>
                Applications are invited for a fully funded Ph.D. position in the Department of Mechanical and
                Manufacturing Engineering at Ontario Tech University. Strong M.Sc. applicants will also be considered.
              </p>
              <p>
                The successful applicant will join the Computational and Applied Biomechanics (CAB) Lab and investigate{" "}
                <span className="font-semibold text-[#0F172A]">
                  foot–ground and foot–footwear interactions using computational biomechanics
                </span>
                . The project will integrate finite element analysis, musculoskeletal modelling, and experimental
                biomechanics to better understand human movement and translate biomechanical knowledge into practical
                applications in footwear design and performance. This interdisciplinary project provides opportunities
                to develop expertise in computational modelling, biomechanics, programming, and experimental research.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-5">
                <div>
                  <p className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">Degree</p>
                  <p className="text-[#0F172A] font-medium text-base">
                    Ph.D. preferred
                    <span className="block text-slate-500 font-normal text-sm mt-0.5">
                      M.Sc. applicants will also be considered
                    </span>
                  </p>
                </div>
                {FACTS.map((f) => (
                  <div key={f.label}>
                    <p className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">{f.label}</p>
                    <p className="flex items-start gap-2 text-[#0F172A] font-medium text-base">
                      <f.icon size={16} className="text-[#0EA5E9] mt-0.5 shrink-0" />
                      {f.value}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <p className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-3">Research Areas</p>
                <div className="flex flex-wrap gap-2">
                  {RESEARCH_AREAS.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1.5 text-xs font-medium rounded-md bg-white text-slate-600 border border-slate-200"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="bg-white rounded-xl border border-slate-200 p-5">
                  <SectionLabel label="Must Have" className="mb-3 block" />
                  <h4
                    className="font-heading font-medium text-[#0F172A] text-base tracking-tight mb-4"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Required Qualifications
                  </h4>
                  <ul className="space-y-2.5">
                    {REQUIRED.map((q, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                        <CheckCircle2 size={16} className="text-[#0D9488] mt-0.5 shrink-0" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-5">
                  <SectionLabel label="Nice to Have" className="mb-3 block" />
                  <h4
                    className="font-heading font-medium text-[#0F172A] text-base tracking-tight mb-4"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Preferred Qualifications
                  </h4>
                  <ul className="space-y-2.5">
                    {PREFERRED.map((q, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                        <Circle size={14} className="text-[#0EA5E9] mt-1 shrink-0" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}