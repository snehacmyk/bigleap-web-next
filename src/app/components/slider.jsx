'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperNavigation from './SwiperNavigation';
import styles from './slider.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.module.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Fauna_One } from 'next/font/google';


export default function Slider({
    datas = [
        { img: "img2.jpg", caption: "2D motion graphics" },
        { img: "img3.jpg", caption: "Whiteboard Animations" },
        { img: "img4.jpg", caption: "Storytelling scripted animations" },
        { img: "img1.jpg", caption: "3D product animation" },
        { img: "img2.jpg", caption: "Caption 5" }
    ]
}) {
    const swiperRef = useRef(null);
    return (
        <div style={{ position: 'relative' }}>
            <Swiper
                onSwiper={swiper => (swiperRef.current = swiper)}
                style={{ padding: '30px 90px' }}
                spaceBetween={20}
                centeredSlides={false}
                slidesPerView={4}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 }, // mobile
                    640: { slidesPerView: 2, spaceBetween: 15 }, // tablet
                    1024: { slidesPerView: 4, spaceBetween: 120 }, // desktop
                    1366: { slidesPerView: 4, spaceBetween: 120 }, // desktop
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {datas.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <div>
                            <img src={item.img} alt={item.caption} style={{ width: '90%' }} />
                            <div style={{ marginTop: '8px', color: '#fff', fontSize: '16px' }}>{item.caption}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <SwiperNavigation
                onPrev={() => swiperRef.current && swiperRef.current.slidePrev()}
                onNext={() => swiperRef.current && swiperRef.current.slideNext()}
            />
        </div>
    );
}