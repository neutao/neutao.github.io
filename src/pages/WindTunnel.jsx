import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Thermometer, Wind, Snowflake, Droplets, CloudRain, Sun } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import WindTunnelSlideshow from "@/components/WindTunnelSlideshow";

const APPLICATIONS = [
  { icon: Snowflake, text: "Winter footwear testing" },
  { icon: Sun, text: "Running shoe and insole performance under heat, cold, rain, and snow" },
  { icon: Wind, text: "Hockey skate and sport equipment evaluation" },
  { icon: Thermometer, text: "Wearable sensor reliability under extreme temperature and humidity" },
  { icon: Droplets, text: "Human performance, balance, gait, fatigue, and comfort testing" },
  { icon: CloudRain, text: "Validation of performance claims under controlled environmental conditions" },
];

const CAPABILITIES = [
  { label: "Temperature", value: "-40°C to +60°C" },
  { label: "Wind Speed", value: "Up to 120 km/h" },
  { label: "Conditions", value: "Rain, Snow, Ice, Humidity" },
  { label: "Application", value: "Products & Human Performance" },
];

export default function WindTunnel() {
  return (
    <div>
      {/* Header */}
      <section className="relative bg-gradient-to-b from-[#0F172A] via-[#0F172A] to-[#1a2744] py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionLabel label="Facility" className="text-[#0EA5E9] mb-4 block" />
          <h1 className="font-heading font-medium text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6 max-w-4xl" style={{ letterSpacing: "-0.03em" }}>
            Climatic Wind Tunnel Testing for Footwear, Sport Equipment, Wearables, and Human Performance
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-10">
            Through access to Ontario Tech University's ACE Climatic Wind Tunnel, we can support industry partners 
            in testing products and human performance under realistic environmental conditions, including heat, cold, 
            humidity, wind, rain, snow, and winter-like conditions.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CAPABILITIES.map((cap, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <p className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-1">{cap.label}</p>
                <p className="text-white font-heading font-medium text-sm">{cap.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Image */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WindTunnelSlideshow />
        </div>
      </section>

      {/* Applications */}
      <section className="bg-[#F1F5F9] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionLabel label="Applications" className="mb-4 block" />
              <h2 className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl tracking-tight mb-6" style={{ letterSpacing: "-0.02em" }}>
                Testing Applications
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                The ACE Climatic Wind Tunnel enables controlled testing under conditions that are difficult 
                or impossible to replicate in a standard laboratory. This supports product development, 
                performance validation, and regulatory compliance across multiple industries.
              </p>
              <div className="space-y-3">
                {APPLICATIONS.map((app, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white border border-slate-100"
                  >
                    <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#0EA5E9] flex items-center justify-center shrink-0">
                      <app.icon size={18} />
                    </div>
                    <span className="text-[#0F172A] text-sm font-medium">{app.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-xl border border-slate-200 p-8 lg:p-12">
                <SectionLabel label="Industries" className="mb-4 block" />
                <h3 className="font-heading font-medium text-[#0F172A] text-xl sm:text-2xl tracking-tight mb-6">
                  Who Benefits From Wind Tunnel Testing
                </h3>
                <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] mt-1.5 shrink-0" />
                    Footwear companies developing winter boots, running shoes, and safety footwear
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] mt-1.5 shrink-0" />
                    Sport equipment manufacturers testing under realistic conditions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] mt-1.5 shrink-0" />
                    Wearable technology companies validating sensor reliability
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] mt-1.5 shrink-0" />
                    Occupational safety and outdoor workwear brands
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] mt-1.5 shrink-0" />
                    Automotive and aerospace companies testing thermal comfort
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-medium text-white text-2xl sm:text-3xl tracking-tight mb-4">
            Interested in Testing a Product?
          </h2>
          <p className="text-slate-300 text-base leading-relaxed mb-8">
            Interested in testing a product or developing a research collaboration? Contact us to discuss 
            your project and how the ACE Climatic Wind Tunnel can support your goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0EA5E9] text-white font-medium rounded-md hover:bg-[#0284C7] transition-colors min-h-[44px] text-sm"
          >
            Contact Us to Discuss Your Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}