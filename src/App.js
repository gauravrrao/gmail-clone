import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Compose from './Compose';
import Email_list from './Email_list';
import Header from './Header';
import Sidebar from './Sidebar';
import {selectsendMessageisOpen} from './features/mailslice'

function App() {

  const ismessageopen = useSelector(selectsendMessageisOpen)

  console.log(ismessageopen)

  return (
    <div>
     <Header />

     <div className="app_body">
     <Sidebar />
    <Email_list />

     </div>
     {
      ismessageopen && <Compose /> 
     }
   
     
    </div>
  );
}

export default App;
