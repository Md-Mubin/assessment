'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function Trailer({ propData }) {
    
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const mediaItems = [propData[0], ...propData.slice(3)];

    return (
        <>
            <section className='w-full'>
                {/* Main Swiper */}
                <Swiper
                    spaceBetween={10}
                    loop={true}
                    navigation
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[Navigation, Thumbs]}
                    className="rounded-lg shadow-[0px_0px_10px_#000]"
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}>

                    {
                        mediaItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative aspect-video">
                                    <img
                                        src={item?.resource_type === 'video' ? item?.thumbnail_url : item?.resource_value}
                                        alt={item?.name}
                                        className='h-full'/>

                                    {
                                        item?.resource_type === 'video' && (
                                            <a
                                                href={`https://www.youtube.com/watch?v=${item?.resource_value}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="absolute inset-0 flex items-center justify-center text-white text-4xl bg-black/50 hover:bg-black/70 transition">
                                                ▶
                                            </a>
                                        )
                                    }
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                {/* Thumbnail Swiper */}
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    watchSlidesProgress={true}
                    modules={[Navigation, Thumbs]}
                    className="mt-4"
                >
                    {
                        mediaItems.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className={`${index === activeIndex && 'border-3 rounded border-blue-600'}`} >

                                <img
                                    src={item?.resource_type === 'video' ? item?.thumbnail_url : item?.resource_value}
                                    alt={`Thumbnail ${index}`}
                                    className="w-full h-[60px] cursor-pointer" />

                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </section>
        </>
    );
}
