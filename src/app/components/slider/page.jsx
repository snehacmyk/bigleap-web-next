'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperNavigation from '../SwiperNavigation';
import styles from './slider.module.css';
import Image from 'next/image';

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
        { idname: "a", img: "img2.jpg", imgWH: 100, caption: "2D motion graphics", readbtn: "Know More" },
        { idname: "a", img: "img3.jpg", imgWH: 100, caption: "Whiteboard Animations", readbtn: "Know More" },
    ],
    spaceBetween = 20,
    slidesPerView = 4,
    loop = true,
    breakpoints = {
        320: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 120 },
        1366: { slidesPerView: 4, spaceBetween: 20 },
    },
    slideImageStyle = {
        width: '90%',
        height: '90%',
    },
    navButtons = true,


}) {
    const swiperRef = useRef(null);
    const isVideoSlides = datas.length > 0 && datas[0].iframe;
    return (
        <div style={{ position: 'relative' }}>
            <Swiper
                onSwiper={swiper => (swiperRef.current = swiper)}
                style={isVideoSlides ? { padding: '10px 0px' } : { padding: '30px 90px' }}
                grabCursor={true}
                spaceBetween={spaceBetween}
                centeredSlides={false}
                slidesPerView={isVideoSlides ? 1 : slidesPerView}
                loop={loop}
                allowSlidePrev={true}
                allowSlideNext={true}
                breakpoints={isVideoSlides ? { 320: { slidesPerView: 1 }, 640: { slidesPerView: 1 }, 1024: { slidesPerView: 1 }, 1366: { slidesPerView: 1 } } : breakpoints}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"

            >
                {isVideoSlides
                    ? datas.map((item, idx) => (
                        <SwiperSlide key={item.idname ? `video-${item.idname}-${idx}` : `video-slide-${idx}`}>
                            <div style={{ position: 'relative', width: '100%', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <iframe
                                    src={item.iframe}
                                    title={item.caption || `Video Slide ${idx + 1}`}
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    style={{ width: '70%', height: '100%' }}
                                />
                                {item.caption && (
                                    <div style={{ position: 'absolute', top: 0, left: 0, color: '#fff', fontSize: ' 70px', padding: '82px 90px', borderTopLeftRadius: '8px', zIndex: 999, maxWidth: '60%', fontWeight: '700' }}>
                                        {item.caption}
                                    </div>
                                )}
                                {item.paragraph && (
                                    <div style={{ position: 'absolute', top: '300px', left: 0, color: '#fff', fontSize: ' 16px', padding: '0 90px', zIndex: 999, maxWidth: '60%', fontWeight: '700' }}>
                                        {item.paragraph}
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))
                    : datas.map((item, idx) => (
                        <SwiperSlide key={item.idname ? `${item.idname}-${idx}` : `slide-${idx}`}>
                            <div>
                                <div className={styles.imageContainer}>
                                    <Image src={item.img} alt={item.caption || "img"} style={slideImageStyle} width={item.imgWH} height={item.imgWH} />
                                </div>
                                {item.date && (
                                    <div style={{ marginTop: '8px', color: '#fff', fontSize: '14px' }}>{item.date}</div>
                                )}
                                {item.caption != "" ? (
                                    <div style={{ marginTop: '8px', color: '#fff', fontSize: '16px' }}>{item.caption}</div>
                                ) : null}
                                {(item.readbtn != "") ? (
                                    <button style={{ marginTop: '8px', background: 'none', border: 'none', color: '#ed232a' }} className={styles.readbtn}>{item.readbtn}</button>
                                ) : null}

                            </div>
                        </SwiperSlide>
                    ))}

            </Swiper>
            {navButtons && <SwiperNavigation
                onPrev={() => swiperRef.current && swiperRef.current.slidePrev()}
                onNext={() => swiperRef.current && swiperRef.current.slideNext()}
            />}
        </div>
    );
}