import Link from "next/link";
import { formatDate, getBlogPosts } from "app/news/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/news/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row md:items-center space-x-0 md:space-x-4">
              {/* ✅ 날짜 줄바꿈 방지 및 크기 조정 */}
              <p className="text-neutral-600 dark:text-neutral-400 min-w-[120px] tabular-nums whitespace-nowrap">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              {/* ✅ 제목을 flex-grow로 조정하여 레이아웃 유지 */}
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight flex-grow group-hover:underline">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
