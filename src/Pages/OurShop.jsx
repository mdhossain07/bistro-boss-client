import { useState } from "react";
import Cover from "../Shared/Cover";
import shopImg from "../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenus from "../hooks/useMenus";
import OrderTab from "../Components/OrderTab";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const categories = ["salads", "soups", "pizzas", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  console.log(initialIndex);
  console.log(category);

  const menus = useMenus();
  const desserts = menus.filter((item) => item.category === "dessert");
  const salads = menus.filter((item) => item.category === "salad");
  const pizzas = menus.filter((item) => item.category === "pizza");
  const soups = menus.filter((item) => item.category === "soup");
  const drinks = menus.filter((item) => item.category === "drinks");

  return (
    <div>
      <Cover img={shopImg} title={"OUR SHOP"}></Cover>

      <Tabs
        className="text-center my-5"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>Salads</Tab>
          <Tab>Soups</Tab>
          <Tab>Pizzas</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab menu={salads}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab menu={soups}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab menu={pizzas}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab menu={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab menu={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
