import React, { useState } from "react";
import { ExternalLink, Search } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

const TOPICS = ["All", "Footwear", "Computational", "Machine Learning", "Implant"];

const PUBLICATIONS = [
  {
    title: "Load-sharing in the lumbosacral spine in neutral standing & flexed postures–A combined finite element and inverse static study",
    authors: "Liu T, Khalaf K, Naserkhaki S, El-Rich M",
    journal: "Journal of Biomechanics 70, 43-50",
    year: "2018",
    topic: "Computational",
  },
  {
    title: "Numerical investigation of intra-abdominal pressure effects on spinal loads and load-sharing in forward flexion",
    authors: "Liu T, Khalaf K, Adeeb S, El-Rich M",
    journal: "Frontiers in Bioengineering and Biotechnology 7, 428",
    year: "2019",
    topic: "Computational",
  },
  {
    title: "Effects of lumbo-pelvic rhythm on trunk muscle forces and disc loads during forward flexion: A combined musculoskeletal and finite element simulation study",
    authors: "Liu T, Khalaf K, Adeeb S, El-Rich M",
    journal: "Journal of Biomechanics 82, 116-123",
    year: "2019",
    topic: "Computational",
  },
  {
    title: "Investigation of the average shape and principal variations of the human talus bone using statistic shape model",
    authors: "Liu T, Jomha NM, Adeeb S, El-Rich M, Westover L",
    journal: "Frontiers in Bioengineering and Biotechnology 8, 656",
    year: "2020",
    topic: "Implant",
  },
  {
    title: "The evaluation of artificial talus implant on ankle joint contact characteristics: a finite element study based on four subjects",
    authors: "Liu T, Jomha N, Adeeb S, El-Rich M, Westover L",
    journal: "Medical & Biological Engineering & Computing 60 (4), 1139-1158",
    year: "2022",
    topic: "Implant",
  },
  {
    title: "Polycarbonate-urethane coating can significantly improve talus implant contact characteristics",
    authors: "Liu T, Ead M, Cruz SDV, Jomha N, Adeeb S, El-Rich M, Duke K, et al.",
    journal: "Journal of the Mechanical Behavior of Biomedical Materials 125, 104936",
    year: "2022",
    topic: "Implant",
  },
  {
    title: "Effects of nucleus pulposus location on spinal loads and joint centers of rotation and reaction during forward flexion: A combined finite element and Musculoskeletal study",
    authors: "Liu T, El-Rich M",
    journal: "Journal of Biomechanics 104, 109740",
    year: "2020",
    topic: "Computational",
  },
  {
    title: "Development and validation of a novel ankle joint musculoskeletal model",
    authors: "Liu T, Dimitrov A, Jomha N, Adeeb S, El-Rich M, Westover L",
    journal: "Medical & Biological Engineering & Computing 62 (5), 1395-1407",
    year: "2024",
    topic: "Computational",
  },
  {
    title: "Prediction of human male trunk mass distribution using anthropometric measurements: A feasibility study",
    authors: "Liu T, Khalaf K, Hebela N, Westover L, Galbusera F, El-Rich M",
    journal: "Journal of Biomechanics 122, 110437",
    year: "2021",
    topic: "Computational",
  },
  {
    title: "Sensitivity of subject-specific upper body musculoskeletal model predictions to mass scaling methods",
    authors: "Liu T, Hulleck AA, El-Rich M",
    journal: "Computers in Biology and Medicine 165, 107376",
    year: "2023",
    topic: "Computational",
  },
  {
    title: "Design of a Lightweight Universal Talus Implant Using Topology Optimization",
    authors: "Hafez A, El-Rich M, Liu T, Jomha N, Schiffer A",
    journal: "Frontiers in Bioengineering and Biotechnology 11, 1228809",
    year: "2023",
    topic: "Implant",
  },
  {
    title: "Musculoskeletal model predictions sensitivity to upper body mass scaling during gait",
    authors: "Hulleck AAV, Abdullah M, Alkhalaileh AST, Liu T, Mohan DM, Katmah R, et al.",
    journal: "Computers in Biology and Medicine 186, 109739",
    year: "2025",
    topic: "Computational",
  },
  {
    title: "Role of midsole hollow structure in energy storage and return in running shoes",
    authors: "Liu T, Matijevich ES, Chu Z, Yang F, Nigg B",
    journal: "Journal of Biomechanics 171, 112197",
    year: "2024",
    topic: "Footwear",
  },
  {
    title: "Subject-specific trunk segmental masses prediction for musculoskeletal models using artificial neural networks",
    authors: "Liu T, El-Rich M",
    journal: "Medical & Biological Engineering & Computing 62 (9), 2757-2768",
    year: "2024",
    topic: "Machine Learning",
  },
  {
    title: "Curved non-motorized treadmills do not biomechanically replicate overground running better than motorized treadmills",
    authors: "Catalá-Vilaplana I, Liu T, Vienneau J, Nigg SR, Pérez-Soriano P, et al.",
    journal: "Journal of Sports Sciences 41 (21), 1927-1933",
    year: "2023",
    topic: "Footwear",
  },
  {
    title: "Impact of Upper Body Mass Scaling on Musculoskeletal Model Predictions during Gait",
    authors: "Hulleck AA, Abdullah M, Alkhalaileh A, Liu T, Mohan D, Katmah R, et al.",
    journal: "Proceedings of the 2024 14th International Conference on Biomedical Engineering",
    year: "2024",
    topic: "Computational",
  },
];

export default function Publications() {
  const [activeTopic, setActiveTopic] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = PUBLICATIONS.filter((pub) => {
    const matchesTopic = activeTopic === "All" || pub.topic === activeTopic;
    const matchesSearch =
      search === "" ||
      pub.title.toLowerCase().includes(search.toLowerCase()) ||
      pub.journal.toLowerCase().includes(search.toLowerCase());
    return matchesTopic && matchesSearch;
  }).sort((a, b) => parseInt(b.year) - parseInt(a.year));

  return (
    <div>
      {/* Header */}
      <section className="bg-[#F1F5F9] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="Publications" className="mb-4 block" />
          <h1 className="font-heading font-medium text-[#0F172A] text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6" style={{ letterSpacing: "-0.03em" }}>
            Selected Publications
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            Peer-reviewed research in computational biomechanics, footwear biomechanics, wearable sensors, 
            machine learning, sport biomechanics, and clinical rehabilitation.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-slate-100 sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {TOPICS.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setActiveTopic(topic)}
                  className={`px-4 py-2 text-xs font-medium rounded-md transition-colors min-h-[36px] ${
                    activeTopic === topic
                      ? "bg-[#0EA5E9] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search publications..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30 focus:border-[#0EA5E9]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Publication List */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-center text-slate-400 py-12">No publications found matching your criteria.</p>
          ) : (
            <div className="space-y-4">
              {filtered.map((pub, i) => (
                <div
                  key={i}
                  className="group p-6 rounded-lg border border-slate-100 hover:border-[#0EA5E9]/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-heading font-medium text-[#0F172A] text-base mb-2 group-hover:text-[#0EA5E9] transition-colors">
                        {pub.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
                        <span>{pub.authors}</span>
                        <span className="text-slate-300">·</span>
                        <span className="italic">{pub.journal}</span>
                        <span className="text-slate-300">·</span>
                        <span>{pub.year}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#0D9488] bg-teal-50 px-3 py-1 rounded shrink-0">
                      {pub.topic}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
          <p className="text-center text-slate-400 text-sm mt-12">
            For a complete list of publications, please visit Dr. Liu's{" "}
            <a
              href="https://scholar.google.com/citations?user=GMketEYAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0EA5E9] hover:underline inline-flex items-center gap-1"
            >
              Google Scholar profile
              <ExternalLink size={12} />
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}