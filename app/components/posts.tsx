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
            <div className="w-full flex flex-col md:flex-row md:items-baseline space-x-0 md:space-x-4">
              {/* ✅ 날짜 줄바꿈 방지 및 크기 조정 */}
              <p className="text-neutral-600 dark:text-neutral-400 min-w-[120px] tabular-nums whitespace-nowrap">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              {/* ✅ 제목 + 저자·저널 (저널 클럽 양식) */}
              <div className="flex-grow space-y-1">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:underline">
                  {post.metadata.title}
                </p>
                {(post.metadata.authors || post.metadata.journal) && (
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {post.metadata.authors}
                    {post.metadata.authors && post.metadata.journal && " · "}
                    {post.metadata.journal && (
                      <span className="italic">{post.metadata.journal}</span>
                    )}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
