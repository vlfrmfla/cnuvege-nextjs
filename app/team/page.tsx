export const metadata = {
  title: 'team members',
  description: 'Lab members.',
};

export default function Page() {
  return (
    <section className="prose mx-auto bg-white py-8">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Team members</h1>

      {/* Alumni 섹션 */}
      <h2 className="text-xl font-semibold text-gray-800 mb-8">Alumni</h2>
      <div className="mb-8"></div>
      <div className="flex flex-wrap gap-8">
        <div className="w-32 h-32 bg-gray-100 rounded-full overflow-hidden">
          <img
            src="/images/alumni1_baesunghan.jpeg"
            alt="Alumni member"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* Master Course 섹션 */}
      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Master's Course</h2>
      <div className="mb-20"></div>

      <div className="flex flex-wrap gap-6">

      </div>

      {/* PhD Course 섹션 */}
      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Ph.D Course</h2>
      <div className="mt-20 mb-8"></div>
      <div className="flex flex-wrap gap-6">

      </div>
    </section>
  );
}
