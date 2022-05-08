import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import aboutVideo from '../../assets/videos/munaycha.mp4';

const About = () => (
  <section className="about" id="about">
    <div className="video-container">
      <video src={aboutVideo} autoPlay loop muted className="video" />
    </div>
    <div className="content">
      <span>¿Por qué viajar con</span>
      <h3 className="title">Munaycha Explorer?</h3>
      <p>
        Munaycha Explorer busca constantemente formas de hacer que su viaje sea lo más
        especial posible, con una experiencia única y inolvidable, desde la forma en que
        planificamos el viaje hasta la forma en que lo realizamos.
      </p>
      <Link to="/about" className="btn-primary">Saber más de nosotros</Link>
    </div>
  </section>
);

export default About;
