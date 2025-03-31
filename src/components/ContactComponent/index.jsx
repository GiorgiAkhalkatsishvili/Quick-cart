import React from 'react'
import './ContactComponent.css'

const ContactComponent = () => {
  return (
    <div className='contactComponent'>
      <div className="contact-inner">
        <div className="main-headings">
          <h1>Contact me</h1>
          <p>Type anything in the input field to send me an email.</p>
        </div>
        <div className="main-input">
          <input type="text" placeholder='Type a message and send'/>
          <button>Send message</button>
        </div>
      </div>
    </div>
  )
}

export default ContactComponent;
