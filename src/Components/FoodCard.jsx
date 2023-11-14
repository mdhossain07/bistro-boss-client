import Button from "./Button";

/* eslint-disable react/prop-types */
const FoodCard = ({ item }) => {
  const { image, title, recipe } = item;
  return (
    <div>
      <div className="card w-full mx-auto bg-base-100 shadow-xl flex">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center flex-1">
            <Button className="w-full" title={"Add to cart"}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
