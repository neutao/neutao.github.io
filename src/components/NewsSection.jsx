import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import NewsCard from "@/components/NewsCard";
import FeaturedNewsCard from "@/components/FeaturedNewsCard";

export default function NewsSection({
  items,
  label = "News & Achievements",
  title,
  subtitle,
  limit,
  showViewAll = false,
  bg = "white",
}) {
  const bgColor = bg === "muted" ? "bg-[#F1F5F9]" : "bg-white";
  const featured = items.filter((i) => i.featured);
  const regular = items.filter((i) => !i.featured);
  const displayRegular = limit ? regular.slice(0, limit) : regular;

  return (
    <section className={`${bgColor} py-16 lg:py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionLabel label={label} className="mb-3 block" />
          {title && (
            <h2 className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl tracking-tight mb-3" style={{ letterSpacing: "-0.02em" }}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-slate-600 text-base leading-relaxed max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>

        {featured.map((item, i) => (
          <div key={`f-${i}`} className="mb-6">
            <FeaturedNewsCard item={item} />
          </div>
        ))}

        {displayRegular.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayRegular.map((item, i) => (
              <NewsCard key={i} item={item} />
            ))}
          </div>
        )}

        {showViewAll && (
          <div className="text-center mt-12">
            <Link
              to="/news"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0EA5E9] text-white font-medium rounded-md hover:bg-[#0284C7] transition-colors min-h-[44px] text-sm"
            >
              View All News
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}