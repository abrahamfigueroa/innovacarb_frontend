import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import Logo from "../Assets/logo-innovacarb.png";
 import { HiOutlineBars3 } from "react-icons/hi2";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { StickyNote2 } from '@mui/icons-material';


export const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false)

  const [openMenu, setOpenMenu] = useState (false)
  const menuOptions = [
    {
    text: "Sobre Nosotros",
    icon: <HomeIcon />
  },
  {
    text: "Proceso",
    icon: <InfoIcon />
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
      <Link to="About" spy={true} smooth={true} offset={50} duration={500}  onClick={closeMenu}>Sobre Nosotros</Link>
      <Link to="Process" spy={true} smooth={true} offset={50} duration={500}  onClick={closeMenu}>Proceso</Link>
      <Link to="Questions" spy={true} smooth={true} offset={50} duration={500}  onClick={closeMenu}>Preguntas Frecuentes</Link>

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