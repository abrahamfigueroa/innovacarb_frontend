import React from 'react';
import { useEffect } from 'react';
import MUIDataTable from "mui-datatables";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';


const columns = ["Día", "Fecha", "Horario"]
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
]

const options = {filterType: 'checkbox',};

export const Schedules = () => {

  return(

    <>
    <div className='home-container'>
    
    <div className='home-banner-container'>
      <Stack className='home-bannerImage-container'>
          <Button variant="contained" href="#" color="success">Agendar una recolección</Button>
      </Stack>
      <div className='home-text-section'>
       <h1 className='primary-heading'>
          Recolecciones
        </h1>
        <p className='primary-text'>
        Estas son tus próximas citas
        </p>
      </div>
    </div>
</div>

    <MUIDataTable 
      title={"Próximas recolecciones"}
      data={data}
      columns={columns}
      options={options}
    />
  </>)
}

export default Schedules