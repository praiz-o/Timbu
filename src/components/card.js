import React from 'react';
import '../components/Card.css';

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product); // Pass the product data to the parent component
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-favourite">
        <i className="far fa-heart"></i>
      </div>
      <div className="product-details">
        <div className="product-name">{product.name}</div>
        <div className="product-rating">
          <i className="fas fa-star"></i> {product.rating} ({product.reviews})
        </div>
      </div>
      <div className="product-footer">
        <div className="product-price">${product.price}</div>
        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
