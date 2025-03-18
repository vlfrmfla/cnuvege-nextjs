import Image from "next/image";

export default function PiPage() {
  return (
    <section className="w-full max-w-none p-6 text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 items-center">

        {/* ✅ 왼쪽: 프로필 이미지 */}
        <div className="w-full flex justify-center">
          <Image 
            src="/images/pi2.jpeg" 
            alt="Profile Image" 
            width={400} 
            height={400} 
            className="w-full max-w-[400px] h-[260px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* ✅ 오른쪽: 프로필 정보 */}
        <div className="w-full bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mt-1">Kim Dongpil, <span className="text-black-500">김동필</span></h1>
          <hr className="my-4 border-gray-300" />

          <ul className="space-y-2 text-gray-700">
            <li><span className="font-semibold">📚 Major :</span> 원예학</li>
            <li><span className="font-semibold">🍓 Lab :</span> 채소재배학</li>
            <li><span className="font-semibold">📞 Office phone : 042-821-5736 </span></li>
            <li><span className="font-semibold">📧 E-mail :</span> 
              <a href="mailto:kimdongpil@cnu.ac.kr" className="text-blue-500 hover:underline"> kimdongpil@cnu.ac.kr</a>
            </li>
            <li><span className="font-semibold">👤 Google scholar :</span>

              <a href="https://scholar.google.com/citations?user=2BFSceEAAAAJ&hl=en" className="text-blue-500 hover:underline"> Link</a>
            </li>

          </ul>
        </div>
      </div>

      {/* 학력 섹션 */}
      <div className="w-full mb-8">
        <h2 className="text-xl font-semibold border-b pb-2">학력</h2>
        <ul className="mt-4 space-y-2">
          <li className="grid grid-cols-[25%_75%]">
            <span className="font-semibold">2019.03 - 2022.08</span>
            <span>Ph.D. in Horticultural Science and Biotechnology, Seoul National University</span>
          </li>
          <li className="grid grid-cols-[25%_75%]">
            <span className="font-semibold">2017.03 - 2019.02</span>
            <span>M.S. in Horticultural Science and Biotechnology, Seoul National University</span>
          </li>
          <li className="grid grid-cols-[25%_75%]">
            <span className="font-semibold">2011.03 - 2017.02</span>
            <span>B.S. in Biology Technology, Yonsei University</span>
          </li>
        </ul>
      </div>

      {/* 경력 섹션 */}
      <div className="w-full">
        <h2 className="text-xl font-semibold border-b pb-2">경력</h2>
        <ul className="mt-4 space-y-2">
          <li className="grid grid-cols-[25%_75%]">
            <span className="font-semibold">2025.03 - present</span>
            <span>Assistant Professor, Horticulture, Chungnam National University</span>
          </li>
          <li className="grid grid-cols-[25%_75%]">
            <span className="font-semibold">2023.01 - 2025.02</span>
            <span>Agricultural Researcher, Protected Horticulture Research Institute, RDA</span>
          </li>
          <li className="grid grid-cols-[25%_75%]">
            <span className="font-semibold">2022.09 - 2022.12</span>
            <span>Postdoctoral Researcher, Protected Horticulture Research Institute, RDA</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
