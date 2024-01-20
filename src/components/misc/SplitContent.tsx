'use client';

import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

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
            <h3 className="text-[2em] font-bold">
              Lorem ipsum dolor sit amet.
            </h3>
            <p className="md:max-w-[80%] md:text-[1.4em] w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              repudiandae expedita, sint atque culpa nisi adipisci facilis
              aspernatur voluptas necessitatibus sunt ipsa esse cum iure?
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
            <h3 className="text-[2em] font-bold">
              Lorem ipsum dolor sit amet.
            </h3>
            <p className="md:max-w-[80%] md:text-[1.4em] w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              repudiandae expedita, sint atque culpa nisi adipisci facilis
              aspernatur voluptas necessitatibus sunt ipsa esse cum iure?
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SplitContent;
