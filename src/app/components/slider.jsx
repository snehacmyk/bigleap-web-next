'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.module.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Fauna_One } from 'next/font/google';


export default function Slider(datas = ["Sl01", "Sl02", "Sl03"]) {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide style={{ height: '20vh', width: '100%' }}>
                    <img src="Scate.png" alt="" />
                </SwiperSlide>

            </Swiper>
        </>
    );
}