import {
  NavLinks,
  FooterLinks,
  InstagramDark,
  LinkedInDark,
} from '@/components';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-prime-purple-700 lg:px-4">
      <div className="md:max-w-6xl mx-auto w-full py-6 px-4 flex flex-col lg:gap-12 lg:flex-row lg:items-center  text-white">
        <div className="flex flex-col gap-4 lg:border-none border-b border-prime-green-700 w-full py-4 lg:py-0">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-png/logo-white.png"
              width={5000}
              height={3000}
              alt="Prime Web Solutions Logo"
              className="w-[80px]"
            />
            <h1 className="uppercase font-bold bp-4 text-xl">
              Prime Web Solutions
            </h1>
          </div>
          <p className="font-bold">
            Phone:{' '}
            <Link
              className="text-gray-300 font-thin hover:text-prime-green-500 w-fit"
              href="tel:+19166229065"
            >
              (916) 622-9065
            </Link>
          </p>
          <p className="font-bold">
            Email:{' '}
            <Link
              className="text-gray-300 font-thin hover:text-prime-green-500 w-fit"
              href="mailto:primewebsolutionsllc@gmail.com"
            >
              primewebsolutionsllc@gmail.com
            </Link>
          </p>
          <div className="flex lg:justify-center gap-6">
            <Link
              href="https://www.instagram.com/primewebsolutionsllc/"
              target="_blank"
              className="hover:scale-[105%] transition ease-in-out duration-200"
            >
              <InstagramDark size={35} color="white" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/prime-web-solutions-llc/"
              target="_blank"
              className="hover:scale-[105%] transition ease-in-out duration-200"
            >
              <LinkedInDark size={35} color="white" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:border-none border-b border-prime-green-700 w-full py-4 lg:py-0">
          <div className="flex">
            <h1 className="w-full uppercase font-bold">Site Map</h1>
          </div>
          <div className="flex flex-col text-sm text-gray-300 gap-2 font-extralight tracking-wdier mt-2">
            {NavLinks.map((link, i) => (
              <Link
                href={link.href}
                key={i}
                className="hover:text-prime-green-500 w-fit"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:border-none border-b border-prime-green-700 w-full py-4 lg:py-0">
          <div className="flex">
            <h1 className="w-full uppercase font-bold">Useful Links</h1>
          </div>
          <div className="flex flex-col text-sm text-gray-300 gap-2 font-extralight tracking-wdier mt-2">
            {FooterLinks.map((link, i) => (
              <Link
                href={link.href}
                key={i}
                className="hover:text-prime-green-500 w-fit"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full px-6 flex justify-between items-center md:flex-row flex-col lg:pt-6 pb-4 lg:border-t-[1px] border-t-gray-500">
        <p className="text-center text-gray-300 font-thin tracking-wider mx-auto">
          © 2023 Prime Web Solutions LLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
