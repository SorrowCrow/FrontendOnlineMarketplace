import React from "react";
import "./Header.css";
import logo from "../assets/logo.png"; 
import searchIcon from "../assets/search-svgrepo-com.svg";
import languageIcon from "../assets/icons8-world-24.png";
import userIcon from "../assets/icons8-male-user-48.png";
import cartIcon from "../assets/icons8-cart-32.png";

const Header = () => {
  return (
    <header className="header">
      {/* Верхняя часть шапки */}
      <div className="header-top">
        {/* Логотип */}
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>

        {/* Строка поиска */}
        <div className="search-bar">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search Online Marketplace"
              className="search-input"
            />
            <button className="search-button">
              <img src={searchIcon} alt="Search" className="search-icon-image" />
            </button>
          </div>
        </div>

        {/* Иконки справа */}
        <div className="nav-icons">
          <img src={languageIcon} alt="Language" className="icon-image" />
          <img src={userIcon} alt="User" className="icon-image" />
          <img src={cartIcon} alt="Cart" className="icon-image" />
        </div>
      </div>

      {/* Меню навигации */}
      <nav className="nav-menu">
        <a href="#" className="nav-link nav-all">
          <span className="hamburger-icon">☰</span> ALL
        </a>
        {["HOME", "AUTO", "CLOTHES", "SHOES", "ELECTRONICS", "BEAUTY", "REVIEWS"].map(
          (item) => (
            <a key={item} href="#" className="nav-link">
              {item}
            </a>
          )
        )}
      </nav>
    </header>
  );
};

export default Header;
