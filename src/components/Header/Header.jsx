import { useRef, useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';
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
      <a href="/" className="logo" data-aos="zoom-in-left" data-aos-delay="150">
        <img src={logoIconGoldTextBlue} alt="logo" />
      </a>
      <div className="nav-wrapper">
        <nav className="navbar" ref={navMenu}>
          <a href="/" className="" data-aos="zoom-in-left" data-aos-delay="300">Nav Item 1</a>
          <a href="/" className="" data-aos="zoom-in-left" data-aos-delay="450">Nav Item 2</a>
          <a href="/" className="" data-aos="zoom-in-left" data-aos-delay="600">Nav Item 3</a>
          <a href="/" className="" data-aos="zoom-in-left" data-aos-delay="750">Nav Item 4</a>
          <a href="/" className="" data-aos="zoom-in-left" data-aos-delay="900">Login</a>
        </nav>
        <button className="btn-icon" type="button" data-aos="zoom-in-left" data-aos-delay="1050" aria-label="Open Shopping Cart">
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
