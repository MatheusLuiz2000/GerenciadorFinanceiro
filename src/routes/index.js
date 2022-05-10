import React from 'react';
import { Switch } from 'react-router-dom';
import Checklist from '~/pages/Admin/CheckList';
import Checks from '~/pages/Checks';
import Expenses from '~/pages/Expenses';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import SignUp from '~/pages/SignUp';
import Route from './Route';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/home" isPrivate type="user" exact component={Home} />
        <Route
          path="/expenses"
          isPrivate
          type="user"
          exact
          component={Expenses}
        />
        <Route path="/checks" exact isPrivate type="user" component={Checks} />
        <Route
          path="/admin/checklist"
          isPrivate
          isAdmin
          exact
          component={Checklist}
        />
      </Switch>
    </>
  );
}
