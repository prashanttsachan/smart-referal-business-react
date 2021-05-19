import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'My Wallet',
    to: '/wallet',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'My Card',
    to: '/card',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Members',
    route: '/members',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Sponsored',
        to: '/members/sponsored',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Downline',
        to: '/members/downline',
      },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Offers',
    to: '/offers',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Log Out',
    to: '/log-out',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
