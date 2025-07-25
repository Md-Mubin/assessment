import { headers } from "next/headers";
import { getData } from "@/Service/api";
import ClientLangSwitcher from "./langSwitch";

export default async function Page({ params }) {
  const { slug } = params;

  // Grab the full URL path from headers
  const headersList = headers();
  const rawPath = headersList.get("x-invoke-path") || headersList.get("x-next-url") || "/";
  const url = new URL("https://dummy.com" + rawPath);
  const lang = url.searchParams.get("lang") || "en"; // fallback to 'en'

  // Fetch product data based on slug + lang
  const productData = await getData.ielts_course_data(slug, lang);

  return (
    <main className="p-6 font-Gmono">
      <ClientLangSwitcher
        slug={slug}
        initialLang={lang}
        initialData={productData}
      />
    </main>
  );
}
