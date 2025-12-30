import Image from "next/image";

export const metadata = {
  title: "Principal Investigator",
  description: "Professor Kim Dongpil",
};

type TimelineItem = {
  period: string;
  title: string;
  organization?: string;
};

function TimelineSection({ title, items }: { title: string; items: TimelineItem[] }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 border-l-4 border-green-500 pl-3">
        {title}
      </h2>
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="w-36 flex-shrink-0 text-sm text-gray-500 font-medium pt-0.5">
              {item.period}
            </div>
            <div className="flex-1 border-l-2 border-gray-200 pl-4 pb-4">
              <p className="text-gray-800 font-medium">{item.title}</p>
              {item.organization && (
                <p className="text-gray-500 text-sm">{item.organization}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const education: TimelineItem[] = [
  {
    period: "2019 - 2022",
    title: "Ph.D. in Horticultural Science and Biotechnology",
    organization: "Seoul National University",
  },
  {
    period: "2017 - 2019",
    title: "M.S. in Horticultural Science and Biotechnology",
    organization: "Seoul National University",
  },
  {
    period: "2011 - 2017",
    title: "B.S. in Biology Technology",
    organization: "Yonsei University",
  },
];

const experience: TimelineItem[] = [
  {
    period: "2025 - Present",
    title: "Assistant Professor, Department of Horticulture",
    organization: "Chungnam National University",
  },
  {
    period: "2023 - 2025",
    title: "Agricultural Researcher, Protected Horticulture Research Institute",
    organization: "Rural Development Administration (RDA)",
  },
  {
    period: "2022",
    title: "Postdoctoral Researcher, Protected Horticulture Research Institute",
    organization: "Rural Development Administration (RDA)",
  },
];

export default function PiPage() {
  return (
    <section className="max-w-4xl mx-auto py-8 px-4">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-12 items-center md:items-start">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/pi2.jpeg"
            alt="Kim Dongpil"
            width={220}
            height={280}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Kim Dongpil</h1>
          <p className="text-xl text-gray-500 mb-4">김동필</p>
          <p className="text-gray-600 mb-6">
            Assistant Professor, Department of Horticulture
            <br />
            <span className="text-green-600 font-medium">Chungnam National University</span>
          </p>

          {/* Contact Info */}
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:kimdongpil@cnu.ac.kr" className="text-blue-600 hover:underline">
                kimdongpil@cnu.ac.kr
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>042-821-5736</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              <a
                href="https://scholar.google.com/citations?user=2BFSceEAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Google Scholar
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Education & Experience */}
      <TimelineSection title="Education" items={education} />
      <TimelineSection title="Experience" items={experience} />
    </section>
  );
}
