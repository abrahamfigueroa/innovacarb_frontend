import React from 'react'
import Landing from '../Components/Landing';
import About from '../Components/About';
import Process from '../Components/Process';
import Questions from '../Components/Questions';
import Root from '../Layout/Root';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CheckoutForm from '../Components/CheckoutForm';
import {Elements} from "@stripe/react-stripe-js";
import {stripePromise} from '../Components/CheckoutForm'


const Home = () => {
  return (
    <div>
        <Navbar />
        <Landing />
        <About />
        <Process />
        <Questions />
        <Elements stripe={stripePromise}>
      <div className="container-fluid">
        <div className="">
          <div className="col-md-4 offset-md-4 h-100">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </Elements>
        <Footer />
    </div>
  )
}

export default Home

