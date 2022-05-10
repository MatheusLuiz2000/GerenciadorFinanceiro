import React, { useCallback } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, IconButton } from '@mui/material';
import Button from '../Button';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import formatCurrency from '~/util/formatCurrency';
import { updateDepositCheck } from '~/services/api';
import { toast } from 'react-toastify';
import { modalStyle, iconButtonCloseModal } from '~/styles/modalStyle';
import { toastConfig } from '~/constants/toast';

export default function ModalDetailsCheck({
  openModal,
  handleModal,
  dataModal,
  searchDeposits,
}) {
  const depositCheckControl = useCallback(
    async decision => {
      const updateCheck = await updateDepositCheck(dataModal.id, decision);

      if (updateCheck.status !== 200 || updateCheck.data.error) {
        return toast.error(updateCheck.data.message, toastConfig);
      }

      toast.success('Deposit check updated!', toastConfig);
      handleModal();

      return searchDeposits();
    },
    [dataModal, handleModal, searchDeposits]
  );

  return (
    <div>
      <Modal open={openModal} onClose={handleModal} hideBackdrop>
        {dataModal && (
          <Box sx={modalStyle}>
            <IconButton onClick={handleModal} sx={iconButtonCloseModal}>
              <CloseIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="h2"
              sx={{
                color: 'rgb(52, 71, 103)',
                textAlign: 'center',
                mb: 4,
                fontSize: '22px',
              }}
            >
              Check Details
            </Typography>
            <Grid container spacing={6} mb={2}>
              <Grid item xs={1}>
                <PersonIcon />
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant="subtitle1"
                  color="rgb(103, 116, 142)"
                  fontWeight={400}
                >
                  Customer
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="rgb(52, 71, 103)"
                  fontWeight={700}
                >
                  {dataModal.user.name}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={6} mb={2}>
              <Grid item xs={1}>
                <EmailIcon />
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant="subtitle1"
                  color="rgb(103, 116, 142)"
                  fontWeight={400}
                >
                  Customer Email
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="rgb(52, 71, 103)"
                  fontWeight={700}
                >
                  {dataModal.user.email}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={6} mb={2}>
              <Grid item xs={1}>
                <InsertDriveFileIcon />
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant="subtitle1"
                  color="rgb(103, 116, 142)"
                  fontWeight={400}
                >
                  Account
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="rgb(52, 71, 103)"
                  fontWeight={700}
                >
                  {dataModal.user.id}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={6} mb={2}>
              <Grid item xs={1}>
                <PointOfSaleIcon />
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant="subtitle1"
                  color="rgb(103, 116, 142)"
                  fontWeight={400}
                >
                  Reported Amount
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="rgb(52, 71, 103)"
                  fontWeight={700}
                >
                  {formatCurrency(dataModal.amount)}
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <img
                  src={`${process.env.REACT_APP_API_URL}${dataModal.check_img}`}
                  alt="Check list"
                  style={{
                    maxWidth: '100%',
                    width: '520px',
                    marginTop: '30px',
                    height: '200px',
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={6} mt={2}>
              <Grid item xs={6}>
                <Button
                  type="button"
                  variant="contained"
                  onClick={() => depositCheckControl(false)}
                >
                  Rejected
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button type="button" onClick={() => depositCheckControl(true)}>
                  Accept
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}
      </Modal>
    </div>
  );
}
