"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from './theme-provider';

const navItems = {
  '/pi': { name: 'Principle Investigator' },
  '/research': { name: 'Research' },
  '/news': { name: 'News' },
  '/classes': { name: 'Classes' },
  '/team': { name: 'Team' },
  '/gallery': { name: 'Gallery' },
  '/apps': { name: 'Apps Portal' },
};

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full px-6 md:px-36 py-4 bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-300">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">

        {/* 왼쪽: 로고 & 홈 버튼 */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo.png"
            alt="Lab Logo"
            width={50}
            height={50}
            className="w-12 h-12"
          />
          <span className="text-xl font-bold whitespace-nowrap dark:text-white">Vegetable Horticulture Lab.</span>
        </Link>

        {/* 네비게이션 메뉴 (데스크탑) */}
        <div className="hidden lg:flex items-center space-x-4">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className={`relative text-base font-medium transition hover:text-gray-700 dark:hover:text-gray-300
                ${pathname === path ? "text-black dark:text-white font-semibold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-black dark:after:bg-white after:content-['']" : "text-gray-500 dark:text-gray-400"}
              `}
            >
              {name}
            </Link>
          ))}
          <ThemeToggleButton />
        </div>

        {/* 오른쪽: 테마 토글 + 햄버거 (모바일) */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggleButton />
          <button
            className="text-2xl focus:outline-none dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 (햄버거 메뉴) */}
      {menuOpen && (
        <div className="lg:hidden mt-4 flex flex-col space-y-2 bg-white dark:bg-gray-800 shadow-md p-4">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className={`block text-lg font-medium transition ${pathname === path ? "text-black dark:text-white font-semibold underline" : "text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-100"}`}
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
