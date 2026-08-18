"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  ["Our Approach", "/approach"],
  ["The Nine Growth Gears™", "/nine-growth-gears"],
  ["Who We Work With", "/who-we-work-with"],
  ["Foundation", "/foundation"],
  ["About", "/about"],
  ["Insights", "/insights"],
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0c0e]/98 text-white">
      <div className="mx-auto flex h-[74px] max-w-[1500px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-10 xl:px-12">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-3" aria-label="The Trades Pipeline home">
          <div className="font-display text-[34px] font-black leading-none tracking-[-.08em]"><span className="text-[#f1f0eb]">T</span><span className="text-[#ef5b0a]">TP</span></div>
          <div className="hidden sm:block">
            <div className="font-display text-[21px] font-semibold uppercase leading-[.92] tracking-[.16em] text-[#f1f0eb]">The Trades<br/>Pipeline</div>
            <div className="mt-1 font-display text-[11px] font-semibold uppercase tracking-[.08em] text-[#ef5b0a]">Growth Without Breaking.</div>
          </div>
        </Link>
        <div className="hidden xl:flex items-center gap-7">
          {links.map(([label, href]) => <Link key={href} href={href} className="font-display text-[11px] font-semibold uppercase tracking-[.06em] text-[#f1f0eb] transition hover:text-[#ef5b0a]">{label}</Link>)}
        </div>
        <Link href="/conversation" className="hidden md:flex items-center gap-3 bg-[#c94f0a] px-5 py-3.5 font-display text-[11px] font-bold uppercase tracking-[.06em] text-white transition hover:bg-[#ef5b0a]">Begin a Conversation <ArrowRight className="h-4 w-4" /></Link>
        <button className="xl:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="mx-auto max-w-[1500px] border-t border-white/10 px-5 py-5 xl:hidden">
        <div className="grid gap-1">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-3 font-display text-sm uppercase tracking-wider text-slate-200">{label}</Link>)}
          <Link href="/conversation" onClick={() => setOpen(false)} className="mt-4 bg-[#c94f0a] px-5 py-4 text-center font-display text-xs font-bold uppercase tracking-wider">Begin a Conversation</Link>
        </div>
      </div>}
    </nav>
  );
}
