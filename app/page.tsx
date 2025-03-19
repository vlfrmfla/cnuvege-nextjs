import { BlogPosts } from "app/components/posts";
import Image from "next/image";
import { Noto_Sans_KR } from "next/font/google"; 


// ✅ Noto Sans KR 폰트 설정
const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-kr",
});



export default function Page() {
  return (
    <section className={`prose ${notoSansKR.className}`}>
      {/* main title*/}
      <h1>
        충남대학교 채소원예학 실험실에 오신 것을 환영합니다.
      </h1>

      {/* ✅ 서브 텍스트 (안내문구) */}
      <h3 className="text-lg leading-snug text-gray-700">
        채소원예학 실험실과 함께할 2025년도 대학원생 및 학부 인턴 연구원을 모집 중입니다.
        <br />
        We are looking for graduate and undergraduate intern researchers for 2025 to join our Lab.
      </h3>

      {/* ✅ 이미지 섹션 */}
      <figure className="relative w-full h-[350px] overflow-hidden rounded-lg shadow-md mt-6 mb-8">
        <Image 
          src="/images/greenhouse.jpeg"
          alt="Greenhouse"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-lg"
        />
      </figure>

      {/* ✅ 블로그 섹션 */}
      <section className="mt-8">
        <h1 className="text-3xl font-bold border-b pb-2">
          News
        </h1>
        <BlogPosts />
      </section>
    </section>
  );
}
