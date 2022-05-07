import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faClock, faEnvelope, faMap, faMountain, faMountainSun, faPhone } from '@fortawesome/free-solid-svg-icons';
import logoIconGoldText from '../../assets/imgs/logo-icon-gold-text-white.png';

const Footer = () => (
  <section className="footer">
    <div className="box-container">
      <div className="box">
        <Link to="/" className="logo">
          <img src={logoIconGoldText} alt="logo" />
        </Link>
        <p>Munaycha Explorer Travel Agency, creando experiencias de viaje desde la capital Inca</p>
        <div className="social-media">
          <Link to="/" className="social-link">
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link to="/" className="social-link">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link to="/" className="social-link">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link to="/" className="social-link">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </div>
      </div>
      <div className="box">
        <h3>Quick Links</h3>
        <Link to="/" className="quick-link">
          <FontAwesomeIcon icon={faMountain} />
          {' '}
          Nav Item 1
        </Link>
        <Link to="/" className="quick-link">
          <FontAwesomeIcon icon={faMountain} />
          {' '}
          Nav Item 2
        </Link>
        <Link to="/" className="quick-link">
          <FontAwesomeIcon icon={faMountain} />
          {' '}
          Nav Item 3
        </Link>
        <Link to="/" className="quick-link">
          <FontAwesomeIcon icon={faMountainSun} />
          {' '}
          Nav Item 4
        </Link>
        <Link to="/" className="quick-link">
          <FontAwesomeIcon icon={faMountain} />
          {' '}
          Nav Item 5
        </Link>
        <Link to="/" className="quick-link">
          <FontAwesomeIcon icon={faMountain} />
          {' '}
          Nav Item 6
        </Link>
      </div>
      <div className="box">
        <h3>Contact Us</h3>
        <p>
          <FontAwesomeIcon icon={faMap} />
          {' '}
          Cusco, Perú
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} />
          {' '}
          +51 987 654 321
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} />
          {' '}
          info@munaychaexplorer.com
        </p>
        <p>
          <FontAwesomeIcon icon={faClock} />
          {' '}
          Mon - Sat: 8:00 - 20:00
        </p>
      </div>
      <div className="box">
        <h3>More information?</h3>
        <p>Subscribe to receive new tours</p>
        <form action="">
          <input type="email" placeholder="your email" className="email" />
          <input type="submit" value="subscribe" className="btn-primary" />
        </form>
      </div>
    </div>
  </section>
);

export default Footer;
