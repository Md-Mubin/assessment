import {
    Accordion, AccordionItem
} from "@szhsin/react-accordion"

export default function CourseDetails({ propData }) {

    const data = propData.find((item) => item?.type === "about")

    return (
        <>
            <section className="w-full py-6">
                <h2 className="text-xl font-bold mb-4">{data?.name}</h2>

                <Accordion className="w-full border border-[#00000033] rounded-lg shadow px-5 pt-4 pb-8" transition transitionTimeout={500} mountOnEnter>
                    {data.values.map((item) => (
                        <AccordionItem
                            key={item.id}
                            className="border-b border-gray-200"
                            header={
                                <div
                                    className="text-lg font-medium text-gray-800 py-4 cursor-pointer"
                                    dangerouslySetInnerHTML={{ __html: item?.title }} />}

                            contentProps={{ className: 'accordion-content' }}
                        >

                            <div className="py-4 leading-6 text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: item?.description }} />
                        </AccordionItem>
                    ))}
                </Accordion>

            </section>
        </>
    )
}