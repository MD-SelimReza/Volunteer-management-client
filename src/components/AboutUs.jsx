import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import { Grid, Navigation } from "swiper/modules";

const AboutUs = () => {
  return (
    <div className="lg:my-20 md:my-16 my-10 lg:px-10 px-5">
      <div className="flex lg:flex-row gap-6 flex-col">
        <div className="lg:w-1/2 w-full">
          <img
            src="https://election-react.wpolive.com/static/media/about-s2.650a410339a3a2239280.jpg"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 w-full flex flex-col space-y-3">
          <div className="flex lg:justify-normal justify-center items-center gap-3">
            <span className="w-5 border-b-4 border-[#DE2A4D]"></span>

            <p className="text-[#DE2A4D] font-bold">About Us</p>

            <span className="w-5 border-b-4 border-[#DE2A4D]"></span>
          </div>
          <p className="text-3xl lg:text-left text-center font-bold">
            We Can Make Our New <br /> History Together!
          </p>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
            facere nam architecto doloremque iure eum minus nihil saepe quam
            officia facilis nemo labore, atque illum. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Nulla eveniet iure, rem aliquam
            illo exercitationem praesentium in eum nobis quas illum cumque
            consectetur, quae aliquid.
          </p>
          <div className="h-full flex justify-center items-center">
            <Swiper
              navigation={true}
              loop={true}
              grid={{
                cols: 2,
              }}
              slidesPerView={2}
              spaceBetween={30}
              modules={[Grid, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="flex justify-center">
                  <div className="text-center space-y-4">
                    <img
                      src="https://election-react.wpolive.com/static/media/2.c65ec636c2aebfefab2c5a228089a168.svg"
                      alt=""
                      className="size-36 p-6 rounded-full border-4 mx-auto bg-[#091854]"
                    />
                    <h1 className="text-2xl text-[#091854] font-bold uppercase">
                      Our campaign
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eaque reprehenderit atque est suscipit quaerat
                      consectetur?
                    </p>
                    <button className="border border-[#DE2A4D] py-2 px-10 rounded-md uppercase font-medium hover:text-white hover:bg-[#DE2A4D]">
                      Details
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center">
                  <div className="text-center space-y-4">
                    <img
                      src="https://election-react.wpolive.com/static/media/2.c65ec636c2aebfefab2c5a228089a168.svg"
                      alt=""
                      className="size-36 p-6 bg-[#091854] rounded-full border-4 mx-auto"
                    />
                    <h1 className="text-2xl text-[#091854] font-bold uppercase">
                      Become a volunteer
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eaque reprehenderit atque est suscipit quaerat
                      consectetur?
                    </p>
                    <button className="border border-[#DE2A4D] py-2 px-10 rounded-md uppercase font-medium hover:text-white hover:bg-[#DE2A4D]">
                      Details
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center">
                  <div className="text-center space-y-4">
                    <img
                      src="https://election-react.wpolive.com/static/media/2.c65ec636c2aebfefab2c5a228089a168.svg"
                      alt=""
                      className="size-36 p-6 bg-[#091854] rounded-full border-4 mx-auto"
                    />
                    <h1 className="text-2xl text-[#091854] font-bold uppercase">
                      Make donation
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eaque reprehenderit atque est suscipit quaerat
                      consectetur?
                    </p>
                    <button className="border border-[#DE2A4D] py-2 px-10 rounded-md uppercase font-medium hover:text-white hover:bg-[#DE2A4D]">
                      Details
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
