import React from 'react'
import './FeaturedProductsComponent.css'
import bannerPersonOne from '../../assets/banner-personOne.webp'
import bannerPersonTwo from '../../assets/banner-person-two.webp'
import bannerPersonThree from '../../assets/banner-person-three.webp'
import bannerSpeakers from '../../assets/speakers.webp';
import bannerControllers from '../../assets/banner-controllers.webp';
import secondControllersImg from '../../assets/controlles-second-img.webp';

const FeaturedProductsComponent = () => {
  return (
    <div className='featuredProductsComponent'>
      <div className="inner">
        <div className="main-heading">
          <h1>Featured Products</h1>
          <hr />
        </div>
        <div className="banners-container">
          <div className="banner-one">
            <div className="banner-img-texts">
              <img src={bannerPersonOne} alt="" />
              <div className="banner-texts">
                <h3>Unparalleled Sound</h3>
                <p>Experience crystal-clear audio with premium headphones.</p>
                <button>Buy now <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 14 14" fill="none">
<path d="M8.75 0C8.26602 0 7.875 0.391016 7.875 0.875C7.875 1.35898 8.26602 1.75 8.75 1.75H11.0113L5.50703 7.25703C5.16523 7.59883 5.16523 8.15391 5.50703 8.4957C5.84883 8.8375 6.40391 8.8375 6.7457 8.4957L12.25 2.98867V5.25C12.25 5.73398 12.641 6.125 13.125 6.125C13.609 6.125 14 5.73398 14 5.25V0.875C14 0.391016 13.609 0 13.125 0H8.75ZM2.1875 0.875C0.978906 0.875 0 1.85391 0 3.0625V11.8125C0 13.0211 0.978906 14 2.1875 14H10.9375C12.1461 14 13.125 13.0211 13.125 11.8125V8.75C13.125 8.26602 12.734 7.875 12.25 7.875C11.766 7.875 11.375 8.26602 11.375 8.75V11.8125C11.375 12.0531 11.1781 12.25 10.9375 12.25H2.1875C1.94687 12.25 1.75 12.0531 1.75 11.8125V3.0625C1.75 2.82188 1.94687 2.625 2.1875 2.625H5.25C5.73398 2.625 6.125 2.23398 6.125 1.75C6.125 1.26602 5.73398 0.875 5.25 0.875H2.1875Z" fill="white"/>
</svg></button>
              </div>
            </div>
          </div>
          <div className="banner-one">
            <div className="banner-img-texts">
              <img src={bannerPersonTwo} alt="" />
              <div className="banner-texts">
                <h3>Stay Connected</h3>
                <p>Compact and stylish earphones for every occasion.</p>
                <button>Buy now <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 14 14" fill="none">
<path d="M8.75 0C8.26602 0 7.875 0.391016 7.875 0.875C7.875 1.35898 8.26602 1.75 8.75 1.75H11.0113L5.50703 7.25703C5.16523 7.59883 5.16523 8.15391 5.50703 8.4957C5.84883 8.8375 6.40391 8.8375 6.7457 8.4957L12.25 2.98867V5.25C12.25 5.73398 12.641 6.125 13.125 6.125C13.609 6.125 14 5.73398 14 5.25V0.875C14 0.391016 13.609 0 13.125 0H8.75ZM2.1875 0.875C0.978906 0.875 0 1.85391 0 3.0625V11.8125C0 13.0211 0.978906 14 2.1875 14H10.9375C12.1461 14 13.125 13.0211 13.125 11.8125V8.75C13.125 8.26602 12.734 7.875 12.25 7.875C11.766 7.875 11.375 8.26602 11.375 8.75V11.8125C11.375 12.0531 11.1781 12.25 10.9375 12.25H2.1875C1.94687 12.25 1.75 12.0531 1.75 11.8125V3.0625C1.75 2.82188 1.94687 2.625 2.1875 2.625H5.25C5.73398 2.625 6.125 2.23398 6.125 1.75C6.125 1.26602 5.73398 0.875 5.25 0.875H2.1875Z" fill="white"/>
</svg></button>
              </div>
            </div>
          </div>
          <div className="banner-one">
            <div className="banner-img-texts">
              <img src={bannerPersonThree} alt="" />
              <div className="banner-texts">
                <h3>Power in Every Pixel</h3>
                <p>Shop the latest laptops for work, gaming, and more.</p>
                <button>Buy now <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 14 14" fill="none">
<path d="M8.75 0C8.26602 0 7.875 0.391016 7.875 0.875C7.875 1.35898 8.26602 1.75 8.75 1.75H11.0113L5.50703 7.25703C5.16523 7.59883 5.16523 8.15391 5.50703 8.4957C5.84883 8.8375 6.40391 8.8375 6.7457 8.4957L12.25 2.98867V5.25C12.25 5.73398 12.641 6.125 13.125 6.125C13.609 6.125 14 5.73398 14 5.25V0.875C14 0.391016 13.609 0 13.125 0H8.75ZM2.1875 0.875C0.978906 0.875 0 1.85391 0 3.0625V11.8125C0 13.0211 0.978906 14 2.1875 14H10.9375C12.1461 14 13.125 13.0211 13.125 11.8125V8.75C13.125 8.26602 12.734 7.875 12.25 7.875C11.766 7.875 11.375 8.26602 11.375 8.75V11.8125C11.375 12.0531 11.1781 12.25 10.9375 12.25H2.1875C1.94687 12.25 1.75 12.0531 1.75 11.8125V3.0625C1.75 2.82188 1.94687 2.625 2.1875 2.625H5.25C5.73398 2.625 6.125 2.23398 6.125 1.75C6.125 1.26602 5.73398 0.875 5.25 0.875H2.1875Z" fill="white"/>
</svg></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-banner">
          <div className="inner-banner">
            <div className="imageOne">
              <img src={bannerSpeakers} alt="" />
            </div>
            <div className="main-banner-headings">
              <h1>Level Up Your Gaming Experience</h1>
              <p>From immersive sound to precise controls—everything you need to win</p>
              <button>Buy now <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path   d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" fill='#fff'/></svg></button>
            </div>
            <div className="imageTwo">
              <img src={bannerControllers} alt="" />
          </div>
          <div className="imageThree">
            <img src={secondControllersImg} alt="" />
          </div>
          </div>
        </div>
    </div>
  )
}

export default FeaturedProductsComponent
