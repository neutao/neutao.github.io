import React from "react";
import SectionLabel from "@/components/SectionLabel";
import TeamMemberProfile from "@/components/TeamMemberProfile";

export default function TeamMemberSection({ label, title, description, members, emptyMessage, bg = "white" }) {
  const bgColor = bg === "muted" ? "bg-[#F1F5F9]" : "bg-white";

  return (
    <section className={`${bgColor} py-16 lg:py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel label={label} className="mb-3 block" />
        <h2 className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl tracking-tight mb-3" style={{ letterSpacing: "-0.02em" }}>
          {title}
        </h2>
        <p className="text-slate-600 text-base leading-relaxed mb-10 max-w-3xl">
          {description}
        </p>
        {members.length > 0 ? (
          <div className="flex flex-col gap-14 lg:gap-20 divide-y divide-slate-100">
            {members.map((member, i) => (
              <div key={i} className={i === 0 ? "" : "pt-14 lg:pt-20"}>
                <TeamMemberProfile member={member} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border border-dashed border-slate-200 rounded-lg">
            <p className="text-slate-400 text-sm">{emptyMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}