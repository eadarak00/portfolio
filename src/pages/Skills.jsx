import {
  FaJava,
  FaReact,
  FaAngular,
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaLinux,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiOracle,
  SiTypescript,
  SiFlutter,
  SiC,
  SiOcaml,
  SiBootstrap,
  SiReactrouter,
  SiMariadb,
  SiPostgresql,
  SiFigma,
  SiCanva,
  SiCisco,
  SiJirasoftware,
  SiPostman,
} from "react-icons/si";

const keySkills = [
  "Développement Fullstack",
  "API REST & Microservices",
  "Bases de données relationnelles & NoSQL",
  "UI/UX Design",
  "Gestion de projets Agile",
  "DevOps & Outils collaboratifs",
  "Configuration & Administration de serveurs",
  "Installation et maintenance de systèmes",
];

// Fonction pour obtenir le niveau et la couleur
const getLevelInfo = (level) => {
  if (level >= 80) return { label: "Maîtrise", color: "text-green-600", bgColor: "bg-green-100" };
  if (level >= 60) return { label: "Avancé", color: "text-blue-600", bgColor: "bg-blue-100" };
  if (level >= 40) return { label: "Intermédiaire", color: "text-yellow-600", bgColor: "bg-yellow-100" };
  return { label: "Débutant", color: "text-orange-600", bgColor: "bg-orange-100" };
};

const categories = [
  {
    title: "Langages",
    items: [
      { name: "C", icon: <SiC className="w-8 h-8 text-[#00599C]" />, level: 60 },
      { name: "OCaml", icon: <SiOcaml className="w-8 h-8 text-[#E98407]" />, level: 45 },
      { name: "Java", icon: <FaJava className="w-8 h-8 text-[#f89820]" />, level: 90 },
      { name: "Python", icon: <FaPython className="w-8 h-8 text-yellow-400" />, level: 70 },
      { name: "JavaScript", icon: <FaJsSquare className="w-8 h-8 text-yellow-500" />, level: 80 },
      { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 text-blue-700" />, level: 65 },
      { name: "HTML5", icon: <FaHtml5 className="w-8 h-8 text-[#E34F26]" />, level: 85 },
      { name: "CSS3", icon: <FaCss3Alt className="w-8 h-8 text-[#1572B6]" />, level: 85 },
    ].sort((a, b) => b.level - a.level),
  },
  {
    title: "Frameworks & Librairies",
    items: [
      { name: "Spring Boot", icon: <SiSpringboot className="w-8 h-8 text-green-500" />, level: 85 },
      { name: "React", icon: <FaReact className="w-8 h-8 text-blue-400" />, level: 80 },
      { name: "React Router", icon: <SiReactrouter className="w-8 h-8 text-[#CA4245]" />, level: 70 },
      { name: "Angular", icon: <FaAngular className="w-8 h-8 text-red-500" />, level: 65 },
      { name: "Bootstrap", icon: <SiBootstrap className="w-8 h-8 text-[#8511FA]" />, level: 70 },
      { name: "Flutter", icon: <SiFlutter className="w-8 h-8 text-blue-400" />, level: 5 },
    ].sort((a, b) => b.level - a.level),
  },
  {
    title: "Bases de données",
    items: [
      { name: "MySQL", icon: <SiMysql className="w-8 h-8 text-sky-600" />, level: 80 },
      { name: "MariaDB", icon: <SiMariadb className="w-8 h-8 text-[#003545]" />, level: 85 },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8 text-[#316192]" />, level: 20 },
      { name: "Oracle", icon: <SiOracle className="w-8 h-8 text-red-600" />, level: 60 },
    ].sort((a, b) => b.level - a.level),
  },
  {
    title: "Outils & DevOps",
    items: [
      { name: "Git", icon: <FaGitAlt className="w-8 h-8 text-[#F05033]" />, level: 85 },
      { name: "GitHub", icon: <FaGithub className="w-8 h-8 text-white bg-black rounded-full p-1" />, level: 80 },
      { name: "Linux", icon: <FaLinux className="w-8 h-8 text-[#FCC624]" />, level: 85 },
      { name: "Postman", icon: <SiPostman className="w-8 h-8 text-[#FF6C37]" />, level: 80 },
      { name: "Cisco", icon: <SiCisco className="w-8 h-8 text-[#049fd9]" />, level: 75 },
      { name: "Jira", icon: <SiJirasoftware className="w-8 h-8 text-[#0A0FFF]" />, level: 50 },
    ].sort((a, b) => b.level - a.level),
  },
  {
    title: "Design & Collaboration",
    items: [
      { name: "Figma", icon: <SiFigma className="w-8 h-8 text-[#F24E1E]" />, level: 50 },
      { name: "Canva", icon: <SiCanva className="w-8 h-8 text-[#00C4CC]" />, level: 75 },
    ].sort((a, b) => b.level - a.level),
  },
];

export default function Skills() {
  return (
    <main className="min-h-screen text-[var(--color-text)] px-6 lg:px-20 py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--color-primary)] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--color-primary)] opacity-5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
            Mes Compétences
          </h1>
          <p className="text-lg text-[var(--color-text)] opacity-80 max-w-2xl mx-auto">
            Un aperçu de mes expertises techniques et de mes domaines de compétences
          </p>
        </div>

        {/* Key Skills Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 bg-[var(--color-primary)] rounded-full"></div>
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">Compétences clés</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {keySkills.map((skill, idx) => (
              <span
                key={idx}
                className="group bg-gradient-to-br from-[var(--color-white)] to-[var(--color-white)] border-2 border-[var(--color-primary)] border-opacity-20 text-[var(--color-dark)] px-6 py-3 rounded-xl font-medium shadow-sm hover:shadow-xl hover:border-[var(--color-primary)] hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <span className="group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {skill}
                </span>
              </span>
            ))}
          </div>
        </section>

        {/* Categories */}
        {categories.map((category, idx) => (
          <section key={idx} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-[var(--color-primary)] rounded-full"></div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)]">{category.title}</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-primary)] to-transparent opacity-20"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.items.map((tech, i) => {
                const levelInfo = getLevelInfo(tech.level);
                return (
                  <div
                    key={i}
                    className="group relative bg-[var(--color-white)] rounded-2xl shadow-md p-6 flex flex-col gap-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-[var(--color-primary)] hover:border-opacity-30 overflow-hidden"
                  >
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>
                    
                    <div className="relative z-10 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                          {tech.icon}
                        </div>
                        <span className="font-semibold text-lg text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${levelInfo.bgColor} ${levelInfo.color} whitespace-nowrap`}>
                        {levelInfo.label}
                      </span>
                    </div>
                    
                    {/* Progress bar container */}
                    <div className="relative z-10 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">Maîtrise</span>
                        <span className="text-sm font-bold text-dark-400 bg-[var(--color-primary-light)] px-2 py-1 rounded-lg">
                          {tech.level}%
                        </span>
                      </div>
                      <div className="relative w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-full transition-all duration-700 ease-out shadow-sm"
                          style={{ width: `${tech.level}%` }}
                        >
                          <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}