import React, { useState } from 'react';
import './ContactPage.css';
import contactImg from '../../assets/contact-img.png';
import checkMark from '../../assets/checkMark.png';

const ContactPage = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleError = () => {
  setError('Feature is not available for now!');
  setMessage('');
  setShowPopup(true);

  setTimeout(() => {
    setShowPopup(false);
    setError('');
  }, 2500);
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
              <p>Tel: (415) 555-0132<br/>Email: admin@forever.com</p>
            </div>
            <div className="second-heading">
              <h2>Careers at Forever</h2>
            </div>
            <div className="final-paragraph">
              <p>Learn more about our teams and job openings.</p>
            </div>
            <div className="contact-btn">
              <button onClick={handleError}>Explore Jobs</button>
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
                <img src={checkMark} alt="Success" />
                <h2>{message}</h2>
              </div>
            </div>
          ) : (
            error && (
              <div className={`error ${showPopup ? 'open-error' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" fill="red" />
                </svg>
                <h2>{error}</h2>
              </div>
            )
          )
        }
      </div>
    </div>
  );
};

export default ContactPage;
