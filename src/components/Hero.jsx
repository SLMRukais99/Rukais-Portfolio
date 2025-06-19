import React, { useEffect, useRef } from "react";
import { Mail, Download } from "lucide-react";
import profileImg from "../assets/Rukais.png";

// --- Animated Cursor Particles Hook ---
function useCursorParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    let particles = [];
    let mouse = { x: width / 2, y: height / 2 };

    function Particle(x, y) {
      this.x = x;
      this.y = y;
      this.radius = 5 + Math.random() * 6;
      this.color = `hsla(${210 + Math.random()*50}, 80%, 70%, 0.65)`;
      this.vx = (Math.random() - 0.5) * 2;
      this.vy = (Math.random() - 0.5) * 2;
      this.life = 34 + Math.random() * 12;
      this.maxLife = this.life;
    }
    Particle.prototype.update = function () {
      this.x += this.vx;
      this.y += this.vy;
      this.life--;
      this.radius *= 0.96;
    };
    Particle.prototype.draw = function (ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 16;
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    let frameId;
    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p, i) => {
        p.update();
        p.draw(ctx);
        if (p.life <= 0 || p.radius < 0.5) {
          particles.splice(i, 1);
        }
      });
      frameId = requestAnimationFrame(animate);
    }

    const spawnParticles = (x, y, count = 2) => {
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(x, y));
      }
    };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      spawnParticles(mouse.x, mouse.y, 2);
    };
    const handleTouchMove = (e) => {
      if (e.touches.length) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        spawnParticles(mouse.x, mouse.y, 2);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        zIndex: 3,
        left: 0,
        top: 0,
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
      }}
      width={window.innerWidth}
      height={window.innerHeight}
      tabIndex={-1}
      aria-hidden="true"
    />
  );
}

// --- Hero Section ---
const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    hero.classList.add("hero-fadein-animate");
    const t = setTimeout(() => {
      hero.classList.remove("hero-fadein-animate");
    }, 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="hero-section d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 53% 18%, #dbeafe 40%, #c7d2fe 70%, #e0e7ff 100%), linear-gradient(120deg, #e0e7ff 0%, #f3e8ff 100%)",
        transition: "background 0.7s",
      }}
    >
      {/* Mouse Particle Animation */}
      {useCursorParticles()}

      {/* Animated Colorful Blobs */}
      <span className="blob blob1"></span>
      <span className="blob blob2"></span>
      <span className="blob blob3"></span>
      <span className="gradient-overlay"></span>

      <div className="container position-relative z-1">
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <div className="profile-img-animate-outer mx-auto">
              <div className="profile-img-glow"></div>
              <img
                src={profileImg}
                alt="Profile"
                className="rounded-circle shadow profile-img-professional"
                style={{
                  width: 185,
                  height: 185,
                  objectFit: "cover",
                  border: "6px solid #fff",
                  zIndex: 2,
                  position: "relative",
                  boxShadow:
                    "0 2px 32px 0 #a21caf44, 0 0px 0px 0 #7c3aed44",
                }}
              />
            </div>
          </div>
          <div className="col-md-8 text-center text-md-start">
            <h1
              className="display-4 fw-bold mb-2 hero-fade-in"
              style={{
                background:
                  "linear-gradient(90deg, #3b82f6 0%, #a21caf 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: 800,
                letterSpacing: "1.2px",
              }}
            >
              Mohamed Rukais
            </h1>
            <h2
              className="h4 fw-semibold mb-3 hero-fade-in"
              style={{
                color: "#3b82f6",
                animationDelay: "0.15s",
              }}
            >
              Software Engineer
            </h2>
            <p
              className="fs-5 mb-4 hero-fade-in"
              style={{ animationDelay: "0.3s", color: "#333" }}
            >
              BSc (Hons) in Computing & Information Systems <br />
              <span
                className="fw-medium"
                style={{
                  color: "#3b82f6",
                }}
              >
                Sabaragamuwa University of Sri Lanka
              </span>
            </p>
            <div
              className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start hero-fade-in"
              style={{ animationDelay: "0.45s" }}
            >
              <a
                href="#contact"
                className="btn contact-gradient-btn d-flex align-items-center gap-2 px-4"
                style={{
                  fontWeight: 600,
                  borderRadius: 30,
                  fontSize: "1.08rem",
                  border: "none",
                  position: "relative",
                  zIndex: 1,
                  overflow: "hidden",
                }}
              >
                <Mail size={20} /> Contact Me
              </a>
              <a
                href="/Rukais_CV.pdf"
                download
                className="btn download-gradient-btn d-flex align-items-center gap-2 px-4"
                style={{
                  fontWeight: 600,
                  borderRadius: 30,
                  fontSize: "1.08rem",
                  background: "#fff",
                  position: "relative",
                  zIndex: 1,
                  border: "2px solid transparent",
                }}
              >
                <Download size={20} /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .hero-fadein-animate {
          animation: heroEntry 1.7s cubic-bezier(.4,-0.2,.5,1.13) both;
        }
        @keyframes heroEntry {
          0% { opacity: 0; transform: translateY(64px) scale(0.96);}
          60% { opacity: 1; transform: translateY(-12px) scale(1.04);}
          100% { opacity: 1; transform: none;}
        }
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(44px);
          opacity: 0.29;
          z-index: 0;
          animation-timing-function: ease-in-out;
          pointer-events: none;
        }
        .blob1 {
          width: 430px; height: 430px;
          top: -140px; left: -130px;
          background: radial-gradient(circle at 40% 40%, #3b82f6cc 65%, #fff0 100%);
          animation: blobFloat1 13s infinite alternate;
        }
        .blob2 {
          width: 310px; height: 310px;
          bottom: -100px; right: -90px;
          background: radial-gradient(circle at 60% 60%, #a21cafcc 70%, #fff0 100%);
          animation: blobFloat2 15s infinite alternate;
        }
        .blob3 {
          width: 120px; height: 120px;
          top: 80px; right: 22%;
          background: radial-gradient(circle at 50% 50%, #16a34aff 80%, #fff0 100%);
          animation: blobFloat3 11s infinite alternate;
          opacity: 0.22;
        }
        .gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, #dbeafe44 0%, #f3e8ff66 100%);
          z-index: 0;
          pointer-events: none;
          opacity: 0.7;
        }
        @keyframes blobFloat1 {
          0% { transform: scale(1) translateY(0);}
          100% { transform: scale(1.08) translateY(54px);}
        }
        @keyframes blobFloat2 {
          0% { transform: scale(1) translateY(0);}
          100% { transform: scale(1.12) translateY(-48px);}
        }
        @keyframes blobFloat3 {
          0% { transform: scale(1) translateY(0);}
          100% { transform: scale(1.23) translateY(32px);}
        }
        .profile-img-animate-outer {
          position: relative; display: inline-block;
        }
        .profile-img-glow {
          position: absolute;
          left: 50%; top: 50%;
          width: 230px; height: 230px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(circle at 47% 47%, #a21caf33 65%, #fff0 100%);
          filter: blur(18px);
          opacity: 0.6;
          z-index: 1;
          pointer-events: none;
          animation: imgGlowPulse 3.4s infinite alternate;
        }
        /* Main Professional Animation */
        .profile-img-professional {
          animation: imgFloat 4s ease-in-out infinite alternate, imgPopIn 1.3s cubic-bezier(.44,-0.2,.5,1.3);
          box-shadow: 0 4px 32px #3b82f655, 0 2px 0px #a21caf11;
          background: #fff;
        }
        /* Y-axis float */
        @keyframes imgFloat {
          0% { transform: translateY(0) scale(1) rotate(-2deg);}
          50% { transform: translateY(-18px) scale(1.03) rotate(2deg);}
          100% { transform: translateY(0) scale(1) rotate(-2deg);}
        }
        /* Gentle pop-in */
        @keyframes imgPopIn {
          0% { transform: scale(0.7);}
          60% { transform: scale(1.08);}
          100% { transform: scale(1);}
        }
        /* Glow pulse */
        @keyframes imgGlowPulse {
          0% { opacity: 0.4; filter: blur(18px);}
          100% { opacity: 0.9; filter: blur(34px);}
        }
        .hero-fade-in {
          opacity: 0;
          animation: fadeInUp 0.85s forwards;
        }
        .hero-fade-in[style*="0.15s"] { animation-delay: 0.15s !important; }
        .hero-fade-in[style*="0.3s"] { animation-delay: 0.3s !important; }
        .hero-fade-in[style*="0.45s"] { animation-delay: 0.45s !important; }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px);}
          100% { opacity: 1; transform: none;}
        }
        /* BUTTONS */
        .contact-gradient-btn {
          background: linear-gradient(90deg, #3b82f6 0%, #a21caf 100%);
          color: #fff !important;
          box-shadow: 0 2px 18px #3b82f633;
          transition: background 0.25s, box-shadow 0.25s, color 0.25s;
        }
        .contact-gradient-btn:hover, .contact-gradient-btn:focus {
          background: linear-gradient(90deg, #a21caf 0%, #3b82f6 100%);
          color: #fff !important;
          box-shadow: 0 4px 24px #a21caf33;
          outline: none;
        }
        .download-gradient-btn {
          background: #fff;
          color: #3b82f6 !important;
          border: 2px solid transparent;
          box-shadow: 0 2px 8px #3b82f616;
          border-image: linear-gradient(90deg, #3b82f6 0%, #a21caf 100%);
          border-image-slice: 1;
          transition: background 0.25s, color 0.25s, border 0.25s, box-shadow 0.25s;
        }
        .download-gradient-btn:hover, .download-gradient-btn:focus {
          background: linear-gradient(90deg, #3b82f6 0%, #a21caf 100%) !important;
          color: #fff !important;
          border: 2px solid #fff;
          box-shadow: 0 4px 24px #3b82f644;
          outline: none;
        }
        @media (max-width: 991.98px) {
          .display-4 { font-size: 1.5rem;}
          .h4 { font-size: 1.1rem;}
          .fs-5 { font-size: 1rem;}
          .col-lg-4, .col-lg-8 { flex: 0 0 100%; max-width: 100%; }
          .hero-section { min-height: 70vh !important;}
          .profile-img-glow { width: 160px; height: 160px;}
        }
      `}</style>
    </section>
  );
};

export default Hero;