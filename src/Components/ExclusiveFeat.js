export default function ExclusiveFeat({ propData }) {

    const data = propData.find((item) => item?.type === "feature_explanations")

    return (
        <>
            <section className="w-full py-6">
                <h2 className="text-xl font-bold mb-4">{data?.name}</h2>

                <div className="font-sans bg-white px-8 border border-[#00000033] rounded-lg shadow-md">
                    {
                        data?.values.map((feature) => (
                            <ul key={feature?.id} className="py-8 flex flex-row items-start justify-between">
                                <li>
                                    <h3 className="text-xl font-semibold mb-4 text-gray-700">{feature.title}</h3>
                                    <ul>
                                        {feature.checklist.map((item, i) => (
                                            <li key={i} className="flex gap-2 items-center">
                                                <span className="text-xl font-semibold text-blue-600 ">✓</span>
                                                <span className="font-semibold text-[#00000099]">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </li>

                                <li>
                                    <img src={feature.file_url} alt={feature.title} className="w-[200px]"/>
                                </li>
                            </ul>
                        ))
                    }
                </div>
            </section>
        </>
    )
}