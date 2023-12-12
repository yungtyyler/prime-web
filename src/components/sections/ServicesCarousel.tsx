import React from 'react';
import Slide from '@/types/slide';
import Image from 'next/image';

const ServicesCarousel = () => {
  const slides: Slide[] = [
    { id: 0, title: 'Internal Apps', image: '/carousel/internal-apps.jpg', description: 'Internal apps are apps that are used by your employees to help them do their jobs better and faster. They can be used to automate repetitive tasks, manage data, and more.' },
    { id: 1, title: 'Web Development', image: '/carousel/web-development.jpg', description: 'Web development is the process of building websites and applications for the internet. It includes aspects such as web design, web publishing, web programming, and database management.' },
  ];

  return (
    <div className="md:max-w-3xl z-0 w-full flex overflow-hidden">
      {slides.map((slide, index) => (
        <div
          className={`w-full h-full relative transition-transform duration-500 ${
            index === 0 ? 'transform translate-x-0' : 'transform translate-x-full'
          }`}
          key={slide.id}
        >
          <Image src={slide.image} alt={slide.title} width={500} height={300} className='w-full h-full object-cover' />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-2xl font-bold">{slide.title}</h2>
            <p className="text-gray-500">{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCarousel;
