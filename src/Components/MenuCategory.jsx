/* eslint-disable react/prop-types */
import Cover from "../Shared/Cover";
import Button from "./Button";
import MenuCard from "./MenuCard";
import { Link } from "react-router-dom";

const MenuCategory = ({ menu, title, img }) => {
  console.log(menu);
  return (
    <>
      {title && <Cover img={img} title={title}></Cover>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
        {menu.slice(0, 6)?.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>

      <Link to={`/our-shop/${title}`}>
        <Button title={"Check Full Menu"}></Button>
      </Link>
    </>
  );
};

export default MenuCategory;
