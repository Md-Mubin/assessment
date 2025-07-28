export default function CheckListBox({ checkLists, ctaText }) {
    return (
        <>
            <section className="sticky top-20 shadow-sm p-4 mt-2 border border-[#00000033] rounded-lg">
                
                <button className="w-full py-4 text-xl text-white font-semibold mb-6 bg-green-500 rounded-xl shadow-[inset_0px_0px_20px_#00000055] hover:shadow-[inset_0px_0px_30px_#00000088] duration-300">{ctaText?.name}</button>

                {
                    checkLists.map((items) => (
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