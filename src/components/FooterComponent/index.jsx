import React from 'react'
import './FooterComponent.css';
import mainTitle from '../../assets/main-logo.svg'

const FooterComponent = () => {
  return (
    <div className='footerComponent'>
      <div className="footer-inner">
        <div className="footer-logo-texts">
          <div className="main-heading-logo">
          <img src={mainTitle} alt="" />
          </div>
          <div className="paragraph">
            <p>Hi, my name is George. I built this website to showcase my skills in front end development. This is a test e-commerce website that you can check out and send feedback in the input field on top.</p>
          </div>
        </div>
        <div className="footer-list-one">
          <p>Company</p>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-list-two">
          <p>Get in touch</p>
          <ul>
            <li>+1-234-567-890</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="final-text">
        <p>Copyright 2025 © GreatStack.dev All Right Reserved.</p>
      </div>
    </div>
  )
}

export default FooterComponent
