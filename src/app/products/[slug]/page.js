"use client";

import { useLang } from "@/contexts/langContext";
import Banner from "@/Components/Banner";
import Instructor from "@/Components/Instructor";
import CourseLaidOut from "@/Components/CourseLaidOut";
import Trailer from "@/Components/Trailer";

export default function ProductPage() {
  const { data } = useLang()
  if (!data) return <p className="text-slate-400 text-2xl">Loading.....</p>

  return (
    <>
      <main className="font-nunito">
        <Banner propData={data} />
        <div className="container">
          <ul className="flex justify-between">
            <li>
              <Instructor propData={data?.media} />
              <CourseLaidOut propData={data?.sections} />
            </li>
            <li className="w-[500px] mt-[-15%]">
              <Trailer propData={data?.media} />
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
