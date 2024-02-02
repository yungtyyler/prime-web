'use client';

import 'swiper/css';
import {
  HomeSection,
  AboutSection,
  ContactSection,
  ServicesSection,
} from '@/components';
import { Section } from '@/types/sections';
import { useState, useEffect } from 'react';

export default function Home() {
  const sections: Section[] = [
    { id: 0, name: 'home', component: <HomeSection /> },
    { id: 1, name: 'about', component: <AboutSection /> },
    { id: 2, name: 'services', component: <ServicesSection /> },
    { id: 3, name: 'contact', component: <ContactSection /> },
  ];

  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="w-full h-full overflow-x-hidden">
      {sections.map((section) => (
        <div key={section.id} className="section__component" id={section.name}>
          {section.component}
        </div>
      ))}

      <button
        className={`${
          isVisible ? 'opacity-100' : 'opacity-0'
        } transition ease-in-out duration-300 fixed bottom-4 right-4 z-[100] text-white font-bold text-[1.2em] bg-prime-jet hover:bg-prime-eerie-black hover:scale-105 px-4 py-2 border border-gray-500 rounded-full`}
        onClick={() => scrollToTop()}
      >
        &#8593;
      </button>
    </div>
  );
}
