// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./styles.css";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        grabCursor={true}
        pagination={false}
        loop={true}
        spaceBetween={30}
        effect={"fade"}
        allowTouchMove={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="../../../img/ha1.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../img/ha2.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../img/ha3.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../img/ha4.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../img/ha5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../img/ha6.webp" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
