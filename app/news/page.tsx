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

export default function Page() {
  return (
    <section className={`prose ${notoSansKR.className}`}>
      <h1>
      연구분야
      </h1>
      {/* 연구분야 항목들 */}
      <ul className="list-disc pl-6 mb-6 text-gray-800" >
        <li>원예작물 안정생산을 위한 식물 생리 반응 최적화 연구</li>
        <li>수경재배 지상부 및 지하부 관리 최적화 기술</li>
        <li>시설원예 채소 생산 전과정평가 방법론 적용</li>
        <li>LED 활용 식물 광 생리 반응 연구</li>
      </ul>

      <h1 className="">Publications (from 2024)</h1>
      <BlogPosts />
    </section>
  )
}
