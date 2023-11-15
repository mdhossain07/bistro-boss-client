import { useEffect } from "react";
import Banner from "./Banner";
import Parallax from "./Parallax";
import PopularMenu from "./PopularMenu";
import Recommeds from "./Recommeds";
import Slider from "./Slider";
import Testimonials from "./Testimonials";

const Home = () => {
  useEffect(() => {
    document.title = "Bistro Boss | Home";
  }, []);
  return (
    <div>
      <Banner />
      <Slider />
      <PopularMenu />
      <Recommeds />
      <Parallax />
      <Testimonials />
    </div>
  );
};

export default Home;
