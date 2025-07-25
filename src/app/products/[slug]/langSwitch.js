"use client";

import { useState, useEffect } from "react";
import { getData } from "@/Service/api";
import { useSearchParams, useRouter } from "next/navigation";

export default function LangSwitch({ slug, initialLang, initialData }) {
    const [lang, setLang] = useState(initialLang);
    const [data, setData] = useState(initialData);

    const searchParams = useSearchParams();
    const router = useRouter();

    // Sync lang state with URL query on mount
    useEffect(() => {
        const urlLang = searchParams.get("lang");
        if (urlLang && urlLang !== lang) {
            setLang(urlLang);
        }
    }, [searchParams]);

    // Fetch data when lang changes
    useEffect(() => {
        if (lang === initialLang && data === initialData) return; // already have data for initial lang

        async function fetchData() {
            const res = await getData.ielts_course_data(slug, lang);
            setData(res);

            // Update URL query string without page reload
            const newSearchParams = new URLSearchParams(window.location.search);
            newSearchParams.set("lang", lang);
            router.replace(`?${newSearchParams.toString()}`, { scroll: false });
        }

        fetchData();
    }, [lang, slug]);

    return (
        <section>
            <div className="mb-6">
                <button
                    onClick={() => setLang("en")}
                    className={`mr-3 px-4 py-2 rounded ${lang === "en" ? "bg-blue-600 text-white" : "bg-gray-200"}`}>
                    English
                </button>
                <button
                    onClick={() => setLang("bn")}
                    className={`px-4 py-2 rounded ${lang === "bn" ? "bg-blue-600 text-white" : "bg-gray-200"}`}>
                    Bangla
                </button>
            </div>
 
            <h1 className="text-3xl font-bold mb-2">{data?.title || "Loading..."}</h1>
            <div
                dangerouslySetInnerHTML={{ __html: data.description }}
            />
        </section>
    );
}
