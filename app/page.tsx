import { BlogPosts } from "app/components/posts";
import { NoticeBanner } from "app/components/notice-banner";
import { WeeklyPaper } from "app/components/weekly-paper";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      {/* Hero Section - Full Width with text overlay */}
      <div className="relative -mx-4 sm:-mx-6 md:-mx-8 h-[300px] md:h-[380px] overflow-hidden mb-0">
        <Image
          src="/images/greenhouse.jpeg"
          alt="Greenhouse"
          fill
          sizes="100vw"
          quality={90}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end p-8 md:p-14">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-2">
              Welcome to{" "}
              <span className="text-olive-300">
                Vegetable Horticulture Lab
              </span>
            </h1>
            <p className="text-base md:text-lg text-white/80 font-medium">
              Chungnam National University
            </p>
          </div>
        </div>
      </div>

      {/* Notice Banner - Full Width */}
      <div className="-mx-4 sm:-mx-6 md:-mx-8 mb-12">
        <NoticeBanner />
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4">
        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <QuickLinkCard href="/pi" title="PI" description="지도교수 소개" />
          <QuickLinkCard href="/team" title="Team" description="연구실 구성원" />
          <QuickLinkCard href="/weekly-paper" title="Weekly Paper" description="Journal Club" />
          <QuickLinkCard href="/research" title="Research" description="연구 내용" />
        </div>

        {/* News Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="section-heading text-lg md:text-xl">NEWS</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-olive-300/60 via-olive-300/20 to-transparent dark:from-olive-400/40" />
          </div>
          <BlogPosts />
        </div>

        {/* VEGE Journal Club Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="section-heading text-lg md:text-xl">VEGE Journal Club</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-olive-300/60 via-olive-300/20 to-transparent dark:from-olive-400/40" />
          </div>
          <WeeklyPaper />
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
      className="block p-4 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg hover:shadow-md hover:border-olive-300 dark:hover:border-olive-400 transition-all group"
    >
      <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-olive-500 dark:group-hover:text-olive-300 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>
    </a>
  );
}
