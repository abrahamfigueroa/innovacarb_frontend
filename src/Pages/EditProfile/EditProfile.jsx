import React, { useState, useEffect } from "react";
import "../../Stylesheets/Variables.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const UserProfile = ({ user }) => {


const navigate = useNavigate();
const [body, setBody] = useState({ coffeshop:"",firstName: "", lastName: "", address:"", phone:""});

const inputChange = ({ target }) => {
  console.log(target.name);
  const { name, value } = target;
  setBody({
    ...body,
    [name]: value,
  });
};
  const [coffeshop, setCoffeShop] = useState("");  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (user) {
      setCoffeShop(user.coffeshop);  
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setAddress(user.address);
      setPhone(user.phone);
    }
  }, [user]);

  const handleCoffeShopChange = (event) => {
    setCoffeShop(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  
  return (
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            NOMBRE A MOSTRAR
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  className="borderprimary700"
                  autoComplete="given-name"
                  name="CafeName"
                  required
                  fullWidth
                  id="CafeName"
                  label="Nombre de Cafetería"
                  autoFocus
                  value={body.setCoffeShop}
                  onChange={handleCoffeShopChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  className="borderprimary700"
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                  value={body.setFirstName}
                  onChange={handleFirstNameChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoComplete="family-name"
                  value={body.setLastName}
                  onChange={handleLastNameChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Dirección"
                  type="address"
                  name="address"
                  autoComplete="address"
                  value={body.setAddress}
                  onChange={handleAddressChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Número telefónico"
                  type="number"
                  id="phone"
                  onChange={handlePhoneChange}
                  value={body.setPhone}
                />
              </Grid>

              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Button
              className="bg-primary700"
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
              Guardar cambios
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>

              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>

  );
};

export default UserProfile;