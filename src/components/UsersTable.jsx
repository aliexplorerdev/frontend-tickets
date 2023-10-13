import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: '_id', headerName: 'ID', width: 250 },
  {
    field: 'name',
    headerName: 'Full Name',
    width: 250,
    editable: true,
  },
  
  {
    field: 'email',
    headerName: 'Email',
    width: 250,
  },
  {
    field: 'role',
    headerName: 'Role',
    width:250
  }
];


export default function UsersTable({data}) {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        getRowId={(row) => row._id}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
       
        disableRowSelectionOnClick
      />
    </Box>
  );
}
