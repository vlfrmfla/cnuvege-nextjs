import { BlogPosts } from "app/components/posts";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      {/* Hero Section - Full Width */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 h-[250px] md:h-[300px] overflow-hidden mb-12">
        <Image
          src="/images/greenhouse.jpeg"
          alt="Greenhouse"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4">
        {/* Lab Title */}
        <div className="border-l-4 border-green-800 pl-4 py-2 mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-1 leading-tight">
            충남대학교 채소원예학 실험실
          </h1>
          <p className="text-sm md:text-base text-green-700">
            Vegetable Horticulture Lab, Chungnam National University
          </p>
        </div>

        {/* Recruitment Notice */}
        <div className="flex items-start gap-4 mb-12">
          <div className="w-1 bg-green-800 rounded-full self-stretch" />
          <div>
            <p className="text-green-800 font-bold text-xl tracking-wide mb-2">NOTICE</p>
            <p className="text-gray-800 font-semibold text-lg mb-1">2026년도 신규 연구원 모집</p>
            <p className="text-gray-600 text-base leading-relaxed">
              채소원예학 실험실과 함께할 대학원생 및 학부 인턴 연구원을 모집 중입니다.
              <br className="hidden md:block" />
              We are looking for graduate and undergraduate intern researchers for 2025.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <QuickLinkCard href="/pi" title="PI" description="지도교수 소개" />
          <QuickLinkCard href="/team" title="Team" description="연구실 구성원" />
          <QuickLinkCard href="/classes" title="Classes" description="강의 목록" />
          <QuickLinkCard href="/research" title="Research" description="연구 내용" />
        </div>

        {/* News Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 border-l-4 border-green-800 pl-3">
            News
          </h2>
          <BlogPosts />
        </div>
      </div>
    </section>
  );
}

function QuickLinkCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <a
      href={href}
      className="block p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-green-300 transition-all group"
    >
      <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </a>
  );
}
