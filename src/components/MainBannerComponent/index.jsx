import React, { useState, useEffect } from 'react';
import './MainBannerComponent.css';
import headPhoneImg from '../../assets/header_headphone.webp';
import playstationImg from '../../assets/playstation.webp'
import laptopImg from '../../assets/laptop.webp'
import { Link, useNavigate } from 'react-router-dom';


const MainBannerComponent = () => {
  const navigate = useNavigate();

  const slides = [
  {
    id: 1,
    heading: "Experience Pure Sound - Your Perfect Headphones Awaits!",
    offer: "Limited Time Offer 30% Off",
    image: headPhoneImg,
    buttonText: "Buy Now",
    link: '/quietHeadPhones45',
  },
  {
    id: 2,
    heading: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
    offer: "Free Shipping on All Orders",
    image: playstationImg,
    buttonText: "Shop Now",
    link: '/playStation5'
  },
  {
    id: 3,
    heading: "Unleash Your Power - Premium Headphones for Every Beat",
    offer: "Exclusive Deals on New Models",
    image: laptopImg,
    buttonText: "Explore Now",
    link: '/macBookPro16'
  },
];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleButtonClick = (link) => {
    // Navigate to the link when the button is clicked
    navigate(link);
  };

  return (
    <div className="mainBannerComponent">
      <div className="main-slider-inner">
        <div className="slide-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div className="inner-texts">
                <div className="first-banner-heading">
                  <p>{slide.offer}</p>
                </div>
                <div className="main-heading">
                  <h1>{slide.heading}</h1>
                </div>
                <div className="main-btns">
                  <div className="btnOne">
             <button onClick={()=>handleButtonClick(slide.link)}>{slide.buttonText}</button>
                  </div>
                  <div className="btnTwo">
                    <Link to='/allProducts'>
                    <button>Find more<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="main-banner-img">
                <img src={slide.image} alt="Headphones" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots to navigate between slides */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default MainBannerComponent;
