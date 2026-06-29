import { useState } from "react";
import { createPortal } from "react-dom";
import { useApp } from "../../context/AppContext";
import { translations } from "../../utils/translations";

export default function HistorySection() {
  const [showModal, setShowModal] = useState(false);
  const [isClosingArchive, setIsClosingArchive] = useState(false);
  
  const [selectedItem, setSelectedItem] = useState(null);
  const [isClosingItem, setIsClosingItem] = useState(false);

  const { lang, scanHistory } = useApp();
  const t = translations[lang].history;

  const dummyItems = [
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

  const displayItems = scanHistory && scanHistory.length > 0 ? scanHistory : dummyItems;

  const getBadgeBg = (bg) => {
    if (!bg) return "bg-gray-500/90";
    if (bg.includes("500")) return bg;
    return bg.replace("50", "500/90");
  };

  const handleCloseArchive = () => {
    setIsClosingArchive(true);
    setTimeout(() => {
      setShowModal(false);
      setIsClosingArchive(false);
    }, 300);
  };

  const handleCloseItem = () => {
    setIsClosingItem(true);
    setTimeout(() => {
      setSelectedItem(null);
      setIsClosingItem(false);
    }, 300);
  };

  return (
    <>
      <section className="bg-[#fdfaf7] min-h-screen py-16 px-6 md:px-10 relative overflow-hidden transition-colors duration-500 flex flex-col justify-center" id="history">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#964900]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
              </div>
              <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">{t.liveScan}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-display-lg font-black text-[#1a1a1a] mb-3">
              {t.title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {t.desc}
            </p>
          </div>
          <button onClick={() => setShowModal(true)} className="px-5 py-2.5 text-sm rounded-full border border-[#964900]/20 text-[#1a1a1a] font-semibold flex items-center gap-2 hover:bg-[#964900] hover:text-white transition-all duration-300 group shadow-sm">
            {t.viewArchive} <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>

        {/* History Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {displayItems.map((item, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedItem(item)}
              className="bg-white border border-[#964900]/10 rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-2 hover:border-[#964900]/30 hover:shadow-[0_20px_40px_rgba(150,73,0,0.1)] transition-all duration-500 cursor-pointer shadow-sm"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Section */}
              <div className="h-44 relative bg-gray-100 overflow-hidden">
                <img
                  alt={item.status}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                  src={item.imgSrc}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1517282009859-f000eca3bca2?q=80&w=600&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                {/* Badge Overlay */}
                <div className={`absolute top-4 right-4 ${getBadgeBg(item.badgeBg)} backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                  {item.status}
                </div>
              </div>

              {/* Info Section */}
              <div className="p-5 md:p-6 flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-4 group-hover:border-gray-200 transition-colors">
                  <span className="text-gray-500 text-sm font-bold uppercase tracking-wider">{item.id}</span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#964900]/10 transition-colors">
                     <span className="text-gray-400 material-symbols-outlined text-sm group-hover:text-[#964900] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all">open_in_new</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm font-medium">{t.brixLevel}</span>
                  <span className="text-[#1a1a1a] font-mono font-bold text-base">{item.brix}</span>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 text-sm font-medium">{t.confidence}</span>
                    <span className="text-[#964900] font-mono font-bold text-base">{item.confidence}</span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden relative">
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#964900] to-[#f57c00] rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out"
                      style={{ width: typeof item.progress === 'number' ? `${item.progress}%` : (item.progress.replace('w-[', '').replace(']', '') || '0%') }}
                    ></div>
                    {/* Fallback solid line if not hovered */}
                    <div 
                      className="absolute top-0 left-0 h-full bg-gray-200 rounded-full"
                      style={{ width: typeof item.progress === 'number' ? `${item.progress}%` : (item.progress.replace('w-[', '').replace(']', '') || '0%') }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* Modal / Pop-up Full Archive */}
      {showModal && createPortal(
        <div 
          className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${isClosingArchive ? 'opacity-0' : 'opacity-100'}`}
          onClick={handleCloseArchive}
        >
          <div 
            className={`bg-white border border-[#964900]/10 rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl relative transition-all duration-300 ${isClosingArchive ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-[#1a1a1a]">Full Analysis Archive</h3>
              <button 
                onClick={handleCloseArchive}
                className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-200 text-gray-500 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {displayItems.length > 0 ? (
                displayItems.map((item, index) => (
                  <div key={index} onClick={() => setSelectedItem(item)} className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform cursor-pointer hover:border-[#964900]/30 hover:shadow-md">
                    <div className="h-32 relative bg-gray-100">
                      <img
                        alt={item.status}
                        className="w-full h-full object-cover opacity-90"
                        src={item.imgSrc}
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1517282009859-f000eca3bca2?q=80&w=600&auto=format&fit=crop';
                        }}
                      />
                      <div className={`absolute top-2 right-2 ${getBadgeBg(item.badgeBg)} backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest`}>
                        {item.status}
                      </div>
                    </div>
                    <div className="p-4 flex flex-col gap-2">
                      <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                        <span className="text-gray-500 text-xs font-bold uppercase">{item.id}</span>
                        <span className="text-[#964900] font-mono font-bold text-xs">{item.confidence}</span>
                      </div>
                      <div className="text-gray-500 text-xs mt-1">
                        Brix Level: <span className="text-[#1a1a1a] font-bold font-mono">{item.brix}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center text-gray-500 py-10">No history available.</div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Modal / Pop-up Single Item */}
      {selectedItem && createPortal(
        <div 
          className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300 ${isClosingItem ? 'opacity-0' : 'opacity-100'}`}
          onClick={handleCloseItem}
        >
          <div 
            className={`bg-white border border-[#964900]/10 rounded-3xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden shadow-2xl relative transition-all duration-300 ${isClosingItem ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={handleCloseItem}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-black/70 text-white transition-colors z-20 border border-white/20 shadow-lg"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Image Section */}
            <div className="w-full md:w-3/5 bg-gray-100 relative min-h-[350px] md:min-h-[500px]">
              <img
                alt={selectedItem.status}
                className="w-full h-full object-contain absolute inset-0 drop-shadow-md"
                src={selectedItem.imgSrc}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1517282009859-f000eca3bca2?q=80&w=600&auto=format&fit=crop';
                }}
              />
            </div>

            {/* Info Section */}
            <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-center bg-gradient-to-br from-[#fdfaf7] to-white border-l border-gray-100">
              <div className={`inline-flex self-start ${getBadgeBg(selectedItem.badgeBg)} text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-lg`}>
                {selectedItem.status}
              </div>
              
              <h3 className="text-3xl font-black text-[#1a1a1a] tracking-tight mb-2 uppercase">{selectedItem.id}</h3>
              <p className="text-gray-500 text-sm mb-8">{selectedItem.timestamp ? new Date(selectedItem.timestamp).toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'short' }) : 'Unknown Date'}</p>

              <div className="space-y-4">
                <div className="bg-white border border-[#964900]/10 shadow-sm rounded-2xl p-5 hover:border-[#964900]/30 transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-500 text-sm font-medium">{t.brixLevel}</span>
                    <span className="material-symbols-outlined text-gray-400 text-sm">science</span>
                  </div>
                  <div className="text-[#1a1a1a] font-mono font-bold text-2xl">{selectedItem.brix}</div>
                </div>
                
                <div className="bg-white border border-[#964900]/10 shadow-sm rounded-2xl p-5 hover:border-[#964900]/30 transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-500 text-sm font-medium">{t.confidence}</span>
                    <span className="material-symbols-outlined text-[#f57c00] text-sm">psychiatry</span>
                  </div>
                  <div className="text-[#f57c00] font-mono font-bold text-2xl">{selectedItem.confidence}</div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}