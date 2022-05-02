import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logoIconGoldText from '../../assets/imgs/logo-icon-gold-text.svg';

const Footer = () => (
  <section className="footer">
    <div className="box-container">
      <div className="box">
        <a href="/" className="logo">
          <img src={logoIconGoldText} alt="logo" />
        </a>
        <p>Munaycha Explorer Travel Agency, creando experiencias de viaje desde la capital Inca</p>
        <div>
          <a href="/" className="social-link">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="/" className="social-link">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="/" className="social-link">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="/" className="social-link">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
