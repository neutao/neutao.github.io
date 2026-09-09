import React from "react";
import { Link } from "react-router-dom";

const FOOTER_LINKS = [
  { label: "Research", path: "/research" },
  { label: "Industry Collaboration", path: "/industry" },
  { label: "Wind Tunnel Testing", path: "/wind-tunnel" },
  { label: "Publications", path: "/publications" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/cab-lab-logo.png"
                alt="Computational and Applied Biomechanics Lab logo"
                className="h-11 w-auto"
              />
              <span className="font-heading font-semibold text-base text-white">
                CAB Lab
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Computational and Applied Biomechanics Lab at Ontario Tech University. 
              Advancing computational biomechanics, footwear biomechanics, wearable sensors, 
              and human performance testing.
            </p>
          </div>

          <div className="text-center">
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-[#0EA5E9] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:text-right md:flex md:flex-col md:items-end">
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-slate-300 text-sm md:w-full md:text-right">
              <p>Dr. Tao Liu</p>
              <a href="mailto:tao.liu@ontariotechu.net" className="text-slate-300 hover:text-[#0EA5E9] transition-colors">
                tao.liu@ontariotechu.net
              </a>
              <p>Ontario Tech University</p>
              <p>Oshawa, Ontario, Canada</p>
              <Link
                to="/contact"
                className="mt-4 px-5 py-2.5 bg-[#0EA5E9] text-white text-sm font-medium rounded-md hover:bg-[#0284C7] transition-colors min-h-[44px] inline-flex items-center justify-center w-fit md:ml-auto"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Computational and Applied Biomechanics Lab. Ontario Tech University.
          </p>
          <p className="text-slate-500 text-xs font-mono">
            Biomechanics · Wearables · Innovation
          </p>
        </div>
      </div>
    </footer>
  );
}