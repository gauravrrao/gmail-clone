import React from 'react'
import './compose.css'
import CancelIcon from '@mui/icons-material/Cancel';
import HeightIcon from '@mui/icons-material/Height';
import MinimizeIcon from '@mui/icons-material/Minimize';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import LockIcon from '@mui/icons-material/Lock';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { closesendMessage } from './features/mailslice';

const Compose = () => {

  const dispatch = useDispatch()
  return (
    <div className='compose'>
        <div className="header_compose">
            <div className="left_header_compose">New Message</div>
            <div className="right_header_compose"><CancelIcon onClick={()=>dispatch(closesendMessage())} /><HeightIcon/><MinimizeIcon/></div>
        </div>

        <div >to :<input className="first_line_compose" type="text"/></div>
        <div className='subject'>Subject:<input className="second_line_compose" type="text"/></div>

        <div className="container_compose"></div>

        <div className="fotter_compose">
            <button>Send</button> <InsertLinkIcon/><EmojiEmotionsIcon/><ImageIcon/><AddToDriveIcon/><LockIcon/>
            <FormatColorTextIcon/><DeleteIcon/>
        </div>

    </div>
  )
}

export default Compose