import React from "react";
import { Trophy, Award, FlaskConical, FileText, GraduationCap } from "lucide-react";

const CATEGORIES = {
  "Student Award": { icon: Trophy, color: "bg-teal-50 text-[#0D9488]" },
  "Conference Achievement": { icon: Award, color: "bg-sky-50 text-[#0EA5E9]" },
  "Research Update": { icon: FlaskConical, color: "bg-teal-50 text-[#0D9488]" },
  Publication: { icon: FileText, color: "bg-sky-50 text-[#0EA5E9]" },
  "Graduate Training": { icon: GraduationCap, color: "bg-teal-50 text-[#0D9488]" },
};

export default function NewsCard({ item }) {
  const config = CATEGORIES[item.category] || CATEGORIES["Research Update"];
  const Icon = config.icon;

  return (
    <div className="group bg-white rounded-xl border border-slate-100 p-6 hover:border-[#0EA5E9]/30 hover:shadow-md transition-all flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${config.color}`}>
          <Icon size={13} />
          {item.category}
        </span>
        <span className="font-mono text-xs text-slate-400">{item.date}</span>
      </div>
      <h3 className="font-heading font-medium text-[#0F172A] text-base mb-2 group-hover:text-[#0EA5E9] transition-colors">
        {item.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}