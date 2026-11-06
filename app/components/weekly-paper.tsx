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

type LatestPaperResponse = {
  count: number;
  papers: Paper[];
};

const WEEKLY_PAPER_API_URL = "https://labmanager-nu.vercel.app/api/weekly-paper";
const MAX_DISPLAY = 5;

// 기간과 무관하게 최신 MAX_DISPLAY개 (labmanager API의 ?limit 모드)
async function getRecentPapers(): Promise<Paper[]> {
  const apiKey = process.env.WEEKLY_PAPER_API_KEY;
  if (!apiKey) return [];

  try {
    const res = await fetch(`${WEEKLY_PAPER_API_URL}?limit=${MAX_DISPLAY}`, {
      headers: { "x-api-key": apiKey },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as LatestPaperResponse;
    return (data.papers ?? []).slice(0, MAX_DISPLAY);
  } catch {
    return [];
  }
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
