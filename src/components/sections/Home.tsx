'use client';

import { useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="section__container relative bg-bright-gray md:py-[400px] md:justify-center justify-end md:items-start items-center md:px-10">
      <Image
        src="/hero-bg-2.jpg"
        alt="Hero Background"
        width={1920}
        height={1080}
        priority
        quality={100}
        className="object-cover w-full h-full absolute top-0 left-0 z-0"
      />
      <div
        ref={ref}
        className={`${
          isInView ? 'scale-100' : 'opacity-0 scale-50'
        } z-10 bg-opacity-600 rounded-xl shadow-2xl bg-prime-jet px-8 py-12 flex flex-col md:items-start items-center text-white text-center md:text-start gap-4 max-w-2xl w-full transition-all duration-20 ease-linear delay-0`}
      >
        <h1 className="text-[4em] font-extrabold text-prime-saffron">
          Turn your Vision into Reality.
        </h1>
        <p>
          Create stunning websites for your business, and develop apps that
          streamline your workflows.
        </p>
        <Link
          href="#contact"
          className="bg-prime-alabaster w-fit text-prime-eerie-black rounded px-4 py-2 font-bold text-[1.1em] shadow hover:bg-opacity-95 transition-all duration-150 ease-in-out"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Home;
