/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import axios from "axios";

const Recommeds = () => {
  const [offered, setOffered] = useState([]);
  useEffect(() => {
    axios("menu.json").then((res) => {
      setOffered(res.data.filter((item) => item.category === "offered"));
    });
  }, []);
  return (
    <div>
      <SectionTitle
        heading={"Chef Recommends"}
        subHeading={"Should Try"}
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
        {offered.slice(0, 3).map((offer) => (
          <RecommendItems key={offer._id} offer={offer}></RecommendItems>
        ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const RecommendItems = ({ offer }) => {
  const { image, name, recipe } = offer;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl flex">
        <figure className="px-10 pt-10">
          <img src={image} alt={name} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions w-full">
            <button className="btn btn-primary flex-1">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommeds;
