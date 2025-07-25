export default function CourseLaidOut({ propData }) {
    
    const data = propData.find((item) => item.type === "features");

    return (
        <>
            <section>
                <div>{data?.name}</div>

               
            </section>
        </>
    )
}