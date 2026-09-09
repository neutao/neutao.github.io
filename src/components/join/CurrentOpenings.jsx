import React from "react";
import { MapPin, Building2, GraduationCap, CalendarRange, CheckCircle2, Circle } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const RESEARCH_AREAS = [
  "Musculoskeletal Modelling",
  "Computational Biomechanics",
  "Gait Biomechanics",
  "Wearable Sensors",
  "Algorithm Development",
  "Scoliosis Monitoring",
  "Human Movement Analysis",
];

const FACTS = [
  { icon: Building2, label: "Department", value: "Mechanical Engineering" },
  { icon: GraduationCap, label: "Institution", value: "Ontario Tech University" },
  { icon: CalendarRange, label: "Target Start Date", value: "January 2027 or May 2027 (Flexible)" },
];

const REQUIRED = [
  "Bachelor's degree in Mechanical Engineering, Biomedical Engineering, Kinesiology, Computer Science, or a related discipline",
  "Experience using musculoskeletal modelling software (OpenSim or AnyBody)",
  "Programming experience (Python or MATLAB)",
  "Minimum GPA equivalent to 3.6/4.0",
  "English proficiency (IELTS 6.5 or equivalent)",
  "Excellent communication skills",
  "Ability to work independently and collaboratively",
];

const PREFERRED = [
  "Experience collecting biomechanical data",
  "Experience with motion capture systems",
  "Background in biomechanics",
  "Experience working with wearable sensors",
  "Knowledge of machine learning is considered an asset",
];

export default function CurrentOpenings() {
  return (
    <section id="openings" className="bg-white pt-6 lg:pt-8 pb-8 lg:pb-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-6">
          <h2
            className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl lg:text-4xl tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            MSc Positions
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
              Two fully funded MSc Positions in algorithm development and machine learning
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
                Highly motivated applicants with backgrounds in Mechanical Engineering, Biomedical Engineering,
                Kinesiology, Computer Science, or closely related disciplines are invited to apply.
              </p>
              <p>
                Students will work on interdisciplinary projects integrating{" "}
                <span className="font-semibold text-[#0F172A]">
                  musculoskeletal modelling, computational biomechanics, wearable technologies, and algorithm development
                </span>{" "}
                to improve scoliosis monitoring, gait analysis, and personalized healthcare.
              </p>
              <p>
                Research projects involve collaboration with clinicians, engineers, and computer scientists and
                provide opportunities to publish in leading journals and present at international conferences.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-5">
                <div>
                  <p className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">Degree</p>
                  <p className="text-[#0F172A] font-medium text-base">MSc</p>
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