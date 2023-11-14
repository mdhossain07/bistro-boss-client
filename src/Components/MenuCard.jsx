/* eslint-disable react/prop-types */
const MenuCard = ({ item }) => {
  const { image, name, recipe, price } = item;

  return (
    <div>
      <div className="flex items-center gap-10">
        <img
          style={{ borderRadius: "0 200px 200px 200px", width: "120px" }}
          src={image}
          alt=""
        />
        <div className="flex">
          <div className="space-y-2">
            <h2 className="font-medium">{name} ---------</h2>
            <p>{recipe}</p>
          </div>
          <p className="text-[#BB8506]">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
