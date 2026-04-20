export const metadata = {
  title: "Research",
  description: "Research fields, grants, and classes",
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
    title: "원예작물 토경 및 수경재배환경의 양수분 관리 기술 개발",
    titleEn: "Water and nutrient management technologies for soil-based and hydroponic horticultural systems",
    description: "토경 및 수경재배 환경에서 원예작물의 양·수분 공급을 최적화하여 생산성과 품질을 향상시킵니다.",
  },
  {
    title: "LED 활용 식물 광 생리 반응 연구",
    titleEn: "Plant photophysiological responses using LED lighting",
    description: "다양한 LED 광원이 식물의 생장과 품질에 미치는 영향을 연구합니다.",
  },
];

type ClassInfo = {
  name: string;
  description: string;
  credit: string;
};

const undergraduateClasses: ClassInfo[] = [
  {
    name: "채소원예학 및 실습",
    description: "원예작물 중 채소의 중요성 및 전반적 내용에 대해 이해하고, 재배 실습을 수행",
    credit: "전공필수(3-3-0)",
  },
  {
    name: "토양과 비료의 이해",
    description: "토양학 기초 및 시설재배 및 노지재배지의 관비 관리 방법",
    credit: "전공필수(3-3-0)",
  },
  {
    name: "원예작물영양학",
    description: "식물 영양학 지식의 형성과 영양생리학에 대한 강의",
    credit: "전공심화(3-3-0)",
  },
  {
    name: "스마트온실모델링이론과개발실습",
    description:
      "스마트온실 에너지 밸런스 균형 이론과 실제 개발 실습을 통한 온실 시스템 이해를 수행함. 바이브코딩을 통해서 최종적으로 조별과제를 통해 특정 서비스 구현을 목표로 함",
    credit: "전공심화(4-3-0)",
  },
];

const graduateClasses: ClassInfo[] = [
  {
    name: "채소학 최신과제",
    description: "최근 5년간의 채소재배생리학 연구 동향과 과제",
    credit: "대학원 수업(3-3-0)",
  },
  {
    name: "채소원예학 특론",
    description: "채소 재배 방법과 동향에 대한 이론적, 실용적 특론 강의",
    credit: "대학원 수업(3-3-0)",
  },
  {
    name: "원예작물영양학 특론",
    description: "원예작물의 영양에 관한 심화 이론",
    credit: "대학원 수업(3-3-0)",
  },
  {
    name: "양액재배학 특론",
    description:
      "수경재배 시스템 적용과 지하부 양수분 관리, 미생물 등 최신 연구 동향 분석",
    credit: "대학원 수업(3-3-0)",
  },
];

const grants = [
  {
    title:
      "고랭지 여름배추 생산성 향상을 위한 인공지능기술 기반 스마트 최적시비관리 시스템 개발 및 현장 적용",
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

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="section-heading text-lg md:text-xl">{children}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-olive-300/60 via-olive-300/20 to-transparent dark:from-olive-400/40" />
    </div>
  );
}

function creditTone(credit: string) {
  if (credit.startsWith("전공필수")) {
    return "bg-olive-500/10 text-olive-700 dark:text-olive-300 border-olive-500/30";
  }
  if (credit.startsWith("전공심화")) {
    return "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/30";
  }
  return "bg-neutral-500/10 text-neutral-700 dark:text-neutral-300 border-neutral-500/30";
}

function ClassGrid({ items }: { items: ClassInfo[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {items.map((cls) => (
        <div
          key={cls.name}
          className="p-4 bg-white dark:bg-neutral-800/60 border border-gray-200 dark:border-neutral-700 rounded-lg hover:border-olive-300 dark:hover:border-olive-400 transition-colors"
        >
          <div className="flex items-start justify-between gap-3 mb-1.5">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 leading-snug">
              {cls.name}
            </h4>
            <span
              className={`shrink-0 text-[11px] font-medium px-1.5 py-0.5 rounded border whitespace-nowrap ${creditTone(cls.credit)}`}
            >
              {cls.credit}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {cls.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <section className="max-w-5xl mx-auto pt-6 pb-16">
      {/* Page header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Research
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          연구 분야 · 수행 과제 · 강의
        </p>
      </div>

      {/* Sub-nav */}
      <nav className="flex flex-wrap gap-2 mb-14 text-sm">
        {[
          { href: "#fields", label: "Research Fields" },
          { href: "#grants", label: "Grants" },
          { href: "#classes", label: "Classes" },
        ].map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-olive-400 hover:text-olive-600 dark:hover:text-olive-300 transition-colors"
          >
            {l.label}
          </a>
        ))}
      </nav>

      {/* Research Fields */}
      <section id="fields" className="mb-16 scroll-mt-24">
        <SectionHeading>Research Fields</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {researchFields.map((field, index) => (
            <div
              key={index}
              className="relative pt-6 p-5 bg-white dark:bg-neutral-800/60 border border-gray-200 dark:border-neutral-700 rounded-xl hover:shadow-sm hover:border-olive-300 dark:hover:border-olive-400 transition-all"
            >
              <span className="absolute -top-3 left-5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-olive-500 text-white text-xs font-bold tabular-nums shadow-sm">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 leading-snug mb-1">
                {field.title}
              </h3>
              <p className="text-xs italic text-olive-600 dark:text-olive-300 mb-3 leading-relaxed">
                {field.titleEn}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {field.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Grants — table-like compact list */}
      <section id="grants" className="mb-16 scroll-mt-24">
        <SectionHeading>Grants</SectionHeading>
        <div className="border border-gray-200 dark:border-neutral-700 rounded-xl overflow-hidden divide-y divide-gray-200 dark:divide-neutral-700 bg-white dark:bg-neutral-800/60">
          {/* Header row (desktop) */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800">
            <div className="col-span-7">Project</div>
            <div className="col-span-2">Agency</div>
            <div className="col-span-2">Role</div>
            <div className="col-span-1 text-right">Period</div>
          </div>
          {grants.map((grant, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-5 py-4 hover:bg-olive-50/50 dark:hover:bg-olive-900/10 transition-colors"
            >
              <div className="md:col-span-7 font-medium text-gray-900 dark:text-gray-100 leading-snug">
                {grant.title}
              </div>
              <div className="md:col-span-2 text-sm text-olive-600 dark:text-olive-300 font-medium">
                {grant.agency}
              </div>
              <div className="md:col-span-2 text-sm text-gray-600 dark:text-gray-300">
                {grant.role}
              </div>
              <div className="md:col-span-1 md:text-right text-sm tabular-nums text-gray-500 dark:text-gray-400 whitespace-nowrap">
                {grant.period}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Classes */}
      <section id="classes" className="scroll-mt-24">
        <SectionHeading>Classes</SectionHeading>

        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-3">
          Undergraduate <span className="text-neutral-400 dark:text-neutral-500 normal-case tracking-normal">· 학부</span>
        </h3>
        <div className="mb-8">
          <ClassGrid items={undergraduateClasses} />
        </div>

        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-3">
          Graduate <span className="text-neutral-400 dark:text-neutral-500 normal-case tracking-normal">· 대학원</span>
        </h3>
        <ClassGrid items={graduateClasses} />
      </section>
    </section>
  );
}
