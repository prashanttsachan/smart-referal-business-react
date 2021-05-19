import React, { lazy } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'

const WidgetsDropdown = lazy(() => import('../views/widgets/WidgetsDropdown.js'))

const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown />
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Latest transactions
            </CCardHeader>
            <CCardBody>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">Amount</th>
                    <th>Debit / Credit</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      1000.00
                    </td>
                    <td>
                      <div>Yiorgos Avraamu</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td>
                      <div>Yiorgos Avraamu</div>
                    </td>
                  </tr>
                </tbody>
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
