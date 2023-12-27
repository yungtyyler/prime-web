import { Hero, HomeBanner, ServicesCarousel } from '@/components';
import Slide from '@/types/slide';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const slides: Slide[] = [
    {
      id: 0,
      title: 'Internal Apps',
      image: '/carousel/internal-apps.jpg',
      description:
        'Internal apps are apps that are used by your employees to help them do their jobs better and faster. They can be used to automate repetitive tasks, manage data, and more.',
    },
    {
      id: 1,
      title: 'Web Development',
      image: '/carousel/web-development.jpg',
      description:
        'Web development is the process of building websites and applications for the internet. It includes aspects such as web design, web publishing, web programming, and database management.',
    },
    {
      id: 2,
      title: 'Search Engine Optimization',
      image: '/carousel/seo.jpg',
      description:
        'Search engine optimization is the process of improving the visibility of a website or a web page in search engines. It includes aspects such as keyword research, on-page optimization, and link building.',
    },
    {
      id: 3,
      title: 'Consulting',
      image: '/carousel/consulting.jpg',
      description:
        'Consulting is the process of providing expert advice to a client. It includes aspects such as consulting, consulting, and consulting.',
    },
  ];

  return (
    <section>
      <Hero />
      <div className="page__container">
        <div className="my-10 flex flex-col items-center gap-8">
          <h1 className="uppercase text-prime-purple-700 font-extrabold text-4xl">
            What we can do for you
          </h1>
          <div className="max-w-3xl w-full mx-auto h-[450px]">
            <ServicesCarousel slides={slides} />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:items-center justify-between my-10 gap-4">
          <div className="flex flex-col gap-4 md:items-start items-center md:bg-off-white drop-shadow-2xl rounded w-full h-full justify-center px-4">
            <h2 className="text-[1.6em] uppercase font-bold">About Us</h2>
            <p className="tracking-wide">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
              error aut hic, magnam quidem voluptate velit tenetur soluta qui
              adipisci provident sequi dolorum modi, eos nisi, ipsum numquam vel
              earum.
            </p>
            <Link
              href="/about"
              className="bg-prime-green-700 text-white rounded w-fit px-3 py-1 uppercase font-bold hover:drop-shadow-xl transition ease-in-out duration-200 hover:brightness-110"
            >
              Learn More
            </Link>
          </div>
          <Image
            src="/carousel/consulting.jpg"
            alt="About Us"
            width={500}
            height={500}
            priority
            className="max-w-full object-contain mx-auto rounded"
          />
        </div>
      </div>
      <HomeBanner />
      <div className="page__container">
        <div className="grid md:grid-cols-2 grid-cols-1 md:items-center my-10 gap-4 justify-between">
          <Image
            src="/carousel/consulting.jpg"
            alt="About Us"
            width={500}
            height={500}
            priority
            className="max-w-full object-contain mx-auto rounded"
          />
          <div className="flex flex-col gap-4 md:items-end items-center md:bg-off-white drop-shadow-2xl rounded w-full h-full justify-center px-4">
            <h2 className="text-[1.6em] uppercase font-bold">Get In Touch</h2>
            <p className="tracking-wide">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <Link
              href="/contact"
              className="bg-prime-green-700 text-white rounded w-fit px-3 py-1 uppercase font-bold hover:drop-shadow-xl transition ease-in-out duration-200 hover:brightness-110"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
