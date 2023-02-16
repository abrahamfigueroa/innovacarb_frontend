import React from 'react'
import Logo from "../Assets/logo-innovacarb.png";
import { SiLinkedin } from "react-icons/si";
import {FaFacebookF} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai"

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer-section-one">
            <div className="footer-logo-container">
                <img src={Logo} alt="" />
            </div>
            <div className="footer-icons">
                <SiLinkedin />
                <FaFacebookF />
                <AiFillInstagram />
            </div>
        </div>
        <div className="footer-section-two primary-subheading">
            <div className="footer-section-columns">
                <span className='primary-text'>Testimonios</span>
                <span>Sobre Make Sence</span>
                <span>Sobre Innovacarb</span>
            </div>
            <div className="footer-section-columns">
                <span>Contacto:</span>
                <span>correo@innovacarb.com</span>
            </div>
            <div className="footer-section-columns">
                <span>Términos y condiciones</span>
                <span>Aviso de privacidad</span>
            </div>
        </div>
    </div>
  )
}

export default Footer