import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BasicTextFields from "../../Components/BasicTextFields";
import "./DashboardAdmin.css";

const DashboardAdmin = () => {
  return (
    <body>
      <div>
        {/* <img src='https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg'></img> */}
        <h1>
          {"Bienvenido "}
          {"firstName"} {"lastName"}
        </h1>
      </div>
      <div>
        <div>
          <div className="fila">
            <span>Registros de la semana</span>
            <BasicTextFields />
          </div>
        </div>
      </div>
    </body>
  );
};

export default DashboardAdmin;
