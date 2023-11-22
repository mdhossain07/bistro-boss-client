import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// import { axiosSecure } from "../../hooks/useAxios";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  console.log(user.email);

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/api/v1/get-payments?email=${user.email}`
      );
      return res.data;
    },
  });

  return (
    <div>
      <h2>Payment History: {payments.length}</h2>
    </div>
  );
};

export default PaymentHistory;
