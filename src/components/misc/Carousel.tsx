'use client';

import { CSSProperties } from 'react';
import {
  Navigation,
  EffectCube,
  Autoplay,
  EffectCoverflow,
  Pagination,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Slide from '@/types/slide';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Carousel = ({ slides }: { slides: Slide[] }) => {
  return (
    <Swiper
      className="w-full max-w-6xl max-h-full"
      modules={[Navigation, EffectCoverflow, Autoplay, Pagination]}
      style={
        {
          '--swiper-navigation-color': '#E6AD0F',
          '--swiper-navigation-size': '32px',
        } as CSSProperties
      }
      slidesPerView={1}
      spaceBetween={30}
      navigation
      autoplay={{ delay: 5000 }}
      loop
      speed={750}
      autoHeight
      effect="coverflow"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide
          key={slide.id}
          className="flex flex-col items-center w-full h-full border border-gray-600"
        >
          <div className="bg-prime-jet flex flex-col justify-center text-white">
            <Image
              src={slide.image}
              alt={slide.title}
              width={1920}
              height={1080}
              priority
              className="object-cover w-full h-full md:max-h-[500px]"
            />
            <div className="p-8 w-full h-full">
              <h2 className="uppercase font-bold tracking-widest pb-6 text-[1.2em] md:text-[3em] text-prime-saffron">
                {slide.title}
              </h2>
              <p className="md:text-[1.4em] text-[1em]">{slide.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Carousel;
