import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isAdmin,
  ...rest
}) {
  if (isPrivate) {
    const accessToken = localStorage.getItem('access_token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!accessToken || !user) return (window.location.href = '/');

    if (!isAdmin && user.type === 1)
      return (window.location.href = '/admin/checklist');

    if (isAdmin && user.type !== 1) return (window.location.href = '/home');
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.protoTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
