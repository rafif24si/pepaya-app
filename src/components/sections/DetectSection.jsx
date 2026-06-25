import { useState, useRef } from "react";

export default function DetectSection() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const fileInputRef = useRef(null);

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
    if (!file) return alert("Pilih gambar terlebih dahulu!");

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
    <section
      className="hero-gradient min-h-[819px] flex flex-col items-center justify-center px-gutter py-xl relative overflow-hidden"
      id="detect"
    >
      {/* Decorative blur blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-primary-container/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-secondary/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-lg items-center">
        {/* Kolom Kiri: Teks & Tombol */}
        <div className="lg:col-span-5 space-y-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 text-primary font-label-md border border-primary-container/20">
            <span className="material-symbols-outlined text-sm">
              auto_awesome
            </span>
            Precision Agriculture
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface md:text-headline-lg-mobile lg:text-display-lg">
            Automated <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary">
              Ripeness Detection
            </span>
          </h1>

          {/* ✅ Paragraf yang sudah diperbaiki */}
          <p
            className="text-lg leading-relaxed text-on-surface-variant"
            style={{ maxWidth: "500px" }}
          >
            Upload a cross-section image of a papaya to instantly analyze its
            ripeness classification, confidence score, and estimated shelf life
            using our advanced AI model.
          </p>

          <div className="flex gap-4 pt-4">
            <button
              onClick={triggerFileInput}
              className="bg-gradient-to-r from-primary-container to-tertiary-container text-white px-8 py-3 rounded-xl font-label-md hover:shadow-level-3 transition-all duration-300 flex items-center gap-2"
            >
              <span className="material-symbols-outlined">upload</span>
              Upload Image
            </button>
            <button className="bg-transparent border-2 border-primary-container text-primary-container px-8 py-3 rounded-xl font-label-md hover:bg-primary-container/5 transition-all duration-300">
              View API Docs
            </button>
          </div>
        </div>

        {/* Kolom Kanan: Upload Area + Hasil Deteksi */}
        <div className="lg:col-span-7">
          {/* Glassmorphism Upload Area */}
          <div className="glass-panel rounded-2xl p-md shadow-level-3 relative overflow-hidden group border border-outline-variant/50">
            <div className="absolute inset-0 bg-white/40 group-hover:bg-white/50 transition-colors duration-500"></div>
            <div
              onClick={triggerFileInput}
              className="relative z-10 border-2 border-dashed border-primary-container/40 rounded-xl p-xl flex flex-col items-center justify-center text-center bg-surface-bright/50 backdrop-blur-sm min-h-[400px] transition-all duration-300 hover:border-primary-container group-hover:bg-surface-bright/80 cursor-pointer"
            >
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
              />

              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="h-48 object-contain rounded-lg mb-4"
                />
              ) : (
                <div className="w-20 h-20 bg-primary-container/10 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <span
                    className="material-symbols-outlined text-primary-container text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    add_photo_alternate
                  </span>
                </div>
              )}

              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                {preview ? file.name : "Drag & Drop Image Here"}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                or click to browse from your device
              </p>
              <p className="font-mono-data text-mono-data text-outline">
                Supported formats: JPEG, PNG (Max 5MB)
              </p>

              {preview && (
                <button
                  onClick={handleUpload}
                  disabled={loading}
                  className="mt-4 bg-gradient-to-r from-primary-container to-tertiary-container text-white px-8 py-3 rounded-xl font-label-md hover:shadow-level-3 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined">
                    {loading ? "hourglass_empty" : "cloud_upload"}
                  </span>
                  {loading ? "Analyzing..." : "Process Image"}
                </button>
              )}
            </div>
          </div>

          {/* Hasil Deteksi */}
          <div className="mt-6">
            <div
              className={`glass-panel rounded-2xl p-6 shadow-level-3 border border-primary-container/30 ${
                !result && !loading ? "animate-pulse" : ""
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-headline-md text-on-surface">
                  Detection Results
                </h4>
                <span className="bg-primary-container text-white px-4 py-1 rounded-full font-label-md text-sm shadow-sm">
                  {result ? result.status : "RIPE"}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-primary-container/5 rounded-lg border border-primary-container/10">
                  <p className="text-xs text-on-surface-variant font-label-md uppercase mb-1">
                    Confidence Score
                  </p>
                  <p className="text-2xl font-display-lg text-primary">
                    {result ? result.confidence : "98.4%"}
                  </p>
                </div>
                <div className="p-3 bg-secondary/5 rounded-lg border border-secondary/10">
                  <p className="text-xs text-on-surface-variant font-label-md uppercase mb-1">
                    Shelf Life
                  </p>
                  <p className="text-2xl font-display-lg text-secondary">
                    {result ? result.shelfLife : "3-5 Days"}
                  </p>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                  <span className="text-body-md text-on-surface-variant">
                    Sugar Content (Brix)
                  </span>
                  <span className="font-mono-data text-primary font-bold">
                    {result ? result.brix : "12.5%"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-body-md text-on-surface-variant">
                    Surface Quality
                  </span>
                  <span className="font-mono-data text-secondary font-bold">
                    {result ? result.quality : "Optimal"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
