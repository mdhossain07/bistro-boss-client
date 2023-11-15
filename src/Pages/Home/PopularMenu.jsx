/* eslint-disable react/prop-types */

import Button from "../../Components/Button";
import MenuCard from "../../Components/MenuCard";
import SectionTitle from "../../Shared/SectionTitle";
import useMenus from "../../hooks/useMenus";

const PopularMenu = () => {
  const menus = useMenus();
  const allMenus = menus[0];
  const popular = allMenus.filter((item) => item.category === "popular");

  return (
    <div>
      <SectionTitle heading={"From Our Menu"} subHeading={"Check it out"} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center my-10">
        {popular?.map((menu) => (
          <MenuCard key={menu._id} item={menu}></MenuCard>
        ))}
      </div>

      {/* <div className="flex justify-center my-5">
        <button className="btn">Check Full Menu</button>
      </div> */}
      <Button title={"Check Full Menu"}></Button>
    </div>
  );
};

export default PopularMenu;
