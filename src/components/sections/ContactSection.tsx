'use client';

import { ContactForm } from '@/components';
import { useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full h-full overflow-hidden bg-gradient-to-b from-white via-prime-alabaster to-platinum">
      <div className="section__container relative z-20 w-full">
        <div className="flex md:flex-row flex-col gap-6 items-center justify-center w-full h-full">
          <div
            ref={ref}
            className={`${
              isInView ? 'opacity-100' : 'opacity-0 translate-y-24'
            } transition-all ease-linear duration-500 delay-1000 bg-gradient-to-br from-white via-prime-saffron to-prime-saffron-700 md:w-[1000px] w-[400px] aspect-square rounded-full absolute -z-0 left-[40%] md:top-0 bottom-10`}
          />
          <div
            ref={ref}
            className={`${
              isInView ? 'opacity-60' : 'opacity-0 -translate-y-24'
            } transition-all ease-linear duration-500 delay-1000 bg-gradient-to-tl from-prime-eerie-black to-prime-jet md:w-[1000px] w-[400px] aspect-square rounded-full absolute -z-10 right-[40%] md:top-10`}
          />
          <div className="w-full z-20 flex flex-col justify-center p-4 bg-white bg-opacity-75 h-fit mx-4 rounded-lg drop-shadow-2xl md:max-w-[50%]">
            <h3 className="md:text-[2em] text-[1.4em] font-bold my-4">
              Get In Touch Today!
            </h3>
            <p className="tracking-wider md:text-[1.1em]">
              Fill out the form in this section to start the conversation about
              how we can help you with your website and application needs. Or,
              give us a call at{' '}
              <Link
                href="tel:+19166229065"
                className="font-bold hover:text-prime-saffron-700 cursor-pointer origin-left transition ease-in-out duration-200"
              >
                (916) 622-9065
              </Link>{' '}
              to speak with us.
            </p>
          </div>
          <div className="flex items-center justify-center z-30 max-h-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
