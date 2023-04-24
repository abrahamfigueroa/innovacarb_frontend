import { valueToPercent } from "@mui/base";
import React, {
  useState,
  useMemo,
  useCallback,
  useContext,
  useEffect,
  useId,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserInfo from "../../Components/UserInfo/UserInfo";
import SettingsProfile from "../../Components/SettingsProfile/SettingsProfile";
import "./Profile.css";
import axios from "axios";
// import jwt_decode from "jwt-decode";
import BasicModal from "../../Components/BasicModal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const Profile = () => {
  const setToken = localStorage.getItem("innovacarbToken");
  const navigate = useNavigate();
  const { id } = useParams();

  const [coffeshopData, setCoffeshopData] = useState([]);
  const [coffeshopId, setCoffeshopId] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const [firstCoffeeShop, setFirstCoffeeShop] = useState({
    nameCafeteria: "",
    ownerName: "",
    phone: "",
    adress: "",
    postalCode: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/${id}`, {
        headers: {
          Authorization: `Bearer ${setToken}`,
        },
      })
      .then((res) => {
        setCoffeshopData(res.data.payload.coffeshop);
      });
  }, [openModal]);

  const handleFirstCoffeeShop = (e) => {
    setFirstCoffeeShop({ ...firstCoffeeShop, [e.target.name]: e.target.value });
  };
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const handleNewCoffeeShop = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8000/coffeshop/`, firstCoffeeShop, {
      headers: {
        Authorization: `Bearer ${setToken}`,
      },
    })
    .then((res) => {
      if(res.status=== 200) {
        setOpenModal(false)
      }
    })
  };
  return coffeshopData.length === 0 ? (
    <>
      <h2 className="textModal">No tienes cafeterías agregadas</h2>
      <Button
        className="mt-3 mb-5 bg-primary700"
        sx={{ borderRadius: "16px" }}
        variant="contained"
        onClick={handleOpen}
      >
        Agregar cafetería
      </Button>
      <BasicModal
        open={openModal}
        modalTitle={"Agrega una nueva cafetería"}
        close={handleClose}
      >
        {/* <Box onSubmit={handleNewCoffeeShop} component="div" noValidate sx={{ mt: 3 }}> */}
        <Grid
          container
          component="form"
          onSubmit={(e) => handleNewCoffeeShop(e)}
        >
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="nameCoffeeShop"
              label="Nombre de cafetería"
              name="nameCafeteria"
              autoComplete="Nombre de cafetería"
              margin="normal"
              value={firstCoffeeShop.nameCafeteria}
              onChange={(e) => handleFirstCoffeeShop(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="ownerName"
              label="Nombre de propietario"
              name="ownerName"
              autoComplete="Nombre del propietario"
              margin="normal"
              value={firstCoffeeShop.ownerName}
              onChange={(e) => handleFirstCoffeeShop(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="phone"
              type="number"
              label="Número telefónico"
              name="phone"
              autoComplete="Número telefónico"
              margin="normal"
              value={firstCoffeeShop.phone}
              onChange={(e) => handleFirstCoffeeShop(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="adress"
              label="Dirección de la cafetería"
              name="adress"
              autoComplete="Dirección de la cafetería"
              margin="normal"
              value={firstCoffeeShop.adress}
              onChange={(e) => handleFirstCoffeeShop(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="postalCode"
              label="Código postal"
              name="postalCode"
              autoComplete="código postal"
              margin="normal"
              value={firstCoffeeShop.postalCode}
              onChange={(e) => handleFirstCoffeeShop(e)}
            />
          </Grid>
          <Grid item>
            <Button
              className="mt-3 mb-2 bg-primary700"
              sx={{ borderRadius: "16px" }}
              variant="contained"
              type="submit"
            >
              Registrar cafetería
            </Button>
          </Grid>
        </Grid>
        {/* </Box> */}
      </BasicModal>
    </>
  ) : (
    <div className="MainProfileDiv">
      <Button onClick={handleOpen}></Button>
      <BasicModal
        open={openModal}
        modalTitle={"Agrega una nueva cafetería"}
        close={handleClose}
      >
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

          <div className="user-profile-image"></div>

          <div className="userName">{coffeshopData.nameCafeteria}</div>
        </div>

        <div className="bottom-section">
          <div className="info-section">
            <UserInfo data={coffeshopData} />
          </div>

          <div className="right-menu">
            <SettingsProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
