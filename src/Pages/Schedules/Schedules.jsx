import React from "react";
import { useEffect } from "react";
import MUIDataTable from "mui-datatables";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const columns = ["Día", "Fecha", "Horario"];
const data = [
  ["Lunes", "31/01/2023", "14 - 16"],
  ["Martes", "30/01/2023", "10 - 12"],
  ["Miércoles", "29/01/2023", "12 - 14"],
  ["Jueves", "28/01/2023", "14 - 16"],
  ["Lunes", "31/01/2023", "14 - 16"],
  ["Martes", "30/01/2023", "10 - 12"],
  ["Miércoles", "29/01/2023", "12 - 14"],
  ["Jueves", "28/01/2023", "14 - 16"],
  ["Lunes", "31/01/2023", "14 - 16"],
  ["Martes", "30/01/2023", "10 - 12"],
  ["Miércoles", "29/01/2023", "12 - 14"],
  ["Jueves", "28/01/2023", "14 - 16"],
  ["Lunes", "31/01/2023", "14 - 16"],
  ["Martes", "30/01/2023", "10 - 12"],
  ["Miércoles", "29/01/2023", "12 - 14"],
  ["Jueves", "28/01/2023", "14 - 16"],
];

const options = { filterType: "checkbox" };

export const Schedules = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home-container">
        <div className="home-banner-container">
          <div className="home-text-section">
            <h1 className="primary-heading">Recolecciones</h1>
            <Button
              onClick={() => navigate("/datepicker")}
              variant="contained"
              type="button"
              color="success"
            >
              Agendar una recolección
            </Button>
          </div>
        </div>
        <p className="primary-text">Estas son tus próximas citas</p>
      </div>

      <MUIDataTable
        title={"Próximas recolecciones"}
        data={data}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default Schedules;
