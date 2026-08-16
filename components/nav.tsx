"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  ["Our Approach", "/approach"],
  ["Nine Growth Gears", "/nine-growth-gears"],
  ["Who We Work With", "/who-we-work-with"],
  ["Foundation", "/foundation"],
  ["About", "/about"],
  ["Insights", "/insights"],
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#11161b]/95 text-white backdrop-blur">
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label="The Trades Pipeline home">
          <div className="font-display text-xl font-bold tracking-[0.08em]">THE TRADES <span className="text-[#c85a24]">PIPELINE</span></div>
          <div className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.34em] text-slate-400">Growth Without Breaking.</div>
        </Link>
        <div className="hidden xl:flex items-center gap-5">
          {links.map(([label, href]) => <Link key={href} href={href} className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300 transition hover:text-white">{label}</Link>)}
        </div>
        <Link href="/conversation" className="hidden md:flex items-center gap-2 bg-[#c85a24] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#ad481b]">Begin a Conversation <ArrowRight className="h-4 w-4" /></Link>
        <button className="xl:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="section-shell border-t border-white/10 py-5 xl:hidden">
        <div className="grid gap-1">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-3 text-sm uppercase tracking-wider text-slate-200">{label}</Link>)}
          <Link href="/conversation" onClick={() => setOpen(false)} className="mt-4 bg-[#c85a24] px-5 py-4 text-center text-xs font-bold uppercase tracking-wider">Begin a Conversation</Link>
        </div>
      </div>}
    </nav>
  );
}
