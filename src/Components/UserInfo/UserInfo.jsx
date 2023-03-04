import React from 'react'
import './UserInfo.css'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const UserInfo = () => {
  return (
    <div className="main-userInfo-container">

      <div className="top-container">
        <div className="data-cafes">
          <p className="waste-data">
            <span>Cantidad de kg de desechos de café aportados: 
            </span>
            <span className='data'>50 kg</span>
          </p>
          <p className="activeCarbon-data">
            <span>Lo que equivale a: </span>
            <span className="data">5kg De carbono activado </span>
            </p>
          <p className="badge-category">
            <span>Cafetería certificada con Categoría: </span>
            <span className="data">Dorada</span>
            <span className="data-emoji"><EmojiEventsIcon/></span>
            </p>
        </div>
        <div className="userInfo-input-container"></div>
      </div>

      <div className="bottom-container">
        <div className="social-icons">
          <div className="instagramIcon"><a href='#'><InstagramIcon /></a></div>
          <div className="facebookIcon"><a href='#'><FacebookSharpIcon /></a></div>
        </div>
      </div>

      </div>
  )
}

export default UserInfo