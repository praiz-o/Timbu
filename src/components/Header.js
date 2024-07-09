import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import SearchIcon from '../images/search-icon.svg';
import CartIcon from '../images/shopping-cart.svg';
import UserIcon from '../images/account-icon.svg';

import { SecondaryButton } from './Button';

const Header = ({ cartCount }) => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    console.log('Search icon clicked');
    // Add your search functionality here
  };

  const handleCartClick = () => {
    console.log('Cart icon clicked');
    navigate('/checkout'); // Navigate to the checkout page
  };

  const handleUserClick = () => {
    console.log('User icon clicked');
    // Add your user profile functionality here
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">Your Logo</a>
      </div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
      </nav>
      <div className="icons">
        <button onClick={handleSearchClick} className="icon-button">
          <img src={SearchIcon} alt="Search" />
        </button>
        <button onClick={handleCartClick} className="icon-button cart-button">
          <img src={CartIcon} alt="Cart" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
        <button onClick={handleUserClick} className="icon-button">
          <img src={UserIcon} alt="User" />
        </button>
      </div>
      <div className="auth-buttons">
        <SecondaryButton text="Login" onClick={() => console.log('Login button clicked')} />
            <span>Login</span>
      </div>
    </header>
  );
};

export default Header;
