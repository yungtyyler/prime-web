'use client';

import Slide from '@/types/slide';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ServicesSection = () => {
  const slides: Slide[] = [
    {
      id: 0,
      title: 'Internal Apps',
      image: '/carousel/internal-apps.jpg',
      description:
        'Internal apps are apps that are used by your employees to help them do their jobs better and faster. They can be used to automate repetitive tasks, manage data, and more.',
    },
    {
      id: 1,
      title: 'Web Development',
      image: '/carousel/web-development.jpg',
      description:
        'Web development is the process of building websites and applications for the internet. It includes aspects such as web design, web publishing, web programming, and database management.',
    },
    {
      id: 2,
      title: 'Search Engine Optimization',
      image: '/carousel/seo.jpg',
      description:
        'Search engine optimization is the process of improving the visibility of a website or a web page in search engines. It includes aspects such as keyword research, on-page optimization, and link building.',
    },
    {
      id: 3,
      title: 'Consulting',
      image: '/carousel/consulting.jpg',
      description:
        'Consulting is the process of providing expert advice to a client. It includes aspects such as consulting, consulting, and consulting.',
    },
  ];

  return (
    <div className="section__container">
      <Swiper></Swiper>
    </div>
  );
};
export default ServicesSection;
