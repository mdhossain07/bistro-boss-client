import SectionTitle from "../../Shared/SectionTitle";
import featured from "../../assets/home/featured.jpg";

const Parallax = () => {
  return (
    <div className="">
      <div
        className="hero lg:h-[800px] bg-fixed "
        style={{
          backgroundImage: `url(${featured})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content  text-neutral-content">
          <div className="w-full">
            <SectionTitle
              heading={"From Our Menu"}
              subHeading={"check it out"}
            ></SectionTitle>
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <img className="w-[650px] h-[400px]" src={featured} alt="" />
              <div className="space-y-3">
                <p>
                  March 20, 2023
                  <br />
                  <span className="font-medium">WHERE CAN I GET SOME?</span>
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  voluptate facere, deserunt dolores maiores quod nobis quas
                  quasi. Eaque repellat recusandae ad laudantium tempore
                  consequatur consequuntur omnis ullam maxime tenetur.
                </p>
                <button className="btn">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Parallax;
