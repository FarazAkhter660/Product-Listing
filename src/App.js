import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import ProductCard from './Components/ProductCard';

import product1 from './assets/product1.jpg';
import product2 from './assets/product2.jpg';
import product3 from './assets/product3.jpg';
import product4 from './assets/product4.jpg';
import product5 from './assets/product5.jpg';
import product6 from './assets/product6.jpg';
import product7 from './assets/product7.jpg';
import product8 from './assets/product8.jpg';
import product9 from './assets/product9.jpg';
import product10 from './assets/product10.jpg'; 
import product11 from './assets/product11.jpg';
import product12 from './assets/product12.jpg';
import product13 from './assets/product13.jpg';

const App = () => {
  const products = [
    { id: 1, image: product1, title: 'PPXDC Milkhyway Dress', price: 45.00, tag: 'NEW PRODUCT' },
    { id: 2, image: product2, title: 'PPXDC Milkhyway Plush Toy', price: 35.00, tag: 'OUT OF STOCK' },
    { id: 3, image: product3, title: 'Leather Keychain', price: 15.00 },
    { id: 4, image: product4, title: 'PPXDC Bag', price: 50.00 },
    { id: 5, image: product5, title: 'PPXDC Toy', price: 20.00 },
    { id: 6, image: product6, title: 'Simple Backpack', price: 39.99 },
    { id: 7, image: product7, title: 'PPXDC Milkhyway Dress', price: 45.00, tag: 'NEW PRODUCT' },
    { id: 8, image: product8, title: 'PPXDC Milkhyway Plush Toy', price: 35.00, tag: 'OUT OF STOCK' },
    { id: 9, image: product9, title: 'Leather Keychain', price: 15.00 },
    { id: 10, image: product10, title: 'PPXDC Bag', price: 50.00 },
    { id: 11, image: product11, title: 'PPXDC Toy', price: 20.00 },
    { id: 12, image: product12, title: 'Simple Backpack', price: 39.99 },
    { id: 13, image: product13, title: 'Simple Backpack', price: 39.99 },
    { id: 14, image: product6, title: 'Simple Backpack', price: 39.99 },
  ];

  return (
    <div>
      <Navbar />
      <section className="hero-section">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Armet est posuere rhoncus scelerisque.</p>
      </section>
      <div className="main-layout">
        <Sidebar />
        <div className="product-section">
          <div className="top-bar">
            <span>{products.length} ITEMS</span>
            <select>
              <option>RECOMMENDED</option>
              <option>PRICE: LOW TO HIGH</option>
              <option>PRICE: HIGH TO LOW</option>
            </select>
          </div>
          <div className="product-grid">
            {products.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
