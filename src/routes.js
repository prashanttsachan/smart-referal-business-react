import React from 'react';

const Dashboard = React.lazy(() => import('./_pages/Dashboard'));
const Password = React.lazy(() => import('./_pages/Password'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, exact: true },
  { path: '/change-password', name: 'Change Password', component: Password, exact: true }
];

export default routes;
