export const HomeStyles = {
  boxContainer: {
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    padding: '13px 20px',
  },
  titleBox: {
    fontSize: '0.9rem',
    color: '  rgb(103, 116, 142)',
    fontWeight: '700',
  },
  valueBox: {
    fontSize: '1.5rem',
    color: 'rgb(52, 71, 103)',
    fontWeight: '700',
  },
  iconBox: {
    boxShadow:
      'rgb(20 20 20 / 12%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(20 20 20 / 7%) 0rem 0.125rem 0.25rem -0.0625rem',
    padding: '7px',
    color: '#ffff',
    borderRadius: '0.5rem',
  },
  titleList: {
    color: 'rgb(52, 71, 103)',
    fontSize: '1.5rem',
    fontWeight: '600',
    marginTop: '40px',
  },
  listItem: {
    justifyContent: 'space-between',
  },
  currentBalanceBG: {
    background: 'linear-gradient(310deg, rgb(245, 57, 57), rgb(251, 207, 51))',
  },
  incomesBG: {
    background: 'linear-gradient(310deg, rgb(234, 6, 6), rgb(255, 102, 124))',
  },
  expensesBG: {
    background: 'linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253))',
  },
  buttonNoStyle: {
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',
  },
  tableStyles: {
    '&>.MuiDataGrid-main': {
      '&>.MuiDataGrid-columnHeaders': {
        borderBottom: 'none',
      },

      '& div div div div >.MuiDataGrid-cell': {
        borderBottom: 'none',
      },
    },
    '& .MuiDataGrid-footerContainer': {
      borderTop: 'none',
    },
    '& .MuiDataGrid-menuIcon': {
      display: 'none',
    },
    '& > .MuiDataGrid-columnSeparator': {
      visibility: 'hidden',
    },
  },
};
