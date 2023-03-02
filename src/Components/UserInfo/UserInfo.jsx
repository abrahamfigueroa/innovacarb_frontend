import React from 'react'
import './UserInfo.css'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';

const UserInfo = () => {
  return (
    <div className="main-userInfo-container">

      <div className="top-container">
        <div className="data-cafes">
          <p className="waste-data">Cantidad de kg de desechos de café aportados</p>
          <p className="activeCarbon-data">Lo que equivale a</p>
          <p className="badge-category">Cafetería certificada con:</p>
        </div>
        <div className="userInfo-input-container"></div>
      </div>

      <div className="bottom-container">

      </div>

      </div>
  )
}

export default UserInfo