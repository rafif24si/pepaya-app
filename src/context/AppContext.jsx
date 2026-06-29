import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'en';
  });

  // State untuk menyimpan riwayat deteksi
  const [scanHistory, setScanHistory] = useState(() => {
    const saved = localStorage.getItem('scanHistory');
    return saved ? JSON.parse(saved) : [];
  });

  // Ensure dark mode is completely removed if previously set
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark');
  }, []);

  // Persist language
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  // Persist history ke localStorage (terbatas 5MB)
  useEffect(() => {
    try {
      localStorage.setItem('scanHistory', JSON.stringify(scanHistory));
    } catch (e) {
      console.warn("LocalStorage penuh, gagal menyimpan history", e);
    }
  }, [scanHistory]);

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'id' : 'en'));
  };

  const addScanToHistory = (scanItem) => {
    setScanHistory(prev => {
      // Simpan max 5 scan terakhir agar LocalStorage tidak cepat penuh (error 5MB)
      return [scanItem, ...prev].slice(0, 5);
    });
  };

  return (
    <AppContext.Provider value={{ lang, toggleLang, scanHistory, addScanToHistory }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
