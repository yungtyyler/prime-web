'use client';

import {
  HamburgerX,
  LoginButton,
  LogoSVG,
  NavLinks,
  ThemeSwitcher,
} from '@/components';
import Link from 'next/link';
import { useState, useRef, useEffect, MutableRefObject } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuref = useRef() as MutableRefObject<HTMLDivElement>;
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuref.current && !menuref.current.contains(e.target as Node)) {
        setOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleClick = () => {
    if (open) {
      setOpen(false);
      document.body.style.overflow = 'auto';
    } else {
      setOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <header className="w-full z-[100] transition-colors ease-in-out duration-300 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 firefox:bg-opacity-90 fixed top-0">
      {/* Sidebar Nav Menu */}
      <div
        ref={menuref}
        className={`sidebar ${
          open ? 'lg:hidden flex translate-x-0' : '-translate-x-[100%]'
        }`}
      >
        <div
          className={`flex justify-between items-center p-4 ${
            open ? 'opacity-100 delay-150' : 'opacity-0'
          } transition-opacity ease-in-out duration-150`}
        >
          <h1 className="text-prime-saffron text-3xl uppercase font-bold text-start">
            Prime Web Solutions
          </h1>
          <div
            className="text-white cursor-pointer flex flex-col items-center gap-4"
            onClick={() => handleClick()}
          >
            <HamburgerX open={open} />
            {/* <LoginButton sidebar /> */}
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 py-14 border-b border-gray-600">
          {NavLinks.map((link, i) => (
            <div key={i} className="w-full text-start">
              <Link
                href={`#${link.title.toLowerCase()}`}
                onClick={() => handleClick()}
                className="hover:text-prime-saffron-700 text-xl px-2 transition-colors ease-in-out duration-200"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Nav Menu */}
      <div className="md:max-w-6xl mx-auto w-full p-4 flex justify-between items-center">
        <div
          className="flex md:hidden items-center cursor-pointer"
          onClick={() => handleClick()}
        >
          <HamburgerX open={open} />
        </div>
        <Link href="/" className="flex items-center">
          <LogoSVG className="text-prime-eerie-black" />
        </Link>

        <nav className="md:flex items-center gap-10 hidden text-prime-purple-700">
          {NavLinks.map((link, i) => (
            <div key={i} className="relative">
              <Link
                href={`#${link.title.toLowerCase()}`}
                className="group uppercase hover:text-prime-jet transition ease-in-out duration-200 font-bold"
              >
                {link.title}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-prime-saffron" />
              </Link>
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <ThemeSwitcher />
          {/* <div className="hidden md:block">
            <LoginButton />
          </div> */}
        </div>
      </div>
    </header>
  );
};
export default Header;
