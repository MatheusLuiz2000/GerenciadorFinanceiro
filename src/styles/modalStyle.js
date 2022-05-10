export const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 520,
  bgcolor: 'background.paper',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  p: 4,
  borderRadius: 4,
  '& .MuiFormControl-root': {
    marginBottom: '30px',
  },
};

export const iconButtonCloseModal = {
  position: 'absolute',
  paddingRight: '32px',
  justifyContent: 'flex-end',
  right: '0px',
  top: '10px',
  '&:hover': {
    backgroundColor: 'transparent',
  },
};
