import React from 'react';
import { useState } from 'react';
import './Products.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import { product } from '../../datas';

function Products() {
 
    const [userDatas, setUserDatas] = useState(product)

    const userDelete = userID  => {
      setUserDatas(userDatas.filter(user => user.id != userID))
    }
  
    const columns = [
      {
        field: 'id',
        headerName: 'ID',
        width: 90
      },
      {
        field: 'title',
        headerName: 'name',
        width: 200,
        renderCell: (params) => {
          return (
            <Link to="/" className="link">
              <div className='userListUser'>
                <img src={params.row.avatar} className="userListImg" />
                {params.row.title}
              </div>
            </Link>
          )
        }
      },
     
      {
        field: 'price',
        headerName: 'Price',
        width: 120
      },
       
      {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={`/user/${params.row.id}`} className="link">
                <button className='userListEdit'>Edit</button>
              </Link>
              <DeleteOutlineIcon
                className="userListDelete"
                onClick={() => userDelete(params.row.id)}
              />
            </>
          )
        }
      }
    ]
  
    return (
      <div className='userList'>
        <DataGrid
          rows={userDatas}
          columns={columns}
          disableSelectionOnClick
          pageSize={6}
          checkboxSelection
        />
      </div>
    );
  }
  

export default Products;
