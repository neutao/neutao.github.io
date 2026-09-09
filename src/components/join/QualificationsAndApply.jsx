import React from "react";
import { Mail, Clock, FileText } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const EMAIL = "tao.liu@ontariotechu.net";
const SUBJECT = "CAB Lab – Graduate Student Application";

export default function QualificationsAndApply() {
  return (
    <section id="apply" className="bg-[#F1F5F9] py-16 lg:py-20 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 lg:p-8">
          <div className="text-center mb-8">
            <SectionLabel label="Application" className="mb-3 block" />
            <h2 className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl tracking-tight" style={{ letterSpacing: "-0.02em" }}>
              How to Apply
            </h2>
            <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
              To apply or inquire about a position, please email Dr. Tao Liu directly. Include a brief introduction and your research interests, and attach the materials relevant to the opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-7">
            <div className="rounded-xl border border-slate-200 p-5 bg-[#F8FAFC]">
              <div className="flex items-start gap-3">
                <FileText size={20} className="text-[#0EA5E9] mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-heading font-medium text-[#0F172A] mb-2">Suggested Materials</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Please include your CV and a brief description of your background and research interests. For graduate applications, you may also attach your academic transcript and other relevant supporting materials.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 p-5 bg-[#F8FAFC]">
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-[#0D9488] mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-heading font-medium text-[#0F172A] mb-2">Application Review</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Applications are reviewed on a rolling basis until positions are filled. Only shortlisted applicants will be contacted.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0EA5E9] text-white font-medium rounded-md hover:bg-[#0284C7] transition-colors min-h-[44px] text-sm"
            >
              <Mail size={17} />
              Apply by Email
            </a>
            <p className="text-slate-500 text-sm mt-4">
              <a href={`mailto:${EMAIL}`} className="text-[#0EA5E9] font-medium hover:text-[#0284C7]">{EMAIL}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
