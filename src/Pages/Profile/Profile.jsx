import { valueToPercent } from '@mui/base'
import React, { useState, useMemo, useCallback, useContext, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserInfo from '../../Components/UserInfo/UserInfo'
import SettingsProfile from '../../Components/SettingsProfile/SettingsProfile'
import './Profile.css'
import axios from 'axios'

const Profile = () => {
  const navigate = useNavigate();

const [coffeshopData, setCoffeshopData] = useState([])

useEffect(() => {
  axios
  .get("http://localhost:8000/coffeshop/63feaab44c9b6944055898e4")
  .then((res) =>{
    setCoffeshopData(res.data.payload)
  })
},[])

  const {userId} =useParams();
  return (
    <div className="MainProfileDiv">

      <div className="profile-container">
        <div className="top-section">

          <div className="user-profile-bg-image">
            <img id="profile-bg-img" src="" alt="" />
          </div>

          <div className="user-profile-image">
            <img id="profile-img"src="" alt="" />
          </div>

          <div 
          className="userName">
            {coffeshopData.nameCafeteria}
          </div>

        </div>
        
        <div className="bottom-section">

        <div className="info-section">
            <UserInfo data={coffeshopData}/>
          </div>

          <div className="right-menu">
            <SettingsProfile />
          </div>

        </div>
      </div>
      {/* ID : {userId} */}
    </div>
  )
}

export default Profile