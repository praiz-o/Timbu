import React from 'react';
import ProductCard from '../components/card'; // Ensure the correct path to your component
import './CardList.css';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, 
        name: 'Product 1', 
        price: 10, 
        image: './images/Frame 97.png', 
        rating: 4.5, 
        reviews: 10 
    },
    { id: 2, name: 'Product 2', price: 20, image: './images/Frame 97 (1).png', rating: 4.0, reviews: 5 },
    { id: 3, name: 'Product 3', price: 80, image: './images/Frame 97 (1).png', rating: 4.0, reviews: 5 },
    { id: 4, name: 'Product 4', price: 70, image: './images/Frame 97 (2).png', rating: 4.0, reviews: 5 },
    { id: 5, name: 'Product 5', price: 80, image: './images/Frame 97 (2).png', rating: 4.0, reviews: 5 },
    { id: 6, name: 'Product 6', price: 95, image: './images/Frame 97 (2).png', rating: 4.0, reviews: 5 },

    // Add more products 
  ];

  return (
    <div className="product-list-container">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
