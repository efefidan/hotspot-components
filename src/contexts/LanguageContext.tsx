// src/contexts/LanguageContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Dil context yapısı
type LanguageContextType = {
  language: string;
  changeLanguage: (lang: string) => void;
};

// Dil context'i oluştur
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook ile context'i kullanma
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
