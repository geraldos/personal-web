const skeletonClass = "animate-pulse rounded bg-paper/15";

function SkeletonBlock({ className }: { className: string }) {
  return <div data-testid="loading-skeleton" className={`${skeletonClass} ${className}`} />;
}

export default function Loading() {
  return (
    <main
      role="status"
      aria-label="Loading page content"
      aria-live="polite"
      className="grid-lines min-h-screen overflow-hidden bg-ink px-5 py-8 text-paper md:px-10"
    >
      <span className="sr-only">Loading page content</span>
      <div className="noise" />

      <div className="mx-auto flex max-w-[1500px] items-center justify-between">
        <SkeletonBlock className="h-10 w-28 rounded-full" />
        <SkeletonBlock className="hidden h-3 w-56 md:block" />
        <SkeletonBlock className="h-10 w-10 rounded-full" />
      </div>

      <section className="mx-auto max-w-[1500px] pb-16 pt-24 md:pt-32">
        <div className="mb-8 flex items-center justify-between">
          <SkeletonBlock className="h-3 w-28" />
          <SkeletonBlock className="h-3 w-36" />
        </div>

        <div className="space-y-4">
          <SkeletonBlock className="h-6 w-56" />
          <SkeletonBlock className="h-20 w-full max-w-5xl md:h-32" />
          <SkeletonBlock className="h-20 w-10/12 max-w-4xl md:h-32" />
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
          <SkeletonBlock className="h-24 md:col-span-5 md:col-start-7" />
          <SkeletonBlock className="h-16 w-16 rounded-full md:col-span-2 md:ml-auto md:h-20 md:w-20" />
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <SkeletonBlock className="h-40 rounded-[2rem]" />
          <SkeletonBlock className="h-40 rounded-[2rem]" />
        </div>
      </section>
    </main>
  );
}
