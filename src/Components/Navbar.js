"use client";
import { useLang } from "@/contexts/langContext";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const router = useRouter();
  const pathname = usePathname();

  const handleLangChange = (newLang) => {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", newLang);
    router.push(`${pathname}?${url.searchParams.toString()}`);
    setLang(newLang);
  };

  return (
    <nav className="p-4 bg-gray-100">
      <button onClick={() => handleLangChange("en")} className={`mr-2 ${lang === "en" ? "font-bold" : ""}`}>EN</button>
      <button onClick={() => handleLangChange("bn")} className={`${lang === "bn" ? "font-bold" : ""}`}>BN</button>
    </nav>
  );
}
