import { Grid, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { HomeStyles } from '~/styles/homeStyles';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddIcon from '@mui/icons-material/Add';
import Card from '../Card';
import Menu from '../Menu';
import TopMenu from '../TopMenu';
import { getCountTransactions } from '~/services/api';

export default function Content({ children, title }) {
  const [leftMenu, setLeftMenu] = useState(false);

  const [information, setInformation] = useState('');

  const search = useCallback(async () => {
    const getCount = await getCountTransactions();

    if (getCount.status === 200) {
      const { deposit, purchase } = getCount.data;

      return setInformation({
        deposit,
        purchase,
        balance: deposit - purchase,
      });
    }
  }, []);

  useEffect(() => {
    search();
  }, [search]);

  const handleMenu = useCallback(() => {
    setLeftMenu(prev => !prev);
  }, []);

  const { deposit, purchase } = information;

  const substract = deposit - purchase || 0;

  return (
    <>
      <Menu leftMenu={leftMenu} handleMenu={handleMenu} />
      <TopMenu handleMenu={handleMenu} />
      <Grid container p="20px">
        <Grid container justifyContent="flex-end" spacing={6}>
          <Card
            label="Current balance"
            value={substract}
            icon={<AttachMoneyIcon />}
            type="primary"
          />
          <Card label="Expenses" value={purchase} icon={<AddIcon />} />
          <Card label="Incomes" value={deposit} icon={<AddIcon />} />
        </Grid>
        <Typography variant="h3" sx={HomeStyles.titleList} mb={4}>
          {title}
        </Typography>
        {children}
      </Grid>
    </>
  );
}
