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
        { img: "img2.jpg", caption: "2D motion graphics", readbtn:"Know More", },
        { img: "img3.jpg", caption: "Whiteboard Animations", readbtn:"Know More" },
        { img: "img4.jpg", caption: "Storytelling scripted animations", readbtn:"Know More" },
        { img: "img1.jpg", caption: "3D product animation", readbtn:"Know More" },
        { img: "img2.jpg", caption: "2D motion graphics", readbtn:"Know More" }
    ],
    spaceBetween = 20,
    slidesPerView = 4,
    loop = true,
    breakpoints = {
        320: { slidesPerView: 1, spaceBetween: 10 }, // mobile
        640: { slidesPerView: 2, spaceBetween: 15 }, // tablet
        1024: { slidesPerView: 4, spaceBetween: 120 }, // desktop
        1366: { slidesPerView: 4, spaceBetween: 120 }, // desktop
    },
    slideImageStyle = {
        width: '90%',
    }

}) {
    const swiperRef = useRef(null);
    return (
        <div style={{ position: 'relative' }}>
            <Swiper
                onSwiper={swiper => (swiperRef.current = swiper)}
                style={{ padding: '30px 90px' }}
                grabCursor={true}
                spaceBetween={spaceBetween}
                centeredSlides={false}
                slidesPerView={slidesPerView}
                loop={loop}
                allowSlidePrev={true}
                allowSlideNext={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                breakpoints={breakpoints}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {datas.map((item, idx) => (
                    <SwiperSlide key={idx + item.caption}>
                        <div>
                            <img src={item.img} alt={item.caption} style={slideImageStyle} />
                            { item.caption != "" ? (
                                <div style={{ marginTop: '8px', color: '#fff', fontSize: '16px' }}>{item.caption}</div>
                            ) : null}
                            {(item.readbtn != "") ? (
                                <button style={{ marginTop: '8px' }} className={styles.readbtn}>{item.readbtn}</button>
                            ) : null}
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