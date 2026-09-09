import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Footprints, Activity, Brain, FlaskConical, Cog } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import ImageGallery from "@/components/ImageGallery";
import NewsSection from "@/components/NewsSection";
import { NEWS_ITEMS } from "@/data/news";

const HERO_IMG = "/images/research-highlight-smart-insole.jpg";
const FEA_IMG = "/images/research-implant-design.jpg";

const GALLERY_IMAGES = [
  {
    src: "/images/research-highlight-smart-insole.jpg",
    alt: "Exploded view, internal view, and key electronic components of a sensor-equipped smart insole with FSR, IMU, temperature sensors, and ESP32 microcontroller, plus real-world application in an athletic shoe",
  },
  {
    src: "/images/research-highlight-footwear.jpg",
    alt: "Midfoot and forefoot hollow shoe designs with running power and ankle work analysis graphs during the gait cycle",
  },
  {
    src: "/images/research-implant-design.jpg",
    alt: "3D skeletal lower limb model with gait cycle phases and cartilage pressure heat maps for tibial, talar, and fibular cartilage",
  },
  {
    src: "/images/research-highlight-implant-design.jpg",
    alt: "Design workflow for universal talus implants for total talus replacement, comparing CT scans, biological FE model, and PCU-coated versus non-coated implant evaluation",
  },
  {
    src: "/images/research-spine-biomechanics.jpg",
    alt: "Workflow diagram for predicting body mass distribution along T1-L5 using anthropometric measurements and cross-sectional area scaling",
  },
  {
    src: "/images/research-spine-biomechanics.jpg",
    alt: "Process flow transitioning from musculoskeletal model to finite element model of the lumbosacral spine with applied load vectors",
  },
];

const PILLARS = [
  { icon: Cpu, label: "Computational Biomechanics & FEA", color: "bg-sky-50 text-[#0EA5E9]" },
  { icon: Footprints, label: "Footwear & Sport Biomechanics", color: "bg-teal-50 text-[#0D9488]" },
  { icon: Activity, label: "Wearable Sensors & Smart Insoles", color: "bg-sky-50 text-[#0EA5E9]" },
  { icon: Brain, label: "Machine Learning for Biomechanics", color: "bg-teal-50 text-[#0D9488]" },
  { icon: Cog, label: "Implant & Musculoskeletal Design", color: "bg-sky-50 text-[#0EA5E9]" },
  { icon: FlaskConical, label: "Rehabilitation Biomechanics", color: "bg-teal-50 text-[#0D9488]" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={HERO_IMG} alt="Smart insole sensor technology for biomechanics research" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <SectionLabel label="Computational & Applied Biomechanics Lab" className="text-[#0EA5E9] mb-6 block" />
            <h1 className="font-heading font-medium text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
              Biomechanics, Wearables, and Climatic Testing for Human Performance and Product Innovation
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
              The Computational and Applied Biomechanics Lab develops assistive devices, machine learning, and computational modelling approaches to improve health, mobility, sport performance, and product design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/research"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0EA5E9] text-white font-medium rounded-md hover:bg-[#0284C7] transition-colors min-h-[44px] text-sm"
              >
                Explore Research
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/industry"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-colors min-h-[44px] text-sm"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About the Lab */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionLabel label="About the Lab" className="mb-4 block" />
              <h2 className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-6" style={{ letterSpacing: "-0.02em" }}>
                Translating Advanced Biomechanics Into Practical Solutions
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Our work spans footwear and sport biomechanics, wearable technology, musculoskeletal modelling, implant design, spinal biomechanics, and human performance testing. We collaborate with academic, clinical, and industry partners to translate advanced biomechanics research into practical solutions.
              </p>
              <p className="text-slate-500 text-base leading-relaxed">
                Based at Ontario Tech University, our research combines experimental techniques with computational biomechanics and machine learning to address challenges in healthcare, sport performance, and product design.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#0EA5E9]/20 rounded-lg" />
              <ImageGallery images={GALLERY_IMAGES} />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-md shadow-lg px-4 py-3 border border-slate-100">
                <p className="font-mono text-xs text-slate-400 uppercase tracking-wider">Ontario Tech University</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Pillars */}
      <section className="bg-[#F1F5F9] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel label="Research Areas" className="mb-4 block" />
            <h2 className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl lg:text-4xl tracking-tight" style={{ letterSpacing: "-0.02em" }}>
              Core Research Pillars
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((pillar, i) => (
              <Link
                key={i}
                to="/research"
                className="group bg-white rounded-lg p-8 border border-slate-100 hover:border-[#0EA5E9]/30 hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 rounded-lg ${pillar.color} flex items-center justify-center mb-5`}>
                  <pillar.icon size={22} />
                </div>
                <h3 className="font-heading font-medium text-[#0F172A] text-lg group-hover:text-[#0EA5E9] transition-colors">
                  {pillar.label}
                </h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 text-[#0EA5E9] font-medium text-sm hover:text-[#0284C7] transition-colors"
            >
              View All Research Areas
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industry CTA */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <SectionLabel label="Industry Partners" className="text-[#0EA5E9] mb-4 block" />
                <h2 className="font-heading font-medium text-white text-2xl sm:text-3xl tracking-tight mb-6" style={{ letterSpacing: "-0.02em" }}>
                  Evidence-Based Product Innovation Through Biomechanics
                </h2>
                <p className="text-slate-300 leading-relaxed mb-8">
                  We work with companies in footwear, sport equipment, wearable technology, rehabilitation, and occupational safety to develop, evaluate, and optimize products through computational biomechanics, wearable sensors, and human performance testing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/industry"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0EA5E9] text-white font-medium rounded-md hover:bg-[#0284C7] transition-colors min-h-[44px] text-sm"
                  >
                    Collaboration Opportunities
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/wind-tunnel"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-colors min-h-[44px] text-sm"
                  >
                    Wind Tunnel Testing
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="/images/research-highlight-windtunneltesting.jpg"
                  alt="Alpine skier in aerodynamic tuck position during climatic wind tunnel testing with smoke visualization"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Achievements */}
      <NewsSection
        items={NEWS_ITEMS}
        title="News & Achievements"
        subtitle="Celebrating student success, research milestones, and collaborative achievements in biomechanics, wearable technology, and human performance."
        limit={3}
        showViewAll
        bg="muted"
      />
    </div>
  );
}