import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img className= 'f-logo' src='./images/footer-logo.png' alt='f-logo'/>
        <hr className='divider'/>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Menu</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>        </div>
        <div className="footer-section">
        <h3>Follow Us</h3>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@shopname.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      <div className="footer-bottom">
      <hr className='divider'/>
        <p>&copy; 2024 ShopName. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
