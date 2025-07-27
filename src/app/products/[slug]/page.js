import Banner from "@/Components/Banner";
import Instructor from "@/Components/Instructor";
import CourseLaidOut from "@/Components/CourseLaidOut";
import Trailer from "@/Components/Trailer";
import LearnFromCourse from "@/Components/LearnFromCourse";
import ExclusiveFeat from "@/Components/ExclusiveFeat";
import CourseDetails from "@/Components/CourseDetails";
import CTA_text from "@/Components/CTA_text";
import CheckList from "@/Components/CheckList";
import { getData } from "@/Service/api";

// export async function generateMetadata({ params, searchParams }) {
//   const data = await getData.ielts_course_data(params.slug, searchParams.lang || "bn");
//   if (!data) return {};
// console.log(data)
//   return {
//     title: data?.seo?.title,
//     description: data?.seo?.description,
//     keywords: data?.seo?.keywords.join(", "),
//     openGraph: {
//       title: data?.seo?.title,
//       description: data?.seo?.description,
//     }
//   };
// }

export default async function ProductPage({ params, searchParams }) {
  const lang = searchParams.lang || "bn";
  const data = await getData.ielts_course_data(params.slug, lang);

  if (!data) return <p className="text-slate-400 text-2xl">No Data Found</p>;
console.log(data)
  return (
    <>
      {/* {
        data?.seo?.schema.map((item, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: item?.meta_value }}
          />
        ))
      } */}

      <main className="font-nunito">
        <Banner title={data?.title} description={data?.description} />
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
              <CTA_text propData={data?.cta_text} />
              <CheckList propData={data?.checklist} />
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}
