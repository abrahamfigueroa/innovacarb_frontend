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

  let infoPaymentcomplete=false;

  const handleChange = (event) => {
    if(event.complete) {
      infoPaymentcomplete=true;
      console.log("completo"+infoPaymentcomplete)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      
      <img
        src="https://exigibuencafe.com/wp-content/uploads/2017/02/borra.jpg"
        alt="Borra de cafe"
        className="img-checkout"
      />
        <p className="primary-text-checkoutForm">¿Te gustaría colaborar pero no tienes una cafetería? ¡Puedes dejar tu donativo!</p>
      <br></br>
      <h3 className="text-center my-3 fs-3">Deja tu donativo: <input type='number'>
      </input> mxn</h3>

      <div className="form-group">
        <CardElement onChange={handleChange} />
      </div>

      <div className="gap-2 alignItems-center d-flex">
      <button disabled={!stripe} className="btn btn-success mt-3 mb-5" type="submit">
        {
        loading ? (
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