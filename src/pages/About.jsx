import avatarImage from "../assets/avatar.png";
import { Download, Code, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] px-6 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div className="flex justify-center lg:justify-start">
          <div
            className="relative w-72 h-72 rounded-full overflow-hidden p-1 shadow-lg"
            style={{ background: "var(--gradient)" }}
          >
            <img
              src={avatarImage}
              alt="Photo de profil"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Texte Intro */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold hero-gradient-text">
            À propos de moi
          </h2>
          <p className="text-lg text-[var(--color-gray-light)] leading-relaxed">
            Je suis{" "}
            <span className="font-semibold text-[var(--color-primary)]">
              El Hadji Abdou DRAME
            </span>
            , développeur fullstack passionné par la création d’applications
            modernes, performantes et centrées sur l’utilisateur. Mon objectif
            est de transformer des idées en solutions digitales impactantes et
            durables.
          </p>

          <ul className="space-y-3 text-[var(--color-gray-light)]">
            <li>
              ✔️ Expérience avec{" "}
              <strong>Java, Spring Boot, React, Angular et Python</strong>
            </li>
            <li>✔️ Forte capacité d’apprentissage et curiosité technologique</li>
            <li>✔️ Intérêt pour l’IA, le cloud et la cybersécurité</li>
            <li>✔️ Habitué au travail collaboratif avec Git & Jira</li>
          </ul>

          <button className="btn-primary flex items-center gap-2 mt-4">
            <Download className="w-4 h-4" /> Télécharger mon CV
          </button>
        </div>
      </div>

      {/* Section Parcours */}
      <section className="mt-20 max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 rounded-xl shadow-md bg-[var(--color-secondary)] hover:scale-105 transition">
          <GraduationCap className="w-10 h-10 mx-auto text-[var(--color-primary)]" />
          <h3 className="text-xl font-semibold mt-4">Formation</h3>
          <p className="mt-2 text-[var(--color-gray-light)]">
            Étudiant en <strong>Master 1 (M1) Informatique</strong>, spécialisé en{" "}
            <strong>génie logicielle</strong> et passionné par les nouvelles
            technologies.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md bg-[var(--color-secondary)] hover:scale-105 transition">
          <Briefcase className="w-10 h-10 mx-auto text-[var(--color-primary)]" />
          <h3 className="text-xl font-semibold mt-4">Expérience</h3>
          <p className="mt-2 text-[var(--color-gray-light)]">
            Réalisation de projets académiques et personnels :{" "}
            <strong>applications web</strong>, microservices, APIs et solutions
            orientées cloud.
          </p>
        </div>
        <div className="p-6 rounded-xl shadow-md bg-[var(--color-secondary)] hover:scale-105 transition">
          <Code className="w-10 h-10 mx-auto text-[var(--color-primary)]" />
          <h3 className="text-xl font-semibold mt-4">Compétences</h3>
          <p className="mt-2 text-[var(--color-gray-light)]">
            Maîtrise du <strong>frontend</strong> (React, Angular) et{" "}
            <strong>backend</strong> (Spring Boot), avec une bonne
            pratique de <strong>Git </strong>.
          </p>
        </div>
      </section>

      {/* Centres d’intérêt */}
      <section className="mt-20 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6">Centres d’intérêt</h3>
        <p className="text-lg text-[var(--color-gray-light)] leading-relaxed">
          En dehors du code, j’aime explorer les domaines de{" "}
          <strong>l’intelligence artificielle</strong>, contribuer à des projets
          open source, et partager mes connaissances avec d’autres développeurs.
          J’apprécie également la lecture, les challenges de programmation et le
          sport pour garder l’équilibre.
        </p>
      </section>
    </main>
  );
}
