import React from "react";
import { Mail, Building2, FlaskConical, User } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const EMAIL = "tao.liu@ontariotechu.net";

const CONTACT_TYPES = [
  { icon: Building2, label: "Discuss an Industry Project", subject: "CAB Lab – Industry Collaboration Inquiry" },
  { icon: FlaskConical, label: "Collaborate on Research", subject: "CAB Lab – Research Collaboration Inquiry" },
  { icon: User, label: "Contact Dr. Tao Liu", subject: "CAB Lab – General Inquiry" },
];

export default function Contact() {
  return (
    <div>
      <section className="bg-[#F1F5F9] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="Contact" className="mb-4 block" />
          <h1 className="font-heading font-medium text-[#0F172A] text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
            Get In Touch
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            Interested in collaborating on research, testing a product, exploring an industry partnership, or joining the lab? Please contact Dr. Tao Liu by email.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {CONTACT_TYPES.map((type) => (
              <a
                key={type.label}
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(type.subject)}`}
                className="p-5 rounded-lg border border-slate-200 hover:border-[#0EA5E9] hover:bg-sky-50 text-left transition-all min-h-[44px]"
              >
                <type.icon size={20} className="text-[#0EA5E9]" />
                <p className="text-sm font-medium mt-3 text-[#0F172A]">{type.label}</p>
              </a>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 sm:p-9 text-center">
            <div className="w-14 h-14 rounded-full bg-sky-50 flex items-center justify-center mx-auto mb-5">
              <Mail size={25} className="text-[#0EA5E9]" />
            </div>
            <h2 className="font-heading font-medium text-[#0F172A] text-2xl mb-3">Email Dr. Tao Liu</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              Computational and Applied Biomechanics Lab<br />Ontario Tech University · Oshawa, Ontario, Canada
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0EA5E9] text-white font-medium rounded-md hover:bg-[#0284C7] transition-colors min-h-[44px] text-sm"
            >
              <Mail size={16} />
              {EMAIL}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
