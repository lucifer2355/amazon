import React from "react";
import "../style/header.css";

function Header() {
  return (
    <nav className='header'>
      <img
        className='header__logo'
        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        alt='amazon_logo'
      />
    </nav>
  );
}

export default Header;
