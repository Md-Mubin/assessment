export default function CourseLaidOut({ propData }) {

    const data = propData.find((item) => item?.type === "features");

    return (
        <>
            <section className="w-full py-6">
                <h3 className="text-xl text-black font-semibold mb-4">{data?.name}</h3>

                <div className="flex flex-wrap justify-between gap-5 bg-gradient-to-br from-[#111827] to-[#44567e] px-6 py-8 rounded  shadow-[0px_1px_10px_#000]">
                    {
                        data?.values.map((items)=>(
                            <ul key={items?.id} className="flex items-start justify-between gap-5">
                                <li>
                                    <img loading="lazy" src={items?.icon} alt="icons"/>
                                </li>
                                <li className="w-[230px]">
                                    <h5 className="text-white">{items?.title}</h5>
                                    <p className="text-[#ffffff66] text-sm mt-1">{items?.subtitle}</p>
                                </li>
                            </ul>
                        ))
                    }
                </div>
            </section>
        </>
    )
}