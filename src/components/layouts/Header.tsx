'use client';

import Image from 'next/image';
import { HamburgerX, NavLinks } from '@/components';
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
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <header className="w-full bg-bright-gray z-[100] sticky top-0">
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
          <h1 className="text-prime-green-700 text-3xl uppercase font-bold text-start">
            Prime Web Solutions
          </h1>
          <button className="text-white" onClick={() => handleClick()}>
            <HamburgerX open={open} />
          </button>
        </div>
        <div className="flex flex-col-reverse items-start gap-8 py-14 border-b border-gray-600">
          {NavLinks.map((link, i) => (
            <div key={i} className="w-full text-start">
              <Link
                href={`#${link.title.toLowerCase()}`}
                className="hover:text-prime-green-500 text-xl px-2"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Nav Menu */}
      <div className="md:max-w-6xl mx-auto w-full p-4 flex justify-between">
        <button className="md:hidden" onClick={() => handleClick()}>
          <HamburgerX open={open} />
        </button>
        <div className="flex items-center gap-4 mx-auto md:mx-0 hover:scale-[105%] transition ease-in duration-150">
          <Link href="#home">
            <Image
              src="/logo-png/logo-purple.png"
              width={5000}
              height={3000}
              alt="Prime Web Solutions Logo"
              className="max-w-[80px]"
              priority
            />
          </Link>
        </div>

        <nav className="md:flex items-center gap-10 hidden">
          {NavLinks.map((link, i) => (
            <div key={i} className="relative">
              <Link
                href={`#${link.title.toLowerCase()}`}
                className="uppercase hover:text-prime-purple-500 text-prime-purple-700 transition ease-in-out duration-200 font-bold"
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};
export default Header;
