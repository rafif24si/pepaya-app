import { useState, useRef } from "react";
import { useApp } from "../../context/AppContext";
import { translations } from "../../utils/translations";

export default function DetectSection() {
  const { lang } = useApp();
  const t = translations[lang].detect;
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const fileInputRef = useRef(null);

  const categoryInfo = {
    "unripe": {
      title: t.categories.unripe.title,
      desc: t.categories.unripe.desc,
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-200",
      icon: "eco",
      ripeness: 35,
      consumptionId: "Belum Layak Konsumsi",
      consumptionEn: "Not Ready to Eat"
    },
    "ripe": {
      title: t.categories.ripe.title,
      desc: t.categories.ripe.desc,
      color: "text-orange-500",
      bg: "bg-orange-50",
      border: "border-orange-200",
      icon: "check_circle",
      ripeness: 95,
      consumptionId: "Sangat Layak Konsumsi",
      consumptionEn: "Perfect to Eat"
    },
    "rotten": {
      title: t.categories.rotten.title,
      desc: t.categories.rotten.desc,
      color: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-200",
      icon: "warning",
      ripeness: 100,
      consumptionId: "Tidak Layak Konsumsi",
      consumptionEn: "Unfit for Consumption"
    },
    "not_pepaya": {
      title: t.categories.not_pepaya.title,
      desc: t.categories.not_pepaya.desc,
      color: "text-gray-500",
      bg: "bg-gray-50",
      border: "border-gray-200",
      icon: "help",
      ripeness: 0,
      consumptionId: "Bukan Objek Pepaya",
      consumptionEn: "Not a Papaya Object"
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setResult(null);
    }
  };

  const triggerFileInput = (e) => {
    e.stopPropagation();
    fileInputRef.current.click();
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!file) return alert(t.uploadAlert);

    setLoading(true);
    setTimeout(() => {
      setResult({
        status: "RIPE",
        confidence: "98.4%",
        shelfLife: "3-5 Days",
        brix: "12.5%",
        quality: "Optimal",
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <section className="bg-[#fdfaf7] pt-24 pb-16 px-6 md:px-10 relative overflow-hidden" id="detect">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#964900]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Polka dot background */}
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-16 relative z-10" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white shadow-sm border border-[#964900]/10 mb-8 hover:shadow-md transition-shadow">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_12px_rgba(34,197,94,0.9)] relative z-10"></div>
            <span className="text-[12px] font-bold text-gray-800 uppercase tracking-widest relative z-10">{t.systemReady}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-display-lg font-black text-[#1a1a1a] mb-3 tracking-tight uppercase text-center">
            {t.title.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#964900] to-[#f57c00]">{t.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-gray-700 text-sm md:text-base max-w-[600px] text-center leading-relaxed font-medium">{t.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 relative z-10">
          {/* Left: Upload Card */}
          <div className="lg:col-span-3 flex flex-col gap-6" data-aos="fade-right" data-aos-delay="100">
            <div className="bg-white/95 backdrop-blur-3xl border border-white shadow-[0_20px_60px_rgba(150,73,0,0.1)] rounded-[32px] p-6 flex flex-col items-center justify-center overflow-hidden relative transition-all duration-700 hover:shadow-[0_30px_70px_rgba(150,73,0,0.15)] hover:-translate-y-1 group">
              <input type="file" accept="image/png, image/jpeg" className="hidden" ref={fileInputRef} onChange={handleFileChange} />
              
              <div 
                onClick={triggerFileInput}
                className={`w-full aspect-[16/9] border-2 border-dashed ${file ? 'border-[#964900] bg-gradient-to-br from-[#964900]/10 to-[#f57c00]/5' : 'border-[#964900]/30 bg-gradient-to-b from-gray-50/50 to-white hover:from-[#fffdfa] hover:to-[#fff9f0] hover:border-[#964900]/50'} rounded-[24px] flex flex-col items-center justify-center cursor-pointer transition-all duration-500 relative overflow-hidden`}
              >
                {preview ? (
                  <div className="relative w-full h-full p-2 flex flex-col items-center justify-center">
                    <div className="relative w-full h-full">
                        <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-[24px] shadow-lg" />
                        {loading && (
                          <div className="absolute inset-0 z-10 pointer-events-none rounded-[24px] overflow-hidden">
                            <div className="w-full h-1 bg-[#f57c00] shadow-[0_0_15px_rgba(245,124,0,0.8)] absolute top-0 left-0 animate-[scan_2s_ease-in-out_infinite]"></div>
                            <div className="w-full h-full bg-[#f57c00]/10 absolute top-0 left-0 animate-[pulse_2s_ease-in-out_infinite]"></div>
                          </div>
                        )}
                        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20 flex items-center gap-2 cursor-pointer z-20">
                          <span className="material-symbols-outlined text-[#964900] text-sm">edit</span>
                          <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">Change</span>
                        </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center p-8 text-center w-full max-w-[400px]">
                    <div className="w-24 h-24 bg-white rounded-full shadow-[0_10px_30px_rgba(150,73,0,0.1)] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 border border-white relative">
                      <div className="absolute inset-0 rounded-full border border-[#964900]/30 scale-[1.2] opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"></div>
                      <span className="material-symbols-outlined text-5xl text-[#964900]/40 group-hover:text-[#964900] transition-colors">cloud_upload</span>
                    </div>
                    <h3 className="text-3xl font-display-lg font-black text-[#964900] mb-3">Drop crop data here</h3>
                    <p className="text-base text-gray-700 font-medium w-full">Upload high-resolution images of papaya samples to begin analysis.</p>
                  </div>
                )}
              </div>
              
              {preview && (
                <button
                  onClick={handleUpload}
                  disabled={loading}
                  className="w-full mt-6 bg-[#1a1a1a] text-white py-4 rounded-full font-bold hover:bg-[#964900] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  {loading ? (
                    <><span className="material-symbols-outlined animate-spin text-base">progress_activity</span> {t.analyzingData}</>
                  ) : (
                    <><span className="material-symbols-outlined text-xl">auto_fix_high</span> Run AI Analysis</>
                  )}
                </button>
              )}
            </div>
          </div>
          
          {/* Right Column: Results */}
          <div className="lg:col-span-2 flex flex-col h-full" data-aos="fade-left" data-aos-delay="200">
            <div className="bg-white/95 backdrop-blur-3xl border border-white shadow-[0_20px_60px_rgba(150,73,0,0.1)] rounded-[32px] p-6 lg:p-8 flex-grow flex flex-col justify-center transition-all duration-700 hover:shadow-[0_30px_70px_rgba(150,73,0,0.15)] hover:-translate-y-1">
              <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-5">
                <h3 className="font-extrabold text-[#1a1a1a] text-xl uppercase tracking-widest">{t.analysisProfile}</h3>
              </div>
              
              {!result && !loading ? (
                <div className="flex flex-col items-center justify-center text-center h-full min-h-[350px]">
                  <div className="w-24 h-24 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-8 shadow-inner">
                    <span className="material-symbols-outlined text-5xl text-gray-300">psychiatry</span>
                  </div>
                  <p className="text-gray-500 font-bold text-sm px-4">
                    {t.defaultDesc}
                  </p>
                </div>
              ) : loading ? (
                <div className="flex flex-col items-center justify-center text-center h-full min-h-[350px] animate-pulse">
                  <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                    <svg className="animate-spin w-full h-full text-[#964900]/20 absolute" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="material-symbols-outlined text-3xl text-[#964900] absolute">memory</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{t.analyzingData}</h3>
                  <p className="text-gray-500 text-sm">Running deep convolutional neural networks...</p>
                </div>
              ) : (
                <div className="flex flex-col h-full animate-in fade-in zoom-in duration-500">
                  <div className={`rounded-[36px] p-8 border border-white/80 flex flex-col justify-center relative overflow-hidden mb-6 h-full min-h-[320px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] bg-gradient-to-br transition-all duration-700 ${categoryInfo[result?.status?.toLowerCase()]?.bg}`}>
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shadow-inner border border-gray-100">
                          <span className={`material-symbols-outlined text-2xl ${categoryInfo[result?.status?.toLowerCase()]?.color}`}>
                            {categoryInfo[result?.status?.toLowerCase()]?.icon}
                          </span>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{t.inferredStage}</div>
                          <h4 className={`text-2xl font-black uppercase tracking-tight ${categoryInfo[result?.status?.toLowerCase()]?.color}`}>
                            {categoryInfo[result?.status?.toLowerCase()]?.title}
                          </h4>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 text-sm leading-relaxed mb-6 font-medium">
                        {categoryInfo[result?.status?.toLowerCase()]?.desc}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-white/50">
                           <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Confidence</span>
                           <span className="font-mono font-bold text-lg text-[#1a1a1a]">{result.confidence}</span>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-white/50">
                           <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Est. Brix</span>
                           <span className="font-mono font-bold text-lg text-[#1a1a1a]">{result.brix}</span>
                        </div>
                      </div>

                      {/* Ripeness Progress Bar & Consumption Status */}
                      <div className="mt-4 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50 mb-4">
                        <div className="flex justify-between items-end mb-2">
                          <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">{lang === 'id' ? 'Tingkat Kematangan' : 'Ripeness Level'}</span>
                          <span className="font-mono font-bold text-[#1a1a1a]">{categoryInfo[result?.status?.toLowerCase()]?.ripeness}%</span>
                        </div>
                        <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                          <div 
                            className={`h-full rounded-full transition-all duration-1000 ${categoryInfo[result?.status?.toLowerCase()]?.bg.replace('50', '500')}`} 
                            style={{ width: `${categoryInfo[result?.status?.toLowerCase()]?.ripeness}%` }}
                          ></div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-200/50 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{lang === 'id' ? 'Status Konsumsi' : 'Consumption'}</span>
                          <span className={`text-xs font-bold px-3 py-1.5 rounded-lg border ${categoryInfo[result?.status?.toLowerCase()]?.bg} ${categoryInfo[result?.status?.toLowerCase()]?.color} ${categoryInfo[result?.status?.toLowerCase()]?.border}`}>
                            {lang === 'id' ? categoryInfo[result?.status?.toLowerCase()]?.consumptionId : categoryInfo[result?.status?.toLowerCase()]?.consumptionEn}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full py-4 mt-auto bg-white/80 backdrop-blur-sm hover:bg-white text-[#1a1a1a] rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 border border-gray-200 group text-sm shadow-sm hover:shadow-md">
                    <span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform duration-300 text-lg">download</span>
                    {t.generateReport}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Separator / Scrolling Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-white/70 backdrop-blur-md border-y border-[#964900]/10 py-3.5 z-20 shadow-[0_-5px_20px_rgba(150,73,0,0.05)]">
        <div className="flex w-[200%] animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center justify-around w-1/2 px-4 shrink-0">
              {['SMART AGRICULTURE', 'DATA-DRIVEN', 'HARVEST READY', 'PRECISION FARMING'].map((text, j) => (
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
