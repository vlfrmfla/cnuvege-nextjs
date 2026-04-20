export const metadata = {
  title: "team members",
  description: "Lab members.",
};

// mode: object-cover를 유지하되 scale로 살짝 축소해 잘림 방지
function MemberCard({
  name,
  src,
  alt,
  scale = 0.9,   // 0.9 = 90% 크기. 필요 시 0.85~0.95로 조절
  oy = "50%",    // 세로 기준(객체 위치). "45%"면 약간 위로 올림
  border = false, // 테두리 여부
  contain = false, // true면 object-contain (잘림 없이 전체 표시)
}: {
  name: string;
  src: string;
  alt: string;
  scale?: number;
  oy?: string;
  border?: boolean;
  contain?: boolean;
}) {
  return (
    <div className="not-prose flex flex-col items-center gap-3">
      {/* 원 프레임 */}
      <div className={`size-40 md:size-44 rounded-full overflow-hidden relative bg-white dark:bg-neutral-700 ${border ? "border border-gray-300 dark:border-gray-600" : ""}`}>
        <img
          src={src}
          alt={alt}
          className={`w-full h-full transition-transform ${contain ? "object-contain" : "object-cover"}`}
          style={{ transform: `scale(${scale})`, objectPosition: `50% ${oy}` }}
        />
      </div>
      <figcaption className="text-base font-medium text-gray-800 dark:text-gray-100 tracking-tight text-center">
        {name}
      </figcaption>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <h2 className="section-heading text-lg md:text-xl">{children}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-olive-300/60 via-olive-300/20 to-transparent dark:from-olive-400/40" />
    </div>
  );
}

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto pt-6 pb-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10">
        Team Members
      </h1>

      {/* Ph.D Course 섹션 */}
      <SectionHeading>Ph.D Course</SectionHeading>
      <div className="flex flex-wrap items-start gap-12">
        <MemberCard
          name="다디 (Dadi)"
          src="/images/phd1_dadi.jpeg"
          alt="Ph.D member"
          scale={1}    // 야외/상반신 사진은 조금 더 축소
          oy="48%"        // 얼굴이 위로 치우치면 48~52%로 미세조정
          border
        />
        <MemberCard
          name="신동욱 (Dongwook Shin)"
          src="/images/phd2_shindongwook.jpeg"
          alt="Ph.D member"
          scale={1}
          oy="45%"
          border
        />
      </div>

      {/* Master's Course */}
      <div className="mt-12">
        <SectionHeading>Master&apos;s Course</SectionHeading>
      </div>
      <div className="flex flex-wrap gap-12">
        <MemberCard
          name="배성한 (Sunghan Bae)"
          src="/images/alumni1_baesunghan.jpeg"
          alt="Master's Course member"
          scale={1.3}
          oy="50%"
          border
          contain
        />
      </div>
      {/* Alumni */}
      <div className="mt-12">
        <SectionHeading>Alumni</SectionHeading>
      </div>
      <div className="flex flex-wrap items-start gap-12">
        <MemberCard
          name="백상훈 (Sanghoon Baek)"
          src="/images/alumni_Baeksanghoon.jpeg"
          alt="Alumni member"
          scale={1}
          oy="15%"
          border          
        />
        <MemberCard
          name="김준영 (Junyoung Kim)"
          src="/images/almuni_Kimjunyoung.jpg"
          alt="Alumni member"
          scale={1.1}
          oy="50%"
          border
          
        />
        <MemberCard
          name="황준우 (Junwoo Hwang)"
          src="/images/almuni_Hwangjunwoo.jpeg"
          alt="Alumni member"
          scale={1.27}
          oy="50%"
          border
          contain
        />

        <MemberCard
          name="심재민 (Jaemin Sim)"
          src="/images/alnumi_Simjaemin.jpeg"
          alt="Alumni member"
          scale={1.27}
          oy="50%"
          border
          contain
        />
      </div>
    </section>
  );
}
