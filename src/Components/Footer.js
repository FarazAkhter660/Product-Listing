import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe-input">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-section">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3 className="currency-title">CURRENCY</h3>
          <div className="currency">
            <img src="https://flagcdn.com/16x12/us.png" alt="US Flag" />
            <span>USD</span>
          </div>
          <p className="currency-note">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>

        <div className="footer-section">
          <h3>mettā muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <span className="icon">🐦</span>
            <span className="icon">💼</span>
          </div>
          <h3 className="payment-title">mettā muse ACCEPTS</h3>
          <div className="payment-methods">
            <div className="payment-methods-row">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/PayPal_logo_2014.svg"
                alt="PayPal"
                className="payment-icon"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                alt="Visa"
                className="payment-icon"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="Mastercard"
                className="payment-icon"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Amex_logo.svg"
                alt="Amex"
                className="payment-icon"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Payoneer_logo.svg"
                alt="Payoneer"
                className="payment-icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
