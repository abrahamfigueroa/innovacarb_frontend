import React from "react";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const DashboardUser = () => {
  return (
    <body>
      <div>
        {/* <img src='https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg'></img> */}
        <h1>
          {"firstname"} {"lastname"}
        </h1>
      </div>
      <div>
        <div>
        <p>Cantidad de kg de desechos de café aportados</p>
        <p><span>{'0'}</span> kg</p>
        </div>
        <div>
        <p>Lo que equivale a</p>
        <p><span>{'0'}</span> kg</p>
        <p>DE CARBON ACTIVADO</p>
        </div>
      </div>
      <div>
        <p>Cafetería certificada</p>
        <EmojiEventsIcon fontSize='large'/>
        <p>Categoría dorada</p>
      </div>
    </body>
  );
};

export default DashboardUser;
