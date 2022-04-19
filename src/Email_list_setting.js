import React from 'react'
import './Email_list_setting.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Email_list_setting = () => {
  return (
    <div className='email_list_setting'>

      <div className="left_email_list_setting">

        <CheckBoxOutlineBlankIcon />
        <ArrowDropDownIcon />
        <RefreshIcon/>
        <MoreVertIcon />
       </div>

       <div className="right_email_list_setting">
        <p>1-50 of 10,220</p>

        <ArrowLeftIcon />
        <ArrowRightIcon />

       </div>

    </div>
  )
}

export default Email_list_setting