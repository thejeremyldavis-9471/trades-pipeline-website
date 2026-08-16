import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0d1115] text-white">
      <div className="section-shell py-14">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="font-display text-2xl font-bold tracking-wider">THE TRADES <span className="text-[#c85a24]">PIPELINE</span></div>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Growth Without Breaking.™</p>
            <p className="mt-6 max-w-md text-sm leading-6 text-slate-400">Executive growth intelligence for trade businesses capable of becoming extraordinary.</p>
          </div>
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Explore</div>
            <div className="grid gap-2 text-sm text-slate-300">
              <Link href="/approach">Our Approach</Link><Link href="/nine-growth-gears">Nine Growth Gears™</Link><Link href="/who-we-work-with">Who We Work With</Link><Link href="/foundation">Foundation</Link>
            </div>
          </div>
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Company</div>
            <div className="grid gap-2 text-sm text-slate-300">
              <Link href="/about">About</Link><Link href="/insights">Insights</Link><Link href="/conversation">Begin an Executive Conversation</Link><Link href="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© 2026 The Trades Pipeline. All rights reserved.</span>
          <span className="font-semibold uppercase tracking-[0.2em] text-slate-300">Building Businesses. Strengthening America.</span>
        </div>
      </div>
    </footer>
  );
}
