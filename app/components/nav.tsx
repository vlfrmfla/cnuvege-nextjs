"use client"; // ✅ 클라이언트 컴포넌트 선언

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation'; // ✅ 현재 경로 감지

const navItems = {
  '/pi': { name: 'Principle Investigator' },
  '/research': { name: 'Research' },
  '/news': { name: 'News' },
  '/classes': { name: 'Classes' },
  '/team': { name: 'Team' },
  '/gallery': { name: 'Gallery' },
};

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // ✅ 현재 페이지 경로 감지

  return (
    <nav className="fixed top-0 left-0 w-full px-6 md:px-36 py-4 bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-300">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">


        {/* ✅ 왼쪽: 로고 & 홈 버튼 */}
        <Link href="/" className="flex items-center space-x-3 ">
          <Image
            src="/images/logo.png"
            alt="Lab Logo"
            width={50}
            height={50}
            className="w-12 h-12"
          />
          <span className="text-xl font-bold whitespace-nowrap dark:text-white">Vegetable Horticulture Lab.</span>
        </Link>

        {/* ✅ 네비게이션 메뉴 (데스크탑) */}
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
        </div>

        {/* ✅ 햄버거 메뉴 버튼 (모바일) */}
        <div className="lg:hidden">
          <button
            className="text-2xl focus:outline-none dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* ✅ 모바일 메뉴 (햄버거 메뉴) */}
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
