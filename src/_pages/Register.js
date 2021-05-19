import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../_actions';

import { Link } from 'react-router-dom'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CProgress,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Register = () => {
  const [user, setUser] = useState({
      email: "",
      firstname: '',
      lastname: '',
      password: '',
      mobile: '',
      sponsor: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = React.useState(0)
  const alert = useSelector(state => state.alert);
  const registering = useSelector(state => state.registration.registering);
  const dispatch = useDispatch();

  // reset login status
  useEffect(() => {
      dispatch(authActions.logout());
  }, []);

  function handleChange(e) {
      const { name, value } = e.target;
      setUser(user => ({ ...user, [name]: value }));
  }

  function handleSubmit(e) {
      e.preventDefault();
      setSubmitted(true);
      if (user.firstname && user.lastname && user.email && user.password) {
        dispatch(authActions.register(user));
        setVisible(10)
      }
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                { alert.message && 
                  <CAlert color={alert.type} show={visible} closeButton  onShowChange={setVisible} >
                    {alert.message}
                    <CProgress
                      striped
                      color="warning"
                      value={Number(visible) * 10}
                      size="xs"
                      className="mb-3"
                    />
                  </CAlert>
                }
                <CForm name="form" onSubmit={handleSubmit}>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Sponsor Id" autoComplete="Sponsor Id" name="sponsor" value={user.sponsor} onChange={handleChange} className={'form-control'} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Firstname" autoComplete="firstname" name="firstname" value={user.firstname} onChange={handleChange} className={'form-control' + (submitted && !user.firstname ? ' is-invalid' : '')} />
                    {submitted && !user.firstname &&
                        <div className="invalid-feedback">First Name is required</div>
                    }
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText><CIcon name="cil-user" /></CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" name="lastname" placeholder="Lastname" autoComplete="lastname" value={user.lastname} onChange={handleChange} className={'form-control' + (submitted && !user.lastname ? ' is-invalid' : '')} />
                    {submitted && !user.lastname &&
                        <div className="invalid-feedback">Last Name is required</div>
                    }
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" name="email" placeholder="E-mail" autoComplete="email" value={user.email} onChange={handleChange} className={'form-control' + (submitted && !user.email ? ' is-invalid' : '')} />
                    {submitted && !user.email &&
                        <div className="invalid-feedback">E-mail is required</div>
                    }
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" name="mobile" placeholder="Mobile" autoComplete="mobile" value={user.mobile} onChange={handleChange} className={'form-control' + (submitted && !user.mobile ? ' is-invalid' : '')} />
                    {submitted && !user.mobile &&
                        <div className="invalid-feedback">Phone number is required</div>
                    }
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
                    {submitted && !user.password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                  </CInputGroup>
                  <CButton color="success" type="submit">
                    {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Create Account
                  </CButton>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <Link to="/login">
                      <CButton className="btn-facebook mb-1" block>Back</CButton>
                    </Link>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <Link to="/login">
                      <CButton className="btn-twitter mb-1" block><span>Login Now!</span></CButton>
                    </Link>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
