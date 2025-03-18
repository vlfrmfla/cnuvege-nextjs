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
      <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-6">학부 수업</h2>
      <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
        <li>채소원예학 및 실습</li>
      </ul>

      {/* ✅ 대학원 수업 */}
      <h2 className="not-prose text-2xl font-semibold text-gray-800 border-b pb-2">대학원 수업</h2>
      <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
        <li>채소학 최신과제</li>
        <li>채소원예학 특론</li>
        <li>원예작물영양학 특론</li>
        <li>양액재배학 특론</li>
      </ul>
    </section>
  );
}
