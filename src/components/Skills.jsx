import React from "react";
import {
  Code,
  Globe,
  Database,
  Wrench,
  CheckCircle,
} from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import portfolioData from "../data/portfolioData";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: portfolioData.skills.languages,
    icon: Code,
    color: "blue-gradient",
  },
  {
    title: "Frameworks & Libraries",
    skills: portfolioData.skills.frameworks,
    icon: Globe,
    color: "purple-gradient",
  },
  {
    title: "Databases",
    skills: portfolioData.skills.databases,
    icon: Database,
    color: "green-gradient",
  },
  {
    title: "Other Tools",
    skills: portfolioData.skills.tools,
    icon: Wrench,
    color: "pink-gradient",
  },
];

const Skills = () => {
  const [ref] = useScrollAnimation();

  return (
    <section
      id="skills"
      ref={ref}
      className="skills-section animate-fadeIn" style={{ scrollMarginTop: '80px' }}
    >
      <div className="skills-container">
        {/* Section heading */}
        <div className="mb-4">
          <div className="d-flex align-items-center gap-3 mb-3">
            <div className="skills-icon-bg animate-pop">
              <Code className="text-primary" size={28} />
            </div>
            <h2
              className="skills-title text-gradient m-0 animate-pop"
              style={{
                background: 'linear-gradient(90deg,#3b82f6 40%,#a21caf 100%)',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Skills
            </h2>
          </div>
          <div className="skills-gradient-line mb-2"></div>
        </div>
        {/* Skills cards grid */}
        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="skill-card"
              tabIndex={0}
            >
              <div
                className="rounded-circle d-flex align-items-center justify-content-center mb-3 skill-card-icon"
                style={{
                  background: cat.color === "blue-gradient"
                    ? "linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)"
                    : cat.color === "purple-gradient"
                      ? "linear-gradient(90deg, #a21caf 0%, #c4b5fd 100%)"
                      : cat.color === "green-gradient"
                        ? "linear-gradient(90deg, #16a34a 0%, #6ee7b7 100%)"
                        : "linear-gradient(90deg, #ec4899 0%, #f9a8d4 100%)",
                }}
              >
                <cat.icon size={22} style={{ color: "#fff" }} />
              </div>
              <h3 className="fw-semibold mb-3" style={{ fontSize: "1.07rem", color: "#3b82f6" }}>{cat.title}</h3>
              <ul className="list-unstyled m-0">
                {cat.skills.map((skill, i) => (
                  <li key={i} className="d-flex align-items-center mb-2 text-secondary">
                    <CheckCircle size={16} className="me-2" style={{ color: "#3b82f6" }} />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Animations and styles */}
      <style>{`
        .skills-section {
          padding: 64px 0 64px 0;
          background: #f1f5f9;
          min-height: 80vh;
        }
        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .skills-icon-bg {
          background: #3b82f611;
          border-radius: 16px;
          padding: 10px 13px;
          box-shadow: 0 2px 10px #a21caf22;
        }
        .skills-gradient-line {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6 0%, #a21caf 100%);
          border-radius: 999px;
          margin-left: 0;
          transition: background 0.4s;
        }
        .skills-grid {
          display: flex;
          justify-content: flex-start;
          align-items: stretch;
          gap: 32px;
          flex-wrap: wrap;
          margin-top: 12px;
        }
        .skill-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 4px 18px #6366f11a;
          padding: 32px 24px 28px 24px;
          min-width: 240px;
          max-width: 270px;
          width: 100%;
          flex: 1 1 240px;
          transition: transform 0.18s, box-shadow 0.18s;
          border-left: 5px solid #a21caf;
          margin-bottom: 0;
          margin-right: 0;
          margin-left: 0;
        }
        .skill-card:focus,
        .skill-card:hover {
          outline: none;
          transform: translateY(-4px) scale(1.025);
          box-shadow: 0 12px 48px #a21caf33, 0 4px 18px #6366f11a;
        }
        .skill-card-icon {
          width: 42px;
          height: 42px;
        }
        .text-gradient {
          background: linear-gradient(90deg,#3b82f6 40%,#a21caf 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        /* Animations */
        .animate-fadeIn { animation: fadeIn 1s; }
        .animate-pop { animation: popIn 0.8s cubic-bezier(.5,-0.3,.5,1.5); }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(16px);}
          100% { opacity: 1; transform: none;}
        }
        @keyframes popIn {
          0% { transform: scale(0.85);}
          60% { transform: scale(1.08);}
          100% { transform: scale(1);}
        }
        @media (max-width: 991.98px) {
          .skills-container {
            padding: 0 10px;
          }
          .skills-grid {
            flex-direction: column;
            gap: 22px;
          }
          .skill-card {
            max-width: 100%;
            padding: 26px 14px 20px 14px;
          }
        }
        @media (max-width: 600px) {
          .skills-section { padding: 38px 0 38px 0;}
          .skills-title { font-size: 1.3rem;}
        }
      `}</style>
    </section>
  );
};

export default Skills;