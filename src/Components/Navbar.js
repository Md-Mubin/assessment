"use client"
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const lang = searchParams.get("lang") || "bn";
  const newLang = lang === "bn" ? "en" : "bn";

  const url = new URLSearchParams(searchParams);
  url.set("lang", newLang);

  return (
    <>
      <nav className="py-2 bg-gray-100 sticky top-0 z-100">
        <div className="container text-end">
          <Link
            href={`${pathname}?${url.toString()}`}>
            <button className="py-3 px-8 rounded-lg duration-200 cursor-pointer hover:bg-slate-400 bg-slate-500 font-nunito font-semibold tracking-widest text-lg text-white">
              {lang === "bn" ? "EN" : "BN"}
            </button>
          </Link>
        </div>
      </nav>
    </>
  )
}
