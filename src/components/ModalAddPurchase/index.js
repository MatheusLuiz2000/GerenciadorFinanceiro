import React, { useCallback } from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from '../Input';
import { Currency } from '../Input/currency';
import { useFormik } from 'formik';
import { IconButton, TextField } from '@mui/material';
import { inputStyles } from '~/styles/inputStyles';
import ButtonComponent from '../Button';
import CloseIcon from '@mui/icons-material/Close';
import { addNewPurchase } from '~/services/api';
import { toast } from 'react-toastify';
import { iconButtonCloseModal, modalStyle } from '~/styles/modalStyle';
import { toastConfig } from '~/constants/toast';

export default function ModalAddPurchase({
  openModalPurchase,
  handleModalPurchhase,
}) {
  const onSubmit = useCallback(
    async values => {
      const addNew = await addNewPurchase(values);

      if (addNew.status !== 200 || addNew.data.error) {
        return toast.error(addNew.data.message, toastConfig);
      }

      handleModalPurchhase();

      return window.location.reload();
    },
    [handleModalPurchhase]
  );

  const formik = useFormik({
    initialValues: {
      amount: 0,
      date: new Date(),
      description: '',
    },
    onSubmit,
  });

  const handleChangeDate = useCallback(
    value => {
      formik.setFieldValue('date', value);
    },
    [formik]
  );

  return (
    <div>
      <Modal
        open={openModalPurchase}
        onClose={handleModalPurchhase}
        hideBackdrop
      >
        <form onSubmit={formik.handleSubmit}>
          <Box sx={modalStyle}>
            <IconButton
              onClick={handleModalPurchhase}
              sx={iconButtonCloseModal}
            >
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
              Add new Purchase
            </Typography>
            <Currency label="Amount" name="amount" formik={formik} />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                onChange={handleChangeDate}
                label="Date"
                value={formik.values.date}
                renderInput={params => (
                  <TextField
                    fullWidth
                    InputProps={{ disableUnderline: true }}
                    sx={inputStyles}
                    variant="filled"
                    name="date"
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
            <Input label="Description" name="description" formik={formik} />
            <ButtonComponent type="submit">Add Purchase</ButtonComponent>
          </Box>
        </form>
      </Modal>
    </div>
  );
}
