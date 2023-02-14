import React, { useState } from "react";
import "bootswatch/dist/lux/bootstrap.min.css";
import "../App.css";

import { loadStripe } from "@stripe/stripe-js";

import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";

export const stripePromise = loadStripe("pk_test_w7XzXy2MklXhuBsBiIr3jl76");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);

    if (!error) {
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(
          "http://localhost:8001/api/checkout",
          {
            id,
            amount: 10000, //centavos
          }
        );
        console.log(data);

        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
  };

  console.log(!stripe || loading);

  return (
    <form onSubmit={handleSubmit}>
      {/* Product Information */}
      <img
        src="https://exigibuencafe.com/wp-content/uploads/2017/02/borra.jpg"
        alt="Borra de cafe"
        className="img-fluid"
      />

      <h3 className="text-center my-3 fs-3 text">Deja tu donativo: 100$</h3>

      <div className="form-group">
        <CardElement />
      </div>

      <div class="d-grid gap-2">
      <button disabled={!stripe} className="btn btn-success mt-3 mb-5" type="button">
        {loading ? (
          <div className="spinner-border text-light" role="status">
            <span className="sr-only"></span>
          </div>
        ) : (
          "Donar"
        )}
      </button>
      </div>
    </form>
  );
};

export default CheckoutForm;