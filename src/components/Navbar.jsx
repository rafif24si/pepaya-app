import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("detect");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "detect", label: "Detect", icon: "scanner" },
    { id: "education", label: "Education", icon: "menu_book" },
    { id: "history", label: "History", icon: "monitoring" },
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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl border-b border-gray-200/50 shadow-2xl shadow-black/5"
          : "bg-white/50 backdrop-blur-xl border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span
              className="material-symbols-outlined text-emerald-600 text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              eco
            </span>
            <span className="text-xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              PapayaSense AI
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`relative px-5 py-2.5 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 ${
                  activeSection === id
                    ? "text-emerald-700 bg-emerald-50"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="material-symbols-outlined text-lg">{icon}</span>
                {label}
                {activeSection === id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300 transition-all duration-300 hover:-translate-y-0.5">
              Get Started
            </button>
            <button className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <span className="material-symbols-outlined text-gray-600">person</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-gray-700">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-gray-100 shadow-2xl">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`w-full px-5 py-3 rounded-xl font-bold text-left transition-all flex items-center gap-3 ${
                  activeSection === id
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className="material-symbols-outlined">{icon}</span>
                {label}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}