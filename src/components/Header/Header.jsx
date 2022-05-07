import { useRef, useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import logoIconGoldTextBlue from '../../assets/imgs/logo-icon-gold-text-blue.svg';

const Header = () => {
  const [colorHeader, setColorHeader] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navMenu = useRef(null);
  const changeColorHeader = () => {
    if (window.scrollY > 100) {
      setColorHeader(true);
    } else {
      setColorHeader(false);
    }
  };
  window.addEventListener('scroll', changeColorHeader);
  const handleClickOpenMenu = () => {
    navMenu.current.classList.toggle('active');
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={colorHeader ? 'header scroll-header' : 'header'}>
      <NavLink to="/" className="logo">
        <img src={logoIconGoldTextBlue} alt="logo" />
      </NavLink>
      <div className="nav-wrapper">
        <nav className="navbar" ref={navMenu}>
          <NavHashLink to="/#hero" className="">Inicio</NavHashLink>
          <NavHashLink to="/#about" className="">Nosotros</NavHashLink>
          <NavHashLink to="/#tours" className="">Tours</NavHashLink>
          <NavHashLink to="/" className="">Nav Item 4</NavHashLink>
          <NavLink to="/sign-in" className="">Login</NavLink>
        </nav>
        <button className="btn-icon" type="button" aria-label="Open Shopping Cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
        <button
          className="btn-icon"
          type="button"
          onClick={handleClickOpenMenu}
          id="menu-btn"
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>
    </header>
  );
};

export default Header;
