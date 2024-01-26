'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SplitContent = ({ left }: { left?: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      {left ? (
        <div
          ref={ref}
          className="flex items-center gap-12 relative w-full h-full"
        >
          <div
            className={`${
              isInView
                ? 'translate-x-0 opacity-100'
                : '-translate-x-[100%] opacity-0'
            } md:max-w-[75%] w-full h-full bg-gradient-to-r from-prime-saffron to-prime-saffron-700 shadow-lg md:rounded-xl rounded-r-xl absolute -left-4 top-0 transition-all ease-out duration-[1250ms] flex flex-col md:items-start items-center justify-center p-8 md:text-start text-center md:gap-12 gap-2 text-prime-eerie-black`}
          >
            <h3 className="sm:text-[2em] text-[1.8em] font-bold">
              How We Began
            </h3>
            <p className="md:max-w-[80%] sm:text-[1.4em] text-[0.8em] w-full">
              Prime Web Solutions was founded in June of 2023 by our{' '}
              <strong>CEO Tyler Varzeas</strong>. Tyler has been working in the
              web development industry since 2022, and has years of extensive
              problem-solving and research skills to supplement his passion for
              creating beautiful websites. He has a passion for technology and
              helping others, and he has combined those two passions to create
              Prime Web Solutions.
            </p>
          </div>
        </div>
      ) : (
        <div
          ref={ref}
          className="flex items-center gap-12 relative w-full h-full"
        >
          <div
            className={`${
              isInView
                ? 'translate-x-0 opacity-100'
                : 'translate-x-[100%] opacity-0'
            } md:max-w-[75%] w-full h-full bg-gradient-to-r to-prime-jet from-prime-eerie-black shadow-lg md:rounded-xl rounded-l-xl absolute -right-4 top-0 transition-all ease-out duration-[1250ms] flex flex-col md:items-end items-center justify-center p-8 md:text-end text-center md:gap-12 gap-2 text-white`}
          >
            <h3 className="sm:text-[2em] text-[1.8em] font-bold">
              Our Mission Is To Help You
            </h3>
            <p className="md:max-w-[80%] sm:text-[1.4em] text-[0.8em] w-full">
              We have a deep passion about for welb development and a love for
              helping others. We strive to provide the best possible service to
              our clients, and we are always looking for new ways to improve our
              services. We are here to help you with your website and
              application needs, so don't hesitate to reach out to us!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SplitContent;
