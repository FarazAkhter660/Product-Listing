import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import ProductCard from "./Components/ProductCard";

import product1 from "./assets/product1.jpg";
import product2 from "./assets/product2.jpg";
import product3 from "./assets/product3.jpg";
import product4 from "./assets/product4.jpg";
import product5 from "./assets/product5.jpg";
import product6 from "./assets/product6.jpg";
import product7 from "./assets/product7.jpg";
import product8 from "./assets/product8.jpg";
import product9 from "./assets/product9.jpg";
import product10 from "./assets/product10.jpg";
import product11 from "./assets/product11.jpg";
import product12 from "./assets/product12.jpg";
import product13 from "./assets/product13.jpg";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const products = [
    {
      id: 1,
      image: product1,
      title: "PPXDC Milkhyway Dress",
      tag: "NEW PRODUCT",
    },
    {
      id: 2,
      image: product2,
      title: "PPXDC Milkhyway Plush Toy",
      tag: "OUT OF STOCK",
    },
    { id: 3, image: product3, title: "Leather Keychain" },
    { id: 4, image: product4, title: "Grey Cap" },
    { id: 5, image: product5, title: "Classic Backpack" },
    { id: 6, image: product6, title: "Dino Plush Toy" },
    { id: 7, image: product7, title: "Leather Pouch" },
    { id: 8, image: product8, title: "Roll-up Bag" },
    { id: 9, image: product9, title: "Grey Backpack" },
    { id: 10, image: product10, title: "Mini Duffel" },
    { id: 11, image: product11, title: "Laptop Bag" },
    { id: 12, image: product12, title: "Toy Bunny" },
    { id: 13, image: product13, title: "Travel Kit" },
  ];

  const [selectedSort, setSelectedSort] = useState("RECOMMENDED");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const options = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH",
  ];

  return (
    <div>
      <Navbar />
      <section className="hero-section">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Armet est posuere rhoncus
          scelerisque.
        </p>
      </section>

      <div className="main-layout">
        <Sidebar
          show={showSidebar}
          toggleSidebar={toggleSidebar}
          itemCount={products.length}
        />

        <div className={`product-section ${!showSidebar ? "full-width" : ""}`}>
          <div className="top-bar">
            <div className="items-filter-container">
              <span className="items-count">{products.length} ITEMS</span>
              {!showSidebar && (
                <button className="show-filter-btn" onClick={toggleSidebar}>
                  SHOW FILTER
                </button>
              )}
            </div>

            <div className="custom-dropdown">
              <div
                className="selected-option"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {selectedSort}{" "}
                <span className="arrow">{dropdownOpen ? "▲" : "▼"}</span>
              </div>
              {dropdownOpen && (
                <ul className="dropdown-options">
                  {options.map((option) => (
                    <li
                      key={option}
                      className={`dropdown-option ${
                        option === selectedSort ? "active" : ""
                      }`}
                      onClick={() => {
                        setSelectedSort(option);
                        setDropdownOpen(false);
                      }}
                    >
                      {option === selectedSort && (
                        <span className="checkmark">✔</span>
                      )}
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
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