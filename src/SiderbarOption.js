import React from 'react'
import './sidbaroption.css'


const SiderbarOption = ({Icon , title, number}) => {
  return (
    <>
    <div className='SiderbarOption'>
        <Icon />
        <h2>{title}</h2>
        <p>{number}</p>
    </div>

      </>
  )
}

export default SiderbarOption