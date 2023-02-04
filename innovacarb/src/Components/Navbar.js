import React, { useState } from 'react'
import Logo from "../Components/Assets/logo-innovacarb.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";


export const Navbar = () => {

  const [openMenu, setOpenMenu] = useState (false)
  const menuOptions = [
    {
    text: "Proceso",
    icon: <HomeIcon />
  },
  {
    text: "Sobre Nosotros",
    icon: <InfoIcon />
  },
  {
    text: "Testimonios",
    icon: <CommentRoundedIcon />
  },
  {
    text: "Preguntas Frecuentes",
    icon: <PhoneRoundedIcon />
  }
];

  return (
    <nav>
      <div className='nav-logo-container'>
        <img src={Logo} alt="" /> 
      </div>
      {/* Container links */}
      <div className='navbar-links-container'>
      <a href=''>Proceso</a>
      <a href=''>Sobre Nosotros</a>
      <a href=''>Testimonios</a>
      <a href=''>Preguntas Frecuentes</a>

      <button className='primary-button'>
        Ingresa
      </button>
      </div>
      <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

    <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
    <Box sx={{ width: 250 }}
    role="presentation"
    onClick={() => setOpenMenu(false)}
    onKeyDown={() => setOpenMenu(false)}>
      <List>
        {menuOptions.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon> {item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
    </Drawer>

    </nav>
  )
}

export default Navbar