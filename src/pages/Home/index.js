import React, { useCallback, useEffect, useState } from 'react';
import Content from '~/components/Content';
import Table from '~/components/Table';
import { getTransactions } from '~/services/api';

export default function Home() {
  const [transactions, setTransactions] = useState([]);

  const search = useCallback(async () => {
    const searchTransactions = await getTransactions();

    const { deposit, purchase } = searchTransactions.data;

    const concatList = deposit.concat(purchase);

    if (searchTransactions.status === 200) {
      setTransactions(concatList);
    }
  }, []);

  useEffect(() => {
    search();
  }, [search]);

  return (
    <>
      <Content title="Transactions">
        <Table rows={transactions} />
      </Content>
    </>
  );
}
