import { Noto_Sans_KR } from "next/font/google";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-kr",
});

export const metadata = {
  title: "Research",
  description: "Research fields and projects",
};

const researchFields = [
  {
    title: "원예작물 안정생산을 위한 식물 생리 반응 최적화 연구",
    titleEn: "Optimization of plant physiological responses for stable horticultural crop production",
    description: "환경 스트레스 조건에서 원예작물의 생리적 반응을 분석하고 최적의 재배 조건을 도출합니다.",
  },
  {
    title: "수경재배 지상부 및 지하부 관리 최적화 기술",
    titleEn: "Optimization of shoot and root management in hydroponic systems",
    description: "수경재배 시스템에서 식물의 지상부와 근권부 환경을 최적화하여 생산성을 향상시킵니다.",
  },
  {
    title: "시설원예 채소 생산 전과정평가 방법론 적용",
    titleEn: "Life cycle assessment methodology for greenhouse vegetable production",
    description: "시설원예 채소 생산의 환경 영향을 전과정평가(LCA) 방법론을 통해 분석합니다.",
  },
  {
    title: "LED 활용 식물 광 생리 반응 연구",
    titleEn: "Plant photophysiological responses using LED lighting",
    description: "다양한 LED 광원이 식물의 생장과 품질에 미치는 영향을 연구합니다.",
  },
];

export default function Page() {
  return (
    <section className={`${notoSansKR.className}`}>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 pl-3 border-l-4 border-green-800 dark:border-green-500">
        Research Fields
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {researchFields.map((field, index) => (
          <div
            key={index}
            className="p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md hover:border-green-300 dark:hover:border-green-500 transition-all"
          >
            <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{field.title}</h2>
            <p className="text-sm text-green-700 dark:text-green-400 mb-2">{field.titleEn}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{field.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
