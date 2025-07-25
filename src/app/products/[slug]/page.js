import { getData } from "@/Service/api";
import LangSwitch from "./langSwitch";

export default async function ProductPage({ params }) {
  const { slug } = params;
  let defaultLang = "en"

  let getSlugData = await getData.ielts_course_data(slug, defaultLang)

  return (
    <> 
      <main>
        <LangSwitch slug={slug} initialLang={defaultLang} initialData={getSlugData}/>
      </main>
    </>
  );
}
