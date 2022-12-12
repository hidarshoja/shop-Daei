import React from 'react';
import './TopBar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

function TopBar() {
    return (
        <div className='topbar'>
             <div className='topbarWrapper'>
                <div className="topLeft">
                    <span className="logo">Ali Daei Shop  <span>&#10084;</span></span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                           <NotificationsIcon />
                           <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                           <LanguageIcon />
                           <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                           <SettingsIcon />
                    </div>
                    <img src="image/img.jfif" className='imgLogo'/>
                </div>
             </div>
        </div>
    );
}

export default TopBar;
