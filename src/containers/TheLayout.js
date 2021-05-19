import React from 'react'
import { Redirect } from 'react-router-dom';
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

const TheLayout = (props) => {

  if (!localStorage.getItem('access_token')) {
    // not logged in so redirect to login page with the return url
    return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  }

  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
