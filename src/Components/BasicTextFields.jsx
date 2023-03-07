import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 0, width: "30ch", class: "container" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Buscar" variant="outlined" />
    </Box>
  );
}
