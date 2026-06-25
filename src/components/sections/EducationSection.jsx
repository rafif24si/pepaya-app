// src/components/sections/EducationSection.jsx
export default function EducationSection() {
  const stages = [
    {
      id: "mentah",
      label: "Fase 1: Mentah",
      badge: "UNRIPE",
      gradient: "from-secondary to-secondary-fixed-dim",
      shadow: "hover:shadow-secondary/30",
      description:
        "Pepaya mentah memiliki kulit berwarna hijau pekat dan daging buah yang keras serta berwarna pucat. Kandungan gulanya (Brix) masih sangat rendah sehingga rasanya belum manis.",
      timeInfo: "Waktu menuju matang: 7-10 hari",
      timeDesc: "Dibutuhkan sekitar 7 hingga 10 hari penyimpanan pada suhu ruang agar buah mencapai tingkat kematangan optimal.",
      icon: "eco",
      // Ganti nama file ini sesuai dengan yang ada di folder public/img kamu
      imgSrc: "/img/mth.jpg", 
      imgPlaceholder: false,
    },
    {
      id: "matang",
      label: "Fase 2: Matang",
      badge: "RIPE",
      gradient: "from-primary-container to-tertiary-container",
      shadow: "hover:shadow-primary-container/30",
      description:
        "Ditandai dengan kulit yang menguning atau jingga, daging buah yang empuk, kemerahan, dan berair. Kandungan gula dan profil rasa berada pada tingkat paling optimal untuk dikonsumsi.",
      timeInfo: "Masa simpan (Shelf life): 3-5 hari",
      timeDesc: "Setelah matang, pepaya idealnya dipanen atau dikonsumsi dalam waktu 3-5 hari sebelum teksturnya menjadi terlalu lembek.",
      icon: "task_alt",
      // Ganti nama file ini sesuai dengan yang ada di folder public/img kamu
      imgSrc: "/img/mtg.jpg",
      imgPlaceholder: false,
    },
    {
      id: "busuk",
      label: "Fase 3: Busuk",
      badge: "ROTTEN",
      gradient: "from-tertiary to-error",
      shadow: "hover:shadow-tertiary/30",
      description:
        "Menunjukkan tanda kerusakan fisik seperti bintik hitam berlebih, daging yang terlalu lembek (mushy), berair, dan mulai ditumbuhi jamur. Aroma fermentasi menyengat akan tercium dan tidak layak konsumsi.",
      timeInfo: "Waktu pembusukan: 5-7 hari",
      timeDesc: "Jika dibiarkan pada suhu ruang tanpa pendingin setelah masa matang terlewati, buah akan membusuk total dalam 5-7 hari.",
      icon: "coronavirus",
      // Ganti nama file ini sesuai dengan yang ada di folder public/img kamu
      imgSrc: "/img/b60.jpg", 
      imgPlaceholder: false, // Diubah menjadi false agar gambar ditampilkan
    },
  ];

  return (
    <section className="px-gutter py-xl bg-surface-container-lowest relative overflow-hidden" id="education">
      {/* Dekorasi Background */}
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-surface-variant/40 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-container-max mx-auto w-full">
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container border border-outline-variant/30 text-on-surface font-label-md">
            <span className="material-symbols-outlined text-sm text-primary-container">menu_book</span>
            Pusat Pengetahuan
          </div>
          <h2 className="font-display-lg text-[40px] text-on-surface leading-tight">
            Siklus Kematangan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary">Pepaya</span>
          </h2>
          <p className="font-body-lg text-on-surface-variant">
            Pahami karakteristik visual dan estimasi waktu dari setiap fase perkembangan buah pepaya untuk memaksimalkan kualitas panen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stages.map((stage) => (
            <div
              key={stage.id}
              className={`bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-outline-variant/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${stage.shadow} group flex flex-col`}
            >
              {/* Gambar / Visual */}
              <div className="h-56 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                {stage.imgPlaceholder ? (
                  <div className={`w-full h-full bg-gradient-to-br ${stage.gradient} flex items-center justify-center opacity-80`}>
                    <span className="material-symbols-outlined text-white/50 text-8xl group-hover:scale-110 transition-transform duration-500">
                      {stage.icon}
                    </span>
                  </div>
                ) : (
                  <img
                    alt={stage.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={stage.imgSrc}
                  />
                )}
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${stage.gradient} text-white px-4 py-1.5 rounded-full font-label-md text-xs shadow-lg z-20 font-bold tracking-wider`}>
                  {stage.badge}
                </div>
              </div>

              {/* Konten Text */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="font-headline-md text-2xl text-on-surface mb-3 flex items-center gap-2">
                  {stage.label}
                </h3>
                <p className="font-body-md text-on-surface-variant mb-6 flex-grow leading-relaxed">
                  {stage.description}
                </p>
                
                {/* Time Estimation Card */}
                <div className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/20">
                  <div className={`flex items-center gap-2 font-label-md mb-2 bg-gradient-to-r ${stage.gradient} bg-clip-text text-transparent`}>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                    {stage.timeInfo}
                  </div>
                  <p className="text-sm text-on-surface-variant/80">
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