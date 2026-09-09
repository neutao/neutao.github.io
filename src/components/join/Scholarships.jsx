import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Mail, Lightbulb } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const SCHOLARSHIPS = [
  "NSERC Undergraduate Student Research Award (USRA)",
  "NSERC Canada Graduate Scholarships (CGS-M & CGS-D)",
  "CIHR Master's Award",
  "CIHR Doctoral Award",
  "Mitacs Globalink Research Internship (GRI)",
  "Mitacs Accelerate",
  "Vanier Canada Graduate Scholarship",
  "International and Government-Sponsored Scholarships",
];

export default function Scholarships() {
  return (
    <section id="funding" className="bg-white pt-10 lg:pt-12 pb-16 lg:pb-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Intro */}
          <div>
            <SectionLabel label="Scholarships & Fellowships" className="mb-3 block" />
            <h2
              className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl tracking-tight mb-5"
              style={{ letterSpacing: "-0.02em" }}
            >
              Bring Your Ideas. Build Your Future.
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                The CAB Lab welcomes motivated undergraduate, graduate, and postdoctoral researchers interested in
                computational biomechanics, wearable technologies, machine learning, and human performance.
              </p>
              <p>
                Outstanding applicants are encouraged to contact Dr. Tao Liu to discuss potential research ideas
                and competitive funding opportunities. We are happy to work with students to develop research
                proposals and support applications for prestigious scholarships and fellowships.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:tao.liu@ontariotechu.net?subject=Discussing%20Research%20Ideas%20-%20CAB%20Lab"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0EA5E9] text-white font-medium rounded-md hover:bg-[#0284C7] transition-colors min-h-[44px] text-sm"
              >
                <Lightbulb size={16} />
                Discuss Research Ideas
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-slate-300 text-[#0F172A] font-medium rounded-md hover:bg-[#F1F5F9] transition-colors min-h-[44px] text-sm"
              >
                <Mail size={16} />
                Contact Dr. Tao Liu
              </Link>
            </div>
          </div>

          {/* Right: Scholarship cards */}
          <div>
            <p className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Sparkles size={14} className="text-[#0D9488]" /> Scholarship Opportunities
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SCHOLARSHIPS.map((s, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg border border-slate-100 bg-[#F8FAFC] hover:border-[#0EA5E9]/30 hover:bg-white hover:shadow-sm transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] mt-2 shrink-0" />
                    <p className="text-sm text-[#0F172A] font-medium leading-snug">{s}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlight box */}
        <div className="mt-10 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-8 lg:p-10 overflow-hidden relative">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 30%, #0EA5E9 0, transparent 35%), radial-gradient(circle at 85% 70%, #0D9488 0, transparent 35%)",
            }}
          />
          <div className="relative flex flex-col lg:flex-row items-start gap-6">
            <div className="w-12 h-12 rounded-lg bg-[#0EA5E9]/20 text-[#0EA5E9] flex items-center justify-center shrink-0">
              <Lightbulb size={24} />
            </div>
            <div className="max-w-3xl">
              <h3 className="font-heading font-medium text-white text-xl lg:text-2xl tracking-tight mb-3">
                Don't see an advertised position?
              </h3>
              <p className="text-slate-300 text-sm lg:text-base leading-relaxed">
                If your research interests align with the CAB Lab, we encourage you to get in touch. We are always
                interested in hearing from exceptional students and are happy to discuss new research ideas,
                collaborative projects, and scholarship opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}