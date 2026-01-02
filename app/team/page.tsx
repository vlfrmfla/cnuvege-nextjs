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
      <div className={`size-40 md:size-44 rounded-full overflow-hidden relative bg-white ${border ? "border border-gray-300" : ""}`}>
        <img
          src={src}
          alt={alt}
          className={`w-full h-full transition-transform ${contain ? "object-contain" : "object-cover"}`}
          style={{ transform: `scale(${scale})`, objectPosition: `50% ${oy}` }}
        />
      </div>
      <figcaption className="text-base font-medium text-gray-800 tracking-tight text-center">
        {name}
      </figcaption>
    </div>
  );
}

export default function Page() {
  return (
    <section className="prose mx-auto bg-white py-8">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Team members</h1>

      {/* Full time researcher */}
      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Full time researcher</h2>
      <div className="flex flex-wrap gap-10">
        <MemberCard
          name="배성한 (Sunghan Bae)"
          src="/images/alumni1_baesunghan.jpeg"
          alt="Full time researcher"
          scale={1.2}    // 증명사진은 살짝만 축소
          oy="50%"
          border
          contain
        />
      </div>

      {/* Ph.D Course 섹션 */}
      <h2 className="text-xl font-semibold text-gray-800 mt-20 mb-4">Ph.D Course</h2>
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
      <h2 className="text-xl font-semibold text-gray-800 mt-12 mb-4">Master's Course</h2>
      <div className="flex flex-wrap gap-12">
        {/* 필요 시 추가 */}
      </div>
      {/* Alumni */}
      <h2 className="text-xl font-semibold text-gray-800 mt-12 mb-4">Alumni</h2>
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
          scale={1}
          oy="50%"
          border
          contain
        />

        <MemberCard
          name="심재민 (Jaemin Sim)"
          src="/images/alnumi_Simjaemin.jpeg"
          alt="Alumni member"
          scale={1}
          oy="50%"
          border
          contain
        />
      </div>
    </section>
  );
}
