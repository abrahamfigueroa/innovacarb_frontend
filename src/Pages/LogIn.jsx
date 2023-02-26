import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

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

const SignIn = () => {
  const [body, setBody] = useState({ email: "", password: "" });

  const inputChange = ({ target }) => {
    console.log(target.name);
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });
  };

  const onSubmit = () => {
    axios
      .post("http://localhost:8000/users/auth", body)
      .then((res) => {
        localStorage("auth", res.ok);
        localStorage("token", res.payload);
      })
      //.then((res) => res.json())
      //.then((data) => console.log(data))
      .catch(({ response }) => console.log(response.data));
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
            Vienes por un café?
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {/*  <Grid item xs={12} sm={6}>
                <TextField
                  className="borderprimary700"
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                />
              </Grid> */}
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Correo electrónico"
                  name="email"
                  type="email"
                  id="email"
                  autoComplete="email"
                  onChange={inputChange}
                  value={body.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Contraseña"
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="password"
                  onChange={inputChange}
                  value={body.password}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary"
                   />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              className="backgroundprimary700"
              type="submit"
              fullWidth
              variant="contained"
              onClick={onSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" className="colorprimary700">
                  Aún no tienes una cuenta? Regístrate!
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

export default SignIn;
