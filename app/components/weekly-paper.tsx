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
const LOOKBACK_WEEKS = 16;
const MAX_DISPLAY = 5;

function shiftDate(isoDate: string, days: number): string {
  const d = new Date(`${isoDate}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
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

async function getRecentPapers(): Promise<Paper[]> {
  const apiKey = process.env.WEEKLY_PAPER_API_KEY;
  if (!apiKey) return [];

  const today = new Date().toISOString().slice(0, 10);
  const weekParams = [
    undefined,
    ...Array.from({ length: LOOKBACK_WEEKS }, (_, i) =>
      shiftDate(today, -7 * (i + 1)),
    ),
  ];

  const results = await Promise.all(
    weekParams.map((w) => fetchWeek(apiKey, w)),
  );

  const seen = new Set<string>();
  const papers: Paper[] = [];
  for (const r of results) {
    if (!r) continue;
    for (const p of r.papers) {
      if (seen.has(p.id)) continue;
      seen.add(p.id);
      papers.push(p);
    }
  }

  papers.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return papers.slice(0, MAX_DISPLAY);
}

export async function WeeklyPaper() {
  const papers = await getRecentPapers();

  if (papers.length === 0) {
    return (
      <p className="text-neutral-600 dark:text-neutral-400">
        등록된 논문이 없습니다.
      </p>
    );
  }

  return (
    <ul className="space-y-4">
      {papers.map((paper) => (
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
            {paper.authors} · <span className="italic">{paper.journal}</span> ({paper.year})
          </p>
        </li>
      ))}
    </ul>
  );
}
