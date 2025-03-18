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
      <h1 className="">Publications (from 2024)</h1>
      <BlogPosts />
    </section>
  )
}
