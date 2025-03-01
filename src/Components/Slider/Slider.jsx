// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination ,Autoplay} from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={false}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },  
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/ha1.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/ha2.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/ha3.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/ha4.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/ha5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/ha6.webp" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
