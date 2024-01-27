import Slide from '@/types/slide';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';
import { Carousel } from '@/components';

const ServicesSection = () => {
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
        'We can help you with your business needs. We offer consulting services for anything you may need regarding websites, internal apps, and more. We are here to help you succeed.',
    },
  ];

  return (
    <section className="w-full h-full bg-gradient-to-b from-prime-platinum via-prime-alabaster to-white">
      <div className="section__container">
        <h2 className="heading-text">Services We Provide</h2>
        <div className="w-full h-full flex items-center justify-center">
          <Carousel slides={slides} />
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
