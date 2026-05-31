import { BlogPosts } from 'app/components/posts'


export const metadata = {
  title: 'news',
  description: 'Read Lab news.',
}

type NewsCategory = "Award" | "Proceeding";

type NewsItem = {
  date: string;
  category: NewsCategory;
  title: string;
  description: string;
};

const newsItems: NewsItem[] = [
  {
    date: "2026.05",
    category: "Award",
    title: "한국원예학회 최다피인용우수논문상 수상",
    description:
      "Supplemental inter-lighting with additional far-red to red and blue light increases the growth and yield of greenhouse sweet peppers (Capsicum annuum L.) in winter",
  },
  {
    date: "2026.05",
    category: "Proceeding",
    title: "2026 한국원예학회 춘계학술발표회 구두 발표",
    description: "황준우 — 밀폐형 챔버를 이용한 캐노피 광합성속도 측정 시스템 개발",
  },
  {
    date: "2026.05",
    category: "Proceeding",
    title: "2026 한국원예학회 춘계학술발표회 포스터 발표",
    description:
      "신동욱 — 고처리량 작물 환경반응 연구를 위한 실험설계-실행 통합 플랫폼의 설계",
  },
  {
    date: "2026.05",
    category: "Proceeding",
    title: "2026 한국원예학회 춘계학술발표회 포스터 발표",
    description:
      "김세진 외 — Effect of Photoperiod on Growth, Fruit Set, and PSII Function of Cucumber under Constant DLI",
  },
  {
    date: "2026.02",
    category: "Award",
    title: "2026 스마트농업 AI 경진대회 우수상",
    description: "연구원 배성한",
  },
];

const categoryStyles: Record<NewsCategory, string> = {
  Award:
    "bg-olive-100 text-olive-700 dark:bg-olive-900/40 dark:text-olive-200",
  Proceeding:
    "bg-slate-100 text-slate-700 dark:bg-slate-800/60 dark:text-slate-200",
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="section-heading text-lg md:text-xl">{children}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-olive-300/60 via-olive-300/20 to-transparent dark:from-olive-400/40" />
    </div>
  );
}

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto pt-6 pb-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10">
        News
      </h1>

      <div className="mb-14">
        <SectionHeading>Updates</SectionHeading>
        <div className="space-y-4">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg"
            >
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap pt-0.5">
                {item.date}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold tracking-wide uppercase ${categoryStyles[item.category]}`}
                  >
                    {item.category}
                  </span>
                  <p className="text-gray-800 dark:text-gray-100 font-semibold">
                    {item.title}
                  </p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionHeading>Publications (from 2024)</SectionHeading>
        <BlogPosts />
      </div>
    </section>
  )
}
