import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../styles/header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Accueil", end: true },
    { to: "/about", label: "À propos" },
    { to: "/experiences", label: "Expériences" },
    { to: "/skills", label: "Compétences" },
    { to: "/projects", label: "Projets" },
    { to: "/certifications", label: "Certifications" },
    { to: "/contact", label: "Contact" },
  ];

  const colors = {
    primary: "text-[var(--color-primary)]",
    primaryHover: "hover:text-[var(--color-primary-hover)]",
    textDefault: "text-gray-300",
    bgMobile: "bg-[var(--color-bg)]",
    hoverBgMobile: "hover:bg-white/5",
  };

  // Bloquer le scroll en arrière-plan quand menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="bg-[var(--color-bg)] shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className={`logo-text text-2xl font-bold tracking-wide ${colors.primary} hover:opacity-80 transition`}
          >
            MonPortfolio
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `relative font-medium transition links ${
                    isActive ? colors.primary : colors.textDefault
                  } ${colors.primaryHover}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition"
          >
            {isOpen ? (
              <X className="w-7 h-7 text-[var(--color-primary)]" />
            ) : (
              <Menu className="w-7 h-7 text-[var(--color-primary)]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-full h-[calc(100vh-4rem)] md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${colors.bgMobile}`}
      >
        <nav className="flex flex-col px-6 py-6 space-y-4">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              end={item.end}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-2 font-medium transition links ${
                  isActive
                    ? `${colors.primary} ${colors.hoverBgMobile}`
                    : `text-gray-300 ${colors.primaryHover} ${colors.hoverBgMobile}`
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

