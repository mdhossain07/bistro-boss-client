/* eslint-disable react/prop-types */

import MenuCategory from "../../Components/MenuCategory";
import SectionTitle from "../../Shared/SectionTitle";
import useMenus from "../../hooks/useMenus";

const PopularMenu = () => {
  const menus = useMenus();
  // const [loading, setLoading] = useState(true);
  // console.log(menus);

  const popular = menus.filter((item) => item.category === "popular");
  // console.log(popular);

  return (
    <div>
      <SectionTitle heading={"From Our Menu"} subHeading={"Check it out"} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
        {popular?.map((menu) => (
          <MenuCategory key={menu._id} menu={menu}></MenuCategory>
        ))}
      </div>

      <div className="flex justify-center my-5">
        <button className="btn">Check Full Menu</button>
      </div>
    </div>
  );
};

export default PopularMenu;
