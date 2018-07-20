import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import Carousel1 from '../assets/business1.jpg';
import Carousel2 from '../assets/business2.jpg';
import Carousel3 from '../assets/business3.jpg';
import Carousel4 from '../assets/business4.jpg';

const items = [
  {
    src: Carousel1,
    altText: 'Slide 1',
  },
  {
    src: Carousel2,
    altText: 'Slide 2',
  },
  {
    src: Carousel3,
    altText: 'Slide 3',
  },
  {
    src: Carousel4,
    altText: 'Slide 3',
  }
];

const Carousel = () => <UncontrolledCarousel
  className="carousel"
  items={items}
  controls={false}
  indicators={false}
  interval={3000}
  pause={false}
  />;

export default Carousel;
