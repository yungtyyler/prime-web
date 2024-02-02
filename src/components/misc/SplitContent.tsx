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
            } md:max-w-[75%] w-full h-fit bg-gradient-to-r from-prime-saffron to-prime-saffron-700 shadow-lg md:rounded-xl rounded-r-xl transition-all ease-out duration-[1250ms] flex flex-col md:items-start items-center justify-center p-8 md:text-start text-center lg:gap-12 gap-2 text-prime-eerie-black splitContent__div__left py-12`}
          >
            <h3 className="sm:text-[2m] text-[1.4em] font-bold">
              How We Began
            </h3>
            <p className="md:max-w-[90%] sm:text-[1.2em] text-[1em] w-full">
              Prime Web Solutions was founded in June of 2023 by our{' '}
              <strong>CEO Tyler Varzeas</strong>.{' '}
              <span className="sm:hidden inline">
                He has combined his passion for helping others and application
                development to bring you Prime Web Solutions.
              </span>
              <span className="sm:inline hidden">
                Tyler has been working in the web development industry since
                2022, and has years of extensive problem-solving and research
                skills to supplement his passion for creating beautiful
                websites. He has a passion for technology and helping others,
                and he has combined those two passions to create Prime Web
                Solutions.
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div
          ref={ref}
          className="flex items-center gap-12 relative w-full h-full justify-end"
        >
          <div
            className={`${
              isInView
                ? 'translate-x-0 opacity-100'
                : 'translate-x-[100%] opacity-0'
            } md:max-w-[75%] w-full bg-gradient-to-r to-prime-jet from-prime-eerie-black shadow-lg md:rounded-xl rounded-l-xl transition-all ease-out duration-[1250ms] flex flex-col md:items-end items-center justify-center p-8 md:text-end text-center lg:gap-12 gap-2 text-white dark:text-prime-eerie-black dark:from-prime-alabaster dark:to-prime-platinum splitContent__div h-fit py-12`}
          >
            <h3 className="sm:text-[2em] text-[1.4em] font-bold">
              Our Mission Is To Help You
            </h3>
            <p className="md:max-w-[90%] sm:text-[1.2em] text-[1em] w-full">
              We have a deep passion for web development and a love for helping
              others.{' '}
              <span className="sm:hidden inline">
                We are here to help you with your website and application needs,
                so don't hesitate to reach out to us!
              </span>
              <span className="sm:inline hidden">
                We strive to provide the best possible service to our clients,
                and we are always looking for new ways to improve our services.
                We are here to help you with your website and application needs,
                so don't hesitate to reach out to us!
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SplitContent;
