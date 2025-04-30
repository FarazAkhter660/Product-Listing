import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, title, tag }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
        {tag && <span className="product-tag">{tag}</span>}
      </div>
      <h3 className="product-title">{title}</h3>
      <div className="product-subtitle">
        <span className="product-price">$120</span>
        <span className="product-wishlist">♡</span>
      </div>
    </div>
  );
};

export default ProductCard;