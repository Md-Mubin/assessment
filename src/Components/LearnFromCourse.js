export default function LearnFromCourse({ propData }) {

    const data = propData.find((item) => item.type === "pointers");

    return (
        <>
            <section className="w-full py-6">
                <h3 className="text-xl text-black font-semibold mb-4">{data?.name}</h3>
                
                <div className="flex flex-wrap justify-between px-6 pb-8 rounded  shadow-[0px_4px_5px_#00000044]">
                    {
                        data.values.map((items)=>(
                            <ul key={items?.id} className="flex items-start gap-3 w-[290px] mt-8">
                                <li className="text-blue-500 text-xl font-semibold">✓</li>
                                <li className={`text-${items?.color} font-medium text-sm tracking-wide`}>
                                    {items?.text}
                                </li>
                            </ul>
                        ))
                    }
                </div>
            </section>
        </>
    )
}