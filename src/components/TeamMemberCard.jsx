import React from "react";
import { Image } from "@/components/ui/image";

export default function TeamMemberCard({ member }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="group bg-white rounded-lg border border-slate-100 overflow-hidden hover:shadow-md hover:border-[#0EA5E9]/20 transition-all">
      <div className="aspect-[4/5] bg-gradient-to-br from-slate-100 to-slate-50 relative overflow-hidden">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fittingType="fill"
            className="block w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center">
              <span className="font-heading text-2xl font-medium text-[#0EA5E9]">
                {initials}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-heading font-medium text-[#0F172A] text-base mb-1.5">
          {member.name}
        </h3>
        {member.degree && (
          <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-md bg-teal-50 text-[#0D9488] mb-2.5">
            {member.degree}
          </span>
        )}
        {member.note && (
          <p className="text-slate-500 text-xs mb-2">
            {member.note}
          </p>
        )}
        {member.research && (
          <p className="text-slate-500 text-xs leading-relaxed">
            <span className="font-medium text-slate-600">Research:</span> {member.research}
          </p>
        )}
        {member.currentPosition && (
          <p className="text-[#0D9488] text-xs font-medium mt-2">
            {member.currentPosition}
          </p>
        )}
        {member.bio && (
          <div className="mt-2">
            <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1">Bio</p>
            <p className="text-slate-500 text-xs leading-relaxed">
              {member.bio}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}