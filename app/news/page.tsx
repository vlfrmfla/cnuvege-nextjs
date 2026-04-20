import { BlogPosts } from 'app/components/posts'


export const metadata = {
  title: 'news',
  description: 'Read Lab news.',
}

const newsItems = [
  {
    date: "2025.09",
    title: "2025 스마트농업 AI 경진대회 본선 진출",
    description: "연구원 배성한",
  },
];

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
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">
                {item.date}
              </span>
              <div>
                <p className="text-gray-800 dark:text-gray-100 font-semibold">{item.title}</p>
                <p className="text-gray-800 dark:text-gray-300 text-sm">{item.description}</p>
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
