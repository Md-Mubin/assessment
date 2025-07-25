"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const changeLang = (lang) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", lang);

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <nav className="p-4 bg-gray-100">
      <button
        onClick={() => changeLang("en")}
        className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        English
      </button>
      <button
        onClick={() => changeLang("bn")}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Bangla
      </button>
    </nav>
  );
}
