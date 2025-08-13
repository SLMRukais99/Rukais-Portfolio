
import { Briefcase, Calendar, Award, MapPin, FolderOpen } from "lucide-react";

// Portfolio data (same as yours)
const portfolioData = {
  experience: [
    {
      company: "Intervest Software Technologies (Private) Limited",
      position:"Software Engineer Internship",
      period: "Feb 2024 - Aug 2024",
      location: "Colombo 05, Sri Lanka",
      projects: ["Staysure 1.5", "Avanti Travel Insurance"],
      achievements: [
        "Worked on projects for UK-based companies",
        "Developed RESTful APIs and integrated backend functionality",
        "Gained experience with WordPress and Magnolia CMS",
        "Used Jira for project tracking and Confluence for collaboration",
        "Applied Agile methodologies in development processes",
        "Created responsive user interfaces with React"
      ]
    }
  ]
};

const gradientLine = {
  width: '80px',
  height: '4px',
  background: 'linear-gradient(90deg, #3b82f6 0%, #a21caf 100%)',
  borderRadius: '999px',
  transition: 'background 0.4s'
};

const gradientMiniDot = {
  width: '8px',
  height: '8px',
  background: 'linear-gradient(135deg, #3b82f6, #a21caf)', // slightly angled
  borderRadius: '50%',
  marginTop: '8px',
  flexShrink: 0,
  boxShadow: '0 0 8px #a21caf44'
};

const Experience = () => (
  <div className="min-vh-100 bg-light animate-fadeIn" style={{ animation: 'fadeIn 1s' }}>
    <section className="container p-4 position-relative" id="experience" style={{ scrollMarginTop: '80px' }}>
      {/* Section title */}
      <div className="mb-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <div className="p-2 bg-primary bg-opacity-10 rounded shadow animate-pop">
            <Briefcase className="text-primary" size={28} />
          </div>
          <h2 className="h2 fw-bold text-gradient m-0" style={{ background: 'linear-gradient(90deg,#3b82f6 40%,#a21caf 100%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            Experience
          </h2>
        </div>
        <div style={gradientLine} className="mb-2"></div>
      </div>
      {/* Experience cards */}
      <div className="d-flex flex-column gap-4">
        {portfolioData.experience.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white rounded-4 shadow-lg border border-0 overflow-hidden transition position-relative exp-card"
            style={{
              transition: "box-shadow 0.3s, transform 0.3s",
              boxShadow: "0 6px 32px #3b82f633",
              borderLeft: "6px solid #a21caf"
            }}
            tabIndex={0}
            onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)'; e.currentTarget.style.boxShadow = "0 12px 48px #a21caf33"; }}
            onMouseOut={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = "0 6px 32px #3b82f633"; }}
          >
            <div className="bg-light p-4 border-bottom">
              <div className="d-flex flex-column gap-3">
                <div>
                  <h3 className="h5 fw-bold text-dark mb-2 animate-pop">{exp.company}</h3>
                  <div className="d-flex align-items-center gap-2 text-primary fw-medium mb-2">
                    <Award size={18} className="me-1" />
                    <span>{exp.position}</span>
                  </div>
                </div>
                <div className="d-flex flex-column flex-sm-row gap-2">
                  <div className="d-flex align-items-center gap-2 text-secondary bg-white px-3 py-2 rounded shadow-sm">
                    <Calendar size={16} />
                    <span className="fw-medium">{exp.period}</span>
                  </div>
                  {exp.location && (
                    <div className="d-flex align-items-center gap-2 text-secondary bg-white px-3 py-2 rounded shadow-sm">
                      <MapPin size={16} />
                      <span className="fw-medium">{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Projects and Achievements */}
            <div className="p-4">
              {exp.projects && exp.projects.length > 0 && (
                <div className="mb-4">
                  <h4 className="h6 fw-semibold text-secondary mb-3 d-flex align-items-center gap-2">
                    <FolderOpen size={20} className="text-primary" />
                    Projects
                  </h4>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {exp.projects.map((project, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 bg-primary bg-opacity-10 text-primary rounded-pill text-sm fw-medium border border-primary border-opacity-25"
                        style={{
                          fontSize: '0.95rem',
                          cursor: 'pointer',
                          transition: 'background 0.3s, color 0.3s',
                          boxShadow: '0 1px 6px #3b82f633'
                        }}
                        onMouseOver={e => { e.currentTarget.style.background = '#a21caf22'; e.currentTarget.style.color = '#a21caf'; }}
                        onMouseOut={e => { e.currentTarget.style.background = 'rgba(59,130,246,0.1)'; e.currentTarget.style.color = '#3b82f6'; }}
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <h4 className="h6 fw-semibold text-secondary mb-3 d-flex align-items-center gap-2">
                  <span style={{
                    width: '8px', height: '8px',
                    background: 'linear-gradient(135deg,#3b82f6,#a21caf)',
                    borderRadius: '50%',
                    display: 'inline-block',
                    boxShadow: '0 0 8px #3b82f6aa'
                  }}></span>
                  Key Achievements
                </h4>
                <ul className="list-unstyled m-0">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="d-flex align-items-start gap-3 text-secondary lh-lg"
                      style={{ transition: "color 0.2s" }}
                    >
                      <span style={gradientMiniDot}></span>
                      <span className="animate-fadeIn" style={{ animationDelay: `${i * 0.1 + 0.4}s` }}>
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Floating bubble animation for more "uyirotam" */}
            <span
              className="position-absolute"
              style={{
                right: -30,
                top: 20,
                width: 46,
                height: 46,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 40% 40%, #a21caf99 60%, #fff0 100%)',
                filter: 'blur(2px)',
                opacity: 0.4,
                zIndex: 1,
                pointerEvents: 'none',
                animation: 'floatBubble 3s infinite alternate'
              }}
            />
          </div>
        ))}
      </div>
      {/* CSS Animations */}
      <style>{`
        .animate-fadeIn { animation: fadeIn 1s; }
        .animate-pop { animation: popIn 0.8s cubic-bezier(.5,-0.3,.5,1.5); }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(12px);}
          100% { opacity: 1; transform: none;}
        }
        @keyframes popIn {
          0% { transform: scale(0.85);}
          60% { transform: scale(1.08);}
          100% { transform: scale(1);}
        }
        @keyframes floatBubble {
          0% { transform: translateY(0);}
          100% { transform: translateY(18px) scale(1.1);}
        }
        .exp-card:focus {
          outline: 2px solid #a21caf99;
          outline-offset: 2px;
        }
        .text-gradient {
          background: linear-gradient(90deg,#3b82f6 40%,#a21caf 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  </div>
);

export default Experience;