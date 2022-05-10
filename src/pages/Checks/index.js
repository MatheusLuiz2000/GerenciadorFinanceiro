import React, { useCallback, useEffect, useState } from 'react';
import Content from '~/components/Content';
import TabContext from '@mui/lab/TabContext';
import { Tab, Grid, Typography } from '@mui/material';
import { TabList, TabPanel } from '@mui/lab';
import Table from '~/components/Table';
import { HomeStyles } from '~/styles/homeStyles';
import { getDeposits } from '~/services/api';

export default function Checks() {
  const [tabIndex, setTabIndex] = useState('1');
  const [checksTransactions, setChecksTransactions] = useState([]);

  const handleChange = useCallback((event, newValue) => {
    setTabIndex(newValue);
  }, []);

  const search = useCallback(async () => {
    const searchTransactions = await getDeposits();

    if (searchTransactions.status === 200) {
      setChecksTransactions(searchTransactions.data);
    }
  }, []);

  useEffect(() => {
    search();
  }, [search]);

  return (
    <>
      <Content title="">
        <Typography variant="h3" sx={HomeStyles.titleList} mb={4}>
          Checks
        </Typography>
        <Grid container>
          <TabContext value={tabIndex}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Pending" value="1" />
              <Tab label="Accepted" value="2" />
              <Tab label="Rejected" value="3" />
            </TabList>
            <TabPanel value="1" sx={{ width: '100%' }}>
              <Table
                rows={checksTransactions.filter(item => item.status === null)}
              />
            </TabPanel>
            <TabPanel value="2" sx={{ width: '100%' }}>
              <Table
                rows={checksTransactions.filter(item => item.status === 1)}
              />
            </TabPanel>
            <TabPanel value="3" sx={{ width: '100%' }}>
              <Table
                rows={checksTransactions.filter(item => item.status === 0)}
              />
            </TabPanel>
          </TabContext>
        </Grid>
      </Content>
    </>
  );
}
