// src/components/Navbar.jsx
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("detect");

  const navLinks = [
    { id: "detect", label: "Detect" },
    { id: "education", label: "Education" },
    { id: "history", label: "History" },
  ];

  // Detect scroll untuk ubah style navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section pakai IntersectionObserver
  useEffect(() => {
    const observers = [];

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-outline-variant/50 shadow-level-1"
          : "bg-white/70 backdrop-blur-xl border-outline-variant/30 shadow-sm"
      }`}
    >
      <div className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-4">
          <span
            className="material-symbols-outlined text-primary text-3xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            eco
          </span>
          <span className="font-display-lg text-headline-md font-extrabold text-primary">
            PapayaSense AI
          </span>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`transition-all duration-300 hover:opacity-80 active:scale-95 bg-transparent border-0 cursor-pointer ${
                activeSection === id
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "text-gray-500 hover:text-primary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex bg-gradient-to-r from-primary-container to-tertiary-container text-white px-6 py-2 rounded-xl font-label-md hover:shadow-level-3 transition-all duration-300 active:scale-95">
            Get Started
          </button>
          <button className="text-primary transition-all duration-300 hover:opacity-80 active:scale-95">
            <span className="material-symbols-outlined text-2xl">
              account_circle
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}