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
          <form action="https://api.web3forms.com/submit" method="POST">
             <input type="hidden" name="access_key" value="f6050f4a-60d0-4bb7-bb52-61f7bca1c076"></input>
            <input type="text" name='message' placeholder='Type a message and send'/>
          <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactComponent;
