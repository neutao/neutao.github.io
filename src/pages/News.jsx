import React from "react";
import SectionLabel from "@/components/SectionLabel";
import NewsSection from "@/components/NewsSection";
import { NEWS_ITEMS } from "@/data/news";

export default function News() {
  return (
    <div>
      {/* Header */}
      <section className="bg-[#F1F5F9] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="News & Achievements" className="mb-4 block" />
          <h1 className="font-heading font-medium text-[#0F172A] text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
            News & Achievements
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            Celebrating student success, research milestones, and collaborative achievements in biomechanics,
            wearable technology, and human performance.
          </p>
        </div>
      </section>

      <NewsSection items={NEWS_ITEMS} bg="white" />
    </div>
  );
}