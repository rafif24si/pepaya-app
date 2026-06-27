// app/page.js atau pages/index.js
import HeroSection from "../components/sections/HeroSection";
import DetectSection from "../components/sections/DetectSection";
import EducationSection from "../components/sections/EducationSection";
import HistorySection from "../components/sections/HistorySection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#fdfaf7] overflow-hidden">
      {/* Global Background Effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#964900]/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-[40%] right-[-5%] w-[30vw] h-[30vw] bg-[#1b6d24]/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] bg-[#f57c00]/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay pointer-events-none"></div>
      </div>

      <div className="relative z-10">
        <HeroSection />
        <DetectSection />
        <EducationSection />
        <HistorySection />
      </div>
    </div>
  );
}