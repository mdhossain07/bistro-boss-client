import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenus = () => {
  const axiosPublic = useAxiosPublic();
  // const [menus, setMenus] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios("http://localhost:5001/api/v1/get-menu").then((res) => {
  //     setMenus(res.data);
  //     setLoading(false);
  //   });
  // }, []);
  // return [menus, loading];

  const {
    data: menus = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/v1/get-menu");
      return res.data;
    },
  });
  return [menus, loading, refetch];
};

export default useMenus;
