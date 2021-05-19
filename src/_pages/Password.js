import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';

import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupText,
  CProgress,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Password = () => {
    const [inputs, setInputs] = useState({
        currentPassword: '',
        newPassword: ''
      });
      const [submitted, setSubmitted] = useState(false);
      const [visible, setVisible] = React.useState(0)
      const { currentPassword, newPassword } = inputs;
      const submitting = useSelector(state => state.form.submitting);
      const alert = useSelector(state => state.alert);
      const dispatch = useDispatch();
    
      function handleChange(e) {
          const { name, value } = e.target;
          setInputs(inputs => ({ ...inputs, [name]: value }));
      }
    
      function handleSubmit(e) {
          e.preventDefault();
          setSubmitted(true);
          if (currentPassword && newPassword) {
            dispatch(userActions.changePassword(currentPassword, newPassword));
            setVisible(10)
          }
      }

  return (
    <>
      <CRow>
        <CCol xs="12" sm="4">
          <CCard>
            <CCardHeader>
              Change Password here
            </CCardHeader>
            <CCardBody>
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
                <CFormGroup>
                  <CInputGroup>
                    <CInput type="password" placeholder="Current Password" autoComplete="currentPassword" name="currentPassword" value={currentPassword} onChange={handleChange} className={'form-control' + (submitted && !currentPassword ? ' is-invalid' : '')} />
                    <CInputGroupAppend>
                      <CInputGroupText><CIcon name="cil-asterisk" /></CInputGroupText>
                    </CInputGroupAppend>
                    {submitted && !currentPassword &&
                            <div className="invalid-feedback">Current password is required</div>
                    }
                  </CInputGroup>
                </CFormGroup>
                <CFormGroup>
                <CInputGroup>
                    <CInput type="password" placeholder="New Password" autoComplete="newPassword" name="newPassword" value={newPassword} onChange={handleChange} className={'form-control' + (submitted && !newPassword ? ' is-invalid' : '')} />
                    <CInputGroupAppend>
                      <CInputGroupText><CIcon name="cil-asterisk" /></CInputGroupText>
                    </CInputGroupAppend>
                    {submitted && !newPassword &&
                            <div className="invalid-feedback">New password is required</div>
                    }
                  </CInputGroup>
                </CFormGroup>
                <CFormGroup className="form-actions">
                    <CButton color="primary" type="submit" size="sm" className="px-4">
                        {submitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        submit
                    </CButton>
                </CFormGroup>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Password
