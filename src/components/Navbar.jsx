import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Research", path: "/research" },
  { label: "Industry Collaboration", path: "/industry" },
  { label: "Wind Tunnel Testing", path: "/wind-tunnel" },
  { label: "Publications", path: "/publications" },
  { label: "Team", path: "/team" },
  { label: "Join Us", path: "/join-the-lab" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/cab-lab-logo.png"
              alt="Computational and Applied Biomechanics Lab logo"
              className="h-9 lg:h-11 w-auto"
            />
            <div className="hidden sm:block">
              <span className="font-heading font-semibold text-[#0F172A] text-sm tracking-tight leading-tight block">
                Computational &amp; Applied
              </span>
              <span className="font-heading font-semibold text-[#0F172A] text-sm tracking-tight leading-tight block">
                Biomechanics Lab
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? "text-[#0EA5E9] bg-sky-50"
                    : "text-[#0F172A] hover:text-[#0EA5E9] hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md text-[#0F172A] hover:bg-slate-50 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle navigation"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-md min-h-[44px] flex items-center ${
                  location.pathname === link.path
                    ? "text-[#0EA5E9] bg-sky-50"
                    : "text-[#0F172A] hover:text-[#0EA5E9] hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}