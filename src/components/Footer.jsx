import React from 'react'
import send from '../Assets/send-2.svg'

function Footer() {
  return (
    <>
      <div className='footer'>
      <div className='footer-cont'>
        <h2>LOGO</h2>
        <ul>
          <li>Home</li>
          <li>Catalog</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>About us</li>

        </ul>
<div className='newsletter'>
      <lable className='lable'>Subscribe Our Newsletter</lable>
      <div className='input-section'>
        <input placeholder='Email address'/>
        <img src={send}/>
      </div>
</div>

      </div>

      </div>
    </>
  )
}

export default Footer