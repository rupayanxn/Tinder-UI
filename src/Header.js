import React from 'react'
import "./Header.css";
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
        <IconButton>
            <PersonRoundedIcon fontSize="large" className="header_icon" />
        </IconButton>

        <img
            className="header_logo"
            src="/image/tinder.png"
            alt=""
        />
        <IconButton>
            <ForumIcon fontSize="large" className="header_icon" />
        </IconButton>
        

        </div>
    )
}

export default Header ;
