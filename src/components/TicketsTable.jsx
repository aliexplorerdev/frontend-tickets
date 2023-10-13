import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Badges from './Badges/Badges';

const columns = [
  { field: 'ticketNo', headerName: 'Ticket No', width: 250 },
  {
    field: 'title',
    headerName: 'Title',
    width: 250,
  },
  
  {
    field: 'priority',
    headerName: 'Priority',
    width: 250,
    renderCell: (params) => (
       <Badges priority={params.value}/>
      ),
  },
  {
    field: 'assignedTo',
    headerName: 'Assigned To',
    width:250,
    valueGetter: (params) => params.row.assignedTo.name,
  },
  {
    field: 'createdBy',
    headerName: 'Created By',
    width:250,
    valueGetter: (params) => params.row.createdBy.name,
  },
   {
    field: 'status',
    headerName: 'Status',
    width:250,
    renderCell: (params) => (
        <Badges status={params.value}/>
       ),
  }
];




export default function TicketsTable({data}) {
    
    
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        getRowId={(row) => row.ticketNo}
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
