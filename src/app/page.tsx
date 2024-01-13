'use client';

import 'swiper/css';
import {
  Hero,
  AboutSection,
  ContactSection,
  ServicesSection,
} from '@/components';
import { Section } from '@/types/sections';
import { useState, useEffect } from 'react';

export default function Home() {
  const sections: Section[] = [
    { id: 0, name: 'home', component: <Hero /> },
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
    <div className="w-full h-full">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`w-full h-screen ${
            section.id === sections.length - 1
              ? ''
              : 'border-b border-gray-300 dark:border-gray-600'
          }`}
          id={section.name}
        >
          {section.component}
        </div>
      ))}

      <button
        className={`${
          isVisible ? 'opacity-100' : 'opacity-0'
        } transition ease-in-out duration-300 fixed bottom-4 right-4 z-[100] text-white font-bold text-[1.2em] bg-dark-charcoal hover:brightness-95 hover:scale-105 px-4 py-2 border border-gray-500 rounded-full dark:bg-off-white dark:text-black dark:border-gray-400`}
        onClick={() => scrollToTop()}
      >
        &#8593;
      </button>
    </div>
  );
}
