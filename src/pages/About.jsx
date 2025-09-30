import {
  Download,
  Code,
  GraduationCap,
  Briefcase,
  Target,
  Users,
  Lightbulb,
  Zap,
  Heart,
  BookOpen,
} from "lucide-react";
import avatarImage from "../assets/avatar.png";

export default function About() {
  const qualities = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Rigoureux",
      description: "Attention aux détails et respect des bonnes pratiques",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboratif",
      description: "Travail d'équipe et communication efficace",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Créatif",
      description: "Solutions innovantes et approche problem-solving",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Adaptable",
      description: "Apprentissage rapide et flexibilité",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passionné",
      description: "Engagement total dans chaque projet",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Curieux",
      description: "Veille technologique et amélioration continue",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--color-bg)] px-6 lg:px-20 py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-20 w-96 h-96 bg-[var(--color-primary)] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-[var(--color-primary)] opacity-5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Intro avec Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image avec effets améliorés */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative group">
              {/* Cercles décoratifs animés */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full opacity-40 animate-pulse"></div>

              {/* Image container */}
              <div
                className="relative w-80 h-80 rounded-full overflow-hidden p-2 shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                style={{ background: "var(--gradient)" }}
              >
                <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-lg font-semibold">
                  <img
                    src={avatarImage}
                    alt="Photo de profil"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Texte Intro amélioré */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-[var(--color-dark)] bg-[var(--color-primary-light)] px-4 py-2 rounded-full">
                  Développeur Fullstack
                </span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent mb-4">
                À propos de moi
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-primary)] to-transparent rounded-full"></div>
            </div>

            <p className="text-lg text-[var(--color-text)] leading-relaxed">
              Je suis{" "}
              <span className="font-bold text-[var(--color-primary)] text-xl">
                El Hadji Abdou DRAME
              </span>
              , développeur fullstack passionné par la création d'applications
              modernes, performantes et centrées sur l'utilisateur. Mon objectif
              est de transformer des idées en solutions digitales impactantes et
              durables.
            </p>

            <div className="space-y-4">
              {[
                "Expérience avec Java, Spring Boot, React, Angular et Python",
                "Forte capacité d'apprentissage et curiosité technologique",
                "Intérêt pour l'IA, le cloud et la cybersécurité",
                "Habitué au travail collaboratif avec Git & Jira",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary-light)] flex items-center justify-center group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                    <svg
                      className="w-3 h-3 text-[var(--color-primary)] group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-[var(--color-text)] flex-1">
                    <strong>{item}</strong>
                  </p>
                </div>
              ))}
            </div>

            <a
              href="public/cv.pdf"
              download="Mon-CV.pdf"
              className="btn-secondary flex items-center gap-2 text-decoration-none"
            >
              <Download className="w-4 h-4" /> Télécharger CV
            </a>
          </div>
        </div>

        {/* Section Qualités personnelles */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
              Mes Qualités
            </h3>
            <p className="text-lg text-[var(--color-text)] opacity-80 max-w-2xl mx-auto">
              Les valeurs et compétences qui définissent ma façon de travailler
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualities.map((quality, idx) => (
              <div
                key={idx}
                className="group relative bg-[var(--color-white)] rounded-2xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-[var(--color-primary)] hover:border-opacity-30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div className="relative z-10 space-y-3">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {quality.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                    {quality.title}
                  </h4>
                  <p className="text-[var(--color-text)] text-sm leading-relaxed">
                    {quality.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Parcours améliorée */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
              Mon Parcours
            </h3>
            <p className="text-lg text-[var(--color-text)] opacity-80 max-w-2xl mx-auto">
              Formation, expérience et expertise technique
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-[var(--color-white)] rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border-t-4 border-[var(--color-primary)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--color-primary-light)] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h4 className="text-2xl font-bold text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  Formation
                </h4>
                <p className="text-[var(--color-text)] leading-relaxed">
                  Étudiant en <strong>Master 1 (M1) Informatique</strong>,
                  spécialisé en <strong>génie logiciel</strong> et passionné par
                  les nouvelles technologies.
                </p>
              </div>
            </div>

            <div className="group relative bg-[var(--color-white)] rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border-t-4 border-[var(--color-primary)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--color-primary-light)] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <Briefcase className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h4 className="text-2xl font-bold text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  Expérience
                </h4>
                <p className="text-[var(--color-text)] leading-relaxed">
                  Réalisation de projets académiques et personnels :{" "}
                  <strong>applications web</strong>, microservices, APIs et
                  solutions orientées cloud.
                </p>
              </div>
            </div>

            <div className="group relative bg-[var(--color-white)] rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border-t-4 border-[var(--color-primary)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--color-primary-light)] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <Code className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
                <h4 className="text-2xl font-bold text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  Compétences
                </h4>
                <p className="text-[var(--color-text)] leading-relaxed">
                  Maîtrise du <strong>frontend</strong> (React, Angular) et{" "}
                  <strong>backend</strong> (Spring Boot), avec une bonne
                  pratique de <strong>Git</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Centres d'intérêt améliorés */}
        <section className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-[var(--color-white)] to-[var(--color-primary-light)] rounded-3xl shadow-2xl p-10 lg:p-14 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)] opacity-5 rounded-full blur-3xl"></div>
            <div className="relative z-10 text-center space-y-6">
              <h3 className="text-4xl font-bold text-[var(--color-primary)] mb-6">
                Centres d'intérêt
              </h3>
              <p className="text-lg text-[var(--color-text)] leading-relaxed max-w-3xl mx-auto">
                En dehors du code, j'aime explorer les domaines de{" "}
                <strong className="text-[var(--color-primary)]">
                  l'intelligence artificielle
                </strong>
                , contribuer à des projets open source, et partager mes
                connaissances avec d'autres développeurs. J'apprécie également
                la lecture, les challenges de programmation et le sport pour
                garder l'équilibre entre vie professionnelle et personnelle.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
