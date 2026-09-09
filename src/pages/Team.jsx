import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import TeamMemberSection from "@/components/TeamMemberSection";

const PI = {
  name: "Dr. Tao Liu",
  role: "Principal Investigator",
  title: "Assistant Professor, Ontario Tech University",
  bio: "Dr. Tao Liu leads the Computational and Applied Biomechanics Lab at Ontario Tech University. His research focuses on computational biomechanics, footwear biomechanics, wearable sensors, machine learning, and industry collaboration for human performance and product innovation. He works with academic, clinical, and industry partners to translate biomechanics research into practical applications.",
  areas: [
    "Computational Biomechanics",
    "Footwear Biomechanics",
    "Wearable Sensors & Smart Insoles",
    "Machine Learning",
  ],
};

const STUDENTS = [
  {
    name: "Madeline Barker",
    degree: "PhD Student",
    note: "Co-supervised with Dr. Lindsey Westover",
    photo: "/images/student-madeline-barker.jpg",
    bio: "Madeline grew up in Edmonton and earned her B.Sc. in Civil Engineering and M.Sc. in Mechanical Engineering from the University of Alberta. Her master's research investigated the mechanobiological effects of simulated microgravity on engineered human cartilage and the role of mechano-hypoxia conditioning. She is now a Ph.D. student co-supervised by Dr. Tao Liu and Dr. Lindsey Westover, where she is developing and evaluating a universal talus bone implant with an artificial cartilage coating using experimental and computational approaches. Outside of research, Madeline enjoys sports and fitness, camping, silversmithing, painting, and playing guitar.",
  },
  {
    name: "Tasnimul Hasan",
    degree: "MSc Student",
    photo: "/images/student-tasnimul-hasan.jpg",
    bio: "Tasnimul earned his B.Sc. in Biomedical Engineering from Khulna University of Engineering & Technology (KUET), Bangladesh. His research lies at the intersection of shape analysis and implant design, leveraging statistical and machine learning methods. His current work focuses on developing statistical shape models to characterize the morphology of the human foot, with the goal of enabling more customized footwear designs and improving prosthetic fit.",
  },
  {
    name: "Khadija Shoaib",
    degree: "Undergraduate Student",
    note: "Mitacs Globalink Research Intern — Visiting Researcher",
    photo: "/images/student-khadija-shoaib.jpg",
    bio: "Khadija completed her Bachelor's degree in Product and Industrial Design at the University of Engineering and Technology (UET), Lahore, Pakistan. Her academic background combines product design, computational design, and user-centered innovation, with research interests in biomechanics, advanced technologies, and additive manufacturing. Her undergraduate thesis focused on auxetic-based sports protective gear, integrating computational modeling with human-centered design to enhance comfort, flexibility, and impact protection. As a Visiting Researcher at Ontario Tech University through the Mitacs Globalink Research Internship, she contributes to research on advanced footwear technologies, with a focus on computational design and performance-driven product development.",
  },
];
const ALUMNI = [];

export default function Team() {
  return (
    <div>
      {/* Header */}
      <section className="bg-[#F1F5F9] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="Team" className="mb-4 block" />
          <h1 className="font-heading font-medium text-[#0F172A] text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
            Our Team
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            The Computational and Applied Biomechanics Lab at Ontario Tech University is led by Dr. Tao Liu 
            and includes graduate students and research collaborators working across biomechanics, 
            wearable sensors, computational modelling, and machine learning.
          </p>
        </div>
      </section>

      {/* Principal Investigator */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4">
            <div className="lg:col-span-1">
              <div className="relative rounded-xl aspect-[3/4] overflow-hidden shadow-md w-full max-w-[260px] mx-auto lg:ml-auto">
                <img
                  src="/images/tao-liu.jpg"
                  alt="Dr. Tao Liu, Principal Investigator of the Computational and Applied Biomechanics Lab"
                  className="w-full h-full object-cover"
                />
                <div className="relative z-10 bg-white/90 backdrop-blur-sm w-full p-4 border-t border-slate-100">
                  <p className="font-mono text-xs text-[#0D9488] uppercase tracking-wider">Principal Investigator</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-center">
              <SectionLabel label="Lab Director" className="mb-2 block" />
              <h2 className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl tracking-tight mb-1.5" style={{ letterSpacing: "-0.02em" }}>
                {PI.name}
              </h2>
              <p className="text-[#0D9488] font-medium text-sm mb-4">{PI.title}</p>
              <p className="text-slate-600 text-base leading-relaxed mb-5 text-justify">
                {PI.bio}
              </p>
              <div>
                <p className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">Research Interests</p>
                <div className="flex flex-wrap gap-2">
                  {PI.areas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1.5 text-xs font-medium rounded-md bg-[#F1F5F9] text-slate-600 border border-slate-100"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-5 text-[#0EA5E9] font-medium text-sm hover:text-[#0284C7] transition-colors"
              >
                <Mail size={16} />
                Contact Dr. Liu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Students */}
      <TeamMemberSection
        label="Students"
        title="Graduate & Undergraduate Students"
        description=""
        members={STUDENTS}
        emptyMessage="We are currently recruiting students. Contact Dr. Liu to discuss opportunities."
        bg="muted"
      />

      {/* Alumni */}
      <TeamMemberSection
        label="Alumni"
        title="Lab Alumni"
        description="Former lab members who have contributed to our research and gone on to pursue careers in academia, industry, and healthcare."
        members={ALUMNI}
        emptyMessage="Alumni updates coming soon."
        bg="white"
      />

      {/* Join the Lab */}
      <section className="bg-[#F1F5F9] py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel label="Opportunities" className="mb-4 block" />
          <h2 className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl tracking-tight mb-4">
            Join the Lab
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            We welcome inquiries from prospective graduate students and postdoctoral researchers interested in 
            computational biomechanics, wearable sensors, machine learning, footwear biomechanics, and related areas. 
            Contact Dr. Liu to discuss current opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0EA5E9] text-white font-medium rounded-md hover:bg-[#0284C7] transition-colors min-h-[44px] text-sm"
          >
            Get In Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}