// ============== common api backend link handle
const api = async (endPoint, method) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_BASE_API}/api/v1${endPoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      "X-TENMS-SOURCE-PLATFORM": "web"
    },
    next: { revalidate: 60 }
  })
  const data = await res.json();
  return data
}

// ============== getting data from backend api
export const getData = {
  ielts_course_data: async (slug, lang) => {
    const res = await api(`/products/${slug}?lang=${lang}`, "GET")
    return res.data;
  }
}