import React, { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  User,
  BookOpen,
  Mail,
  Star,
  FileText,
  Menu,
  X,
  Home,
} from "lucide-react";

// Navigation data for easy maintenance
const navLinks = [
  { label: "Home", icon: <Home size={18} />, href: "#hero" },
  { label: "Education", icon: <GraduationCap size={18} />, href: "#education" },
  { label: "Experience", icon: <Briefcase size={18} />, href: "#experience" },
  { label: "Skills", icon: <Star size={18} />, href: "#skills" },
  { label: "Projects", icon: <BookOpen size={18} />, href: "#projects" },
  { label: "Publications", icon: <FileText size={18} />, href: "#publications" },
  { label: "Contact Me", icon: <Mail size={18} />, href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Use your name from portfolioData or default to RUKAIS
  const brandName = ("RUKAIS");

  return (
    <header className="sticky-top">
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow-sm py-2"
        style={{
          background: "linear-gradient(90deg, #1e40af 0%, #7c3aed 100%)", // Deep blue-purple
          transition: "background 0.5s",
          zIndex: 100,
        }}
      >
        <div className="container">
          <a
            className="navbar-brand fw-bold d-flex align-items-center"
            href="#hero"
            style={{
              letterSpacing: "2px",
              fontSize: "2rem",
              background: "linear-gradient(90deg,#93c5fd 40%,#c4b5fd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              textShadow: "0 2px 8px #a21caf11",
              userSelect: "none",
            }}
          >
            <span
              style={{
                display: "inline-block",
                marginRight: "0.5rem",
                transform: "rotate(-12deg)",
                animation: "spinLogo 2.5s infinite linear",
              }}
            >
              <User size={28} />
            </span>
            {brandName}
          </a>

          {/* Hamburger menu for mobile */}
          <button
            className="navbar-toggler border-0"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
            style={{ outline: "none", boxShadow: "none" }}
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          {/* Desktop & mobile nav */}
          <div
            className={`collapse navbar-collapse justify-content-end ${
              menuOpen ? "show" : ""
            }`}
            id="mainNavbar"
          >
            <ul className="navbar-nav align-items-lg-center ms-auto gap-lg-2">
              {navLinks.map((link, idx) => (
                <li className="nav-item" key={idx}>
                  <a
                    className="nav-link d-flex align-items-center gap-2 px-3 py-2 fw-medium position-relative nav-anim"
                    href={link.href}
                    style={{
                      borderRadius: "2rem",
                      transition:
                        "background 0.25s, color 0.25s, box-shadow 0.25s",
                      color: "#fff"
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span
                      style={{
                        color: "#c4b5fd",
                        display: "inline-flex",
                        alignItems: "center",
                      }}
                    >
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Animation and style */}
      <style>{`
        @keyframes spinLogo {
          0% { transform: rotate(-12deg);}
          100% {transform: rotate(348deg);}
        }
        .nav-anim {
          overflow: hidden;
          position: relative;
          z-index: 1;
        }
        .nav-anim::before {
          content: '';
          position: absolute;
          left: 0; top: 0; width: 100%; height: 100%;
          background: linear-gradient(90deg, #3b82f6 0%, #a21caf 100%);
          opacity: 0;
          z-index: -1;
          transition: opacity 0.3s;
        }
        /* Hover & Focus: Nice gradient background, white text */
        .nav-anim:hover, .nav-anim:focus {
          color: #fff !important;
        }
        .nav-anim:hover::before, .nav-anim:focus::before {
          opacity: 1;
        }
        /* Active link: gradient text */
        .nav-anim.active, .nav-anim[aria-current="page"] {
          background: none;
          background-image: linear-gradient(90deg,#93c5fd 0%,#c4b5fd 100%);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent !important;
          -webkit-text-fill-color: transparent;
          font-weight: bold;
        }
        @media (max-width: 991.98px) {
          .navbar-nav {
            gap: 0.5rem !important;
          }
          .nav-anim {
            margin-bottom: 0.25rem;
            font-size: 1.1rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;