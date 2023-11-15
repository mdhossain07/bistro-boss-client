/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import myFoodImg from "../assets/contact/banner.jpg";
import Cover from "../Shared/Cover";

const MyFood = () => {
  useEffect(() => {
    document.title = "Bistro Boss | My Foods ";
  }, []);

  const foods = useLoaderData();
  console.log(foods);

  return (
    <>
      <Cover img={myFoodImg} title={"My foods"}></Cover>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
        {foods?.data.map((food) => (
          <FoodItem key={food._id} food={food}></FoodItem>
        ))}
      </div>
    </>
  );
};

const FoodItem = ({ food }) => {
  const { image, name, price } = food;
  console.log(food);
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-lg">Price: {price}</p>
        </div>
      </div>
    </div>
  );
};

export default MyFood;
