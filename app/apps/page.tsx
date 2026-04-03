

export const metadata = {
  title: "Apps Portal",
  description: "Applications developed by Vegetable Horticulture Lab",
};

const apps = [
  {
    title: "수경재배 지하부 관리 애플리케이션",
    titleEn: "Hydroponic Rhizosphere Management App",
    description:
      "온실 섹터별 양액 조성을 분석하고, 급·배액 분석 데이터를 업로드하여 작물의 지하부(근권부) 환경을 지속적으로 모니터링 및 관리할 수 있는 웹 애플리케이션입니다.",
    features: [
      "양액 조성 분석 및 시각화",
      "급·배액 분석 데이터 업로드 및 이력 관리",
      "급배액 분석 기반 순환식 수경재배 관리",
      "온실 섹터별 근권부 모니터링",
    ],
    url: "https://nut-calc-app.vercel.app/",
    tags: ["수경재배", "양액관리", "근권부 모니터링"],
  },
];

export default function Page() {
  return (
    <section className="pt-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
        Apps Portal
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
        충남대학교 채소원예학 연구실에서 개발한 애플리케이션 모음
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {apps.map((app, index) => (
          <a
            key={index}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 overflow-hidden hover:shadow-xl hover:border-olive-300 dark:hover:border-olive-400 transition-all duration-300"
          >
            <div className="bg-olive-600 dark:bg-olive-700 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-bold text-white text-lg">{app.title}</h2>
                  <p className="text-olive-200 text-xs">{app.titleEn}</p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/50 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </div>

            <div className="px-6 py-5">
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {app.description}
              </p>

              <ul className="space-y-1.5 mb-4">
                {app.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-olive-500 dark:text-olive-300 shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {app.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs bg-olive-50 dark:bg-olive-800/40 text-olive-500 dark:text-olive-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 p-5 bg-gray-50 dark:bg-neutral-800/50 border border-gray-200 dark:border-neutral-700 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          이용 안내
        </h3>
        <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
          <p>
            본 애플리케이션은 카카오(Kakao) 또는 구글(Google) 계정을 통한 OAuth
            인증 방식으로 로그인됩니다. 별도의 회원가입 절차 없이 기존 소셜
            계정을 이용하여 서비스에 접근하실 수 있습니다.
          </p>
          <p>
            로그인 시 제공되는 개인정보(이름, 이메일 등)는 사용자 식별 및 서비스
            제공 목적으로만 활용되며, 제3자에게 제공되지 않습니다.
          </p>
          <p>
            서비스 이용 과정에서 발생하는 접속 기록, 데이터 입력 및 조회 이력
            등의 활동 로그는 서비스 안정성 확보 및 연구 목적의 통계 분석을 위해
            기록 및 보관됩니다.
          </p>
          <p className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
            본 애플리케이션은 교육 및 연구 목적으로만 제공되며, 상업적 용도로
            사용할 수 없습니다. 서비스 이용으로 인해 발생하는 어떠한 상업적·법적
            책임도 개발자 및 연구실에서 부담하지 않습니다. 현재 지속적으로
            업데이트 및 개발이 진행 중인 단계이므로, 일부 기능이 변경되거나
            서비스가 일시적으로 중단될 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
