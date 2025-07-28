import Link from "next/link";

export default function CheckListBox({ checkLists, ctaText }) {
    return (
        <>
            <section className="sticky top-20 shadow-md p-4 mt-2 border border-[#00000033] rounded-lg">

                <p className="text-2xl font-semibold pb-4">1000{"(default)"}</p>

                <Link href={"#"}>
                    <button className="w-full py-4 text-xl text-white font-semibold mb-6 bg-green-500 rounded-xl shadow-[inset_0px_0px_20px_#00000055] hover:shadow-[inset_0px_0px_30px_#00000088] duration-300 cursor-pointer">
                        {ctaText?.name}
                    </button>
                </Link>

                {
                    checkLists.map((items) => (
                        <ul key={items?.id} className={`flex items-center gap-6 py-1 font-semibold sm:text-lg tracking-wider text-${items?.color}`}>
                            <li>
                                <img src={items?.icon} alt="#" className="w-[25px]" />
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