import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxios";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`api/v1/get-cart?email=${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
