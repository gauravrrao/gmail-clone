import React from 'react'
import './email_body.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


function Email_body({name,subject,message,time}) {
    return (
        <div className='email_body'>
            <div className='email_body_left'>
                <CheckBoxOutlineBlankIcon />
                <StarBorderIcon />
                <DoubleArrowIcon />

            <h4>{name}</h4>
            </div>

            <div className="email_body_middle">

            <h4>{subject}</h4><p>{message}</p>

            </div>

            <div className='email_body_right'>
            <p>{time}</p>

            </div>
        </div>
    )
}

export default Email_body