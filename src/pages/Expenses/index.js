import React, { useCallback, useEffect, useState } from 'react';
import Content from '~/components/Content';
import Table from '~/components/Table';
import { getTransactions } from '~/services/api';

export default function Expenses() {
  const [expensesTransaction, setExpensesTransaction] = useState([]);

  const search = useCallback(async () => {
    const searchTransactions = await getTransactions();

    const { purchase } = searchTransactions.data;

    if (searchTransactions.status === 200) {
      setExpensesTransaction(purchase);
    }
  }, []);

  useEffect(() => {
    search();
  }, [search]);

  return (
    <>
      <Content title="Expenses">
        <Table rows={expensesTransaction} />
      </Content>
    </>
  );
}
