'use client';

import { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    theme === 'dark' ? setDarkMode(true) : setDarkMode(false);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-16 h-8 flex items-center bg-prime-eerie-black dark:bg-prime-jet cursor-pointer rounded-full p-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className="text-white" size={17} />
      <div
        className={`absolute bg-prime-saffron-700 dark:bg-prime-alabaster w-6 h-6 rounded-full shadow-md transform transition-all ease-in-out duration-300 ${
          darkMode ? 'translate-x-8' : 'translate-x-0'
        }`}
      />
      <BsSunFill className="ml-auto text-yellow-400" size={17} />
    </div>
  );
};

export default ThemeSwitcher;
