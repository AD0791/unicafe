import React from 'react';
import {DataGrid} from '@mui/x-data-grid'

function Table({good,bad,neutral}) {
  const total = good + bad + neutral;
  const columns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'title', headerName: 'Title', width: 130 },
    {
      field: 'results',
      headerName: 'Results',
      width: 200
    }
  ];
  
  const rows = [
    { id: 1,title: "Good", results: good },
    { id: 2,title: 'Neutral',results: neutral },
    { id: 3,title: 'Bad',results: bad },
    { id: 4,title: 'Total',results:  total},
    { id: 5,title: 'Positive', results: `${(good/total)*100}%` }
  ];
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems:'center' }}>
        <div style={{ height: 350, width: '50%'}}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </div>
    );
}

export default Table;