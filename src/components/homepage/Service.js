import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import "./Service.css";


export default function App() {
    return (
        <><div className="process-top">
            <h3 className="title">服務項目 Get our Service</h3>;
            <img src="images/flower.png" alt="" />
        </div>
            <Swiper
                slidesPerView={3}
                freeMode={true}
                className="swiper mySwiper swiper-wrapper"
            >
                <SwiperSlide className='introduceCard swiper-slide'>
                    <img src="./images/living_room.jpg" alt="" />
                    <h1>客廳清潔</h1>
                </SwiperSlide>
                <SwiperSlide className='introduceCard swiper-slide'>
                    <img src="./images/bedroom.jpg" alt="" />
                    <h1>臥室清潔</h1>
                </SwiperSlide>
                <SwiperSlide className='introduceCard swiper-slide'>
                    <img src="./images/kitchen.jpg" alt="" />
                    <h1>廚房清潔</h1>
                </SwiperSlide>
                <SwiperSlide className='introduceCard swiper-slide'>
                    <img src="./images/bathroom.jpg" alt="" />
                    <h1>浴室清潔</h1>
                </SwiperSlide>
                <SwiperSlide className='introduceCard swiper-slide'>
                    <img src="./images/window.jpg" alt="" />
                    <h1>窗戶清潔</h1>
                </SwiperSlide>
                <SwiperSlide className='introduceCard swiper-slide'>
                    <img src="./images/balcony.jpg" alt="" />
                    <h1>陽台清潔</h1>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
