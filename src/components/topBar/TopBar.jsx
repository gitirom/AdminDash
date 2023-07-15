import React from 'react';
import "./topBar.css";
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

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
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://yt3.ggpht.com/yti/AOXPAcWnAEF-O_Dm4ONfQmU8BcAmrb6zQg4LJPkzO3icrg=s88-c-k-c0x00ffffff-no-rj-mo" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
