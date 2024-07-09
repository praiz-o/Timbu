import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Cart from '../components/cart';
import Footer from '../components/Footer';
import '../Pages/Checkout.css'; // Import Checkout page styles

const Checkout = ({ cart, removeFromCart }) => {
  const [notification, setNotification] = useState('');

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    setNotification(`Removed ${product.name} from cart`);
  };

  const handleQuantityChange = (product, action) => {
    // Placeholder for quantity change logic
    console.log(`Changing quantity of ${product.name} ${action}`);
  };

  const handleCheckout = () => {
    // Placeholder for checkout logic
    console.log('Proceeding to checkout...');
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="checkout-page">
      <Header cartCount={cart.length} />
      <div className="checkout-content">
        <h1>Checkout</h1>
        {notification && <div className="notification">{notification}</div>}
        <div className="product-list">
          {cart.map(product => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-details">
                <div className="product-name">{product.name}</div>
                <div className="product-actions">
                  <button className="remove-item" onClick={() => handleRemoveFromCart(product)}>
                    <i className="fas fa-trash-alt"></i> Remove
                  </button>
                  <div className="item-quantity">
                    <button className="quantity-btn" onClick={() => handleQuantityChange(product, 'decrement')}>-</button>
                    <span className="quantity">{product.quantity}</span>
                    <button className="quantity-btn" onClick={() => handleQuantityChange(product, 'increment')}>+</button>
                  </div>
                </div>
              </div>
              <div className="product-price">${product.price}</div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <Cart cart={cart} removeFromCart={removeFromCart} />
          <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
