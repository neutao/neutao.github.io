import React from "react";
import { Image } from "@/components/ui/image";

export default function TeamMemberProfile({ member }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4">
      <div className="lg:col-span-1">
        <div
          className="relative rounded-xl overflow-hidden shadow-md bg-gradient-to-br from-slate-100 to-slate-50 w-full max-w-[260px] mx-auto lg:ml-auto"
          style={{ aspectRatio: member.photoAspect || "3 / 4" }}
        >
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.name}
              fittingType="fill"
              focalPointX={member.photoFocal?.[0]}
              focalPointY={member.photoFocal?.[1]}
              className="block w-full h-full"
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
      </div>
      <div className="lg:col-span-2 flex flex-col justify-center">
        <h3 className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl tracking-tight mb-1.5" style={{ letterSpacing: "-0.02em" }}>
          {member.name}
        </h3>
        {member.degree && (
          <span className="inline-block self-start px-2.5 py-1 text-xs font-medium rounded-md bg-teal-50 text-[#0D9488] mb-3">
            {member.degree}
          </span>
        )}
        {member.note && (
          <p className="text-slate-500 text-sm mb-3">
            {member.note}
          </p>
        )}
        {member.research && (
          <p className="text-slate-500 text-sm leading-relaxed mb-2">
            <span className="font-medium text-slate-600">Research:</span> {member.research}
          </p>
        )}
        {member.currentPosition && (
          <p className="text-[#0D9488] text-sm font-medium mb-2">
            {member.currentPosition}
          </p>
        )}
        {member.bio && (
          <p className="text-slate-600 text-base leading-relaxed mt-1 text-justify">
            {member.bio}
          </p>
        )}
      </div>
    </div>
  );
}