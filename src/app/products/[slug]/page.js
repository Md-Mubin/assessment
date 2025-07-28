import Banner from "@/Components/Banner";
import Instructor from "@/Components/Instructor";
import CourseLaidOut from "@/Components/CourseLaidOut";
import Trailer from "@/Components/Trailer";
import LearnFromCourse from "@/Components/LearnFromCourse";
import ExclusiveFeat from "@/Components/ExclusiveFeat";
import CourseDetails from "@/Components/CourseDetails";
import CheckListBox from "@/Components/CheckListBox";
import { getData } from "@/Service/api";

// ================ for adding seo datas in head elements auto
export async function generateMetadata({ params, searchParams }) {
  const data = await getData.ielts_course_data(params.slug, searchParams.lang || "bn");
  if (!data) return {};

  return {
    title: data?.seo?.title,
    description: data?.seo?.description,
    keywords: data?.seo?.keywords.join(", "),
    openGraph: {
      title: data?.seo?.title,
      description: data?.seo?.description,
    }
  };
}

// ================ for product page components
export default async function ProductPage({ params, searchParams }) {
  const lang = searchParams.lang || "bn";
  const data = await getData.ielts_course_data(params.slug, lang);

  // ============== if data is empty than return without crushing 
  if (!data) return <p className="text-slate-400 text-2xl">No Data Found</p>;

  return (
    <>
      {/* ============== seo schema adding in body ============== */}
      {
        data?.seo?.schema.map((item, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: item?.meta_value }}
          />
        ))
      }

      {/* ============== page part where components organaized ============== */}
      <main className="font-nunito pb-20">
        <Banner title={data?.title} description={data?.description} />
        <div className="container">
          <ul className="flex justify-between">
            
            {/* left side elements */}
            <li className="w-[700px]">
              <Instructor propData={data?.sections} />
              <CourseLaidOut propData={data?.sections} />
              <LearnFromCourse propData={data?.sections} />
              <ExclusiveFeat propData={data?.sections} />
              <CourseDetails propData={data?.sections} />
            </li>

            {/* right side elements */}
            <li className="w-[450px] mt-[-15%]">
              <Trailer propData={data?.media} />
              <CheckListBox checkLists={data?.checklist} ctaText={data?.cta_text} />
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}
