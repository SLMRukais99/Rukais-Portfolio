import React from "react";
import { GraduationCap, Calendar } from "lucide-react";
import portfolioData from "../data/portfolioData";

const gradientLine = {
  width: "70px",
  height: "5px",
  background: "linear-gradient(90deg, #3b82f6 0%, #a21caf 100%)",
  borderRadius: "1rem",
  marginBottom: "2rem",
};

const cardShadow = {
  boxShadow: "0 6px 32px #a21caf22",
  transition: "box-shadow 0.3s, transform 0.3s",
  border: "none",
  background: "linear-gradient(135deg, #fff 85%, #f3e8ff 100%)",
};

const Education = () => (
  <section className="container py-5  position-relative" id="education"   style={{ scrollMarginTop: '80px' }}>
    <div className="mb-4">
      <div className="d-flex align-items-center gap-3 mb-2">
        <div
          className="p-2 rounded"
          style={{
            background:
              "linear-gradient(135deg, #a21caf33 60%, #3b82f633 100%)",
          }}
        >
          <GraduationCap className="text-primary" size={28} />
        </div>
        <h2
          className="h2 fw-bold m-0"
          style={{
            background: "linear-gradient(90deg,#3b82f6 40%,#a21caf 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Education
        </h2>
      </div>
      <div style={gradientLine}></div>
    </div>
    <div className="row g-4">
      {portfolioData.education.map((edu, idx) => (
        <div
          key={idx}
          className="col-12 col-md-6 col-lg-4 d-flex"
          style={{ animation: "fadeInUp 0.7s", animationDelay: `${idx * 0.15 + 0.1}s`, animationFillMode: "backwards" }}
        >
          <div
            className="card flex-fill position-relative"
            style={cardShadow}
            tabIndex={0}
            onMouseOver={e => {
              e.currentTarget.style.boxShadow = "0 12px 48px #a21caf44";
              e.currentTarget.style.transform = "translateY(-5px) scale(1.025)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.boxShadow = cardShadow.boxShadow;
              e.currentTarget.style.transform = "";
            }}
          >
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <span
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    display: "inline-block",
                    background:
                      "radial-gradient(circle at 35% 35%, #a21caf 65%, #fff0 100%)",
                    marginRight: 10,
                  }}
                ></span>
                <h3 className="h5 fw-bold text-primary mb-0">
                  {edu.institution}
                </h3>
              </div>
              <p className="mb-2 text-secondary fw-semibold">
                {edu.degree}
              </p>
              <div className="d-flex align-items-center gap-2 mb-3 text-secondary">
                <Calendar size={16} />
                <span className="fw-medium">{edu.period}</span>
              </div>
              <p className="text-muted mb-0">{edu.description}</p>
            </div>
            {/* Decorative bubble */}
            <span
              className="position-absolute"
              style={{
                right: -22,
                top: 14,
                width: 38,
                height: 38,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at 35% 35%, #3b82f6aa 65%, #fff0 100%)",
                filter: "blur(1px)",
                opacity: 0.26,
                zIndex: 1,
                pointerEvents: "none",
                animation: "floatBubble 3s infinite alternate",
              }}
            />
          </div>
        </div>
      ))}
    </div>
    <style>{`
      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(30px);}
        100% { opacity: 1; transform: none;}
      }
      @keyframes floatBubble {
        0% { transform: translateY(0);}
        100% { transform: translateY(14px) scale(1.08);}
      }
    `}</style>
  </section>
);

export default Education;