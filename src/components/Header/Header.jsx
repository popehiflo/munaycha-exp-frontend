import React, { useRef } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logoIconText from '../../assets/imgs/logo-icon-text.svg';

const Header = () => {
  const navMenu = useRef(null);
  const showMenu = () => {
    navMenu.current.classList.toggle('active');
  };

  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={logoIconText} alt="logo" />
      </a>
      <nav className="navbar" ref={navMenu}>
        {/* <div className="navbar-menu" > */}
        <a href="/" className="">Nav Item 1</a>
        <a href="/" className="">Nav Item 2</a>
        <a href="/" className="">Nav Item 3</a>
        <a href="/" className="">Nav Item 4</a>
        <a href="/" className="">Login</a>
        {/* </div> */}
      </nav>
      <button className="menu-button btn-icon" type="button" onClick={showMenu} aria-label="Open Shopping Cart">
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
      <button id="menu-btn" className="menu-button-ext btn-icon" type="button" onClick={showMenu} aria-label="Open Menu">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
};

export default Header;
