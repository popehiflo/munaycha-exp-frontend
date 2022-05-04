import React from 'react';
import './Tours.css';
import { dataPopularTours } from '../../fakeData';
import TourCard from '../../components/TourCard/TourCard';

const Tours = () => (
  <section className="tours">
    <div className="heading">
      <span>Tours diseñados para conocer, compartir y disfrutar del Perú.</span>
      <h1>Nuestros Tours</h1>
    </div>
    <div className="box-container">
      {dataPopularTours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  </section>
);

export default Tours;
