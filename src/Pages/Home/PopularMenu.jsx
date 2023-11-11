/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import axios from "axios";

const PopularMenu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios("menu.json").then((res) => {
      const items = res.data;
      setMenus(items.filter((item) => item.category === "popular"));
    });
  }, []);

  console.log(menus);

  return (
    <div>
      <SectionTitle heading={"From Our Menu"} subHeading={"Check it out"} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
        {menus.map((menu) => (
          <MenuList key={menu._id} menu={menu}></MenuList>
        ))}
      </div>
      <div className="flex justify-center my-5">
        <button className="btn">Check Full Menu</button>
      </div>
    </div>
  );
};

const MenuList = ({ menu }) => {
  const { image, name, recipe, price } = menu;
  return (
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
  );
};

export default PopularMenu;
