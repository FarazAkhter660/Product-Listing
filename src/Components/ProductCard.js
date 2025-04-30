import React from 'react';
import './ProductCard.css';
import { FaHeart } from 'react-icons/fa';

const ProductCard = ({ image, title, tag }) => {
  return (
    <div className="product-card">
      {tag && <span className="tag">{tag}</span>}
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <div className="subtitle">
        <span>Sign in or Create an account to see pricing</span>
        <FaHeart className="heart" />
      </div>
    </div>
  );
};

export default ProductCard;
