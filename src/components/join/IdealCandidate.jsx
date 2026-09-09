import React from "react";
import { CheckCircle2, Circle } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const REQUIRED = [
  "Knowledge and experience with finite element analysis, preferably ABAQUS",
  "Experience with musculoskeletal modelling software such as OpenSim or AnyBody",
  "Strong communication and interpersonal skills",
  "Highly motivated with the ability to work independently",
  "Strong interest in computational biomechanics and practical applications",
];

const PREFERRED = [
  "Python and/or MATLAB programming",
  "Experience with biomechanical or human movement data collection",
  "Background in mechanical engineering, biomedical engineering, biomechanics, or a related discipline",
];

export default function IdealCandidate() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <SectionLabel label="Ideal Candidate" className="mb-3 block" />
          <h2
            className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Who We're Looking For
          </h2>
          <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
            The qualifications below describe our ideal applicant — but they are not a rigid checklist.
            Candidates with strong fundamentals and a genuine willingness to learn are strongly encouraged to apply.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Required */}
          <div className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600">
                Required
              </span>
              <h3 className="font-heading font-medium text-[#0F172A] text-lg tracking-tight">
                Core Qualifications
              </h3>
            </div>
            <ul className="space-y-3.5">
              {REQUIRED.map((q, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 text-sm lg:text-base leading-relaxed">
                  <CheckCircle2 size={18} className="text-[#0D9488] mt-0.5 shrink-0" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preferred */}
          <div className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-[#0EA5E9]">
                Preferred
              </span>
              <h3 className="font-heading font-medium text-[#0F172A] text-lg tracking-tight">
                Additional Strengths
              </h3>
            </div>
            <ul className="space-y-3.5">
              {PREFERRED.map((q, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 text-sm lg:text-base leading-relaxed">
                  <Circle size={16} className="text-[#0EA5E9] mt-1 shrink-0" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-sky-50/60 border border-sky-100 p-6 lg:p-8 text-center">
          <p className="text-slate-700 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
            Don't meet every listed qualification?{" "}
            <span className="font-semibold text-[#0F172A]">
              Strong fundamentals and a willingness to learn matter most.
            </span>{" "}
            If this research excites you, we encourage you to apply.
          </p>
        </div>
      </div>
    </section>
  );
}