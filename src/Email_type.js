import React from 'react'
import './Email_type.css'
import EmailIcon from '@mui/icons-material/Email';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

function Email_type() {
  return (
    <div className='email_type'>

        <div className="primary">
            <EmailIcon />
           <p> Primary </p>
        </div>

        <div className="social">
            <SupervisorAccountIcon />
           <p> Social </p>
        </div>

        <div className="promotion">
            <LocalOfferIcon />
           <p> Promotion </p>
        </div>



    </div>
  )
}

export default Email_type