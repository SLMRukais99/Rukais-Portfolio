import React from "react";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import portfolioData from "../data/portfolioData";

const Contact = () => {
  const [ref] = useScrollAnimation();
  const { personal } = portfolioData;

  return (
    <footer
      id="contact"
      ref={ref}
      className="footer-contact-section py-5 position-relative"
      style={{
        background: "linear-gradient(90deg, #1e40af 0%, #7c3aed 100%)"
      }}
    >
      <div className="container">
        <div className="text-center mb-4">
          <h2
            style={{
              fontWeight: 700,
              fontSize: "2rem",
              letterSpacing: "1px",
              background: "linear-gradient(90deg,#93c5fd 40%,#c4b5fd 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent"
            }}
          >
            Get In Touch
          </h2>
          <div
            style={{
              width: 65,
              height: 4,
              background: "linear-gradient(90deg, #93c5fd 0%, #c4b5fd 100%)",
              borderRadius: 7,
              margin: "0 auto",
              marginTop: 8,
              marginBottom: 18,
              opacity: 0.7,
            }}
          ></div>
        </div>
        <div className="row justify-content-center align-items-center g-3">
          <ContactItem
            icon={<Mail size={22} className="contact-footer-icon white" />}
            text={
              <a href={`mailto:${personal.email}`} className="footer-link" style={{color:"#fff",textDecoration:"underline"}}>
                {personal.email}
              </a>
            }
          />
          <ContactItem
            icon={<Phone size={22} className="contact-footer-icon green" />}
            text={personal.phone}
          />
          <ContactItem
            icon={<Linkedin size={22} className="contact-footer-icon linkedin" />}
            text={
              <a href={personal.linkedin} className="footer-link" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            }
          />
          <ContactItem
            icon={<Github size={22} className="contact-footer-icon github" />}
            text={
              <a href={personal.github} className="footer-link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            }
          />
          <ContactItem
            icon={<MapPin size={22} className="contact-footer-icon red" />}
            text={personal.location}
          />
        </div>

       
      </div>
      {/* Animated blobs for soft footer effect */}
      <span className="footer-blob footer-blob1"></span>
      <span className="footer-blob footer-blob2"></span>
      <style>{`
        .footer-link {
          color: #a5b4fc;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: #fbbf24;
          text-decoration: underline;
        }
        .footer-contact-section {
          position: relative;
          overflow: hidden;
          color: #fff;
        }
        .contact-footer-icon {
          vertical-align: -4px;
          margin-right: 0.7rem;
        }
        .contact-footer-icon.blue { color: #93c5fd; }
        .contact-footer-icon.green { color: #6ee7b7; }
        .contact-footer-icon.red { color: #fca5a5; }
        .contact-footer-icon.linkedin { color: #60a5fa; }
        .contact-footer-icon.github { color: #f1f5f9; }
        .footer-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(32px);
          z-index: 0;
          pointer-events: none;
        }
        .footer-blob1 {
          width: 110px; height: 110px;
          background: radial-gradient(circle at 35% 35%, #60a5fa99 60%, #fff0 100%);
          bottom: 0; left: -35px;
          opacity: 0.13;
          animation: footerBlob1 8s infinite alternate;
        }
        .footer-blob2 {
          width: 80px; height: 80px;
          background: radial-gradient(circle at 70% 60%, #a78bfa99 65%, #fff0 100%);
          top: 0; right: -30px;
          opacity: 0.12;
          animation: footerBlob2 11s infinite alternate;
        }
        @keyframes footerBlob1 {
          0% { transform: scale(1);}
          100% { transform: scale(1.1) translateY(-18px);}
        }
        @keyframes footerBlob2 {
          0% { transform: scale(1);}
          100% { transform: scale(1.13) translateY(12px);}
        }
        .footer-contact-section .row {
          --bs-gutter-x: 0;
        }
        .footer-contact-section .row > * {
          flex: 1 1 auto;
          min-width: 170px;
          max-width: 225px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer-copyright {
          color: #e0e7ef;
          letter-spacing: 0.2px;
        }
        @media (max-width: 600px) {
          .footer-contact-section .row > * {
            min-width: 100px;
            max-width: 100%;
            font-size: 0.98rem;
            padding: 0!important;
          }
        }
      `}</style>
    </footer>
  );
};

function ContactItem({ icon, text }) {
  return (
    <div className="d-flex align-items-center justify-content-center py-2 px-2" style={{fontSize:"1.08rem"}}>
      {icon}
      <span>{text}</span>
    </div>
  );
}

export default Contact;