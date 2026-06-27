import { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { translations } from "../utils/translations";

export default function Navbar() {
  const { lang, toggleLang } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const t = translations[lang].nav;

  const navLinks = [
    { id: "home", label: t.home },
    { id: "detect", label: t.detect },
    { id: "education", label: t.education },
    { id: "history", label: t.history },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center px-4 pt-6 transition-all duration-500">
      <nav
        className={`w-full max-w-5xl transition-all duration-500 ${scrolled
            ? "bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-white/60 dark:border-white/10"
            : "bg-white/60 dark:bg-[#121212]/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] border-white/40 dark:border-white/5"
          } rounded-full border-[1.5px]`}
      >
        <div className="flex justify-between items-center h-16 md:h-[72px] px-6 md:px-8">
          {/* Logo */}
          <div className="flex items-center cursor-pointer mr-8">
            <span className="text-2xl md:text-[28px] font-display-lg font-black text-[#964900] tracking-tight">
              PapayaDetection
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-8 mr-8">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`relative px-1 py-2 font-body-md text-sm md:text-base font-semibold transition-all duration-300 group ${activeSection === id
                    ? "text-primary dark:text-[#ffb786]"
                    : "text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white"
                  }`}
              >
                {label}
                {/* Smooth animated underline */}
                <span className={`absolute bottom-0 left-0 w-full h-[3px] rounded-t-full bg-primary transition-all duration-300 ${activeSection === id ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"}`}></span>
              </button>
            ))}
          </div>

          {/* Actions: Language */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={toggleLang}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-gray-200 font-bold text-xs uppercase transition-colors"
            >
              {lang}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-on-surface hover:text-primary transition-colors backdrop-blur-sm"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        <div
          className={`md:hidden absolute top-full mt-2 left-0 w-full bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-2xl rounded-3xl border border-white/50 dark:border-white/10 shadow-2xl transition-all duration-300 overflow-hidden ${mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="px-6 py-4 space-y-2">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`w-full px-5 py-3 rounded-xl font-label-md text-left transition-all ${activeSection === id
                    ? "bg-primary/10 text-primary dark:text-[#ffb786] dark:bg-white/10"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5"
                  }`}
              >
                {label}
              </button>
            ))}
            
            <div className="pt-4 mt-2 border-t border-gray-200 dark:border-white/10 flex justify-center gap-4">
               <button 
                 onClick={toggleLang}
                 className="flex-1 py-3 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-200 font-bold text-sm uppercase"
               >
                 Language: {lang === 'en' ? 'English' : 'Indonesia'}
               </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}