import MenuCategory from "../Components/MenuCategory";
import Cover from "../Shared/Cover";
import SectionTitle from "../Shared/SectionTitle";
import menuImg from "../assets/menu/banner3.jpg";
import useMenus from "../hooks/useMenus";
import dessertImg from "../assets/menu/dessert-bg.jpeg";
import saladImg from "../assets/menu/salad-bg.jpg";
import soupImg from "../assets/menu/soup-bg.jpg";

const Menu = () => {
  const menus = useMenus();
  const offered = menus.filter((item) => item.category === "offered");
  const desserts = menus.filter((item) => item.category === "dessert");
  const salads = menus.filter((item) => item.category === "salad");
  const pizzas = menus.filter((item) => item.category === "pizza");
  const soups = menus.filter((item) => item.category === "soup");

  console.log(offered);

  return (
    <div>
      {/* Offered */}
      <Cover img={menuImg} title={"OUR MENU"} />
      <SectionTitle
        heading={"Don't Miss"}
        subHeading={"Today's Offer"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
        {offered.map((menu) => (
          <MenuCategory key={menu._id} menu={menu}></MenuCategory>
        ))}
      </div>
      {/* Desserts */}
      <Cover img={dessertImg} title={"DESSERTS"}></Cover>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
        {desserts.slice(0, 6).map((menu) => (
          <MenuCategory key={menu._id} menu={menu}></MenuCategory>
        ))}
      </div>
      <div className="flex justify-center my-5">
        <button className="btn btn-neutral">Check Full Menu</button>
      </div>
      {/* Soups */}
      <Cover img={soupImg} title={"SOUPS"}></Cover>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
        {soups.slice(0, 6).map((menu) => (
          <MenuCategory key={menu._id} menu={menu}></MenuCategory>
        ))}
      </div>
      <div className="flex justify-center my-5">
        <button className="btn btn-neutral">Check Full Menu</button>
      </div>
      {/* Salads */}
      <Cover img={saladImg} title={"SALADS"}></Cover>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
        {salads.slice(0, 6).map((menu) => (
          <MenuCategory key={menu._id} menu={menu}></MenuCategory>
        ))}
      </div>
      <div className="flex justify-center my-5">
        <button className="btn btn-neutral">Check Full Menu</button>
      </div>
    </div>
  );
};

export default Menu;
