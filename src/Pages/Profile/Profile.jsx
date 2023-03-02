import { valueToPercent } from '@mui/base'
import { Feed } from '@mui/icons-material'
import React, { useState, useMemo, useCallback, useContext} from 'react'
import { useDropzone } from 'react-dropzone'
import { SiTarget } from 'react-icons/si'
import { useParams } from 'react-router-dom'
import UserInfo from '../../Components/UserInfo/UserInfo'
import SettingsProfile from '../../Components/SettingsProfile/SettingsProfile'
import './Profile.css'

const Profile = () => {
  const {userId} =useParams();
  return (
    <div className="MainProfileDiv">

      <div className="profile-container">
        <div className="top-section">

          <div className="user-profile-bg-image">
            <img id="profile-bg-img" src="" alt="" srcset="" />
          </div>

          <div className="user-profile-image">
            <img id="profile-img"src="" alt="" srcset="" />
          </div>

          <div className="userName">Abraham Figueroa</div>

        </div>
        
        <div className="bottom-section">

        <div className="info-section">
            <UserInfo />
          </div>

          <div className="right-menu">
            <SettingsProfile />
            <a>Tus recolecciones</a>
            <a>Editar perfil</a>
            <a>Cerrar sesión</a>
          </div>

        </div>
      </div>
      {/* ID : {userId} */}
    </div>
  )
}

export default Profile