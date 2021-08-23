import React from 'react';
import { Route as ReactRoute, Redirect, RouteProps } from 'react-router-dom';

import { useAuth } from '../contexts/auth';

import { DefaultLayout } from '../pages/_layouts/default';
import { AuthLayout } from '../pages/_layouts/auth';

interface RoutesProps extends RouteProps {
  component: React.ComponentType;
  isPrivate?: boolean;
}

function Route({ component: Component, isPrivate, ...res }: RoutesProps) {
  const { signed } = useAuth();

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <ReactRoute
      {...res}
      render={() => {
        return (
          <Layout>
            <Component />
          </Layout>
        );
      }}
    />
  );
}

export default Route;
