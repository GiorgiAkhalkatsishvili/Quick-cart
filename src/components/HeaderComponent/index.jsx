import React, { useEffect, useRef, useState } from 'react';
import './HeaderComponent.css';
import mainTitle from '../../assets/main-logo.svg';
import searchIcon from '../../assets/search-icon.svg';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const HeaderComponent = () => {
  const [signInTab, setSignInTab] = useState(false);
  const [user, setUser] = useState(null); // Store user info (for image and name)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [sidebar, setSidebar] = useState(true);
  const sidebarMenuRef = useRef();


  const openMenu = () => {
    sidebarMenuRef.current.style.transform = 'translateX(0rem)'
  }

  const closeMenu = () => {
    sidebarMenuRef.current.style.transform = 'translateX(50rem)'
  }


  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }


   const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const isTabOpen = () => {
    setSignInTab(!signInTab);
  };

 const handleLoginSuccess = (credentialResponse) => {
   const decoded = jwtDecode(credentialResponse.credential); 
   console.log(decoded)
    const userInfo = {
      name: decoded.name,
      imageUrl: decoded.picture,
      email: decoded.email,
    };
   setUser(userInfo);
   setSignInTab(false);
   setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    // Add event listener for click outside
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="headerComponent">
      <div className="header-inner">
        <div className="main-title-img">
          <Link to='/'>
            <img src={mainTitle} alt="QuickCart" />
          </Link>
        </div>
        <div className="main-nav-links">
          <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/allProducts'><li>Shop</li></Link>
            <Link to='/about'><li>About us</li></Link>
            <Link to='/about'><li>Contact</li></Link>
          </ul>
        </div>
        {sidebar && (
          <div ref={sidebarMenuRef} className="sidebar-menu">
          <div className="sidebar-list">
            <div className="closing-svg">
              <svg onClick={closeMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" fill='#374151'/></svg>
            </div>
            <ul>
            <Link onClick={closeMenu} to='/'><li>Home</li></Link>
            <Link onClick={closeMenu} to='/allProducts'><li>Shop</li></Link>
            <Link onClick={closeMenu} to='/about'><li>About us</li></Link>
            <Link onClick={closeMenu} to='/about'><li>Contact</li></Link>
            </ul>
          </div>
        </div>
        )}
        <div className="main-header-icons">
          <div className="main-search-icon">
            <img src={searchIcon} alt="Search" />
          </div>
          <div className="account-svg">
            {user ? (
           <img onClick={toggleDropdown} src={user.imageUrl} alt="User" className="user-img" />
): (
  <svg onClick={isTabOpen} xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 16 16" fill="none">
    <path d="M13.3337 14V12.6667C13.3337 11.9594 13.0527 11.2811 12.5526 10.781C12.0525 10.281 11.3742 10 10.667 10H5.33366C4.62641 10 3.94814 10.281 3.44804 10.781C2.94794 11.2811 2.66699 11.9594 2.66699 12.6667V14M10.667 4.66667C10.667 6.13943 9.47308 7.33333 8.00033 7.33333C6.52757 7.33333 5.33366 6.13943 5.33366 4.66667C5.33366 3.19391 6.52757 2 8.00033 2C9.47308 2 10.667 3.19391 10.667 4.66667Z" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)}
          <div className="account-text">
              <p onClick={isTabOpen} id='acc-paragraph'>{user ? '' : 'Account'}</p>
            </div>
            {dropdownOpen && user && (
              <div ref={dropdownRef} className="dropdown-menu">
                <div className="drop-down-img-texts">
                <img src={user.imageUrl} alt="" />
                  <div className="user-dropDown-name-gmail">
                    <p>{user.name}</p>
                    <div className="user-email-paragraph">
                      <p>{user.email}</p>
                  </div>
                  </div>
                </div>
                <div className="drop-down-settings">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" fill='#5f616b'/></svg>
                  <p>Manage account</p>
                </div>
                <Link onClick={()=>setDropdownOpen(false)} to='/cartPage'>
                <div className="drop-down-cart">
                  <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5M7.5 15.75C7.5 16.1642 7.16421 16.5 6.75 16.5C6.33579 16.5 6 16.1642 6 15.75C6 15.3358 6.33579 15 6.75 15C7.16421 15 7.5 15.3358 7.5 15.75ZM15.75 15.75C15.75 16.1642 15.4142 16.5 15 16.5C14.5858 16.5 14.25 16.1642 14.25 15.75C14.25 15.3358 14.5858 15 15 15C15.4142 15 15.75 15.3358 15.75 15.75Z" stroke="#4b5563" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><defs><rect width="18" height="18" fill="white"></rect></defs></svg>
                  <p>Cart</p>
                </div>
                </Link>
                <div onClick={() => setUser(null)} className="drop-down-btn">
                  <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path   d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" fill='#5f616b'/></svg> Log out</button>
              </div>
            </div>
          )}
          </div>
          <div className="menu-container">
          <div onClick={openMenu} className="burger-menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" fill='#374151'/></svg>
        </div>
        </div>
        </div>
        {signInTab && <div className="overlay" onClick={isTabOpen}></div>}
        {signInTab &&
          <div className="main-sing-in-tab">
            <div className="singInner">
              <div onClick={() => setSignInTab(false)} className="closing-svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                </svg>
              </div>
              <h3>Sign in to QuickCart Ecommerce</h3>
              <p>Welcome back! Please sign in to continue</p>
            </div>
            <div className="main-sing-in-button">
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => console.log("Login Failed")}
                clientId="625187534633-hmgbdet5cvb7h1qcvduuvsdhelmjcm8t.apps.googleusercontent.com"
              />
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default HeaderComponent;
