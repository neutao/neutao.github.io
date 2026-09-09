import React, { useState, useEffect } from "react";

export default function RotatingImage({ images, number, interval = 3000, className = "" }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  const current = images[index];

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <img
        src={current.src}
        alt={current.alt}
        className="rounded-lg w-full h-full object-contain shadow-md"
      />
      {number && (
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded px-3 py-1.5">
          <span className="font-mono text-xs text-[#0D9488] uppercase tracking-wider font-medium">
            {number}
          </span>
        </div>
      )}
    </div>
  );
}