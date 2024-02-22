import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

import menu from "../assets/images/menu.png";
import close from "../assets/images/close.png";

// import logo from "../assets/images/lana-logo.png";


const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState("");

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    setMenuOpen(false);
  };

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (path) => {
    setClickedItem(path);
  };

  return (
    <nav>
      <div className="logo">
        <img
        //   src={logo}
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="menu-btn" onClick={handleMenuClick}>
        {isMenuOpen ? (
          <img
            src={close}
            alt="close"
            className="close-button"
            style={{ width: "1.5rem" }}
          />
        ) : (
          <img
            src={menu}
            alt="menu"
            className="menu-button"
            style={{ width: "2rem" }}
          />
        )}
      </div>
      <ul className={isMenuOpen ? "open" : ""}>
        <li
          onClick={() => {
            handleNavigation("/");
            handleItemClick("/");
          }}
          className={clickedItem === "/" ? "clicked" : ""}
        >
          Home
        </li>
        <li
          onClick={() => {
            handleNavigation("/about");
            handleItemClick("/about");
          }}
          className={clickedItem === "/about" ? "clicked" : ""}
        >
          About
        </li>
{/* 
        <li
          onClick={() => {
            handleNavigation("/products");
            handleItemClick("/products");
          }}
          className={clickedItem === "/products" ? "clicked" : ""}
        >
          Products
        </li> */}
        <li
          onClick={() => {
            handleNavigation("/blogs");
            handleItemClick("/blogs");
          }}
          className={clickedItem === "/blogs" ? "clicked" : ""}
        >
          Blogs
        </li>

        <li
          onClick={() => {
            handleNavigation("/contact");
            handleItemClick("/contact");
          }}
          className={clickedItem === "/contact" ? "clicked" : ""}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Header;