import React from "react";

export default function SectionLabel({ label, className = "" }) {
  return (
    <span className={`font-mono text-xs uppercase tracking-[0.2em] text-[#0D9488] font-medium ${className}`}>
      {label}
    </span>
  );
}