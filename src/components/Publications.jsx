import React from "react";
import { BookOpen } from "lucide-react";
import certificateImg from "../assets/kalani.PNG";
import comursImg from "../assets/comurs.PNG";

const publications = [
  {
    type: "Full Paper",
    indexed: true,
    image: certificateImg,
    imageAlt: "IEEE Certificate",
    heading: "Research Publication",
    title: "An Ensemble Model for Predicting Career Paths of Sri Lankan IT Undergraduates",
    authors: "S. L. M. Rukais, S. Adeeba, B. T. G. S. Kumara, G. A. C. A. Herath",
    conference: "8ᵗʰ International Research Conference on Smart Computing and Systems Engineering, University of Kelaniya, Sri Lanka",
    date: "3 April 2025",
    doi: "10.1109/SCSE58633.2025.11031069",
    ieeeUrl: "https://ieeexplore.ieee.org/document/11031069",
    summary:
      "Presented at IRCSCE 2025, this conference brought together innovative research in smart computing and systems engineering, offering a platform to showcase data-driven solutions for real-world challenges in career prediction.",
  },
  {
    type: "Abstract Publication",
    indexed: false,
    image: comursImg,
    imageAlt: "ComURS Symposium",
    heading: "Abstract Publication",
    title: "Computing Undergraduates Research Symposium 2025 (ComURS 2025)",
    authors: "S. L. M. Rukais",
    conference: "Faculty of Computing, Sabaragamuwa University of Sri Lanka",
    date: "February 2025",
    summary:
      "I successfully submitted and published my research abstract at the Computing Undergraduates Research Symposium 2025 (ComURS 2025), organized by the Faculty of Computing, Sabaragamuwa University of Sri Lanka. The abstract is featured on the official symposium platform and will be presented at the upcoming event in February 2025. This achievement highlights my contribution to undergraduate research in the field of computing and demonstrates my dedication to academic exploration and innovation.",
  },
];

const PublicationCard = ({ pub }) => (
  <div
    className="publication-card row align-items-center mx-auto mb-5 flex-lg-row flex-column-reverse"
    style={{ maxWidth: 1100, padding: "0 1.5rem" }} // Nice padding for cards
  >
    {/* Info Section */}
    <div className="col-lg-7 col-12 p-4">
      <h3 className="fw-bold text-primary mb-2" style={{ fontSize: "1.35rem" }}>
        {pub.title}
      </h3>
      <div className="mb-2 text-secondary fw-medium">{pub.authors}</div>
      <div className="mb-2">
        <span className="badge bg-primary bg-gradient me-2">{pub.type}</span>
        {pub.indexed && (
          <span className="badge bg-success bg-gradient">Indexed</span>
        )}
      </div>
      <div className="mb-2 small text-muted">{pub.conference}</div>
      <div className="mb-2 small text-muted">
        <strong>Date:</strong> {pub.date}
      </div>
      {pub.ieeeUrl && (
        <div className="mb-3">
          <a
            href={pub.ieeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gradient shadow-sm fw-semibold"
            style={{ borderRadius: 22, minWidth: 240 }}
          >
            Read the publication on IEEE Xplore
          </a>
        </div>
      )}
      {pub.doi && (
        <div className="mb-1 d-flex flex-wrap gap-3 align-items-center">
          <span className="doi-label small">
            <strong>DOI:</strong>{" "}
            <a
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pub.doi}
            </a>
          </span>
        </div>
      )}
      {pub.summary && <p className="mt-3 text-muted">{pub.summary}</p>}
    </div>
    {/* Image Section */}
    <div className="col-lg-5 col-12 text-center p-4">
      <div className="certificate-img-container d-inline-block">
        <img
          src={pub.image}
          alt={pub.imageAlt}
          className="img-fluid shadow rounded certificate-img"
          style={{
            maxHeight: 300,
            maxWidth: "100%",
            objectFit: "contain",
            background: "#fff",
          }}
        />
      </div>
    </div>
  </div>
);

const Publications = () => (
  <section className="py-5 bg-light" id="publications" style={{padding: "80px 0",scrollMarginTop: '80px'}} >
    <div className="container" style={{padding: "0 1.5rem"}}>
      {/* Heading: matches Projects section style */}
      <div className="mb-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <div
            className="p-2 bg-primary bg-opacity-10 rounded shadow animate-pop"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 48,
            }}
          >
            <BookOpen className="text-primary" size={28} />
          </div>
          <h2
            className="h2 fw-bold text-gradient m-0"
            style={{
              background: "linear-gradient(90deg,#3b82f6 40%,#a21caf 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              letterSpacing: "1px",
            }}
          >
            Publications
          </h2>
        </div>
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "linear-gradient(90deg, #3b82f6 0%, #a21caf 100%)",
            borderRadius: "999px",
            transition: "background 0.4s",
            marginLeft: 0,
          }}
          className="mb-2"
        ></div>
      </div>
      {/* Publication cards */}
      {publications.map((pub, idx) => (
        <PublicationCard pub={pub} key={idx} />
      ))}
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
        .publication-card {
          background: linear-gradient(120deg, #f4f4ff 80%, #f3e8ff 100%);
          border-radius: 26px;
          box-shadow: 0 6px 32px #3b82f622;
          overflow: hidden;
          border: none;
          position: relative;
          width: 100%;
          animation: pubFadeInUp 1s cubic-bezier(.4,-0.3,.5,1.15);
        }
        .publication-card:hover {
          box-shadow: 0 12px 44px #a21caf33;
          transform: translateY(-7px) scale(1.017);
          transition: box-shadow 0.3s, transform 0.3s;
        }
        @keyframes pubFadeInUp {
          0% { opacity: 0; transform: translateY(44px);}
          100% { opacity: 1; transform: none;}
        }
        .btn-gradient {
          background: linear-gradient(90deg, #3b82f6 0%, #a21caf 100%);
          color: #fff !important;
          border: none;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .btn-gradient:hover, .btn-gradient:focus {
          background: linear-gradient(90deg, #a21caf 0%, #3b82f6 100%);
          color: #fff !important;
          box-shadow: 0 2px 16px #3b82f644;
        }
        .certificate-img-container {
          background: linear-gradient(120deg, #e0e7ff 60%, #fff 100%);
          border-radius: 16px;
          box-shadow: 0 2px 16px #3b82f633;
          padding: 10px;
          animation: certPopIn 1.1s cubic-bezier(.4,-0.3,.5,1.5);
        }
        @keyframes certPopIn {
          0% { transform: scale(0.8);}
          60% { transform: scale(1.08);}
          100% { transform: scale(1);}
        }
        .doi-label a {
          color: #3b82f6;
          text-decoration: underline;
          word-break: break-all;
        }
        @media (max-width: 991.98px) {
          .publication-card {
            flex-direction: column !important;
            text-align: center;
            padding: 0;
          }
          .certificate-img {
            max-height: 160px;
          }
        }
      `}</style>
    </div>
  </section>
);

export default Publications;