export const metadata = {
  title: "Classes",
  description: "Classes",
};

export default function Page() {
  return (
    <section className="prose mx-auto bg-white ">
      {/* ✅ 페이지 제목 */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Classes</h1>

      {/* ✅ 학부 수업 */}
      <table className="min-w-full table-auto border-collapse table-fixed">
        <thead>
          <tr>
            <th className="border-b px-4 py-2 text-left w-1/4">Category</th>
            <th className="border-b-2 px-4 py-2 text-left w-1/4">Class</th>
            <th className="border-b-2 px-4 py-2 text-left w-1/4">Description</th>
            <th className="border-b-2 px-4 py-2 text-left w-1/4">Credit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* 세로로 3개 셀 병합 */}
            <td className="border-b px-4 py-2 font-semibold text-gray-800" rowSpan={3}>
              Alumni
            </td>
            <td className="border-b px-4 py-2">채소원예학 및 실습</td>
            <td className="border-b px-4 py-2">원예작물 중 채소의 중요성 및 전반적 내용에 대해 이해하고, 재배 실습을 수행</td>
            <td className="border-b px-4 py-2">전공필수(3-3-0)</td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2">토양과 비료의 이해</td>
            <td className="border-b px-4 py-2">토양학 기초 및 시설재배 및 노지재배지의 관비 관리 방법</td>
            <td className="border-b px-4 py-2">전공필수(3-3-0)</td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2">원예작물영양학</td>
            <td className="border-b px-4 py-2">식물 영양학 지식의 형성과 영양생리학에 대한 강의 </td>
            <td className="border-b px-4 py-2">전공심화(3-3-0)</td>
          </tr>

        </tbody>
      </table>

      <table className="min-w-full table-auto border-collapse table-fixed">

        <tbody>
          <tr>
            {/* 세로로 4개 셀 병합 */}
            <td className="border-b px-4 py-2 font-semibold text-gray-800 text-left w-1/4" rowSpan={4}>
              Graduated
            </td>
            <td className="border-b px-4 py-2 w-1/4">채소학 최신과제</td>
            <td className="border-b px-4 py-2 w-1/4">최근 5년간의 채소학 연구 동향과 과제</td>
            <td className="border-b px-4 py-2 w-1/4">대학원 수업(3-3-0)</td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2">채소원예학 특론</td>
            <td className="border-b px-4 py-2">채소 재배 방법과 동향에 대한 이론적, 실용적 특론 강의</td>
            <td className="border-b px-4 py-2">대학원 수업(3-3-0)</td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2">원예작물영양학 특론</td>
            <td className="border-b px-4 py-2">원예작물의 영양에 관한 심화 이론</td>
            <td className="border-b px-4 py-2">대학원 수업(3-3-0)</td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2">양액재배학 특론</td>
            <td className="border-b px-4 py-2">수경재배 시스템 적용과 지하부 양수분 관리, 미생물 등 최신 연구 동향 분석</td>
            <td className="border-b px-4 py-2">대학원 수업(3-3-0)</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
