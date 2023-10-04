import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Photo1 from "../../assets/images/photo1.jpg";
import Photo2 from "../../assets/images/photo2.jpg";
import Photo3 from "../../assets/images/photo3.jpg";
import Photo4 from "../../assets/images/photo4.jpg";
import Photo5 from "../../assets/images/photo5.jpg";
import Photo6 from "../../assets/images/photo6.jpg";
import Photo7 from "../../assets/images/photo7.jpg";
import Photo8 from "../../assets/images/photo8.jpg";
import Photo9 from "../../assets/images/photo9.jpg";
const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__container">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay
        >
          <SwiperSlide>
            <img style={{ width: "100%" }} src={Photo1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "100%" }} src={Photo2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "100%" }} src={Photo3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "100%" }} src={Photo4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "100%" }} src={Photo5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "100%" }} src={Photo6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "100%" }} src={Photo7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "100%" }} src={Photo8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ width: "100%" }} src={Photo9} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
