import React, { useState, useMemo, useCallback, useContext} from 'react'
import { useDropzone } from 'react-dropzone'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const {userId} =useParams();
  return (
    <div className="MainProfileDiv">

      <div className="profile-container">
        <div className="top-section">

          <div className="user-profile-bg-image">
            <img src="" alt="" srcset="" />
          </div>

          <div className="user-profile-image">
            <img src="" alt="" srcset="" />
          </div>

        </div>
        
        <div className="bottom-section">
          <div className="right-side"></div>
        </div>
      </div>
      {/* ID : {userId} */}
    </div>
  )
}

export default Profile