'use client';

import { HamburgerX, LogoSVG, NavLinks, ThemeSwitcher } from '@/components';
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
    <header className="w-full bg-bright-gray z-[100] transition-colors ease-in-out duration-300 bg-transparent absolute top-0">
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
            className="text-white cursor-pointer"
            onClick={() => handleClick()}
          >
            <HamburgerX open={open} />
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
      <div className="md:max-w-6xl mx-auto w-full p-4 flex justify-between">
        <div
          className="md:hidden absolute top-0 bottom-0 flex items-center cursor-pointer"
          onClick={() => handleClick()}
        >
          <HamburgerX open={open} />
        </div>
        <div className="flex items-center gap-4 mx-auto md:mx-0">
          <LogoSVG className="text-prime-eerie-black" />
        </div>

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
        <div className="absolute md:static right-6 self-center z-50">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
export default Header;
