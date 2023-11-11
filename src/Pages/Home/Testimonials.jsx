import { Swiper, SwiperSlide } from "swiper/react";
import ReactStars from "react-rating-stars-component";
import icon from "../../assets/icon/quote-left 1.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import axios from "axios";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios("reviews.json").then((res) => setReviews(res.data));
  }, []);

  //   const ratingChanged = (newRating) => {
  //     console.log(newRating);
  //   };
  return (
    <div>
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"What our clients say"}
      ></SectionTitle>

      <div>
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="md:w-[850px] mx-auto text-center space-y-3">
                <div className="flex justify-center">
                  <img className="" src={icon} alt="" />
                </div>

                <ReactStars
                  count={review.rating}
                  size={48}
                  classNames="text-center"
                  activeColor="#ffd700"
                  readOnly
                />
                <p>{review.details}</p>
                <h2 className="text-[#CD9003] font-semibold text-3xl">
                  {review.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
