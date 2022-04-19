import React from 'react'
import './sidebar.css'
import AddIcon from '@mui/icons-material/Add';
import SiderbarOption from './SiderbarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarRateIcon from '@mui/icons-material/StarRate';
import SnoozeIcon from '@mui/icons-material/Snooze';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import DraftsIcon from '@mui/icons-material/Drafts';
import CategoryIcon from '@mui/icons-material/Category';
import DeleteIcon from '@mui/icons-material/Delete';
import ArticleIcon from '@mui/icons-material/Article';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useDispatch } from 'react-redux';
import { opensendMessage } from './features/mailslice';



function sidebar() {

const dispatch = useDispatch()

  return (
    <>
    <div className='sidebar'>
      <button className='button' onClick={()=>dispatch(opensendMessage())}><AddIcon className='add'/>Compose</button> 

      <SiderbarOption Icon={InboxIcon} title="inbox" number="224" />

      <SiderbarOption Icon={StarRateIcon} title="Starred" number="224" /> 

      <SiderbarOption Icon={SnoozeIcon} title="Snooze" number="224" /> 

      <SiderbarOption Icon={LabelImportantIcon} title="Important" number="224" /> 

      <SiderbarOption Icon={ DraftsIcon} title="Drafts" number="224" /> 

      <SiderbarOption Icon={CategoryIcon} title="Category" number="224" /> 

      <SiderbarOption Icon={DeleteIcon} title="Delete" number="224" /> 

      <SiderbarOption Icon={ArticleIcon} title="Document" number="224" /> 

    <h3 className='meet'>Meet</h3>

     <SiderbarOption Icon={VideocamIcon} title="Meeting" number="224" /> 

      <SiderbarOption Icon={KeyboardIcon} title="Join Me Meeting" number="224" /> 

    </div>
    </>
  )
}

export default sidebar