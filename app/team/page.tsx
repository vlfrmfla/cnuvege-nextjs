export const metadata = {
  title: "team members",
  description: "Lab members.",
};

function MemberCard({
  name,
  src,
  alt,
}: {
  name: string;
  src: string;
  alt: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* 원형 배경 + 사진: 사진은 늘리지 않고 배경만 보이게 */}
      <div className="w-32 sm:w-20 lg:w-40 aspect-square rounded-full bg white-100 overflow-hidden grid place-items-center">
        <img
          src={src}
          alt={alt}
          className="max-w-[92%] max-h-[92%] object-contain rounded-full"
        />
      </div>
      {/* 이름 */}
      <figcaption className="text-sm sm:text-base font-medium text-gray-800 tracking-tight">
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
      <div className="mb-6"></div>
      <div className="flex flex-wrap gap-8">
        <MemberCard
          name="배성한 (Sunghan Bae)"
          src="/images/alumni1_baesunghan.jpeg"
          alt="Alumni member"
        />
      </div>


      {/* Ph.D Course 섹션 */}
      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Ph.D Course</h2>
      <div className="mt-4 mb-6"></div>

      {/* 가로 정렬: 화면이 작아지면 자동 줄바꿈 */}
      <div className="flex flex-wrap items-start gap-10">
        <MemberCard
          name="다디 (Dadi)"
          src="/images/phd1_dadi.jpeg"
          alt="Ph.D member"
        />
        <MemberCard
          name="신동욱 (Dongwook shin)"
          src="/images/phd2_shindongwook.jpeg"
          alt="Ph.D member"
        />
      </div>

      {/* Master Course */}
      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Master's Course</h2>
      <div className="mb-8"></div>
      <div className="flex flex-wrap gap-6">
        {/* 필요 시 여기에 추가 */}
      </div>





      {/* Alumni */}
      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Alumni</h2>
      <div className="mb-6"></div>
      <div className="flex flex-wrap gap-8">
      <div className="flex flex-wrap items-start gap-10">
        <MemberCard
          name="백상훈 (Sanghoon Baek)"
          src="/images/alumni_Baeksanghoon.jpeg"
          alt="Almuni member"
        />
        <MemberCard
          name="김준영 (Junyoung Kim)"
          src="/images/almuni_Kimjunyoung.jpg"
          alt="Ph.D member"
        />
      </div>
      </div>

    </section>
  );
}
 