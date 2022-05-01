/* eslint-disable import/no-unresolved */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Hero.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper';
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
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '2rem',
    minHeight: '92vh',
    padding: '2rem 0',
    cursor: 'hand',
  };

  const bucle = true;
  return (
    <section className="hero">
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
            <span>Slide 1</span>
            <h3>to the unknown</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Necessitatibus
              Quia Illum Quod Perspiciatis Harum In Possimus? Totam Consequuntur Officia Quia?
            </p>
            <a href="/" className="btn-primary">Require now</a>
          </SwiperSlide>
          <SwiperSlide style={{ ...slideImage, ...slideStyle }}>
            <span>Slide 2</span>
            <h3>to the unknown</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Necessitatibus
              Quia Illum Quod Perspiciatis Harum In Possimus? Totam Consequuntur Officia Quia?
            </p>
            <a href="/" className="btn-primary">Require now</a>
          </SwiperSlide>
          <SwiperSlide style={{ ...slideImage, ...slideStyle }}>
            <span>Slide 3</span>
            <h3>to the unknown</h3>
            <p>
              Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Necessitatibus
              Quia Illum Quod Perspiciatis Harum In Possimus? Totam Consequuntur Officia Quia?
            </p>
            <a href="/" className="btn-primary">Require now</a>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;
