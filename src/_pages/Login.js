import React, { useState, useEffect } from 'react';
import { Link, useLocation, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../_actions';

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  const loggingIn = useSelector(state => state.authentication.loggingIn);
  const dispatch = useDispatch();
  const location = useLocation();

  // reset login status
  useEffect(() => { 
      dispatch(authActions.logout()); 
  }, []);

  function handleChange(e) {
      const { name, value } = e.target;
      setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
      e.preventDefault();

      setSubmitted(true);
      if (username && password) {
          // get return url from location state or default to home page
          const { from } = location.state || { from: { pathname: "/" } };
          dispatch(authActions.login(username, password, from));
      }
  }

  if (localStorage.getItem('access_token')) {
    // not logged in so redirect to login page with the return url
    return <Redirect to={{ pathname: '/dashboard' }} />
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm name="form" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Username" autoComplete="username" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                        {submitted && !username &&
                            <div className="invalid-feedback">Username is required</div>
                        } 
                      </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                      {submitted && !password &&
                          <div className="invalid-feedback">Password is required</div>
                      }
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" type="submit" className="px-4">
                          {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login;
