export const metadata = {
  title: 'Gallery',
  description: 'Gallery',
}

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto pt-6 pb-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10">
        Gallery
      </h1>
      <div className="flex items-center gap-3 mb-6">
        <h2 className="section-heading text-lg md:text-xl">Photos</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-olive-300/60 via-olive-300/20 to-transparent dark:from-olive-400/40" />
      </div>
    </section>
  )
}
