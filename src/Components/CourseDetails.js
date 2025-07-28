"use client"

import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { IoIosArrowDown } from "react-icons/io";

export default function CourseDetails({ propData }) {

    const data = propData.find((item) => item?.type === "about")

    return (
        <>
            <section className="w-full py-6">
                <h2 className="text-xl font-bold mb-4">{data?.name}</h2>

                <Accordion
                    className="w-full border border-[#00000033] rounded-lg shadow px-4 py-4"
                    transition
                    transitionTimeout={300}
                >
                    {
                        data?.values.map((item, index) => (
                            <AccordionItem
                                initialEntered={index === 0}
                                key={item.id}
                                header={({ state }) => (
                                    <div className="flex justify-between items-center py-4 cursor-pointer text-lg font-medium ">
                                        
                                        <span dangerouslySetInnerHTML={{ __html: item?.title }} />
                                        
                                        <span className={`text-xl font-semibold duration-300 ${state?.isEnter && "rotate-180"}`}>
                                            <IoIosArrowDown />
                                        </span>
                                    </div>
                                )}
                                className="border-b border-gray-200 last-of-type:border-none"
                                contentProps={{ className: "accordion-content" }}
                            >
                                <div
                                    className="py-4 leading-6 text-lg text-[#00000090]"
                                    dangerouslySetInnerHTML={{ __html: item?.description }}
                                />
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </section>
        </>
    )
}