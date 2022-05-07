import React from 'react';
import './Tours.css';
import { getToursByPopularity } from '../../fakeData';
import TourCard from '../../components/TourCard/TourCard';

const Tours = () => {
  const tours = getToursByPopularity();
  return (
    <section className="tours">
      <div className="heading">
        <span>Tours diseñados para conocer, compartir y disfrutar del Perú.</span>
        <h1>Nuestros Tours</h1>
      </div>
      <div className="box-container">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
