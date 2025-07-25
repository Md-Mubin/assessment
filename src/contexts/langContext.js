"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getData } from "@/Service/api";

const LangContext = createContext();

export const LangProvider = ({ slug, children }) => {
    
  const searchParams = useSearchParams();
  const [lang, setLang] = useState("en");
  const [data, setData] = useState(null);

  useEffect(() => {
    const urlLang = searchParams.get("lang");
    const storedLang = localStorage.getItem("lang");
    const finalLang = urlLang || storedLang || "en";

    setLang(finalLang);
  }, [searchParams]);

  useEffect(() => {
    if (!slug || !lang) return;

    const fetchData = async () => {
      try {
        const res = await getData.ielts_course_data(slug, lang);
        setData(res);
        localStorage.setItem("lang", lang);
      } catch (err) {
        console.error("Lang fetch error:", err);
      } 
    };

    fetchData();
  }, [slug, lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, data }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang must be used inside LangProvider");
  return context;
};
