import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

const Slider = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            img={"https://i.ibb.co/rdBNX4K/slide1.jpg"}
            link={"/all-post"}
            text1={"Title 1"}
            text2={"Description 1"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={"https://i.ibb.co/SwjgPwD/slide4.jpg"}
            link={"/all-post"}
            text1={"Title 2"}
            text2={"Description 2"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={"https://i.ibb.co/1njfR4d/slide3.png"}
            link={"/all-post"}
            text1={"Title 3"}
            text2={"Description 3"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
