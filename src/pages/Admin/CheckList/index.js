import React, { useCallback, useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Content from '~/components/Content';
import { IconButton } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ModalDetailsCheck from '~/components/ModalDetailsCheck';
import { getDepositsPendings } from '~/services/api';
import formatDate from '~/util/formatDate';
import formatCurrency from '~/util/formatCurrency';
import { HomeStyles } from '~/styles/homeStyles';

export default function Checklist() {
  const [dataModal, setDataModal] = useState('');
  const [modalDetails, setModalDetails] = useState(false);
  const [depositsPendings, setDepositsPendings] = useState([]);

  const handleModalData = useCallback(params => {
    setDataModal(params);
    setModalDetails(true);
  }, []);

  const handleOpenModal = useCallback(() => {
    setModalDetails(prev => !prev);
  }, []);

  const searchDeposits = useCallback(async () => {
    const search = await getDepositsPendings();

    if (search.status === 200) {
      setDepositsPendings(search.data);
    }
  }, []);

  useEffect(() => {
    searchDeposits();
  }, [searchDeposits]);

  const columns = [
    {
      field: 'informations',
      headerName: '',
      flex: 1,
      renderCell: params => {
        return (
          <>
            {params.row.description} <br />
            {formatDate(params.row.created_at)}
          </>
        );
      },
    },
    {
      field: 'value',
      headerName: '',
      renderCell: params => {
        return <>{formatCurrency(params.row.amount)}</>;
      },
    },
    {
      field: 'actions',
      headerName: '',
      renderCell: params => {
        return (
          <IconButton onClick={() => handleModalData(params.row)}>
            <RemoveRedEyeIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <>
      <Content title="Checks Control">
        <ModalDetailsCheck
          openModal={modalDetails}
          handleModal={handleOpenModal}
          dataModal={dataModal}
          searchDeposits={searchDeposits}
        />
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            sx={HomeStyles.tableStyles}
            rows={depositsPendings}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection={false}
          />
        </div>
      </Content>
    </>
  );
}
