import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <div className="relative">
        <h1 className="text-[8rem] font-bold leading-none tracking-tighter text-zinc-800 sm:text-[12rem]">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-lg font-medium text-zinc-400 sm:text-xl">
            Page not found
          </p>
        </div>
      </div>
      <p className="mt-6 max-w-md text-sm text-zinc-500">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-gradient-to-r from-accent-1 to-accent-3 px-8 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(var(--accent-1-rgb),0.3)]"
        data-accent
      >
        Back to portfolio
      </Link>
    </div>
  );
}
