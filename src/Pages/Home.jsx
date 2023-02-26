import React from 'react'
import Landing from '../Components/Landing';
import About from '../Components/About';
import Process from '../Components/Process';
import Questions from '../Components/Questions';
import CheckoutForm from '../Components/CheckoutForm';
import {Elements} from "@stripe/react-stripe-js";
import {stripePromise} from '../Components/CheckoutForm'


const Home = () => {
  return (
    <div>
        <Landing />
        <About />
        <Process />
        <Questions />
        <Elements stripe={stripePromise}>
            <CheckoutForm />
    </Elements>
    </div>
  )
}

export default Home;