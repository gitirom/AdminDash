import './productList.css';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProductList() {
    const [data, setData] = useState(productRows);

    const handelData = (id) => {
        setData(data.filter((item) => item.id !== id)); {/*to delete an item filter gone search for the current id, compare it with the demand id and delete it if not will gone stay  */}
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'product', width: 200, renderCell: (params) => {
            return (
            <div className='productListItem' >
                <img className="productListImg" src={params.row.img} alt='' />     {/*Here I just add arrow function take a params and return jsx elem.. */}
                {params.row.name}
            </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 130 },
        {
        field: 'status',
        headerName: 'Status',
        width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                    <Link to={"/product/" + params.row.id} >   {/*When I click to this link they add it with user id selected in URL*/}
                        <button className="productListEdit">Edit</button>   {/*Here adding field, arrow function take a params and return jsx elem.. */}
                    </Link>
                        <DeleteOutline className="delete" 
                        onClick={() => handelData(params.row.id)} />
                    </>
                )
            }
        },
        
    ];

    return (
        <div className='productList' >
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
        </div>
    )
}
