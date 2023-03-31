import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Form, useNavigate } from 'react-router-dom'
import axios from "axios";

import '../../Stylesheets/Variables.css'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Innovacarb
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();

const SignUp = () => {
  const navigate = useNavigate();
  const [body, setBody] = useState({ email: "", password: "",firstName: "", lastName: ""});

  const inputChange = ({ target }) => {
    console.log(target.name);
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    console.log(body);
    event.preventDefault()
    axios
      .post("http://localhost:8000/users/", body)
      .then((res) => { 
        console.log(res)
        return navigate("/profile")
      })

      .catch(({ response } ) => 
      console.error(response));
      // return navigate("/profile")
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
            ¡BIENVENIDO!
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
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
                  value={body.firstName}
                  onChange={inputChange}
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
                  value={body.lastName}
                  onChange={inputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Correo electrónico"
                  name="email"
                  autoComplete="email"
                  value={body.email}
                  onChange={inputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="nameCoffeeShop"
                  label="Nombre de cafetería"
                  name="nameCoffeeShop"
                  autoComplete="Nombre de cafetería"
                  value={body.nameCoffeeShop}
                  onChange={inputChange}
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
                  value={body.phoneNumber}
                  onChange={inputChange}
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
                  value={body.address}
                  onChange={inputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Define una contraseña"
                  type="password"
                  id="password"
                  onChange={inputChange}
                  value={body.password}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary"/>
                  }
                  label="Por el momento este servicio se encuentra disponible únicamente en Guadalajara*"
                />
              </Grid>
            </Grid>
            <Button
              className="bg-primary700"
              type="submit"
              fullWidth
              variant="contained"
              onClick={onSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
              REGISTRATE
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2" className="color-primary700">
                  ¿Ya tienes una cuenta? ¡Ingresa!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
