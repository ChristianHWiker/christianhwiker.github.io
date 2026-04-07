export default function ProjectLoading() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-24">
      {/* Back link skeleton */}
      <div className="mb-8 h-4 w-32 animate-pulse rounded bg-zinc-800" />

      {/* Title skeleton */}
      <div className="h-12 w-3/4 animate-pulse rounded-lg bg-zinc-800" />
      <div className="mt-4 flex gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-6 w-16 animate-pulse rounded-full bg-zinc-800" />
        ))}
      </div>

      {/* Stats skeleton */}
      <div className="mt-12 grid grid-cols-3 gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="h-9 w-20 animate-pulse rounded bg-zinc-800" />
            <div className="h-4 w-28 animate-pulse rounded bg-zinc-800/60" />
          </div>
        ))}
      </div>

      {/* Carousel skeleton */}
      <div className="mt-12 aspect-video w-full animate-pulse rounded-xl border border-zinc-800 bg-zinc-900/50" />

      {/* Content skeletons */}
      <div className="mt-12 space-y-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-3">
            <div className="h-6 w-40 animate-pulse rounded bg-zinc-800" />
            <div className="h-4 w-full animate-pulse rounded bg-zinc-800/50" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-zinc-800/50" />
            <div className="h-4 w-4/6 animate-pulse rounded bg-zinc-800/50" />
          </div>
        ))}
      </div>
    </div>
  );
}
