import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* левая часть*/}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Our Store</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* правая часть*/}
        <div className="footer-section">
          <h4>Help</h4>
          <ul>
            <li>FAQ</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
