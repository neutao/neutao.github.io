import React from "react";
import { HandCoins, Sparkles } from "lucide-react";

export default function FeaturedNewsCard({ item }) {
  return (
    <div className="group relative bg-gradient-to-br from-sky-50 via-white to-teal-50 rounded-2xl border border-[#0EA5E9]/20 p-8 lg:p-10 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0EA5E9] to-[#0D9488]" />

      <div className="flex flex-col lg:flex-row gap-6 lg:items-start">
        <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-[#0EA5E9]/20 flex items-center justify-center shrink-0">
          <HandCoins className="text-[#0EA5E9]" size={26} />
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#0F172A] text-white">
              <Sparkles size={12} />
              Featured
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-50 text-[#0D9488]">
              {item.category}
            </span>
            <span className="font-mono text-xs text-slate-400 lg:ml-auto">{item.date}</span>
          </div>
          <h3 className="font-heading font-medium text-[#0F172A] text-xl lg:text-2xl tracking-tight mb-3" style={{ letterSpacing: "-0.02em" }}>
            {item.title}
          </h3>
          <p className="text-slate-600 text-base leading-relaxed max-w-3xl">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}