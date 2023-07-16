import './userList.css';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { UserRows } from "../../../dummyData";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function UserList() {
    const [data, setData] = useState(UserRows);

    const handlData = (id) => {
        setData(data.filter((item) => item.id !== id)); {/*to delete an item filter gone search for the current id, compare it with the demand id and delete it if not will gone stay  */}
    };
    const columns = [
            { field: 'id', headerName: 'ID', width: 90 },
            { field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                <div className='userListUser' >
                    <img className="userListImg" src={params.row.avatar} alt='' />     {/*Here I just add arrow function take a params and return jsx elem.. */}
                    {params.row.username}
                </div>
                )
            } },
            { field: 'email', headerName: 'Email', width: 130 },
            {
            field: 'status',
            headerName: 'Status',
            width: 120,
            },
            {
                field: 'transaction',
                headerName: 'Transaction Volume',
                width: 160,
            },
            {
                field: 'action',
                headerName: 'Action',
                width: 150,
                renderCell: (params) => {
                    return (
                        <>
                        <Link to={"/user/" + params.row.id} >   {/*When I click to this link they add it with user id selected in URL*/}
                            <button className="userListEdit">Edit</button>   {/*Here adding field, arrow function take a params and return jsx elem.. */}
                        </Link>
                            <DeleteOutline className="delete" 
                            onClick={() => handlData(params.row.id)} />
                        </>
                    )
                }
            },
            
        ];
        


    return (
        <div className='userList' >
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
        </div>
    )
}
