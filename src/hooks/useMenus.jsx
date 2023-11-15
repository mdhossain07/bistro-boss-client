import axios from "axios";
import { useEffect, useState } from "react";

const useMenus = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("http://localhost:5001/api/v1/get-menu").then((res) => {
      setMenus(res.data);
      setLoading(false);
    });
  }, []);
  return [menus, loading];
};

export default useMenus;
