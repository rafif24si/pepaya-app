import { useApp } from "../../context/AppContext";
import { translations } from "../../utils/translations";

export default function EducationSection() {
  const { lang } = useApp();
  const t = translations[lang].education;
  
  const stages = [
    {
      ...t.stages[0],
      imgSrc: "/img/mth.jpg",
      gradient: "from-emerald-500 to-emerald-700",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      ...t.stages[1],
      imgSrc: "/img/mtg.jpg",
      gradient: "from-[#964900] to-[#f57c00]",
      badgeColor: "bg-orange-50 text-[#964900] border-orange-200"
    },
    {
      ...t.stages[2],
      imgSrc: "/img/b60.jpg", 
      gradient: "from-rose-600 to-rose-800",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200"
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-[#fffdfa] pt-24 pb-16 px-6 md:px-10 relative overflow-hidden" id="education">
      {/* Background Dots & Decorations */}
      <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-r from-transparent via-[#964900]/5 to-transparent blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6 relative z-10" data-aos="fade-up">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-display-lg font-extrabold text-[#1a1a1a] mb-3 tracking-tight uppercase">
              {t.title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed">
              {t.desc}
            </p>
          </div>
          <button className="text-[#964900] font-bold flex items-center gap-2 hover:text-[#1a1a1a] transition-all whitespace-nowrap group bg-white border border-[#964900]/20 hover:border-[#964900]/50 shadow-sm hover:shadow-md px-6 py-3 rounded-full">
            {t.viewEncyclopedia} <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">chevron_right</span>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10 relative z-10">
          {stages.map((stage, index) => (
            <div
              key={stage.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden flex flex-col h-full shadow-[0_15px_40px_rgba(150,73,0,0.08)] border border-white hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(150,73,0,0.15)] transition-all duration-500 group"
            >
              {/* Image Container with strict 16:9 aspect ratio */}
              <div className="aspect-[16/9] w-full relative bg-gray-50 overflow-hidden rounded-t-3xl">
                <img
                  alt={stage.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  src={stage.imgSrc}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1517282009859-f000eca3bca2?q=80&w=600&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Text Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 bg-white">
                <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-[10px] font-bold tracking-[0.2em] mb-4 w-fit border border-gray-200 group-hover:bg-[#964900] group-hover:text-white transition-colors duration-300">
                  {stage.badge}
                </div>

                <h3 className="text-2xl font-display-lg font-black text-[#1a1a1a] mb-3 tracking-tight uppercase">
                  {stage.title}
                </h3>
                <p className="text-gray-700 text-[15px] leading-relaxed mb-8 flex-grow font-semibold">
                  {stage.description}
                </p>

                {/* Timeline Info Card - Bento Style */}
                <div className="mt-auto bg-white/80 rounded-2xl p-5 border border-gray-200 group-hover:bg-[#fffcf7] group-hover:border-[#964900]/30 transition-colors duration-300 flex flex-col gap-2 shadow-sm">
                  <div className={`flex items-center gap-2 font-black bg-gradient-to-r ${stage.gradient} bg-clip-text text-transparent uppercase tracking-tight`}>
                    <span className="material-symbols-outlined text-xl">schedule</span>
                    {stage.timeInfo}
                  </div>
                  <p className="text-[14px] text-gray-600 leading-relaxed font-medium">
                    {stage.timeDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}