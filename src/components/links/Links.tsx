import Links from '@/types/links';
import Slide from '@/types/slide';

export const NavLinks: Links[] = [
  { href: '/', title: 'Home' },
  { href: '/about', title: 'About' },
  { href: '/services', title: 'Services' },
  { href: '/contact', title: 'Contact' },
];

export const FooterLinks: Links[] = [
  { href: '/', title: 'Privacy Policy' },
  { href: '/', title: 'Terms of Service' },
];

export const CarouselSlides: Slide[] = [
  {
    id: 1,
    title: 'Custom Website',
    description: 'Websites built to your specifications',
    image: '/carousel/custom-website.jpg',
  },
  {
    id: 2,
    title: 'Internal Apps',
    description: 'Apps built to your specifications',
    image: '/carousel/internal-apps.jpg',
  },
  {
    id: 3,
    title: 'SEO',
    description: 'Search Engine Optimization',
    image: '/carousel/seo.jpg',
  },
  {
    id: 4,
    title: 'Consulting',
    description: 'Consulting for your business',
    image: '/carousel/consulting.jpg',
  },
];
