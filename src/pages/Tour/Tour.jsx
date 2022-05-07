import React from 'react';
import { useParams } from 'react-router-dom';
import './Tour.css';
import { getTour } from '../../fakeData';

const Tour = () => {
  const { id, slug } = useParams();
  const tour = getTour(id);
  return (
    <div className="tour">
      <h1>
        Soy el Tour #
        {id}
      </h1>
      <h2>
        slug:
        {slug}
      </h2>
      <pre>
        {JSON.stringify(tour, null, 2)}
      </pre>
    </div>
  );
};

export default Tour;
