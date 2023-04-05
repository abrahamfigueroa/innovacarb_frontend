import { valueToPercent } from '@mui/base'
import React, { useState, useMemo, useCallback, useContext, useEffect, useId} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserInfo from '../../Components/UserInfo/UserInfo'
import SettingsProfile from '../../Components/SettingsProfile/SettingsProfile'
import './Profile.css'
import axios from 'axios'
import jwt_decode from "jwt-decode";
import BasicModal from '../../Components/BasicModal'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";



const Profile = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id)

const [coffeshopData, setCoffeshopData] = useState([])
const [coffeshopId, setCoffeshopId] = useState("")
const [openModal, setOpenModal] = useState(false);
const valueToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2M2ZlYWZmMGY0NmRkZWQ4MDc5NTRmZTQiLCJyb2wiOiJjdXN0b21lciIsImlhdCI6MTY4MDY2MTg4OSwiZXhwIjoxNzEyMTk3ODg5fQ.WN9qaWifOUsuglmAVvSC3cr0QyBnpE60THq4guenous";


useEffect(() => {
  axios
    .get(`http://localhost:8000/users/63faaa39750596056d95ca6a`, {
      headers: {
        Authorization: `Bearer ${valueToken}`
      }
    })
    .then((res) => {
      console.log(res.data.payload.coffeshop.length);
      setCoffeshopData(res.data.payload.coffeshop);
    })
}, []);

const handleOpen = () => setOpenModal(true);
const handleClose = () => setOpenModal(false);


  return (
    coffeshopData.length === 0 ? (<> <h2>Aún no tienes cafeterías agregadas</h2><Button onClick={handleOpen}>Agregar cafetería</Button>
          <BasicModal open={openModal} modalTitle={"Agrega una nueva cafetería"} close={handleClose}>
      <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="nameCoffeeShop"
                  label="Nombre de cafetería"
                  name="nameCoffeeShop"
                  autoComplete="Nombre de cafetería"
                  margin="normal"
                  // value={body.nameCoffeeShop}
                  // onChange={inputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  type="number"
                  label="Número telefónico"
                  name="phoneNumber"
                  autoComplete="Número telefónico"
                  margin="normal"
                  // value={body.phoneNumber}
                  // onChange={inputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Dirección de la cafetería"
                  name="address"
                  autoComplete="Dirección de la cafetería"
                  margin="normal"
                  // value={body.address}
                  // onChange={inputChange}
                />
              </Grid>
      </Box>
        <Button>Registrar cafetería</Button>
      </BasicModal>

    </>) :  
    (<div className="MainProfileDiv">

    <Button onClick={handleOpen}>Hola</Button>
      <BasicModal open={openModal} modalTitle={"Agrega una nueva cafetería"} close={handleClose}>
      <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="nameCoffeeShop"
                  label="Nombre de cafetería"
                  name="nameCoffeeShop"
                  autoComplete="Nombre de cafetería"
                  margin="normal"
                  // value={body.nameCoffeeShop}
                  // onChange={inputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  type="number"
                  label="Número telefónico"
                  name="phoneNumber"
                  autoComplete="Número telefónico"
                  margin="normal"
                  // value={body.phoneNumber}
                  // onChange={inputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Dirección de la cafetería"
                  name="address"
                  autoComplete="Dirección de la cafetería"
                  margin="normal"
                  // value={body.address}
                  // onChange={inputChange}
                />
              </Grid>
      </Box>
        <Button>Registrar cafetería</Button>
      </BasicModal>

  

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