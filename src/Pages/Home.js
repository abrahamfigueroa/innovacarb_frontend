import React from 'react'
import Landing from '../Components/Landing';
import About from '../Components/About';
import Process from '../Components/Process';
import Questions from '../Components/Questions';
import Root from '../Layout/Root';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CheckoutForm from '../Components/CheckoutForm';
import { Link } from 'react-router-dom';
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

export default Home

