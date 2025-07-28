export default function Instructor({ propData }) {

    const data = propData.find((item) => item?.type === "instructors");

    return (
        <>
            <section className="w-full py-4">
                <article>
                    <h3 className={`text-xl text-${data?.color} font-semibold mb-2`}>{data?.name}</h3>

                    {
                        data?.values.map((items, i) => (
                            <ul key={i} className="w-full px-8 py-5 border border-[#00000033] rounded-sm flex flex-col sm:flex-row items-center gap-5">
                                <li className="w-[100px] rounded-full overflow-hidden">
                                    <img loading="lazy" src={items?.image} alt="instructor image"/>
                                </li>
                                <li>
                                    <a href="#" className="font-semibold text-2xl"><span className="hover:text-green-600 duration-200">{items?.name}</span> {'>'}</a>
                                    <div className="mt-2 text-sm" dangerouslySetInnerHTML={{ __html: items?.description }} />
                                </li>
                            </ul>
                        ))
                    }
                </article>
            </section>
        </>
    )
} 