'use client';

import { useState } from 'react';
import Slide from '@/types/slide';

const ServicesCarousel = ({ slides }: { slides: Slide[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    console.log(newSlide);
    setCurrentSlide(newSlide);
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newSlide = isLastSlide ? 0 : currentSlide + 1;
    console.log(newSlide);
    setCurrentSlide(newSlide);
  };

  const goToSlide = (id: number) => {
    setCurrentSlide(id);
  };

  return (
    <div className="h-full relative flex flex-col items-center">
      <div className="absolute top-2 md:px-12 px-1 my-4 bg-white bg-opacity-75 rounded text-[1.5em] tracking-wider uppercase font-bold">
        {slides[currentSlide].title}
      </div>
      <div className="absolute md:block hidden bottom-10 w-[80%] px-10 my-4 bg-black bg-opacity-80 text-white text-[1.1em] rounded">
        {slides[currentSlide].description}
      </div>
      <div className="leftArrow" onClick={prevSlide}>
        ❰
      </div>
      <div className="rightArrow" onClick={nextSlide}>
        ❱
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        className="w-full h-full rounded bg-center bg-cover"
      />
      <div className="text-black flex justify-center">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="mx-1 cursor-pointer text-[20px]"
            onClick={() => goToSlide(slide.id)}
          >
            {currentSlide === slide.id ? (
              <span>&#11044;</span>
            ) : (
              <span className="">&#9711;</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;
