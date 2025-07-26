"use client";

import { useLang } from "@/contexts/langContext";
import Banner from "@/Components/Banner";
import Instructor from "@/Components/Instructor";
import CourseLaidOut from "@/Components/CourseLaidOut";
import Trailer from "@/Components/Trailer";
import LearnFromCourse from "@/Components/LearnFromCourse";
import ExclusiveFeat from "@/Components/ExclusiveFeat";
import CourseDetails from "@/Components/CourseDetails";
import CTA_text from "@/Components/CTA_text";
import CheckList from "@/Components/CheckList";

export default function ProductPage() {
  const { data } = useLang()
  if (!data) return <p className="text-slate-400 text-2xl">Loading.....</p>

  return (
    <>
      <main className="font-nunito">
        <Banner propData={{ title: data?.title, description: data?.description }} />
        <div className="container">
          <ul className="flex justify-between">
            <li className="w-[650px]">
              <Instructor propData={data?.sections} />
              <CourseLaidOut propData={data?.sections} />
              <LearnFromCourse propData={data?.sections} />
              <ExclusiveFeat propData={data?.sections} />
              <CourseDetails propData={data?.description} />
            </li>
            <li className="w-[500px] mt-[-15%]">
              <Trailer propData={data?.media} />
              <CTA_text propData={data?.cta_text}/>
              <CheckList propData={data?.checklist}/>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
