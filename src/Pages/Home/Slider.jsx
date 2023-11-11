import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import SectionTitle from "../../Shared/SectionTitle";
import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";

const Slider = () => {
  return (
    <div>
      <SectionTitle
        heading={"Order Online"}
        subHeading={"From 11 a.m. to 10 p.m."}
      ></SectionTitle>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper text-center text-white"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <p className="-mt-10 text-2xl ">Salads</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <p className="-mt-10 text-2xl ">Pizzas</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <p className="-mt-10 text-2xl ">Soups</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <p className="-mt-10 text-2xl ">Deserts</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <p className="-mt-10 text-2xl ">Salads</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
