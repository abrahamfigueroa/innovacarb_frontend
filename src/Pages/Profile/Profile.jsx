import { valueToPercent } from '@mui/base'
import React, { useState, useMemo, useCallback, useContext, useEffect, useId} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserInfo from '../../Components/UserInfo/UserInfo'
import SettingsProfile from '../../Components/SettingsProfile/SettingsProfile'
import './Profile.css'
import axios from 'axios'
import jwt_decode from "jwt-decode";



const Profile = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id)

const [coffeshopData, setCoffeshopData] = useState([])
const [coffeshopId, setCoffeshopId] = useState("")


useEffect(() => {
  axios
  .get(`http://localhost:8000/coffeshop/63feaab44c9b6944055898e4`)
  .then((res) =>{
    console.log(res)
    setCoffeshopData(res.data.payload)
  })
},[])


  return (
    !coffeshopData ? (<div>Cargando ... </div>) :  
    (<div className="MainProfileDiv">

      <div className="profile-container">
        <div className="top-section">

          {/* <div className="user-profile-bg-image">
          </div> */}

          <div className="user-profile-image">
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
    </div>)
  )
}

export default Profile