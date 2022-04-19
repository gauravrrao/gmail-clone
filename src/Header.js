import React from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    return (
        <div className='header'>

            <div className="haeder_left">
                <ReorderIcon />
                <img className='image' src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png' />
            </div>
            <div className='middle_header'>
                        <SearchIcon fontSize='' className='search' />
                        <input className='text' type="text" placeholder='search here'/>
                        <KeyboardArrowDownIcon />
            </div>

            <div className="header_right">
                <HelpIcon className='help'/>

                <SettingsIcon className='setting' />

                <AppsIcon className='apps'/>

                <AccountCircleIcon className='avatar'/>
            </div>

        </div>
    )
}

export default Header