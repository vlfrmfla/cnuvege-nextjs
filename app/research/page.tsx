

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

const grants = [
  {
    title: "고랭지 여름배추 생산성 향상을 위한 인공지능기술 기반 스마트 최적시비관리 시스템 개발 및 현장 적용",
    agency: "농촌진흥청",
    role: "주관책임",
    period: "2026–2030",
  },
  {
    title: "AI 기반 작물 생육지표 계측 및 생체센서 연계 융합데이터 생성 기술 개발",
    agency: "농촌진흥청",
    role: "공동책임",
    period: "2026–2030",
  },
  {
    title: "융합데이터 기반 작물 생장 단계별 진단·처방 자동화 기술 개발",
    agency: "농촌진흥청",
    role: "공동책임",
    period: "2026–2030",
  },
  {
    title: "원적색광과 온도 상호작용 구명을 통한 작물 생장용 LED 조명 파장 최적화",
    agency: "한국연구재단",
    role: "주관책임",
    period: "2025–2026",
  },
];

export default function Page() {
  return (
    <section className="pt-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 ">
        Research Fields
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {researchFields.map((field, index) => (
          <div
            key={index}
            className="p-5 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg hover:shadow-md hover:border-olive-300 dark:hover:border-olive-400 transition-all"
          >
            <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{field.title}</h2>
            <p className="text-sm text-olive-500 dark:text-olive-300 mb-2">{field.titleEn}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{field.description}</p>
          </div>
        ))}
      </div>

      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6  mt-16">
        Grants
      </h1>

      <div className="flex flex-col gap-4">
        {grants.map((grant, index) => (
          <div
            key={index}
            className="p-5 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg hover:shadow-md hover:border-olive-300 dark:hover:border-olive-400 transition-all"
          >
            <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{grant.title}</h2>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-2 py-0.5 bg-olive-100 dark:bg-olive-800 text-olive-600 dark:text-olive-300 rounded">
                {grant.agency}
              </span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 rounded">
                {grant.role}
              </span>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 rounded">
                {grant.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
