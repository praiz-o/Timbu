import React from 'react';
import '../components/cart.css'; // Import Cart component styles

const Cart = ({ cart }) => {
  const calculateSubtotal = () => {
    if (!cart || cart.length === 0) {
      return "0.00";
    }

    let subtotal = cart.reduce((total, product) => {
      return total + (product.price * product.quantity);
    }, 0);

    return subtotal.toFixed(2);
  };

  

  return (
    <div className="cart-container">
      <div className="subtotal">
        <span>Subtotal:</span>
        <span>${calculateSubtotal()}</span>
      </div>
    </div>
  );
}

export default Cart;
