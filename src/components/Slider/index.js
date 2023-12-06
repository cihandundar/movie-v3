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
  const photoPaths = [
    Photo1,
    Photo2,
    Photo3,
    Photo4,
    Photo5,
    Photo6,
    Photo7,
    Photo8,
    Photo9,
  ];
  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slider__container__title">
          <h2>Movies Trailer</h2>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay
        >
          {photoPaths?.map((photo, index) => (
            <SwiperSlide key={index}>
              <img style={{ width: "100%" }} src={photo} alt="" />
              <div className="slider__btn">
                <button>Watch Trailer</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
