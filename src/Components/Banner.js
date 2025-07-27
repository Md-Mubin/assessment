
export default function Banner({ title ,description }) {
    
    return (
        <>
            <header className="w-full py-20 bg-[url('/images/banner.jpg')] bg-center bg-cover bg-no-repeat">
                <div className="container">
                    <article className="lg:w-[600px]">
                        <h1 className="text-4xl font-bold text-white">{title}</h1>

                        <div
                            className="text-[16px] text-white font-medium mt-5"
                            dangerouslySetInnerHTML={{ __html: description || "" }} />
                    </article>
                </div>
            </header>
        </>
    )
}