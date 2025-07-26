export default function CheckList({ propData }) {
    return (
        <>
            <section className="sticky top-20 shadow-sm p-4 mt-2">
                {
                    propData.map((items) => (
                        <ul key={items?.id} className={`flex items-center gap-8 font-semibold text-xl text-${items?.color}`}>
                            <li>
                                <img src={items?.icon} alt="#" />
                            </li>
                            <li>
                                <p>{items?.text}</p>
                            </li>
                        </ul>
                    ))
                }
            </section>
        </>
    )
}