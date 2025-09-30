import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket, FaChevronLeft, FaChevronRight, FaInfoCircle } from "react-icons/fa";
import defaultCover from '../assets/default.jpg'

// Fonction utilitaire pour fallback d'image
function getImageOrDefault(image) {
  return image && image.trim() !== "" ? image : defaultCover;
}

// Liste des projets
const projects = [
  {
    title: "CampusLoc",
    description: "Plateforme de location de logements étudiants proche des campus au Sénégal. Développée avec Spring Boot, React et PostgreSQL.",
    image: "",
    tech: ["Spring Boot", "React", "PostgreSQL", "Docker", "API PayDunya"],
    github: "https://github.com/eadarak00/campusloc",
    demo: "",
    detailsLink: "/projects/campusloc",
  },
  {
    title: "API de Réservation",
    description: "API REST robuste pour la gestion des réservations en temps réel des ressources informatique de l'UASZ avec système de notification et validation des disponibilités.",
    image: "",
    tech: ["Spring Boot", "Mariadb", "JWT", "REST API", "React"],
    github: "https://github.com/eadarak/Gestion_Reservation",
    demo: "",
    detailsLink: "/projects/api-reservation",
  },
  {
    title: "API Inscriptions Pédagogiques",
    description: "Système de gestion des inscriptions pédagogiques pour établissements d'enseignement supérieur avec workflow de validation automatisé.",
    image: "",
    tech: ["Java", "Mariadb", "JPA", "Maven","Swing"],
    github: "https://github.com/eadarak00/gestion_inscription_pedagogique",
    demo: "",
    detailsLink: "/projects/api-inscriptions",
  },
  {
    title: "API Gestion des Enseignements",
    description: "API complète pour la planification et le suivi des enseignements, gestion des emplois du temps et affectations des enseignants.",
    image: "",
    tech: ["Java", "Spring Boot", "React", "Mariadb"],
    github: "https://github.com/CMCode2001/DAOS_Project",
    demo: "",
    detailsLink: "/projects/api-enseignements",
  },
  {
    title: "Gestion Agence Immobilière",
    description: "Projet de gestion d'agence immobilière avec Oracle Database. Gestion complète des biens, clients et transactions.",
    image: "",
    tech: ["Oracle DB", "PL/SQL"],
    github: "https://github.com/eadarak00/agence_immobiliere_db",
    demo: "",
    detailsLink: "/projects/agence-immobiliere",
  },
  {
    title: "P2P Transfert de Fichiers",
    description: "Application peer-to-peer pour le transfert sécurisé de fichiers en réseau local avec chiffrement et reprise de transfert.",
    image: "",
    tech: ["Java", "Socket", "Threading", "Swing"],
    github: "https://github.com/eadarak00/p2p-transfert-fichier",
    demo: "",
    detailsLink: "/projects/p2p-transfer",
  },
  {
    title: "Gestion Étudiants Microservices",
    description: "Architecture microservices complète pour la gestion des étudiants et classes avec Spring Boot, Eureka, Config Server, API Gateway et MongoDB. Communication interservices via Feign et gRPC.",
    image: "",
    tech: ["Spring Boot", "Eureka", "MongoDB", "GraphQL", "gRPC", "Angular"],
    github: "https://github.com/eadarak00/microservices-projet-gl-2025",
    demo: "",
    detailsLink: "/projects/microservices-etudiants",
  },
  {
    title: "Filtre de Bloom",
    description: "Implémentation optimisée d'un filtre de Bloom pour la recherche probabiliste avec analyse de performance et taux de faux positifs.",
    image: "",
    tech: ["OCAML", "Algorithmes", "Data Structures"],
    github: "https://github.com/eadarak00/filtre_de_bloom",
    demo: "",
    detailsLink: "/projects/bloom-filter",
  },
];

const PROJECTS_PER_PAGE = 6;

function ProjectCard({ project, index, animationDelay }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Animation d'entrée avec délai
  useState(() => {
    setTimeout(() => setIsVisible(true), animationDelay);
  }, [animationDelay]);

  return (
    <div
      className="group relative rounded-3xl overflow-hidden transition-all duration-700"
      style={{ 
        backgroundColor: 'var(--color-white)',
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(212, 180, 131, 0.4), 0 0 0 2px var(--color-primary)'
          : '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
        transform: isHovered ? 'translateY(-12px) scale(1.02)' : isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
        opacity: isVisible ? 1 : 0,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image avec overlay dynamique */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={getImageOrDefault(project.image)}
          alt={project.title}
          className="h-full w-full object-cover transition-all duration-700"
          style={{
            transform: isHovered ? 'scale(1.2) rotate(2deg)' : 'scale(1)',
            filter: isHovered ? 'brightness(0.7) saturate(1.2)' : 'brightness(1)',
          }}
        />
        <div 
          className="absolute inset-0 transition-all duration-500"
          style={{ 
            background: isHovered 
              ? 'linear-gradient(135deg, rgba(212, 180, 131, 0.4) 0%, rgba(160, 116, 74, 0.6) 100%)'
              : 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%)',
          }}
        />
        
        {/* Overlay avec liens rapides */}
        <div 
          className="absolute inset-0 flex items-center justify-center gap-5 transition-all duration-500"
          style={{ 
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'scale(1)' : 'scale(0.8)',
          }}
        >
          <a
            href={project.detailsLink}
            className="flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              color: 'var(--color-primary)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              e.currentTarget.style.color = 'var(--color-white)';
              e.currentTarget.style.transform = 'scale(1.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
              e.currentTarget.style.color = 'var(--color-primary)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <FaInfoCircle className="text-2xl" />
          </a>
          
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                color: 'var(--color-primary)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                e.currentTarget.style.color = 'var(--color-white)';
                e.currentTarget.style.transform = 'scale(1.2) rotate(10deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                e.currentTarget.style.color = 'var(--color-primary)';
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
              }}
            >
              <FaGithub className="text-2xl" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                color: 'var(--color-primary)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                e.currentTarget.style.color = 'var(--color-white)';
                e.currentTarget.style.transform = 'scale(1.2) rotate(-10deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                e.currentTarget.style.color = 'var(--color-primary)';
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
              }}
            >
              <FaExternalLinkAlt className="text-xl" />
            </a>
          )}
        </div>
      </div>

      {/* Contenu */}
      <div className="p-7">
        <h3 
          className="text-2xl font-bold mb-3 transition-colors duration-300"
          style={{ color: isHovered ? 'var(--color-primary)' : 'var(--color-dark)' }}
        >
          {project.title}
        </h3>
        
        <p 
          className="mb-6 text-sm leading-relaxed"
          style={{ 
            color: 'var(--color-gray-light)',
            minHeight: '75px',
          }}
        >
          {project.description}
        </p>

        {/* Technologies avec design amélioré */}
        <div className="flex flex-wrap gap-2 mb-6 min-h-[70px]">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-4 py-2 rounded-full font-medium transition-all duration-300"
              style={{ 
                backgroundColor: isHovered ? 'rgba(212, 180, 131, 0.2)' : 'var(--color-secondary)',
                color: isHovered ? 'var(--color-primary-dark)' : 'var(--color-gray)',
                border: `1.5px solid ${isHovered ? 'var(--color-primary)' : 'transparent'}`,
                transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Boutons d'action redessinés */}
        <div className="flex gap-3 pt-5" style={{ borderTop: '2px solid var(--color-secondary)' }}>
          <a
            href={project.detailsLink}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 text-decoration-none"
            style={{ 
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-white)',
              border: '2px solid var(--color-primary)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
              e.currentTarget.style.borderColor = 'var(--color-primary-hover)';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(212, 180, 131, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              e.currentTarget.style.borderColor = 'var(--color-primary)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <FaInfoCircle /> Détails
          </a>
          
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{ 
                backgroundColor: 'transparent',
                color: 'var(--color-gray)',
                border: '2px solid var(--color-secondary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-dark)';
                e.currentTarget.style.color = 'var(--color-white)';
                e.currentTarget.style.borderColor = 'var(--color-dark)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(47, 47, 47, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-gray)';
                e.currentTarget.style.borderColor = 'var(--color-secondary)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FaCode />
            </a>
          )}
          
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{ 
                backgroundColor: 'transparent',
                color: 'var(--color-gray)',
                border: '2px solid var(--color-secondary)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-success)';
                e.currentTarget.style.color = 'var(--color-white)';
                e.currentTarget.style.borderColor = 'var(--color-success)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(40, 167, 69, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-gray)';
                e.currentTarget.style.borderColor = 'var(--color-secondary)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FaRocket />
            </a>
          )}
        </div>
      </div>

      {/* Barre décorative en bas avec animation */}
      <div 
        className="h-1.5 transition-all duration-500"
        style={{ 
          background: isHovered ? 'var(--gradient)' : 'transparent',
          boxShadow: isHovered ? '0 0 20px rgba(212, 180, 131, 0.5)' : 'none',
        }}
      />
    </div>
  );
}

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  
  const startIndex = currentPage * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      {/* En-tête avec design amélioré */}
      <div className="text-center mb-20">
        <div className="inline-block relative">
          {/* Accent décoratif animé */}
          <div 
            className="absolute -top-6 left-1/2 w-20 h-1.5 rounded-full transition-all duration-500"
            style={{ 
              background: 'var(--gradient)',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 20px rgba(212, 180, 131, 0.5)',
            }}
          />
          
          <h2 
            className="text-5xl md:text-6xl font-bold mb-4 relative"
            style={{ color: 'var(--color-dark)' }}
          >
            Mes Projets
            <div 
              className="absolute -bottom-3 left-0 right-0 h-2 rounded-full"
              style={{ background: 'var(--gradient)', opacity: 0.7 }}
            />
          </h2>
        </div>
        
        <p 
          className="max-w-2xl mx-auto mt-8 text-lg leading-relaxed"
          style={{ color: 'var(--color-gray-light)' }}
        >
          Découvrez une sélection de mes réalisations en développement web et logiciel. 
          <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}> Chaque projet</span> reflète 
          mon engagement pour des solutions innovantes et performantes.
        </p>

        {/* Indicateur de page */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: currentPage === index ? '32px' : '10px',
                height: '10px',
                backgroundColor: currentPage === index ? 'var(--color-primary)' : 'var(--color-secondary)',
                border: currentPage === index ? '2px solid var(--color-primary)' : 'none',
              }}
            />
          ))}
        </div>
      </div>

      {/* Grille des projets */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {currentProjects.map((project, index) => (
          <ProjectCard 
            key={startIndex + index} 
            project={project} 
            index={startIndex + index}
            animationDelay={index * 100}
          />
        ))}
      </div>

      {/* Navigation pagination */}
      <div className="flex items-center justify-center gap-6 mt-12">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 0}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
          style={{
            backgroundColor: currentPage === 0 ? 'var(--color-secondary)' : 'var(--color-primary)',
            color: currentPage === 0 ? 'var(--color-gray-light)' : 'var(--color-white)',
            border: `2px solid ${currentPage === 0 ? 'var(--color-secondary)' : 'var(--color-primary)'}`,
            cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
            opacity: currentPage === 0 ? 0.5 : 1,
          }}
          onMouseEnter={(e) => {
            if (currentPage !== 0) {
              e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
              e.currentTarget.style.transform = 'translateX(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(212, 180, 131, 0.4)';
            }
          }}
          onMouseLeave={(e) => {
            if (currentPage !== 0) {
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.boxShadow = 'none';
            }
          }}
        >
          <FaChevronLeft /> Précédent
        </button>

        <div className="text-lg font-semibold" style={{ color: 'var(--color-dark)' }}>
          <span style={{ color: 'var(--color-primary)' }}>{currentPage + 1}</span> / {totalPages}
        </div>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages - 1}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
          style={{
            backgroundColor: currentPage === totalPages - 1 ? 'var(--color-secondary)' : 'var(--color-primary)',
            color: currentPage === totalPages - 1 ? 'var(--color-gray-light)' : 'var(--color-white)',
            border: `2px solid ${currentPage === totalPages - 1 ? 'var(--color-secondary)' : 'var(--color-primary)'}`,
            cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer',
            opacity: currentPage === totalPages - 1 ? 0.5 : 1,
          }}
          onMouseEnter={(e) => {
            if (currentPage !== totalPages - 1) {
              e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
              e.currentTarget.style.transform = 'translateX(5px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(212, 180, 131, 0.4)';
            }
          }}
          onMouseLeave={(e) => {
            if (currentPage !== totalPages - 1) {
              e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.boxShadow = 'none';
            }
          }}
        >
          Suivant <FaChevronRight />
        </button>
      </div>
    </section>
  );
}