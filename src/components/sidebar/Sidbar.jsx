import React from 'react'
import './Sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle'
import TimelineIcon from '@mui/icons-material/Timeline'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import StorefrontIcon from '@mui/icons-material/Storefront'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import BarChartIcon from '@mui/icons-material/BarChart'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred'
import { Link } from 'react-router-dom'

function Sidbar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebartitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListIcon active">
                <LineStyleIcon className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/Analy">
            <li className="sidebarListIcon">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            </Link>
            <Link to="/Sales">
            <li className="sidebarListIcon">
              <TrendingUpIcon className="sidebarIcon" />
              Sales
            </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebartitle">Quick Menu</h3>
        <ul className="sidebarList">
          <Link to="/UserList" className="link">
            <li className="sidebarListIcon active">
              <PermIdentityIcon className="sidebarIcon" />
              User
            </li>
          </Link>
          <Link to="/NewUser" className="link">
            <li className="sidebarListIcon">
              <PermIdentityIcon className="sidebarIcon" />
              New User
            </li>
          </Link>
          <Link to="/Products" className="link">
            <li className="sidebarListIcon">
              <StorefrontIcon className="sidebarIcon" />
              Products
            </li>
          </Link>
          <Link to="/Tran">
          <li className="sidebarListIcon">
            <AttachMoneyIcon className="sidebarIcon" />
            Transactions
          </li>
          </Link>
          <Link to="/Reports">
          <li className="sidebarListIcon">
            <BarChartIcon className="sidebarIcon" />
            Reports
          </li>
          </Link>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebartitle">Notifications</h3>
        <ul className="sidebarList">
          <li className="sidebarListIcon active">
            <MailOutlineIcon className="sidebarIcon" />
            Mail
          </li>
          <li className="sidebarListIcon">
            <DynamicFeedIcon className="sidebarIcon" />
            Feedback
          </li>
          <li className="sidebarListIcon">
            <ChatBubbleOutlineIcon className="sidebarIcon" />
            Messages
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebartitle">Staff</h3>
        <ul className="sidebarList">
          <li className="sidebarListIcon active">
            <WorkOutlineIcon className="sidebarIcon" />
            Manage
          </li>
          <li className="sidebarListIcon">
            <TimelineIcon className="sidebarIcon" />
            Analytics
          </li>
          <li className="sidebarListIcon">
            <ReportGmailerrorredIcon className="sidebarIcon" />
            Reports
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidbar
