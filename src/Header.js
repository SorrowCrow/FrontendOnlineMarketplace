import React from "react";
import "./Header.css";
import logo1 from "./assets/marketplacelogo.svg";
import searchIcon from "./assets/search-svgrepo-com.svg";
import languageIcon from "./assets/icons8-world-24.png";
import userIcon from "./assets/icons8-male-user-48.png";
import cartIcon from "./assets/icons8-cart-32.png";
import { Image, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      {/* верх */}
      <div className="header-top">
        {/* Лого */}
        <div className="logo">
          <img src={logo1} alt="Logo" className="logo-image" />
        </div>

        {/* поиск */}
        <div className="search-bar">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search Online Marketplace"
              className="search-input"
            />
            <button className="search-button">
              <img
                src={searchIcon}
                alt="Search"
                className="search-icon-image"
              />
            </button>
          </div>
        </div>

        {/* иконки справа */}
        <div className="nav-icons">
          <img src={languageIcon} alt="Language" className="icon-image" />

          {/* <img src={userIcon} alt="User" className="icon-image" /> */}
          <ChakraLink variant="plain" color="black" asChild justifySelf="end">
            <Link to={{ pathname: "/login" }}>
              <Image src={userIcon} alt="User" className="icon-image" />
            </Link>
          </ChakraLink>

          <ChakraLink variant="plain" color="black" asChild justifySelf="end">
            <Link to={{ pathname: "/cart" }}>
              <Image src={cartIcon} alt="Cart" className="icon-image" />
            </Link>
          </ChakraLink>
        </div>
      </div>

      {/* Меню  */}
      <nav className="nav-menu">
        <a href="#" className="nav-link nav-all">
          <span className="hamburger-icon">☰</span> ALL
        </a>
        {[
          "HOME",
          "AUTO",
          "CLOTHES",
          "SHOES",
          "ELECTRONICS",
          "BEAUTY",
          "REVIEWS",
        ].map((item) => (
          <a key={item} href="#" className="nav-link">
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
