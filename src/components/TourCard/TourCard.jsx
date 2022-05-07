import React from 'react';
import './TourCard.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart, faMoneyBill1, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const TourCard = ({ tour }) => (
  <div className="box-tour">
    <div className="box__tour">
      <div className="image">
        <img src={tour.img} alt="" />
        <div className="image-icons">
          <a href="/" className="btn-icon-primary">
            <FontAwesomeIcon icon={faHeart} />
          </a>
          <a href="/" className="btn-icon-primary">
            <FontAwesomeIcon icon={faCartPlus} />
          </a>
        </div>
      </div>
      <div className="content">
        {/* TODO: mostrar solo 90 caracteres de description en p,con JS */}
        <a href="/">
          <h3>{tour.title}</h3>
        </a>
        <div className="icons">
          <span className="day">
            <FontAwesomeIcon icon={faSun} />
            {` ${tour.duration.days} días`}
          </span>
          <span className="night">
            <FontAwesomeIcon icon={faMoon} />
            {` ${tour.duration.nights} noches`}
          </span>
          <span className="money">
            <FontAwesomeIcon icon={faMoneyBill1} />
            {` $ ${tour.price}`}
          </span>
        </div>
        <p>{tour.information}</p>
      </div>
    </div>
    <div className="box__buttons">
      <a href="/" className="btn-primary">
        Saber más del tour
      </a>
    </div>
  </div>
);

TourCard.propTypes = {
  tour: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    duration: PropTypes.shape({
      days: PropTypes.number,
      nights: PropTypes.number,
    }),
    information: PropTypes.string,
  }),
};

TourCard.defaultProps = {
  tour: {
    img: '',
    title: '',
    price: 0,
    duration: {
      days: 0,
      nights: 0,
    },
    information: '',
  },
};

export default TourCard;
