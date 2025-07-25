export default function Instructor({ propData }) {
    return (
        <>
            <section className="w-full h-[100dvh]">
                {
                    propData.map((items, i)=>(
                        <div key={i}>{items.name}</div>
                    ))
                }
            </section>
        </>
    )
} 