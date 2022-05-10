import React, { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from '../Input';
import { Currency } from '../Input/currency';
import { useFormik } from 'formik';
import { IconButton } from '@mui/material';
import ButtonComponent from '../Button';
import CloseIcon from '@mui/icons-material/Close';
import Dropzone from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { addNewDeposit } from '~/services/api';
import { toast } from 'react-toastify';
import { iconButtonCloseModal, modalStyle } from '~/styles/modalStyle';
import { toastConfig } from '~/constants/toast';

export default function ModalAddCheckDeposit({
  openModalAddCheckDeposit,
  handleModalAddCheckDeposit,
}) {
  const [files, setFiles] = useState('');

  const onSubmit = useCallback(
    async values => {
      const formData = new FormData();

      formData.append('amount', values.amount);
      formData.append('description', values.description);
      formData.append('check_img', files[0]);

      const addCheck = await addNewDeposit(formData);

      if (addCheck.status !== 200 || addCheck.data.error) {
        return toast.error(addCheck.data.message, toastConfig);
      }

      toast.success('Deposit sent to revision!', toastConfig);

      return handleModalAddCheckDeposit();
    },
    [files, handleModalAddCheckDeposit]
  );

  const formik = useFormik({
    initialValues: {
      amount: 0,
      description: '',
    },
    onSubmit,
  });

  const handleDrop = acceptedFiles =>
    setFiles(
      acceptedFiles.map(upfile =>
        Object.assign(upfile, {
          preview: URL.createObjectURL(upfile),
          file: upfile,
        })
      )
    );

  return (
    <div>
      <Modal
        open={openModalAddCheckDeposit}
        onClose={handleModalAddCheckDeposit}
        hideBackdrop
      >
        <form onSubmit={formik.handleSubmit}>
          <Box sx={modalStyle}>
            <IconButton
              onClick={handleModalAddCheckDeposit}
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
              Check a Deposit
            </Typography>
            <Currency label="Amount" name="amount" formik={formik} />
            <Input label="Description" name="description" formik={formik} />
            {!files ? (
              <Dropzone
                onDrop={handleDrop}
                accept="image/*"
                minSize={1024}
                maxSize={3072000}
                multiple={false}
              >
                {({ getRootProps, getInputProps }) => {
                  return (
                    <div
                      {...getRootProps({
                        className: `dropzone`,
                      })}
                    >
                      <CloudUploadIcon />
                      <input {...getInputProps()} />
                      <p>Upload check pictures</p>
                    </div>
                  );
                }}
              </Dropzone>
            ) : (
              <img src={files[0].preview} width="200" alt="Preview" />
            )}
            <ButtonComponent type="submit">Add Purchase</ButtonComponent>
          </Box>
        </form>
      </Modal>
    </div>
  );
}
