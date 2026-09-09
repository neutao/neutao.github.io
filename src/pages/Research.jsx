import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import RotatingImage from "@/components/RotatingImage";

const RESEARCH_AREAS = [
  {
    id: "computational",
    number: "01",
    title: "Computational Biomechanics and Finite Element Modelling",
    description: "We use finite element analysis (FEA) and musculoskeletal modelling to simulate human body mechanics, predict tissue stress and strain, evaluate implant performance, and optimize product designs. Our computational work complements experimental biomechanics to support evidence-based design.",
    details: [
      "Finite element analysis of bones, joints, and implants",
      "Musculoskeletal modelling and simulation",
      "Patient-specific computational models",
      "Foot and ankle biomechanical modelling",
      "Spinal biomechanics and disc loading simulation",
    ],
    images: [
      {
        src: "/images/research-spinal.jpg",
        alt: "Process flow transitioning from musculoskeletal model to finite element model of the lumbosacral spine with applied load vectors",
      },
      {
        src: "/images/research-implant-design.jpg",
        alt: "Design workflow for universal talus implants for total talus replacement, comparing CT scans, biological FE model, and PCU-coated versus non-coated implant evaluation",
      },
    ],
  },
  {
    id: "footwear",
    number: "02",
    title: "Footwear and Sport Biomechanics",
    description: "We investigate how footwear design influences human movement, joint loading, injury risk, and performance. Our research covers running shoes, athletic footwear, winter boots, safety footwear, and insoles using motion capture, force measurement, wearable sensors, and computational biomechanics.",
    details: [
      "Running shoe cushioning and stability evaluation",
      "Insole design and orthotic performance",
      "Sport-specific footwear analysis",
      "Winter and safety footwear testing",
      "Ground reaction forces and joint loading during locomotion",
    ],
    image: "/images/research-footwear.jpg",
    imageAlt: "Midfoot and forefoot hollow shoe designs with running power and ankle work analysis graphs during the gait cycle",
  },
  {
    id: "wearables",
    number: "03",
    title: "Wearable Sensors and Smart Insoles",
    description: "We develop and validate wearable sensor systems, including smart insoles, inertial measurement units (IMUs), and pressure sensing arrays for measuring human movement outside the laboratory. Our work supports applications in clinical gait analysis, sport performance monitoring, fall risk assessment, and product testing.",
    details: [
      "Smart insole development and validation",
      "IMU-based gait and movement analysis",
      "Wearable sensor signal processing algorithms",
      "Real-world movement monitoring",
      "Sensor reliability and accuracy assessment",
    ],
    image: "/images/research-smart-insole.png",
    imageAlt: "Exploded view, internal view, and key electronic components of a sensor-equipped smart insole with FSR, IMU, temperature sensors, and ESP32 microcontroller, plus real-world application in an athletic shoe",
  },
  {
    id: "ml",
    number: "04",
    title: "Machine Learning for Biomechanics",
    description: "We apply machine learning and artificial intelligence to biomechanical data to develop predictive models, automate movement classification, and extract clinically relevant features from complex datasets. Our work enables smarter analysis of gait, sport performance, and wearable sensor data.",
    details: [
      "Deep learning for gait event detection",
      "Classification of movement patterns and pathologies",
      "Predictive modelling of injury risk",
      "Feature extraction from wearable sensor data",
      "AI-driven biomechanical data analysis pipelines",
    ],
    image: "/images/research-cfd.png",
    imageAlt: "Neon wireframe runner with connected data networks showing biomechanics machine learning analysis of gait, sensors, and movement classification",
  },
  {
    id: "implant",
    number: "05",
    title: "Implant and Musculoskeletal Design",
    description: "We use computational and experimental approaches to evaluate and optimize orthopaedic implants, spinal devices, and musculoskeletal products. Our research focuses on how implant design influences mechanical performance, tissue response, and long-term clinical outcomes.",
    details: [
      "Orthopaedic implant design and evaluation",
      "Spinal implant and fusion device analysis",
      "Bone-implant interface mechanics",
      "Wear and fatigue simulation",
      "Design optimization through computational modelling",
    ],
    image: "/images/research-implant-design.jpg",
    imageAlt: "Design workflow for universal talus implants for total talus replacement, comparing CT scans, biological FE model, and PCU-coated versus non-coated implant evaluation",
  },
  {
    id: "rehab",
    number: "06",
    title: "Rehabilitation Biomechanics",
    description: "We study movement impairments, balance, gait disorders, and rehabilitation outcomes using quantitative biomechanical methods. Our research supports clinical decision-making for conditions including osteoarthritis, stroke recovery, fall prevention, and post-surgical rehabilitation.",
    details: [
      "Clinical gait analysis and outcome measurement",
      "Balance and postural stability assessment",
      "Osteoarthritis and joint replacement biomechanics",
      "Fall risk identification and prevention",
      "Rehabilitation technology evaluation",
    ],
    image: "/images/research-teaching-lab.jpg",
    imageAlt: "Biomechanics research laboratory with overhead motion capture cameras, force plates, and monitoring workstations for clinical gait analysis and rehabilitation testing",
  },
];

export default function Research() {
  return (
    <div>
      {/* Header */}
      <section className="bg-[#F1F5F9] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="Research" className="mb-4 block" />
          <h1 className="font-heading font-medium text-[#0F172A] text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
            Research Areas
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            Our research spans computational biomechanics, footwear biomechanics, wearable sensors, machine learning, 
            rehabilitation biomechanics, and implant design. We combine experimental and computational approaches 
            to advance understanding of human movement and translate findings into practical applications.
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-32">
          {RESEARCH_AREAS.map((area, i) => (
            <div
              key={area.id}
              id={area.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <span className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-3 block">
                  Research No. {area.number}
                </span>
                <h2 className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl tracking-tight mb-5" style={{ letterSpacing: "-0.02em" }}>
                  {area.title}
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  {area.description}
                </p>
                <ul className="space-y-2">
                  {area.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] mt-1.5 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`lg:col-span-5 h-full flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                {area.images ? (
                  <RotatingImage images={area.images} number={area.number} />
                ) : (
                  <div className={`relative w-full ${area.id === "rehab" ? "max-w-[80%]" : ""}`}>
                    <img
                      src={area.image}
                      alt={area.imageAlt}
                      className="rounded-lg w-full h-full object-contain shadow-md"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded px-3 py-1.5">
                      <span className="font-mono text-xs text-[#0D9488] uppercase tracking-wider font-medium">
                        {area.number}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F1F5F9] py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-medium text-[#0F172A] text-2xl sm:text-3xl tracking-tight mb-4">
            Interested in Collaborating?
          </h2>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            We welcome collaborations with academic, clinical, and industry partners. Explore our industry 
            collaboration opportunities or contact us to discuss your research interests.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/industry"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0EA5E9] text-white font-medium rounded-md hover:bg-[#0284C7] transition-colors min-h-[44px] text-sm"
            >
              Industry Collaboration
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-slate-300 text-[#0F172A] font-medium rounded-md hover:bg-white transition-colors min-h-[44px] text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}