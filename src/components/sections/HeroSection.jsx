import { useState } from "react";
import { useApp } from "../../context/AppContext";
import { translations } from "../../utils/translations";

export default function HeroSection() {
  const { lang } = useApp();
  const t = translations[lang].hero;
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerScrollToCore = () => {
     document.getElementById('detect')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleImageClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section 
      id="home" 
      className="w-full min-h-screen flex flex-col items-center justify-center pt-24 pb-16 relative overflow-hidden bg-[#fffdfa]"
    >
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dots opacity-60 pointer-events-none"></div>
      {/* Animated background shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#964900]/8 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[#a0f399]/10 rounded-full blur-[130px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-14 items-center relative z-10">
        {/* Left: Text */}
        <div className="space-y-5" data-aos="fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[#964900]/10">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[11px] font-bold text-gray-600 uppercase tracking-widest">AI-Powered Agronomy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-display-lg font-bold leading-[1.1] text-[#1a1a1a] tracking-tight">
            <span className="text-[#964900]">{t.titleLine1}</span><br/>
            {t.titleLine2}<br/>
            {t.titleLine3}
          </h1>

          <p className="text-base sm:text-[17px] lg:text-lg text-gray-600 max-w-[500px] leading-relaxed font-medium">
            {t.desc}
          </p>

          <div className="flex flex-wrap gap-4 pt-3">
            <button 
              onClick={triggerScrollToCore}
              className="px-8 py-3.5 bg-[#964900] text-white rounded-full font-bold text-base flex items-center gap-2 hover:bg-[#803d00] transition-colors shadow-lg shadow-[#964900]/25 hover:-translate-y-0.5 duration-300"
            >
              {t.startBtn} <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
            <button className="px-8 py-3.5 bg-white/70 backdrop-blur-md border border-[#964900]/20 text-gray-700 rounded-full font-bold text-base hover:border-[#964900] hover:text-[#964900] hover:bg-white transition-all duration-300 shadow-sm">
              {t.methodologyBtn}
            </button>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-6 sm:gap-8 pt-4 border-t border-gray-100 mt-6">
            <div>
              <p className="text-2xl lg:text-3xl font-black text-[#964900]">99.4%</p>
              <p className="text-sm text-gray-500 font-medium">Accuracy</p>
            </div>
            <div className="hidden sm:block w-px bg-gray-200"></div>
            <div>
              <p className="text-2xl lg:text-3xl font-black text-[#1a1a1a]">3</p>
              <p className="text-sm text-gray-500 font-medium">Ripeness Stages</p>
            </div>
            <div className="hidden sm:block w-px bg-gray-200"></div>
            <div>
              <p className="text-2xl lg:text-3xl font-black text-[#1a1a1a]">Real-time</p>
              <p className="text-sm text-gray-500 font-medium">Detection</p>
            </div>
          </div>
        </div>
        
        {/* Right: Image */}
        <div className="relative px-2 md:px-0 flex justify-end" data-aos="zoom-in" data-aos-delay="200">
           <div 
             className={`w-full aspect-[4/5] max-w-[420px] lg:max-w-[460px] mx-auto lg:mr-0 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(150,73,0,0.15)] relative cursor-pointer transition-all duration-300 ease-in-out border-[6px] border-white ${isAnimating ? 'scale-95 rotate-1 blur-[2px]' : 'hover:scale-[1.015] hover:shadow-[0_25px_60px_rgba(150,73,0,0.2)]'}`}
             onClick={handleImageClick}
           >
              <img 
                src="/img/pohon1.jpg" 
                alt="Papaya Farm" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#964900]/30 to-transparent mix-blend-multiply opacity-80 pointer-events-none"></div>
           </div>
         </div>
      </div>
      
      {/* Scrolling Marquee Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-white/70 backdrop-blur-md border-y border-[#964900]/10 py-3 z-20">
        <div className="flex w-[200%] animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center justify-around w-1/2 px-4 shrink-0">
              {['AI-POWERED ANALYSIS', '99.4% PRECISION', 'REAL-TIME DETECTION', 'AGRONOMIC PROFILING'].map((text, j) => (
                <div key={j} className="flex items-center gap-3 mx-6">
                  <span className="text-[#964900] text-sm">✦</span>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-gray-600">{text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
