import React from 'react';
import { Link } from 'react-router-dom';
import './TourCard.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart, faMoneyBill1, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const TourCard = ({ tour }) => {
  const { id, slug } = tour;
  return (
    <div className="box-tour">
      <div className="box__tour">
        <div className="image">
          <img src={tour.img} alt="" />
          <div className="image-icons">
            <Link to="/" className="btn-icon-primary">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
            <Link to="/" className="btn-icon-primary">
              <FontAwesomeIcon icon={faCartPlus} />
            </Link>
          </div>
        </div>
        <div className="content">
          {/* FIXME: mostrar solo 90 caracteres de description en p,con JS */}
          <Link to={`/tour/${id}`}>
            <h3>{tour.title}</h3>
          </Link>
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
        {/* TODO: podria enviar solo el slug (siempre y cuando sea unico) */}
        <Link to={`/tours-peru/${id}/${slug}`} className="btn-primary">
          Saber más del tour
        </Link>
      </div>
    </div>
  );
};

TourCard.propTypes = {
  tour: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string,
    title: PropTypes.string,
    slug: PropTypes.string,
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
    slug: 'slug-por-defecto',
    price: 0,
    duration: {
      days: 0,
      nights: 0,
    },
    information: '',
  },
};

export default TourCard;
