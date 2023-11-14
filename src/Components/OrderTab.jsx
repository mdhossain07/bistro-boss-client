/* eslint-disable react/prop-types */
import FoodCard from "./FoodCard";

const OrderTab = ({ menu }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
        {menu.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default OrderTab;
