import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import StaffInfo from "./StaffInfo";
import "swiper/css";

const StaffInfos = () => {
  const [card, setcard] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4107/total/sta')
      .then((res) => {
        setcard(res.data);
      })
      .catch((err) => {
        console.error('no', err);
      });
  }, []);

  return (
    <div className="container">
      <div className="process-top staffInfo-title">
        <h3 className="title">員工評價 Staff evaluation</h3>
        <img src="images/flower.png" alt="" />
      </div>
      <Swiper
        loop={false}
        spaceBetween={0}
        slidesPerView={1}
        freeMode={true}
        breakpoints={{
          1200: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 1,
          },
        }}
      >
        {card.map((employee) => (
          <SwiperSlide key={employee.employeeid}>
            <StaffInfo
              name={employee.employeename}
              covid={employee.vaccine}
              star={employee.total_efficiency}
              number={employee.employeeid}
              cases={employee.cases}
              levle={employee.total_ratings}
              img={employee.photo}
              goodid={employee.goodid}
              racheck={employee.racheck}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StaffInfos;