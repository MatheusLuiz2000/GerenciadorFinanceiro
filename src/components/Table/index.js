import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import formatDate from '~/util/formatDate';
import { Typography } from '@mui/material';
import formatCurrency from '~/util/formatCurrency';
import { HomeStyles } from '~/styles/homeStyles';

export default function Table({ rows }) {
  const columns = [
    {
      field: 'informations',
      headerName: 'Description of transaction',
      flex: 1,
      renderCell: params => {
        return (
          <>
            <Typography
              variant="h3"
              fontSize="15px"
              marginRight="30px"
              color="rgb(52, 71, 103)"
            >
              {params.row.description} <br />
              {formatDate(params.row.created_at)}
            </Typography>
          </>
        );
      },
    },
    {
      field: 'value',
      headerName: 'Amount',
      minWidth: 200,
      renderCell: params => {
        return (
          <>
            <Typography
              variant="h3"
              fontSize="17px"
              marginRight="30px"
              color={params.row.check_img ? 'rgb(52, 71, 103)' : 'red'}
            >
              {formatCurrency(params.row.amount)}
            </Typography>
          </>
        );
      },
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        getRowId={row =>
          `${row.check_img ? `deposit_${row.id}` : `purchase_${row.id}`}`
        }
        sx={HomeStyles.tableStyles}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}
