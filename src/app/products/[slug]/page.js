"use client";

import { useLang } from "@/contexts/langContext";
import Banner from "@/Components/Banner";
import Instructor from "@/Components/Instructor";
import CourseLaidOut from "@/Components/CourseLaidOut";

export default function ProductPage() {
  const { data } = useLang()
  if (!data) return <p className="text-red-600 p-4"></p>
  return (
    <>
      <main className="font-nunito relative z-20">
        <Banner propData={data} />
        <Instructor propData={data?.media} />
        <CourseLaidOut propData={data?.sections}/>
      </main>
    </>
  );
}
