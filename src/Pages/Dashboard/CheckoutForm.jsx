import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxios();
  const { user } = useAuth();
  const [cart] = useCart();

  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalCost > 0) {
      axiosSecure
        .post("/api/v1/create-payment-intent", { price: totalCost })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalCost]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error);
    } else {
      console.log("card info successfull", paymentMethod);
    }

    // confirm payment

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log("confirmation error", confirmError);
    } else {
      if (paymentIntent.status === "succeeded") {
        alert("Payment Successfull", transactionId);
        setTransactionId(paymentIntent.id);
        console.log("transaction Id", paymentIntent.id);

        const payment = {
          transactionId: paymentIntent.id,
          email: user.email,
          date: new Date(),
          price: totalCost,
          cartIds: cart.map((item) => item._id),
          menuIds: cart.map((item) => item.foodId),
          status: "pending",
        };

        const res = await axiosSecure.post("/api/v1/payments", payment);
        console.log(res.data);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-info"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      <p className="text-xl text-red-600 font-medium mt-10">{error.message}</p>
    </div>
  );
};

export default CheckoutForm;
