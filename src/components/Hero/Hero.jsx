/* eslint-disable import/no-unresolved */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Hero.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Link } from 'react-router-dom';
import slideBg from '../../assets/imgs/slide-bg-machupicchu.jpg';

const Hero = () => {
  const slideImage = {
    backgroundImage: `url(${slideBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    cursor: 'hand',
  };

  const slideStyle = {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '2rem',
    minHeight: '100vh',
    padding: '3rem',
    cursor: 'hand',
  };

  const bucle = true;
  return (
    <section className="hero" id="hero">
      <Swiper
        className="hero-slider"
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop={bucle}
      >
        <div className="swiper-wrapper">
          <SwiperSlide style={{ ...slideImage, ...slideStyle }}>
            <span>Let us explore the beauty of</span>
            <h3>Machu Picchu 1</h3>
            <Link to="/" className="btn-primary">Require now</Link>
          </SwiperSlide>
          <SwiperSlide style={{ ...slideImage, ...slideStyle }}>
            <span>Slide 2</span>
            <h3>Machu Picchu 2</h3>
            <Link to="/" className="btn-primary">Require now</Link>
          </SwiperSlide>
          <SwiperSlide style={{ ...slideImage, ...slideStyle }}>
            <span>Slide 3</span>
            <h3>Machu Picchu 3</h3>
            <Link to="/" className="btn-primary">Require now</Link>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;
