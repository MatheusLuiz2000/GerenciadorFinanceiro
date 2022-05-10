import { Grid, Typography, Box } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { HomeStyles } from '~/styles/homeStyles';
import formatCurrency from '~/util/formatCurrency';
import ModalAddCheckDeposit from '../ModalAddCheckDeposit';
import ModalAddPurchase from '../ModalAddPurchase';

export default function Card({ label, value, icon }) {
  const [openModalPurchase, setModalPurchase] = useState(false);
  const [openModalAddCheckDeposit, setModalAddCheckDeposit] = useState(false);

  const handleModalPurchhase = useCallback(() => {
    setModalPurchase(prev => !prev);
  }, []);

  const handleModalAddCheckDeposit = useCallback(() => {
    setModalAddCheckDeposit(prev => !prev);
  }, []);

  const GenerateButton = useCallback(() => {
    switch (label) {
      case 'Expenses':
        return (
          <button
            type="button"
            style={HomeStyles.buttonNoStyle}
            onClick={handleModalPurchhase}
          >
            <Box
              sx={{
                ...HomeStyles.incomesBG,
                ...HomeStyles.iconBox,
              }}
            >
              {icon}
            </Box>
          </button>
        );
      case 'Incomes':
        return (
          <button
            type="button"
            style={HomeStyles.buttonNoStyle}
            onClick={handleModalAddCheckDeposit}
          >
            <Box
              sx={{
                ...HomeStyles.iconBox,
                ...HomeStyles.currentBalanceBG,
              }}
            >
              {icon}
            </Box>
          </button>
        );
      default:
        return (
          <button type="button" style={HomeStyles.buttonNoStyle}>
            <Box
              sx={{
                ...HomeStyles.iconBox,
                ...HomeStyles.expensesBG,
              }}
            >
              {icon}
            </Box>
          </button>
        );
    }
  }, [handleModalAddCheckDeposit, handleModalPurchhase, icon, label]);

  return (
    <>
      <ModalAddPurchase
        openModalPurchase={openModalPurchase}
        handleModalPurchhase={handleModalPurchhase}
        setModalPurchase={setModalPurchase}
      />
      <ModalAddCheckDeposit
        handleModalAddCheckDeposit={handleModalAddCheckDeposit}
        openModalAddCheckDeposit={openModalAddCheckDeposit}
      />
      <Grid item md={3} xs={12} sx={{ width: '250px' }}>
        <Box sx={HomeStyles.boxContainer}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={8}>
              <Typography variant="subtitle1" sx={HomeStyles.titleBox}>
                {label}
              </Typography>
              <Typography variant="subtitle2" sx={HomeStyles.valueBox}>
                {formatCurrency(value)}
              </Typography>
            </Grid>
            <Grid item xs={1} textAlign="center" mr={2}>
              <GenerateButton />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
}
