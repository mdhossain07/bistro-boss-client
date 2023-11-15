/* eslint-disable react/prop-types */

import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import useCart from "../hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const [, refetch] = useCart();

  const handleCart = () => {
    const foodItem = {
      foodId: _id,
      email: user?.email,
      name,
      image,
      price,
    };
    if (user && user?.email) {
      axiosSecure.post("/api/v1/create/food-item", foodItem).then((res) => {
        if (res.data.insertedId) {
          alert("Food added to cart");
          refetch();
          // console.log(res.data);
        }
      });
    }
  };
  return (
    <div>
      <div className="card w-full mx-auto bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt={name} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button
              onClick={handleCart}
              className="btn btn-outline btn-warning border-0 border-b-4 border-orange-400"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
