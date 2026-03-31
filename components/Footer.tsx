export default function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-zinc-800/50 bg-[#0a0a0f]/80 py-12 backdrop-blur-xl">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Christian Hagen Wiker
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/ChristianHWiker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-accent-1"
            >
              GitHub
            </a>
            <a
              href="mailto:chrishawik@gmail.com"
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-accent-1"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
