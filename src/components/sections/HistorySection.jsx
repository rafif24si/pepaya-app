import { useApp } from "../../context/AppContext";
import { translations } from "../../utils/translations";

export default function HistorySection() {
  const { lang } = useApp();
  const t = translations[lang].history;

  const historyItems = [
    {
      id: "Scan #8842",
      status: t.items[0],
      brix: "8.4 °Bx",
      confidence: "98.2%",
      progress: "w-[98%]",
      badgeBg: "bg-green-500/90",
      imgSrc: "/img/mth.jpg",
    },
    {
      id: "Scan #8841",
      status: t.items[1],
      brix: "12.5 °Bx",
      confidence: "99.1%",
      progress: "w-[99%]",
      badgeBg: "bg-orange-500/90",
      imgSrc: "/img/mtg.jpg",
    },
    {
      id: "Scan #8840",
      status: t.items[2],
      brix: "14.2 °Bx",
      confidence: "94.5%",
      progress: "w-[94%]",
      badgeBg: "bg-red-500/90",
      imgSrc: "/img/b60.jpg",
    },
  ];

  return (
    <section className="bg-[#1a1a1a] py-16 px-6 md:px-10 relative overflow-hidden transition-colors duration-500" id="history">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#964900]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t.liveScan}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-display-lg font-bold text-white mb-3">
              {t.title}
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              {t.desc}
            </p>
          </div>
          <button className="px-5 py-2.5 text-sm rounded-full border border-white/20 text-white font-semibold flex items-center gap-2 hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 group">
            {t.viewArchive} <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>

        {/* History Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {historyItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Section */}
              <div className="h-44 relative bg-[#222] overflow-hidden">
                <img
                  alt={item.status}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                  src={item.imgSrc}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1517282009859-f000eca3bca2?q=80&w=600&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-60"></div>
                {/* Badge Overlay */}
                <div className={`absolute top-4 right-4 ${item.badgeBg} backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                  {item.status}
                </div>
              </div>

              {/* Info Section */}
              <div className="p-5 md:p-6 flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-4 group-hover:border-white/20 transition-colors">
                  <span className="text-gray-400 text-sm font-bold uppercase tracking-wider">{item.id}</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                     <span className="text-gray-300 material-symbols-outlined text-sm group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all">open_in_new</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm font-medium">{t.brixLevel}</span>
                  <span className="text-white font-mono font-bold text-base">{item.brix}</span>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 text-sm font-medium">{t.confidence}</span>
                    <span className="text-[#964900] dark:text-[#ffb786] font-mono font-bold text-base">{item.confidence}</span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden relative">
                    <div className={`absolute top-0 left-0 h-full bg-gradient-to-r from-[#964900] to-[#f57c00] rounded-full ${item.progress} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out`}></div>
                    {/* Fallback solid line if not hovered */}
                    <div className={`absolute top-0 left-0 h-full bg-white/30 rounded-full ${item.progress}`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}