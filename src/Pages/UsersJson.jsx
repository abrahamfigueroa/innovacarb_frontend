import MUIDataTable from "mui-datatables";
import users from './users.json'

const columns = [
    {
        name: "id", 
        label: "ID", 
    },
    {
        name: "name", 
        label: "NAME", 
    },
    {
        name: "gender", 
        label: "GENDER", 
    },
]

export const UsersJson = () => {
    return (
        <MUIDataTable 
        title= {"Historial de recolecciones"}
        data= {users}
        columns={columns}
        />
    )
}

export default UsersJson;