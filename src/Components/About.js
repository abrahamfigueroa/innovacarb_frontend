import React from 'react'
import AboutBackground from "../Assets/about-background.png";
import AboutBrackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} />
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBrackgroundImage} />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>Sobre Nosotros</p>
            <h1 className='primary-heading'>
                Transformamos los desechos de café en carbón activado
            </h1>
            <p className='primary-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum lorem metus. In interdum ultrices ante, vitae consectetur dolor tempor.</p>
            <div className='about-buttons-container'>
                <button className='watch-video-button'>
                {""}    
                    <BsFillPlayCircleFill/> Mirar video
                </button>
            </div>
        </div>
    </div>
  )
}

export default About