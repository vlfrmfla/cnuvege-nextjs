import Image from "next/image";

export const metadata = {
  title: "Gallery",
  description: "Gallery",
};

type Photo = {
  src: string;
  title: string;
  caption: string;
  date: string;
};

const photos: Photo[] = [
  {
    src: "/gallery/2026 춘계원예_260521.jpeg",
    title: "2026 한국원예학회 춘계학술발표회",
    caption: "연구실 단체 사진",
    date: "2026.05.21",
  },
  {
    src: "/gallery/황준우 구두_260521.jpeg",
    title: "황준우 구두 발표",
    caption: "2026 한국원예학회 춘계학술발표회",
    date: "2026.05.21",
  },
];

export default function Page() {
  return (
    <section className="max-w-5xl mx-auto pt-6 pb-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10">
        Gallery
      </h1>

      <div className="flex items-center gap-3 mb-8">
        <h2 className="section-heading text-lg md:text-xl">Photos</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-olive-300/60 via-olive-300/20 to-transparent dark:from-olive-400/40" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {photos.map((photo) => (
          <figure
            key={photo.src}
            className="group relative overflow-hidden rounded-xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 shadow-sm hover:shadow-lg hover:border-olive-300 dark:hover:border-olive-400 transition-all duration-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={encodeURI(photo.src)}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <figcaption className="p-4 md:p-5">
              <div className="flex items-baseline justify-between gap-3 mb-1">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-olive-600 dark:group-hover:text-olive-300 transition-colors">
                  {photo.title}
                </h3>
                <time className="shrink-0 text-xs font-medium text-olive-600 dark:text-olive-300 tabular-nums">
                  {photo.date}
                </time>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {photo.caption}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
