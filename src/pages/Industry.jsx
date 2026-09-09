import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, FlaskConical, Gauge, ShieldCheck, GraduationCap, Microscope } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const COLLABORATION_AREAS = [
  "Footwear and insole testing",
  "Sport equipment evaluation",
  "Wearable sensor validation",
  "Human movement and performance assessment",
  "Prototype testing",
  "Product comparison studies",
  "Grant-supported university-industry research",
  "Evidence-based product claims",
];

const WHY_PARTNER = [
  {
    icon: Microscope,
    title: "Deep Expertise",
    description: "Expertise in computational biomechanics, footwear biomechanics, and wearables with a strong publication record.",
  },
  {
    icon: Gauge,
    title: "Industry-Oriented Testing",
    description: "Experience with industry-oriented product testing designed to answer questions that matter for commercialization.",
  },
  {
    icon: FlaskConical,
    title: "Integrated Methods",
    description: "Ability to combine laboratory testing, wearable sensors, and computational modelling in a single project.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Infrastructure",
    description: "Access to advanced research infrastructure including motion capture, force plates, wearable sensors, and climatic wind tunnel.",
  },
  {
    icon: GraduationCap,
    title: "Training & Grants",
    description: "Opportunities for student training and grant-supported collaboration through Canadian research funding programs.",
  },
];

export default function Industry() {
  return (
    <div>
      {/* Header */}
      <section className="bg-[#0F172A] py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/industry-li-ning.png"
            alt="Advanced biomechanics research laboratory"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#0F172A]/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="Industry Collaboration" className="text-[#0EA5E9] mb-4 block" />
          <h1 className="font-heading font-medium text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6 max-w-4xl" style={{ letterSpacing: "-0.03em" }}>
            Industry Collaboration in Biomechanics, Wearables, Footwear, and Human Performance
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
            We work with industry partners to develop, evaluate, and optimize products that interact with the human body. 
            Our lab combines computational biomechanics, wearable sensors, machine learning, footwear biomechanics, 
            and experimental testing to support evidence-based product innovation.
          </p>
        </div>
      </section>

      {/* Collaboration Areas */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionLabel label="Capabilities" className="mb-4 block" />
              <h2 className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl tracking-tight mb-6" style={{ letterSpacing: "-0.02em" }}>
                Collaboration Areas
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                We support companies in footwear, sport equipment, wearable technology, rehabilitation technology, 
                occupational safety, and human performance with tailored biomechanical product testing and research.
              </p>
              <div className="space-y-4">
                {COLLABORATION_AREAS.map((area, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-lg bg-[#F1F5F9] border border-slate-100"
                  >
                    <CheckCircle size={18} className="text-[#0D9488] shrink-0" />
                    <span className="text-[#0F172A] text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#F1F5F9]/50 backdrop-blur-sm rounded-2xl border border-slate-200/60 p-8 lg:p-12">
              <SectionLabel label="For Companies" className="mb-4 block" />
              <h3 className="font-heading font-medium text-[#0F172A] text-xl sm:text-2xl tracking-tight mb-6">
                How We Work With Industry
              </h3>
              <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
                <p>
                  Our collaboration model is designed for companies seeking rigorous, peer-reviewed-level testing and 
                  analysis for their products. We work across the full product development cycle — from early-stage 
                  prototype evaluation to final product validation.
                </p>
                <p>
                  Projects can be structured as direct industry-funded research, co-funded university-industry 
                  grants, or student research projects aligned with your product challenges.
                </p>
                <p>
                  All collaboration outcomes can be delivered as confidential technical reports, published 
                  peer-reviewed papers, or both — depending on your requirements.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-[#0EA5E9] text-white font-medium rounded-md hover:bg-[#0284C7] transition-colors min-h-[44px] text-sm"
              >
                Start a Conversation
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="bg-[#F1F5F9] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel label="Advantages" className="mb-4 block" />
            <h2 className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl lg:text-4xl tracking-tight" style={{ letterSpacing: "-0.02em" }}>
              Why Partner With Us?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_PARTNER.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-8 border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-sky-50 text-[#0EA5E9] flex items-center justify-center mb-5">
                  <item.icon size={22} />
                </div>
                <h3 className="font-heading font-medium text-[#0F172A] text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl tracking-tight mb-4">
            Ready to Discuss a Project?
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            Contact Dr. Tao Liu to explore how computational biomechanics, wearable sensors, and human 
            performance testing can support your product development and innovation goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0EA5E9] text-white font-medium rounded-md hover:bg-[#0284C7] transition-colors min-h-[44px] text-sm"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/wind-tunnel"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-slate-300 text-[#0F172A] font-medium rounded-md hover:bg-slate-50 transition-colors min-h-[44px] text-sm"
            >
              Wind Tunnel Testing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}