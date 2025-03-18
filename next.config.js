/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // React의 Strict Mode 활성화
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages에서 이미지 최적화 비활성화 (Vercel이 아니면 필요)
  },
  trailingSlash: true, // GitHub Pages에서 경로 문제 해결
};

module.exports = nextConfig;