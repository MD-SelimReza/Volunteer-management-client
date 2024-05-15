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
            img="https://i.ibb.co/rdBNX4K/slide1.jpg"
            link="/add-volunteer-post"
            btnText="Join The Campaign"
            text1="Lets Make The World Great Again"
            text2="We can start by taking small steps and making small changes that can have a big impact on the world."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img="https://i.ibb.co/SwjgPwD/slide4.jpg"
            link="/all-post"
            text1="WE ARE WAITING FOR YOU"
            text2="We Can Work Together For Create a Better Future."
            btnText="Volunteers Post"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img="https://i.ibb.co/1njfR4d/slide3.png"
            link="/manage-my-post"
            text1="Life without liberty, As like hell"
            text2="Life with liberty, a paradoxical dance between freedom's promise and the chains of reality."
            btnText="Join Ehe Campaign"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
