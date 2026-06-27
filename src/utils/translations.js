export const translations = {
  en: {
    nav: {
      home: "Home",
      detect: "Detect",
      education: "Education",
      history: "History"
    },
    hero: {
      titleLine1: "Deciphering",
      titleLine2: "Fruit Maturity",
      titleLine3: "via Neural Vision.",
      desc: "Advanced data mining for modern agronomy. Our CNN-powered analysis predicts ripeness, brix levels, and harvest windows with 99% precision.",
      startBtn: "Start Detection",
      methodologyBtn: "View Methodology",
      liveTracking: "Live Model Tracking",
      accuracy: "Current Accuracy: 98.4%",
      accuracyDesc: "Nearing peak harvest seasonal data ingestion."
    },
    detect: {
      title: "Automated Ripeness Detection",
      subtitle: "Ingest multi-spectral imagery for real-time agronomic profiling and precision yield forecasting.",
      uploadAlert: "Please select an image first!",
      processing: "Processing",
      systemReady: "System Ready",
      analysisProfile: "Analysis Profile",
      generateReport: "Generate Full Report",
      analyzingData: "Analyzing Data",
      inferredStage: "Inferred Stage",
      detectionResult: "Detection Result",
      categories: {
        unripe: {
          title: "Unripe",
          desc: "The papaya is still unripe. The skin is dominated by dark green colors, and the flesh is predicted to be very firm. Not yet suitable for direct consumption; requires about 3-5 days of ripening at room temperature."
        },
        ripe: {
          title: "Ripe",
          desc: "Excellent! The papaya is perfectly ripe. The visual skin shows an even reddish-orange hue, the flesh is soft, and the sweetness level is optimal. Highly recommended for immediate consumption."
        },
        rotten: {
          title: "Rotten",
          desc: "Warning: The papaya is detected as rotten. There are indications of tissue damage, decay, or fungal infection on the skin. The flesh is likely mushy and unsafe for consumption."
        },
        not_pepaya: {
          title: "Not a Papaya",
          desc: "The system could not detect a papaya in this image. Please ensure the uploaded image is clear, well-lit, and the main object is a papaya."
        }
      },
      defaultDesc: "Upload a papaya image and run the AI Analysis to see the ripeness detection results."
    },
    education: {
      title: "Papaya Ripeness Lifecycle",
      desc: "Understand the visual characteristics and estimated timeline of each papaya development phase to minimize waste and maximize harvest quality.",
      viewEncyclopedia: "View Encyclopedia",
      stages: [
        {
          id: "mentah",
          badge: "PHASE 01 - UNRIPE",
          title: "Unripe",
          description: "The skin is dominated by dark green colors, and the flesh is extremely firm with abundant white sap. The sugar content (Brix) is very low, making the taste rather bland. More suitable to be cooked as a vegetable.",
          timeInfo: "Est. Ripening: 7-10 Days",
          timeDesc: "Requires about 7-10 days of storage at room temperature to reach optimal ripeness."
        },
        {
          id: "matang",
          badge: "PHASE 02 - RIPE",
          title: "Ripe",
          description: "The skin turns yellow or orange. The flesh becomes tender, reddish, soft, and juicy. The sugar content reaches optimal levels, offering a sweet taste and distinct aroma.",
          timeInfo: "Shelf Life: 3-5 Days",
          timeDesc: "Ideally consumed within 3-5 days before the texture becomes too soft."
        },
        {
          id: "busuk",
          badge: "PHASE 03 - ROTTEN",
          title: "Rotten",
          description: "The skin shows black spots and wrinkles. The flesh is overly mushy, excessively watery, and emits a fermented odor. Susceptible to mold growth and unfit for consumption.",
          timeInfo: "Total Decay: 5-7 Days",
          timeDesc: "If left unrefrigerated after ripening, the fruit will completely decay in 5-7 days."
        }
      ]
    },
    history: {
      liveScan: "Live Scan History",
      title: "Recent Agronomic Profiles",
      desc: "Real-time telemetry from active field deployments and automated sorting lines. Monitoring crop quality continuously.",
      viewArchive: "View Full Archive",
      brixLevel: "Brix Level",
      confidence: "Confidence",
      items: ["UNRIPE", "RIPE", "ROTTEN"]
    },
    footer: {
      desc: "Empowering modern agriculture with precise, data-driven analytical tools for optimal harvest management.",
      product: {
        title: "Product",
        links: ["Detection Core", "Edge Inference", "API Documentation", "Pricing"]
      },
      company: {
        title: "Company",
        links: ["About Us", "Research", "Careers", "Contact"]
      },
      legal: {
        title: "Legal",
        links: ["Privacy Policy", "Terms of Service", "Data Security"]
      },
      rights: "© 2026 PapayaDetection. All rights reserved."
    }
  },
  id: {
    nav: {
      home: "Beranda",
      detect: "Deteksi",
      education: "Edukasi",
      history: "Riwayat"
    },
    hero: {
      titleLine1: "Membaca",
      titleLine2: "Kematangan Buah",
      titleLine3: "melalui Visi Neural.",
      desc: "Analisis agronomi modern. Sistem CNN kami mampu mendeteksi tingkat kematangan, brix, dan waktu panen dengan presisi 99%.",
      startBtn: "Mulai Deteksi",
      methodologyBtn: "Lihat Metodologi",
      liveTracking: "Pelacakan Model Langsung",
      accuracy: "Akurasi Saat Ini: 98.4%",
      accuracyDesc: "Mendekati puncak asupan data panen musiman."
    },
    detect: {
      title: "Deteksi Kematangan Otomatis",
      subtitle: "Gunakan citra untuk profil agronomi real-time dan perkiraan hasil panen yang presisi.",
      uploadAlert: "Pilih gambar terlebih dahulu!",
      processing: "Memproses",
      systemReady: "Sistem Siap",
      analysisProfile: "Profil Analisis",
      generateReport: "Buat Laporan Lengkap",
      analyzingData: "Menganalisis Data",
      inferredStage: "Estimasi Fase",
      detectionResult: "Hasil Deteksi",
      categories: {
        unripe: {
          title: "Unripe (Mentah)",
          desc: "Pepaya masih mentah. Kulit didominasi warna hijau gelap dengan tekstur daging yang diprediksi masih sangat keras. Belum cocok untuk dikonsumsi langsung, butuh waktu pemeraman sekitar 3-5 hari lagi pada suhu ruang."
        },
        ripe: {
          title: "Ripe (Matang)",
          desc: "Luar biasa! Pepaya terdeteksi matang sempurna. Visual kulit menunjukkan rona jingga kemerahan yang merata, tekstur daging buah lembut, dan tingkat kemanisan optimal. Sangat direkomendasikan untuk segera dikonsumsi."
        },
        rotten: {
          title: "Rotten (Busuk)",
          desc: "Perhatian: Pepaya terdeteksi busuk. Terdapat indikasi kerusakan jaringan, pembusukan, atau infeksi jamur pada kulit. Daging buah kemungkinan besar sudah lembek dan tidak aman untuk dikonsumsi."
        },
        not_pepaya: {
          title: "Bukan Pepaya",
          desc: "Sistem tidak dapat mendeteksi buah pepaya pada gambar ini. Pastikan gambar yang diunggah jelas, memiliki pencahayaan yang memadai, dan objek utama adalah buah pepaya."
        }
      },
      defaultDesc: "Upload gambar pepaya dan jalankan AI Analysis untuk melihat hasil deteksi kematangan."
    },
    education: {
      title: "Siklus Kematangan Pepaya",
      desc: "Pahami karakteristik visual dan estimasi waktu dari setiap fase perkembangan buah pepaya untuk meminimalisir pemborosan dan memaksimalkan kualitas panen.",
      viewEncyclopedia: "Lihat Ensiklopedia",
      stages: [
        {
          id: "mentah",
          badge: "FASE 01 - MENTAH",
          title: "Unripe (Mentah)",
          description: "Kulit buah didominasi warna hijau pekat dengan tekstur daging yang sangat keras dan getah putih melimpah. Kadar gula (Brix) masih sangat rendah sehingga rasa buah cenderung hambar, lebih cocok diolah menjadi sayuran.",
          timeInfo: "Estimasi Matang: 7-10 Hari",
          timeDesc: "Dibutuhkan sekitar 7-10 hari penyimpanan suhu ruang untuk mencapai kematangan optimal."
        },
        {
          id: "matang",
          badge: "FASE 02 - MATANG",
          title: "Ripe (Matang)",
          description: "Kulit buah berubah menjadi kuning atau jingga. Tekstur daging buah menjadi empuk, kemerahan, lembut, dan kaya air. Kandungan gula mencapai level optimal, menawarkan cita rasa manis dan aroma yang khas.",
          timeInfo: "Masa Simpan: 3-5 Hari",
          timeDesc: "Idealnya dikonsumsi dalam 3-5 hari sebelum teksturnya menjadi terlalu lembek."
        },
        {
          id: "busuk",
          badge: "FASE 03 - BUSUK",
          title: "Rotten (Busuk)",
          description: "Kulit memunculkan bercak hitam dan mengerut. Tekstur daging terlampau lembek, berair berlebihan, serta mengeluarkan bau fermentasi. Rentan terhadap pertumbuhan jamur dan tidak layak dikonsumsi.",
          timeInfo: "Pembusukan Total: 5-7 Hari",
          timeDesc: "Jika dibiarkan tanpa pendingin setelah matang, buah akan membusuk total dalam 5-7 hari."
        }
      ]
    },
    history: {
      liveScan: "Riwayat Pemindaian Langsung",
      title: "Profil Agronomi Terbaru",
      desc: "Telemetri real-time dari penyebaran lapangan aktif dan jalur penyortiran otomatis. Memantau kualitas panen secara berkesinambungan.",
      viewArchive: "Lihat Arsip Lengkap",
      brixLevel: "Tingkat Brix",
      confidence: "Keyakinan",
      items: ["MENTAH", "MATANG", "BUSUK"]
    },
    footer: {
      desc: "Memberdayakan pertanian modern dengan alat ukur presisi berbasis data untuk pengelolaan panen optimal.",
      product: {
        title: "Produk",
        links: ["Inti Deteksi", "Edge Inference", "Dokumentasi API", "Harga"]
      },
      company: {
        title: "Perusahaan",
        links: ["Tentang Kami", "Penelitian", "Karir", "Kontak"]
      },
      legal: {
        title: "Legal",
        links: ["Kebijakan Privasi", "Ketentuan Layanan", "Keamanan Data"]
      },
      rights: "© 2026 PapayaDetection. Hak Cipta Dilindungi."
    }
  }
};
