import React from 'react';
import About from '../../components/About/About';
import ComoFunciona from '../../components/ComoFunciona/ComoFunciona';
import Hero from '../../components/Hero/Hero';
import Tours from '../Tours/Tours';

const Home = () => (
  <>
    <Hero />
    <ComoFunciona />
    <About />
    <Tours />
  </>
);

export default Home;
