import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../Shared/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const paymentSecret = import.meta.env.VITE_Payment_Gateway;
const stripePromise = loadStripe(paymentSecret);

const Payment = () => {
  return (
    <div>
      <SectionTitle heading={"Payment"} subHeading={"Pay First"}></SectionTitle>

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
