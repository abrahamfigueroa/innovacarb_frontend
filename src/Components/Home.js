import React from 'react';
import { Navbar } from './Navbar';
import BannerBackground from "../Assets/home-banner-background.png";
import { FiArrowRight } from "react-icons/fi";

export const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
            <img className='home-banner-image' src={BannerBackground} alt="" />
          </div>
          <div className='home-text-section'>
            <h1 className='primary-heading'>Bienvenidos a Innovacarb
            </h1>
            <p className='primary-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum lorem metus. In interdum ultrices ante, vitae consectetur dolor tempor.
            </p>
          </div>
        </div>
    </div>
  )
}
export default Home