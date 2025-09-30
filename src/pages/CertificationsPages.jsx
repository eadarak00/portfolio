import { useState } from "react";
import { Award, ExternalLink, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    date: "2025",
    link: "https://www.freecodecamp.org/certification/eadarak/front-end-development-libraries",
    skills: ["React", "Bootstrap"],
    category: "Développement Frontend",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2024",
    link: "https://www.freecodecamp.org/certification/eadarak/javascript-algorithms-and-data-structures-v8",
    skills: ["JavaScript ES6+", "Structures de données"],
    category: "Programmation",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2024",
    link: "https://www.credly.com/badges/78e553e0-2c65-4fe0-b855-cb2b61ed06de/linked_in_profile",
    skills: ["Sécurité réseau", "Bonnes pratiques"],
    category: "Cybersécurité",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2024",
    link: "https://www.freecodecamp.org/certification/eadarak/responsive-web-design",
    skills: ["HTML", "CSS", "Flexbox", "Grid", "Responsive Design"],
    category: "Développement Frontend",
  },
  {
    title: "10 conseils pour construire un CV percutant",
    issuer: "LinkedIn Learning",
    date: "2024",
    link: "https://www.linkedin.com/learning/certificates/5732ab159b4af6f81ac21f01497bd7b78d94f550016baa9ec370673c110bfa1c",
    skills: ["Rédaction de CV", "Communication professionnelle", "Optimisation LinkedIn"],
    category: "Soft Skills",
  },
];

function CertificationCard({ cert }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden p-6 flex flex-col justify-between shadow-lg transition-all duration-300 ${
        hovered ? "scale-105 shadow-2xl" : ""
      }`}
      style={{ backgroundColor: "var(--color-white)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
         {/* Badge en haut à droite */}
      <div
        className="absolute top-0 right-0 w-20 h-20 flex items-center justify-center transition-all duration-500"
        style={{
          background: hovered ? "var(--gradient)" : "var(--color-secondary)",
          clipPath: "polygon(100% 0, 100% 100%, 0 0)",
        }}
      >
        <Award
          className="absolute top-2 right-2 transition-transform duration-500"
          style={{
            width: 20,
            height: 20,
            color: hovered ? "var(--color-white)" : "var(--color-primary)",
            transform: hovered ? "rotate(15deg) scale(1.2)" : "rotate(0) scale(1)",
          }}
        />
      </div>
      
      {/* Catégorie */}
      <div className="text-xs font-bold uppercase mb-2 text-[var(--color-primary)]">
        {cert.category}
      </div>

      {/* Titre */}
      <h3
        className={`text-lg font-semibold mb-3 transition-colors ${
          hovered ? "text-[var(--color-primary)]" : "text-[var(--color-dark)]"
        }`}
      >
        {cert.title}
      </h3>

      {/* Issuer & date */}
      <div className="flex items-center gap-2 mb-4 text-sm text-[var(--color-gray)]">
        <CheckCircle className="w-4 h-4 text-[var(--color-primary)]" />
        <span>{cert.issuer}</span>
        <span className="ml-auto">Obtenu en {cert.date}</span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {cert.skills.map((skill, idx) => (
          <span
            key={idx}
            className={`text-xs px-2 py-1 rounded-full border border-transparent transition-all duration-300 ${
              hovered
                ? "bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] border-[var(--color-primary)]"
                : "bg-[var(--color-secondary)] text-[var(--color-gray)]"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Bouton */}
      {cert.link && (
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 py-2 mt-auto rounded-lg font-semibold text-sm transition-all duration-300 border-2 ${
            hovered
              ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-md"
              : "bg-transparent text-[var(--color-primary)] border-[var(--color-primary)]"
          }`}
        >
          Voir la certification
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}

export default function CertificationsPage() {
  return (
    <section className="py-20 px-6 lg:px-20" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-dark)]">
          Mes Certifications
        </h2>
        <p className="text-base md:text-lg text-[var(--color-gray-light)] max-w-3xl mx-auto">
          Voici mes certifications et formations attestant de mes compétences techniques et de mon engagement dans l'apprentissage continu.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, idx) => (
          <CertificationCard key={idx} cert={cert} />
        ))}
      </div>
    </section>
  );
}
