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

export default function Page() {
  return (
    <section className="pt-6">
      {/* News 섹션 */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 ">
          News
        </h1>
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

      {/* Publications 섹션 */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 ">
          Publications (from 2024)
        </h1>
        <BlogPosts />
      </div>
    </section>
  )
}
