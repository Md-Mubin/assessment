"use client";

import { useEffect, useState } from "react";
import { getData } from "@/Service/api";
import { useSearchParams } from "next/navigation";

export default function ClientLangSwitcher({ slug, initialLang, initialData }) {
  const [lang, setLang] = useState(initialLang);
  const [data, setData] = useState(initialData);

  const searchParams = useSearchParams();

  // Sync lang state with query string on change
  useEffect(() => {
    const urlLang = searchParams.get("lang") || "en";
    if (urlLang !== lang) {
      setLang(urlLang);
    }
  }, [searchParams]);

  // Fetch content when lang changes
  useEffect(() => {
    async function fetchData() {
      if (lang === initialLang && data === initialData) return;

      const res = await getData.ielts_course_data(slug, lang);
      setData(res);
    }

    fetchData();
  }, [lang, slug]);

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">{data?.title}</h1>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: data?.description || "" }}
      />
    </section>
  );
}
