import * as React from 'react';
import { useEffect } from 'react';
// import dayjs from 'dayjs';
// import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import Box from '@mui/material/Box';
// import { DataGrid } from '@mui/x-data-grid';
import MUIDataTable from "mui-datatables";



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
      <div className='home-bannerImage-container'>
        <img className='home-banner-image' alt="" />
      </div>
      <div className='home-text-section'>
        <h1 className='primary-heading'>Recolecciones
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
    />,
    <MUIDataTable 
    title={"Recolecciones previas"}
    data={data}
    columns={columns}
    options={options}
  />
  </>)
}

// const isWeekend = (date) => {
//   const day = date.day();

//   return day === 0 || day === 7;
// };

// // const columns =[]
// // const data = []
// // const options ={}


// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   {
//     field: 'firstName',
//     headerName: 'First name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'lastName',
//     headerName: 'Last name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const data =[]

// const options {}

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function StaticDatePickerLandscape() {
//   const [value, setValue] = React.useState(dayjs('2022-04-07'));

//   return (
//     <>
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <StaticDatePicker
//         orientation="portrait"
//         openTo="day"
//         value={value}
//         shouldDisableDate={isWeekend}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(params) => <TextField {...params} />}
//       />
//     </LocalizationProvider>
//      <Box sx={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//         disableSelectionOnClick
//         experimentalFeatures={{ newEditingApi: true }}
//       />
//     </Box>
//   </>
//   );
// }

export default Schedules