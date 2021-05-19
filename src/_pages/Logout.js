import React from 'react';
import { Redirect } from 'react-router-dom';
import { authActions } from '../_actions';

const Logout = () => {
    authActions.logout()
    return <Redirect to={{ pathname: '/dashboard' }} />
}

export default Logout;
