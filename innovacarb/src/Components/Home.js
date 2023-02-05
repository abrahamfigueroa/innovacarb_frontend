import React from 'react'
import { Navbar } from './Navbar'
import Header, { Headder } from './Header'
import CoverPicture from "../Components/Assets/composta1.png";
import { FiArrowRight } from "react-icons/fi";

export const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
            <img src={CoverPicture} alt="" />
          </div>
          <div className='home-text-section'>
            <h1 className='primary-heading'>Bienvenidos a Innovacarb
            </h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
    </div>
  )
}
export default Home