import React from 'react'
import Email_body from './Email_body'
import './Email_list.css'
import Email_list_setting from "./Email_list_setting"
import Email_type from './Email_type'


function Email_list() {
  return (
    <div>
        <Email_list_setting />
        <Email_type />
        <Email_body name="Gaurav Rao" message="this is message body of the email of the user" subject="this the important smart contract" time="09:25pm" />
        

    </div>
  )
}

export default Email_list