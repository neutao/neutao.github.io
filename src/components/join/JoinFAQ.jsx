import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import SectionLabel from "@/components/SectionLabel";

const FAQS = [
  {
    q: "Can international students apply?",
    a: "Yes. The CAB Lab welcomes applications from outstanding students worldwide. International applicants must meet Ontario Tech University's admission requirements, including English language proficiency (IELTS 6.5 or equivalent). Dr. Liu can also help identify funding opportunities for international students.",
  },
  {
    q: "Do I need funding before contacting Dr. Liu?",
    a: "No. While external funding strengthens your application, it is not a prerequisite for reaching out. Dr. Liu reviews inquiries from all qualified students, and funded positions may be available through research grants.",
  },
  {
    q: "Can I apply before receiving admission?",
    a: "Yes. You are encouraged to contact Dr. Liu before or during your application to the graduate program. Early contact helps align your research interests and strengthens your graduate application.",
  },
  {
    q: "Do you accept visiting students?",
    a: "Yes. Visiting students and research interns are welcome when their interests align with the lab's research. Please include your research proposal and timeline when reaching out.",
  },
  {
    q: "Do you collaborate with industry?",
    a: "Yes. The lab actively collaborates with healthcare organizations and industry partners in footwear, sport equipment, wearable technology, and rehabilitation. Students may participate in applied, industry-funded projects.",
  },
  {
    q: "Can students apply for NSERC or Mitacs while in the lab?",
    a: "Absolutely. The lab strongly encourages and supports students in applying for external scholarships such as NSERC, OGS, and Mitacs. Dr. Liu provides guidance throughout the application process.",
  },
];

export default function JoinFAQ() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel label="FAQ" className="mb-3 block" />
          <h2
            className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-heading font-medium text-[#0F172A] text-base hover:text-[#0EA5E9] transition-colors">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-slate-500 leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}