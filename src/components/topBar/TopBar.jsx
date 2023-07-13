import React from 'react';
import "./topBar.css";
import { NotificationsNone } from '@material-ui/icons';

export default function TopBar() {
    return (
        <div className='topbar' >
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Romadmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
