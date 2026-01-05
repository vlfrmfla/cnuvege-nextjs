import { BlogPosts } from 'app/components/posts'
import { Noto_Sans_KR } from "next/font/google"; 

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-kr",
});

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
    <section className={`${notoSansKR.className}`}>
      {/* News 섹션 */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 border-l-4 border-green-800 dark:border-green-500 pl-3">
          News
        </h1>
        <div className="space-y-4">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
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
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 border-l-4 border-green-800 dark:border-green-500 pl-3">
          Publications (from 2024)
        </h1>
        <BlogPosts />
      </div>
    </section>
  )
}
