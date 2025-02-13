import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./MainPage.css";

import heartIcon from "./assets/heart.svg";
import leftArrow from "./assets/left-arrow.svg";
import rightArrow from "./assets/right-arrow.svg";


import autoIcon from "./assets/auto.svg";
import clothesIcon from "./assets/clothes.svg";
import electronicsIcon from "./assets/electronics.svg";
import homeIcon from "./assets/home.svg";
import kidsIcon from "./assets/for kids.svg";
import shoesIcon from "./assets/shoes.svg";
import beautyIcon from "./assets/beauty.svg";
import petsIcon from "./assets/pets.svg";
import constructionIcon from "./assets/construction.svg";
import hobbiesIcon from "./assets/hobbies.svg";
import realEstateIcon from "./assets/real estates.svg";
import productionIcon from "./assets/production.svg";

const categories = [
  { name: "AUTO", icon: autoIcon, items: ["Cars", "Trucks", "Motorbikes", "Other..."] },
  { name: "CLOTHES", icon: clothesIcon, items: ["Women's clothing", "Men's clothing", "Children's clothing", "Other..."] },
  { name: "ELECTRONICS", icon: electronicsIcon, items: ["Computers", "Audio, Video, DVD", "Household appliances", "Other..."] },
  { name: "HOME", icon: homeIcon, items: ["Furniture, furnishing", "Antiques", "Handmade", "Other..."] },
  { name: "FOR KIDS", icon: kidsIcon, items: ["Toys, swings", "Children’s clothes, shoes", "Everything for school", "Other..."] },
  { name: "SHOES", icon: shoesIcon, items: ["Women's shoes", "Men’s shoes", "Children’s shoes", "Other..."] },
  { name: "BEAUTY", icon: beautyIcon, items: ["Cosmetics", "Perfumery", "Natural", "Other..."] },
  { name: "PETS", icon: petsIcon, items: ["Dogs, puppies", "Cats, kittens", "Parrots", "Other..."] },
  { name: "CONSTRUCTION", icon: constructionIcon, items: ["Construction materials", "Tools and equipment", "Garden machinery", "Other..."] },
  { name: "HOBBIES", icon: hobbiesIcon, items: ["Music, instruments", "Books", "Tickets, concerts", "Other..."] },
  { name: "REAL ESTATES", icon: realEstateIcon, items: ["Apartments", "Houses, holiday cottages", "Land", "Other..."] },
  { name: "PRODUCTION", icon: productionIcon, items: ["Production equipment", "Household works", "Transport and loading", "Other..."] },
];

const MainPage = () => {
  return (
    <div>
    

      {/* Valentine*/}
      <div className="valentine-section">
        <button className="arrow-btn left">
          <img src={leftArrow} alt="Left" />
        </button>
        <div className="valentine-content">
          <img src={heartIcon} alt="Heart" className="valentine-icon" />
          <h2 className="valentine-title">Shop Valentine's Day Gifts</h2>
        </div>
        <button className="arrow-btn right">
          <img src={rightArrow} alt="Right" />
        </button>
      </div>

      {/* категории */}
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <img src={category.icon} alt={category.name} className="category-icon" />
            <h3 className="category-title">{category.name}</h3>
            <ul className="category-items">
              {category.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default MainPage;
