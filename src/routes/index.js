import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Users from '../pages/Users';
import User from '../pages/User';
import CopyRight from '../components/CopyRight';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/user/:user" exact component={User} />
      </Switch>
    </>
  );
}
