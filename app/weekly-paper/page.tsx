export const metadata = {
  title: "Weekly Paper",
  description: "VEGE Journal Club weekly papers",
};

type Paper = {
  id: string;
  title: string;
  url: string;
  date: string;
  authors: string;
  journal: string;
  year: number;
  created_at: string;
};

type WeeklyPaperResponse = {
  week_start: string;
  week_end: string;
  count: number;
  papers: Paper[];
};

const WEEKLY_PAPER_API_URL = "https://labmanager-nu.vercel.app/api/weekly-paper";
const LOOKBACK_WEEKS = 52;

function shiftDate(isoDate: string, days: number): string {
  const d = new Date(`${isoDate}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

function formatRange(start: string, end: string): string {
  const fmt = (iso: string) => {
    const d = new Date(`${iso}T00:00:00Z`);
    return `${d.getUTCFullYear()}.${String(d.getUTCMonth() + 1).padStart(2, "0")}.${String(d.getUTCDate()).padStart(2, "0")}`;
  };
  return `${fmt(start)} – ${fmt(end)}`;
}

async function fetchWeek(
  apiKey: string,
  weekParam?: string,
): Promise<WeeklyPaperResponse | null> {
  try {
    const url = weekParam
      ? `${WEEKLY_PAPER_API_URL}?week=${weekParam}`
      : WEEKLY_PAPER_API_URL;
    const res = await fetch(url, {
      headers: { "x-api-key": apiKey },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return (await res.json()) as WeeklyPaperResponse;
  } catch {
    return null;
  }
}

async function getAllWeeks(): Promise<WeeklyPaperResponse[]> {
  const apiKey = process.env.WEEKLY_PAPER_API_KEY;
  if (!apiKey) return [];

  const today = new Date().toISOString().slice(0, 10);
  const weekParams: (string | undefined)[] = [
    undefined,
    ...Array.from({ length: LOOKBACK_WEEKS }, (_, i) =>
      shiftDate(today, -7 * (i + 1)),
    ),
  ];

  const results = await Promise.all(
    weekParams.map((w) => fetchWeek(apiKey, w)),
  );

  const seen = new Set<string>();
  const weeks: WeeklyPaperResponse[] = [];
  for (const r of results) {
    if (!r || r.count === 0 || seen.has(r.week_start)) continue;
    seen.add(r.week_start);
    weeks.push(r);
  }
  weeks.sort((a, b) =>
    a.week_start < b.week_start ? 1 : a.week_start > b.week_start ? -1 : 0,
  );
  return weeks;
}

export default async function Page() {
  const weeks = await getAllWeeks();

  return (
    <section className="max-w-4xl mx-auto pt-6 pb-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        Weekly Paper
      </h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-10">
        VEGE Journal Club 주차별 논문 리스트
      </p>

      {weeks.length === 0 ? (
        <p className="text-neutral-600 dark:text-neutral-400">
          등록된 논문이 없습니다.
        </p>
      ) : (
        <div className="space-y-10">
          {weeks.map((w) => (
            <div key={w.week_start}>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="section-heading text-sm md:text-base">
                  {formatRange(w.week_start, w.week_end)}
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-olive-300/60 via-olive-300/20 to-transparent dark:from-olive-400/40" />
              </div>
              <ul className="space-y-4">
                {w.papers.map((paper) => (
                  <li key={paper.id} className="flex flex-col space-y-1">
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-900 dark:text-neutral-100 font-medium hover:text-olive-500 dark:hover:text-olive-300 hover:underline tracking-tight"
                    >
                      {paper.title}
                    </a>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {paper.authors} ·{" "}
                      <span className="italic">{paper.journal}</span> ({paper.year})
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
