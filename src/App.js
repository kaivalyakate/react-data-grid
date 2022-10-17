import { Place } from '@mui/icons-material';
import { Button } from '@mui/material';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import clsx from 'clsx';

function App() {

  const columns = [
    {
      field: 'TradeName',
      cellClassName: 'super-app-theme--cell',
    },
    {
      field: 'score',
      type: 'number',
      width: 140,
    },
    {
      field: 'Status',
      type: 'string',
      width: 100,
      cellClassName: (params) => {
        if (params.value == null) {
          return '';
        }
        return clsx('super-app', {
          negative: params.value === "Failed",
          positive: params.value === "Success",
          caution: params.value === "Ignored"
        });
      }
    }
  ];

  const rows = [
    {
      id: 1,
      TradeName: 'Jane',
      score: 100,
      Status: "Success"
    },
    {
      id: 2,
      TradeName: 'Jack',
      score: -100,
      Status: "Success"
    },
    {
      id: 3,
      TradeName: 'Gill',
      score: -50,
      Status: "Failed"
    },
    {
      id: 4,
      TradeName: 'Jane',
      score: 0,
      Status: "Ignored"
    }
  ];

  return (
    <div className="container">
      <NavigationBar/>
      <div className="box-grid">
          <Box sx={{
            height: 300,
            width: '50%',
            '& .super-app-theme--cell': {
              backgroundColor: 'rgba(224, 183, 60, 0.55)',
              color: '#1a3e72',
              fontWeight: '600',
            },
            '& .super-app.positive': {
              backgroundColor: 'rgba(157, 255, 118, 0.49)',
              color: '#1a3e72',
              fontWeight: '600',
            },
            '& .super-app.negative': {
              backgroundColor: '#d47483',
              color: '#1a3e72',
              fontWeight: '600',
            },
            '& .super-app.caution': {
              backgroundColor: '#ff7508',
              color: 'white',
              fontWeight: '600',
            }
          }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </div>
    </div>
  );
}

export default App;
