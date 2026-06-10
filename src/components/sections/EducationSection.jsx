// components/sections/EducationSection.jsx
export default function EducationSection() {
  const stages = [
    {
      id: "unripe",
      label: "Unripe",
      bgClass: "bg-secondary",
      title: "Stage 1: Unripe",
      description:
        "Firm texture, entirely green skin, pale interior flesh, and white seeds. Minimal sugar content.",
      storage: "Storage: 10-12°C",
      icon: "thermostat",
      imgSrc:
        "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=600", // Ganti dengan URL asli jika tersedia
      imgAlt: "Unripe Papaya",
    },
    {
      id: "ripe",
      label: "Ripe",
      bgClass: "bg-primary-container",
      title: "Stage 2: Ripe",
      description:
        "Soft flesh, orange-red interior, mature black seeds. Peak sugar content and optimal flavor profile.",
      storage: "Ready for Market",
      icon: "local_shipping",
      imgSrc:
        "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?q=80&w=600",
      imgAlt: "Ripe Papaya",
    },
    {
      id: "rotten",
      label: "Critical",
      bgClass: "bg-tertiary",
      title: "Stage 3: Overripe/Rotten",
      description:
        "Mushy texture, dark spots, mold formation, and structural breakdown. Unfit for consumption.",
      storage: "Cull Immediately",
      icon: "delete",
      // Untuk Rotten, kita gunakan placeholder ikon karena tidak ada gambar
      imgPlaceholder: true,
    },
    {
      id: "invalid",
      label: "Invalid",
      bgClass: "bg-surface-tint",
      title: "Out of Distribution",
      description:
        "Image does not contain a recognizable cross-section of a papaya. Ensure proper framing and lighting.",
      storage: "Retake Photo",
      icon: "photo_camera",
      imgPlaceholder: true,
    },
  ];

  return (
    <section
      className="px-gutter py-xl bg-surface-bright border-y border-outline-variant/30"
      id="education"
    >
      <div className="max-w-container-max mx-auto w-full">
        <div className="text-center mb-lg space-y-4 max-w-2xl mx-auto">
          <h2 className="font-display-lg text-headline-lg text-on-surface">
            Ripeness Education Center
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Understand the visual markers our AI uses to classify papaya
            development stages. This reference guide helps agronomists calibrate
            local field assessments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
          {stages.map((stage) => (
            <div
              key={stage.id}
              className="bg-white rounded-xl shadow-level-1 overflow-hidden border border-outline-variant/20 hover:shadow-level-3 transition-shadow duration-300 group"
            >
              <div className="h-48 bg-surface-variant relative overflow-hidden">
                {stage.imgPlaceholder ? (
                  <div className="w-full h-full bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-outline text-6xl">
                      {stage.id === "rotten" ? "coronavirus" : "help_outline"}
                    </span>
                  </div>
                ) : (
                  <img
                    alt={stage.imgAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={stage.imgSrc}
                  />
                )}
                <div
                  className={`absolute top-4 left-4 ${stage.bgClass} text-white px-3 py-1 rounded-full font-label-md text-xs shadow-sm z-10`}
                >
                  {stage.label}
                </div>
              </div>

              <div className="p-md">
                <h3 className="font-headline-md text-[20px] text-on-surface mb-2">
                  {stage.title}
                </h3>
                <p className="font-body-md text-[14px] text-on-surface-variant mb-4">
                  {stage.description}
                </p>
                <div
                  className={`flex items-center gap-2 text-${
                    stage.id === "unripe"
                      ? "secondary"
                      : stage.id === "ripe"
                      ? "primary-container"
                      : stage.id === "rotten"
                      ? "tertiary"
                      : "surface-tint"
                  } font-mono-data text-xs bg-${
                    stage.id === "unripe"
                      ? "secondary/10"
                      : stage.id === "ripe"
                      ? "primary-container/10"
                      : stage.id === "rotten"
                      ? "tertiary/10"
                      : "surface-tint/10"
                  } px-2 py-1 rounded w-fit`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {stage.icon}
                  </span>
                  {stage.storage}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}