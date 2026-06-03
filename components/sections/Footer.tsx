export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-bg">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">
            <span className="text-xs font-bold">JT</span>
          </div>
          <span className="text-sm text-white/30">Jonathan Tubac</span>
        </div>

        <p className="text-xs text-white/20 font-mono">
          © {year} · Built with Next.js 15 · Designed for impact
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/JonathanTubac"
            className="text-xs text-white/30 hover:text-white/70 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="mailto:javiertubac1290.e@gmail.com"
            className="text-xs text-white/30 hover:text-white/70 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
