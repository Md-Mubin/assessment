// ============== common api backend link handle
const api = async (endPoint, method) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_BASE_API}/api/v1${endPoint}`, {
        method,
        cache : "no-store",
        headers: {
            "Content-Type": "application/json"
        }
    })
    return await res.json()
}
// ============== getting data from backend api
export const getData = {
    ielts_course_data: async (slug, lang) => {
        const res = await api(`/products/${slug}?lang=${lang}`, "GET")
        return res.data
    }
}