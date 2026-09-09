import React from "react";
import { Search } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

export default function NoOpening() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-14 h-14 rounded-xl bg-sky-50 text-[#0EA5E9] flex items-center justify-center mx-auto mb-6">
          <Search size={26} />
        </div>
        <SectionLabel label="General Inquiries" className="mb-3 block" />
        <h2
          className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl tracking-tight mb-5"
          style={{ letterSpacing: "-0.02em" }}
        >
          Don't See an Opening?
        </h2>
        <div className="space-y-4 text-slate-600 text-base leading-relaxed max-w-2xl mx-auto">
          <p>
            The CAB Lab is always interested in hearing from exceptional students whose research interests align
            with computational biomechanics, wearable technology, musculoskeletal modelling, machine learning,
            footwear biomechanics, implant design, or human performance.
          </p>
          <p>
            If you have an excellent academic record or are eligible for competitive scholarships such as NSERC,
            OGS, or Mitacs, we encourage you to get in touch.
          </p>
        </div>
      </div>
    </section>
  );
}