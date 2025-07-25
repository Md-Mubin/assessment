
export default function Banner({ propData }) {
    return (
        <>
            <section className="w-full py-20 bg-[url('/images/banner.jpg')] bg-center bg-cover bg-no-repeat">
                <div className="container">
                    <article className="w-[700px]">
                        <h1 className="text-4xl font-bold text-white">{propData?.title}</h1>

                        <div
                            className="text-[16px] text-white font-medium mt-5"
                            dangerouslySetInnerHTML={{ __html: propData?.description || "" }} />
                    </article>
                </div>
            </section>
        </>
    )
}