import React from "react";
import { BookOpen, Clock3, FileText, GraduationCap, Info, Mail, PenLine } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const EMAIL = "tao.liu@ontariotechu.net";
const SUBJECT = "Application – CAB Lab – MSc/PhD – Your Name";

const REQUIREMENTS = [
  {
    title: "Curriculum Vitae (CV)",
    description: "Include education, research experience, technical skills, publications, and academic achievements.",
    icon: FileText,
  },
  {
    title: "Cover Letter",
    description: "Describe your motivation for applying, relevant experience, and why you are interested in joining the CAB Lab.",
    icon: PenLine,
  },
  {
    title: "Academic Transcript",
    description: "Unofficial transcripts are acceptable for the initial application.",
    icon: GraduationCap,
  },
  {
    title: "Research Statement (1–2 pages)",
    description: "Describe your research interests, relevant experience, why you want to join the CAB Lab, and a potential research question or project you would like to explore.",
    icon: BookOpen,
  },
];

export default function QualificationsAndApply() {
  return (
    <section id="apply" className="bg-white py-16 lg:py-20 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-9">
          <SectionLabel label="Application" className="mb-3 block" />
          <h2
            className="font-heading font-medium text-[#0F172A] text-3xl sm:text-4xl tracking-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            How to Apply
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Interested applicants should prepare the following documents and submit their
            application directly to Dr. Tao Liu by email.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50">
              <FileText size={21} className="text-[#0EA5E9]" aria-hidden="true" />
            </span>
            <h3 className="font-heading font-medium text-[#0F172A] text-lg sm:text-xl">
              Application Requirements
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REQUIREMENTS.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-xl border border-slate-200 p-5 min-h-[142px]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50">
                    <Icon size={19} className="text-[#0EA5E9]" aria-hidden="true" />
                  </span>
                  <h4 className="font-medium text-[#0F172A] text-sm sm:text-base leading-snug">
                    {title} <span className="text-red-500" aria-label="required">*</span>
                  </h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-2 mt-6 text-sm text-slate-600 leading-relaxed">
            <Info size={17} className="text-[#0EA5E9] mt-0.5 shrink-0" aria-hidden="true" />
            <p>Please prepare all four required documents in PDF format before submitting your application.</p>
          </div>
        </div>

        <div className="text-center">
          <div className="mb-5 rounded-lg border border-sky-100 bg-sky-50 px-4 py-4 text-left">
            <p className="text-sm font-medium text-[#0F172A] mb-2">Required email subject format</p>
            <p className="text-sm text-[#0369A1] font-medium break-words">{SUBJECT}</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Replace MSc/PhD with the program you are applying for (MSc or PhD), and replace
              Your Name with your full name. The Apply by Email button opens a draft with
              this subject template; please edit it before sending.
            </p>
          </div>
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0EA5E9] text-white font-medium rounded-md hover:bg-[#0284C7] transition-colors min-h-[44px] text-sm"
          >
            Apply by Email <Mail size={16} aria-hidden="true" />
          </a>
          <p className="text-slate-400 text-xs sm:text-sm mt-4">
            Please attach all four required documents before sending your email.
          </p>
          <p className="text-slate-400 text-xs tracking-[0.15em] uppercase mt-6 mb-2">
            Or email directly
          </p>
          <a href={`mailto:${EMAIL}`} className="text-[#0EA5E9] font-medium hover:text-[#0284C7] text-sm sm:text-base">
            {EMAIL}
          </a>
        </div>

        <div className="mt-9 rounded-lg bg-sky-50/70 p-4 flex items-start gap-3">
          <Clock3 size={18} className="text-[#0EA5E9] shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-slate-700 text-sm leading-relaxed">
            <strong className="font-medium text-[#0F172A]">Application Review:</strong>{" "}
            Applications will be reviewed on a rolling basis until the positions are filled.
            Only shortlisted applicants will be contacted.
          </p>
        </div>
      </div>
    </section>
  );
}
