import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './Pages/ProductListing';
import Checkout from './Pages/Checkout';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<ProductList cart={cart} addToCart={addToCart} />} />
          <Route path="/products" element={<ProductList cart={cart} addToCart={addToCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
