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
      className="w-full min-h-screen flex flex-col items-center justify-center pt-28 pb-20 relative overflow-hidden bg-[#fffdfa]"
    >
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dots opacity-60 pointer-events-none"></div>
      {/* Cool animated background shapes for the whole hero / top section */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#964900]/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#a0f399]/15 rounded-full blur-[150px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-center relative z-10">
        {/* Left: Text */}
        <div className="space-y-6 lg:space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-[84px] font-display-lg font-bold leading-[1.05] text-[#1a1a1a] tracking-tight">
            <span className="text-[#964900]">{t.titleLine1}</span><br/>
            {t.titleLine2}<br/>
            {t.titleLine3}
          </h1>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-[600px] leading-relaxed mt-8 font-medium">
            {t.desc}
          </p>
          <div className="flex flex-wrap gap-5 pt-6">
            <button 
              onClick={triggerScrollToCore}
              className="px-10 py-5 bg-[#964900] text-white rounded-full font-bold text-lg flex items-center gap-2 hover:bg-[#803d00] transition-colors shadow-xl shadow-[#964900]/30 hover:-translate-y-1 hover:scale-105 duration-300 border-2 border-transparent"
            >
              {t.startBtn} <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
            <button className="px-10 py-5 bg-white/70 backdrop-blur-md border-2 border-[#964900]/20 text-gray-800 rounded-full font-bold text-lg hover:border-[#964900] hover:text-[#964900] hover:bg-white transition-all duration-300 shadow-md">
              {t.methodologyBtn}
            </button>
          </div>
        </div>
        
        <div className="relative mt-16 lg:mt-0 px-4 md:px-0" data-aos="zoom-in" data-aos-delay="200">
           <div 
             className={`w-full aspect-square md:aspect-auto md:h-[680px] lg:h-[740px] rounded-[48px] overflow-hidden shadow-[0_30px_70px_rgba(150,73,0,0.15)] relative cursor-pointer transition-all duration-300 ease-in-out border-8 border-white ${isAnimating ? 'scale-95 rotate-2 shadow-inner blur-[2px]' : 'hover:scale-[1.02] hover:shadow-[0_40px_80px_rgba(150,73,0,0.25)]'}`}
             onClick={handleImageClick}
           >
              <img 
                src="/img/pohon1.jpg" 
                alt="Papaya Farm" 
                className="w-full h-full object-cover transform scale-[1.05]"
              />
              
              <div className="absolute inset-0 bg-gradient-to-tr from-[#964900]/40 to-transparent mix-blend-multiply opacity-80 pointer-events-none"></div>
           </div>
         </div>
      </div>
      
      {/* Cool Separator / Scrolling Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-white/70 backdrop-blur-md border-y border-[#964900]/10 py-3.5 z-20 shadow-[0_-5px_20px_rgba(150,73,0,0.05)]">
        <div className="flex w-[200%] animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center justify-around w-1/2 px-4 shrink-0">
              {['AI-POWERED ANALYSIS', '99.4% PRECISION', 'REAL-TIME DETECTION', 'AGRONOMIC PROFILING'].map((text, j) => (
                <div key={j} className="flex items-center gap-4 mx-6">
                  <span className="text-[#964900] text-lg">✦</span>
                  <span className="text-xs font-bold tracking-[0.2em] text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
