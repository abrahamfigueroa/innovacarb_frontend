import React from 'react'
import { Navbar } from './Navbar'
// import CoverPicture from "../Components/Assets/composta1.png";
import { FiArrowRight } from "react-icons/fi";

export const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        {/* <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
            <img src={CoverPicture} alt="" />
          </div>
          <div className='home-text-section'>
            <h1 className='primary-heading'>Bienvenidos a Innovacarb
            </h1>
          </div>
        </div> */}
    </div>
  )
}
export default Home