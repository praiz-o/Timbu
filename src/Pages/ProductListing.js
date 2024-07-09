import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/CardList';
import Footer from '../components/Footer';
import {Hero} from '../components/Hero'
import './ProductListing.css';
import Category from '../components/Category';

function ProductListing({ cart, addToCart }) {
  return (
    <div className="product-listing-page">
      <Header cartCount={cart.length} />
      <Hero/>
      <h4 className='head'>Home > Products </h4>
      <Category/>
      <div className="product-list-container">
        <ProductList addToCart={addToCart} />
      </div>
      <Footer />
    </div>
  );
}

export default ProductListing;
