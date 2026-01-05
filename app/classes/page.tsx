export const metadata = {
  title: "Classes",
  description: "Classes",
};

type ClassInfo = {
  name: string;
  description: string;
  credit: string;
};

function ClassCard({ name, description, credit }: ClassInfo) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-4 hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg mb-2">{name}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{description}</p>
      <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">
        {credit}
      </span>
    </div>
  );
}

function ClassSection({ title, classes }: { title: string; classes: ClassInfo[] }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 border-l-4 border-green-800 dark:border-green-500 pl-3">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {classes.map((cls) => (
          <ClassCard key={cls.name} {...cls} />
        ))}
      </div>
    </div>
  );
}

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
    description: "스마트온실 에너지 밸런스 균형 이론과 실제 개발 실습을 통한 온실 시스템 이해를 수행함. 바이브코딩을 통해서 최종적으로 조별과제를 통해 특정 서비스 구현을 목표로 함",
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
    description: "수경재배 시스템 적용과 지하부 양수분 관리, 미생물 등 최신 연구 동향 분석",
    credit: "대학원 수업(3-3-0)",
  },
];

export default function Page() {
  return (
    <section className="prose prose-lg max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Classes</h1>

      <ClassSection title="Undergraduate (학부)" classes={undergraduateClasses} />
      <ClassSection title="Graduate (대학원)" classes={graduateClasses} />
    </section>
  );
}
