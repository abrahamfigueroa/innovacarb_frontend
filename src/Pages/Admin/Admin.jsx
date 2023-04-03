import React, { useState } from "react";
import { useEffect } from "react";
import MUIDataTable from "mui-datatables";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { User } from "@auth0/auth0-react";

// const columns = ["ID", "Nombre de Cafetería", "Dirección", "KG de borra", "agenda"];

const options = { filterType: "checkbox" };

export const Admin = () => {

const [users, setUsers] = useState( [] )

const endPoint = 'http://localhost:8000/coffeshop/'

const getData = async () => {
    await axios
    .get(endPoint)
    .then((response) => {
        const data = response.data.payload
        setUsers(data)
    })
}
useEffect(() => {
    getData()
},[])

const columns = [
    {
      name: "name",
      label: "Nombre de cafetería"
    },
    {
      name: "name",
      label: "Nombre de usuario"
    },
    {
      name: "contributions",
      label: "KG aportados"
    },
    {
      name: "status",
      label: "Status"
    },
    {
    name: "changestatus",
    label: "Cambiar Status"
    },
    {
        name: "address",
        label: "Dirección"
    },
    {
        name: "lastContribution",
        label: "Fecha de recolección"
    },
]

const columnsUsers = [
  {
    name: "name",
    label: "Nombre de cafetería"
  },
  {
    name: "name",
    label: "Nombre de usuario"
  },
  {
    name: "contributions",
    label: "KG aportados"
  },
]
//   const navigate = useNavigate();

  return (
    <>
      <div className="home-container">
        <div className="home-banner-container">
          <div className="home-text-section">
            <h1 className="primary-heading">¡Bienvenido, {User.id}!</h1>

          </div>
        </div>
      </div>
      <br></br>

      <MUIDataTable
        title={"Órdenes"}
        data={users}
        columns={columns}
        options={options}
      />,
      <br></br>
      <h2>Esta es tu lista de usuarios</h2>
      <br></br>
          <MUIDataTable
        title={"Usuarios"}
        data={users}
        columns={columnsUsers}
        options={options}
      />
    </>
  );
};

export default Admin