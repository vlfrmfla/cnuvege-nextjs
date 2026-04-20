"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from './theme-provider';

const navItems = {
  '/': { name: 'Home' },
  '/pi': { name: 'PI' },
  '/research': { name: 'Research' },
  '/news': { name: 'News' },
  '/weekly-paper': { name: 'Weekly Paper' },
  '/team': { name: 'Team' },
  '/gallery': { name: 'Gallery' },
  '/apps': { name: 'Apps' },
};

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
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
    <nav className="fixed top-0 left-0 w-full px-4 sm:px-6 md:px-8 py-3 bg-black/80 backdrop-blur-sm z-50">
      <div className="flex flex-wrap items-center justify-between">

        {/* Lab name */}
        <Link href="/" className="flex items-center">
          <span className="text-lg md:text-xl font-bold tracking-[0.12em] uppercase text-white">
            Vegetable Horticulture Lab.
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center space-x-7">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className={`text-[15px] font-medium transition-colors
                ${pathname === path
                  ? "text-white"
                  : "text-gray-300 hover:text-white"}
              `}
            >
              {name}
            </Link>
          ))}
          <ThemeToggleButton />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggleButton />
          <button
            className="text-xl text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden mt-3 flex flex-col space-y-2 bg-black/90 backdrop-blur-sm rounded-lg p-4">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className={`block text-base font-medium transition ${pathname === path ? "text-white" : "text-gray-300 hover:text-white"}`}
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
