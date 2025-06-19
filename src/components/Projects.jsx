import React from "react";
import { FolderOpen } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import portfolioData from "../data/portfolioData";
import "./Projects.css";

const Projects = () => {
  const [ref] = useScrollAnimation();
  return (
    <section id="projects" ref={ref} className="projects-section" style={{ scrollMarginTop: '80px' }}>
      <div className="projects-container">
        {/* Updated header: left-aligned, with a FolderOpen icon and gradient text */}
        <div className="mb-4">
          <div className="d-flex align-items-center gap-3 mb-3">
            <div
              className="p-2 bg-primary bg-opacity-10 rounded shadow animate-pop"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FolderOpen className="text-primary" size={28} />
            </div>
            <h2
              className="h2 fw-bold text-gradient m-0"
              style={{
                background: 'linear-gradient(90deg,#3b82f6 40%,#a21caf 100%)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                letterSpacing: "1px",
              }}
            >
              Projects
            </h2>
          </div>
          <div
            style={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #3b82f6 0%, #a21caf 100%)',
              borderRadius: '999px',
              transition: 'background 0.4s'
            }}
            className="mb-2"
          ></div>
        </div>
        {/* Projects grid */}
        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <div
              key={project.title}
              className="project-card"
            >
              <div className="project-title-row">
                {/* You can keep Globe icon here if you want, or remove it for a cleaner look */}
                {/* <Globe className="project-icon" size={24} /> */}
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech-list">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="project-tech">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    stroke="#1e293b"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginRight: 4 }}
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 21.13V24"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Heading & animation styles */}
        <style>{`
          .text-gradient {
            background: linear-gradient(90deg,#3b82f6 40%,#a21caf 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .animate-pop { animation: popIn 0.8s cubic-bezier(.5,-0.3,.5,1.5); }
          @keyframes popIn {
            0% { transform: scale(0.85);}
            60% { transform: scale(1.08);}
            100% { transform: scale(1);}
          }
        `}</style>
      </div>
    </section>
  );
};

export default Projects;