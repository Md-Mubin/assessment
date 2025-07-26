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
    <nav className=" py-2 bg-gray-100">
      <div className="container text-end">
        <button
          onClick={lang === "en" ? () => handleLangChange("bn") : () => handleLangChange("en")}
          className={`py-3 px-8 rounded-lg duration-200 cursor-pointer hover:bg-slate-400 bg-slate-500 font-nunito font-semibold tracking-widest text-lg text-white`}>
          {lang === "en" ? "BN" : "EN"}
        </button>
      </div>
    </nav>
  );
}
