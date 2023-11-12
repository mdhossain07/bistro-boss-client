import axios from "axios";
import { useEffect, useState } from "react";

const useMenus = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios("menu.json").then((res) => setMenus(res.data));
  }, []);
  return menus;
};

export default useMenus;
