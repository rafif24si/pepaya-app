export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
          <span className="font-display-lg text-headline-md font-extrabold text-primary">PapayaSense AI</span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#detect" className="text-primary font-bold border-b-2 border-primary transition-all duration-300 hover:opacity-80 active:scale-95">Detect</a>
          <a href="#education" className="text-gray-500 hover:text-primary transition-all duration-300 hover:opacity-80 active:scale-95">Education</a>
          <a href="#history" className="text-gray-500 hover:text-primary transition-all duration-300 hover:opacity-80 active:scale-95">History</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex bg-gradient-to-r from-primary-container to-tertiary-container text-white px-6 py-2 rounded-xl font-label-md hover:shadow-level-3 transition-all duration-300 active:scale-95">Get Started</button>
          <button className="text-primary transition-all duration-300 hover:opacity-80 active:scale-95">
            <span className="material-symbols-outlined text-2xl">account_circle</span>
          </button>
        </div>
      </div>
    </nav>
  );
}