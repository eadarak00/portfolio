import { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
} from "lucide-react";
import Typewriter from "typewriter-effect";

import avatarImage from "../assets/avatar.png";
import "../styles/mainhero.css";

export default function MainHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="main-hero">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-20 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div
            className={`space-y-6 text-center lg:text-left ${
              isVisible ? "fade-in-up" : ""
            }`}
          >
            <p className="text-base sm:text-lg lg:text-xl font-medium text-[var(--color-gray-light)]">
              Bonjour, je suis
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold hero-gradient-text leading-snug">
              El Hadji Abdou DRAME
            </h1>

            <div className="text-xl sm:text-2xl lg:text-3xl font-medium flex justify-center lg:justify-start items-center gap-2">
              <span>Développeur</span>
              <span className="hero-gradient-text">
                <Typewriter
                  options={{
                    strings: [
                      "Java",
                      "ReactJS",
                      "Angular",
                      "Python",
                      "Spring Boot",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed: 40,
                  }}
                />
              </span>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-[var(--color-gray-light)] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Je construis des applications modernes et robustes avec une
              approche centrée sur l'utilisateur. Passionné par les technologies
              de pointe, je transforme vos idées en solutions digitales
              performantes.
            </p>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary flex items-center gap-2">
                Voir mes projets <ExternalLink className="w-4 h-4" />
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <Download className="w-4 h-4" /> Télécharger CV
              </button>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-4">
              <span className="text-sm font-medium text-[var(--color-gray-light)]">
                Me suivre :
              </span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/eadarak00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/elhadji-abdou-drame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a href="mailto:elabadoudrame2001@gmail.com" className="social-btn">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={`flex justify-center lg:justify-end ${
              isVisible ? "fade-in-up" : ""
            }`}
          >
            <div className="relative">
              <div
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden p-1"
                style={{ background: "var(--gradient)" }}
              >
                <img
                  src={avatarImage}
                  alt="Photo de profil"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Décorations */}
              <div className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[var(--color-primary)]"></div>
              <div className="absolute -bottom-4 -left-4 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[var(--color-primary-hover)]"></div>
              <div className="absolute top-1/4 -left-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[var(--color-primary-light)]"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
