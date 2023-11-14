import MenuCategory from "../Components/MenuCategory";
import Cover from "../Shared/Cover";
import SectionTitle from "../Shared/SectionTitle";
import menuImg from "../assets/menu/banner3.jpg";
import useMenus from "../hooks/useMenus";
import dessertImg from "../assets/menu/dessert-bg.jpeg";
import saladImg from "../assets/menu/salad-bg.jpg";
import soupImg from "../assets/menu/soup-bg.jpg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";

const Menu = () => {
  const menus = useMenus();
  const offered = menus.filter((item) => item.category === "offered");
  const desserts = menus.filter((item) => item.category === "dessert");
  const salads = menus.filter((item) => item.category === "salad");
  const pizzas = menus.filter((item) => item.category === "pizza");
  const soups = menus.filter((item) => item.category === "soup");

  return (
    <div>
      {/* Offered */}
      <Cover img={menuImg} title={"OUR MENU"} />

      <SectionTitle
        heading={"Don't Miss"}
        subHeading={"Today's Offer"}
      ></SectionTitle>
      <MenuCategory menu={offered}></MenuCategory>

      {/* Desserts */}

      <MenuCategory
        menu={desserts}
        img={dessertImg}
        title={"desserts"}
      ></MenuCategory>

      {/* Soups */}
      <MenuCategory menu={soups} img={soupImg} title={"soups"}></MenuCategory>

      {/* Salads */}
      <MenuCategory
        menu={salads}
        img={saladImg}
        title={"salads"}
      ></MenuCategory>

      {/* Pizzas */}

      <MenuCategory
        menu={pizzas}
        img={pizzaImg}
        title={"pizzas"}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
