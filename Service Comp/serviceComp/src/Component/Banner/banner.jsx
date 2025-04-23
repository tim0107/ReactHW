import React from 'react';
import './banner.scss';
import img from '../../assets/figmaImg/banner.png';
import { Link, useNavigate } from 'react-router-dom';

export default function Banner({ token, setToken }) {
  const isLoggedIn = token && token.trim() !== '';

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <div className="main-banner">
      <div className="banner-navbar">
        <div className="sub-navbar dot">
          <div className="orange-dot"></div>
          <div className="purpole-dot"></div>
        </div>
        <div className="sub-navbar">
          {isLoggedIn ? (
            <>
              <div className="btn-banner">Profile</div>
              <div className="btn-banner" onClick={handleLogout}>
                Logout
              </div>
            </>
          ) : (
            <Link to="/signIn" className="btn-banner">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <div className="banner-content">
        <h1>
          Save your data <br />
          storage here
        </h1>
        <h3>
          Profile Logout Save your data storage here. Data Warehouse is a data
          storage area that has been tested for security,
          <br />
          so you can store your data here safely but not be afraid of being
          stolen by others. Learn more
        </h3>
        <div className="btn">Learn More</div>
        <img src={img} alt="Banner" />
      </div>
    </div>
  );
}
