import React, { useState, useEffect } from "react";

const SLIDESHOW_IMAGES = [
  {
    src: "/images/research-highlight-windtunneltesting.jpg",
    alt: "Wind tunnel testing at Ontario Tech University",
  },
  {
    src: "/images/wind-tunnel-cyclist.jpg",
    alt: "Cyclist during wind tunnel testing",
  },
  {
    src: "/images/wind-tunnel-wingsuit.jpg",
    alt: "Wingsuit testing in the ACE Climatic Wind Tunnel",
  },
];

const INTERVAL = 3000;

export default function WindTunnelSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative rounded-xl overflow-hidden shadow-xl">
      <div className="relative aspect-[16/9] w-full bg-[#0F172A]">
        {SLIDESHOW_IMAGES.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Dots */}
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          {SLIDESHOW_IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`View slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 sm:p-8">
          <p className="text-white text-sm sm:text-base max-w-2xl">
            Climatic wind tunnel testing enables product and human performance evaluation under controlled environmental conditions.
          </p>
          <p className="font-mono text-xs text-slate-300 mt-2 uppercase tracking-wider">
            ACE Facility — Ontario Tech University
          </p>
        </div>
      </div>
    </div>
  );
}