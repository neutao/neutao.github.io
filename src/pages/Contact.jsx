import React, { useState } from "react";
import { Mail, Building2, FlaskConical, User, Send } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const EMAIL = "tao.liu@ontariotechu.net";
const ACCESS_KEY = "33f41bab-e87e-4a14-ace0-dd647e66f5aa";

const CONTACT_TYPES = [
  { icon: Building2, label: "Discuss an Industry Project", subject: "CAB Lab - Industry Collaboration Inquiry" },
  { icon: FlaskConical, label: "Collaborate on Research", subject: "CAB Lab - Research Collaboration Inquiry" },
  { icon: User, label: "Contact Dr. Tao Liu", subject: "CAB Lab - General Inquiry" },
];

export default function Contact() {
  const [inquiry, setInquiry] = useState(CONTACT_TYPES[2].label);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const selected = CONTACT_TYPES.find((type) => type.label === inquiry);
    formData.set("access_key", ACCESS_KEY);
    formData.set("subject", selected?.subject || "CAB Lab - Website Inquiry");
    formData.set("from_name", "CAB Lab Website");
    formData.set("Inquiry Type", inquiry);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Your message could not be sent.");
      }
      form.reset();
      setInquiry(CONTACT_TYPES[2].label);
      setStatus("success");
    } catch (error) {
      setErrorMessage(error.message || "Please try again later.");
      setStatus("error");
    }
  }

  return (
    <div>
      <section className="bg-[#F1F5F9] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="Contact" className="mb-4 block" />
          <h1 className="font-heading font-medium text-[#0F172A] text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
            Get In Touch
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            Interested in collaborating on research, testing a product, exploring an industry partnership, or joining the lab? Send us a message using the form below.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {CONTACT_TYPES.map((type) => (
              <button
                key={type.label}
                type="button"
                onClick={() => { setInquiry(type.label); if (status === "success") setStatus("idle"); }}
                aria-pressed={inquiry === type.label}
                className={`p-5 rounded-lg border text-left transition-all min-h-[44px] ${inquiry === type.label ? "border-[#0EA5E9] bg-sky-50" : "border-slate-200 hover:border-[#0EA5E9] hover:bg-sky-50"}`}
              >
                <type.icon size={20} className="text-[#0EA5E9]" />
                <p className="text-sm font-medium mt-3 text-[#0F172A]">{type.label}</p>
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 sm:p-9">
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-full bg-sky-50 flex items-center justify-center mx-auto mb-5">
                <Mail size={25} className="text-[#0EA5E9]" />
              </div>
              <h2 className="font-heading font-medium text-[#0F172A] text-2xl mb-3">Send Us a Message</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Computational and Applied Biomechanics Lab<br />Ontario Tech University · Oshawa, Ontario, Canada
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="block text-sm font-medium text-slate-700">
                  Full Name <span className="text-red-600">*</span>
                  <input required name="name" type="text" autoComplete="name" maxLength={150} placeholder="Your name" className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400" />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Email Address <span className="text-red-600">*</span>
                  <input required name="email" type="email" autoComplete="email" maxLength={254} placeholder="you@example.com" className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400" />
                </label>
              </div>
              <label className="block text-sm font-medium text-slate-700">
                Organization / Institution (optional)
                <input name="organization" type="text" autoComplete="organization" maxLength={200} placeholder="Your organization" className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400" />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Inquiry Type
                <select value={inquiry} onChange={(event) => setInquiry(event.target.value)} className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400">
                  {CONTACT_TYPES.map((type) => <option key={type.label} value={type.label}>{type.label}</option>)}
                </select>
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Message <span className="text-red-600">*</span>
                <textarea required name="message" rows={6} maxLength={10000} placeholder="Tell us about your inquiry..." className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-400 resize-y" />
              </label>
              {status === "success" && <p role="status" className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">Thank you! Your message has been sent successfully.</p>}
              {status === "error" && <p role="alert" className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">Unable to send your message: {errorMessage} You can also email <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>}
              <button type="submit" disabled={status === "sending"} className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 py-3.5 bg-[#0EA5E9] text-white font-medium rounded-md hover:bg-[#0284C7] disabled:opacity-60 disabled:cursor-not-allowed transition-colors min-h-[44px] text-sm">
                <Send size={16} /> {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              <p className="text-xs text-slate-500">Please do not submit confidential or sensitive information through this form. Prefer email? <a className="text-sky-700 underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
