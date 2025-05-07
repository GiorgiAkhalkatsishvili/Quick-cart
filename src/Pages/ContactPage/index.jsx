import React, { useState } from 'react';
import './ContactPage.css';
import contactImg from '../../assets/contact-img.png';
import checkMark from '../../assets/checkMark.png';
import warningImg from '../../assets/warning.jpg'

const ContactPage = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const addProductToCart = () => {
        if (message) {
          setError('You need to log in first!');
          setShowPopup(true);
          setTimeout(() => {
          setShowPopup(false);
        }, 2500);
        } else {
          setMessage('Feature is not available yet!');
          setShowPopup(true);
         setTimeout(() => {
          setShowPopup(false);
         }, 2500);
        }
    };


  return (
    <div className='contactPage'>
      <div className="contact-inner">
        <div className="main-heading">
          <h1><span>CONTACT</span> US</h1>
          <hr />
        </div>
        <div className="main-img-texts">
          <div className="main-img">
            <img src={contactImg} alt="" />
          </div>
          <div className="main-texts">
            <div className="first-heading">
              <h2>Our Store</h2>
            </div>
            <div className="address-text">
              <p>54709 Willms Station<br/>Suite 350, Washington, USA</p>
            </div>
            <div className="contact-text">
              <p>Tel: (123) 456-7890<br/>Email: georgeakhalkatsishvili748@gmail.com</p>
            </div>
            <div className="second-heading">
              <h2>Careers at Forever</h2>
            </div>
            <div className="final-paragraph">
              <p>Learn more about our teams and job openings.</p>
            </div>
            <div className="contact-btn">
              <button onClick={addProductToCart}>Explore Jobs</button>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form-inner">
        <div className="main-heading">
          <h1>Type anything and contact me</h1>
          <p>You can type your thoughts down below and send me a message.</p>
        </div>
        <div className="main-input">
          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="f6050f4a-60d0-4bb7-bb52-61f7bca1c076" />
            <input type="text" name="message" placeholder="Type a message and send" />
            <button type="submit">Send</button>
          </form>
        </div>
        {
      message ? (
        <div className="notification">
            <div className={`popup ${showPopup ? 'open-popup' : ''}`}>
              <img src={warningImg} alt="" />
              <h2>Feature is not available yet!</h2>
          </div>
        </div>
        ) : (
          ''
        )
      }
      </div>
    </div>
  );
};

export default ContactPage;
