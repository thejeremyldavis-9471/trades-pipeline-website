import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const gears = [
  ["People", "Capability grows when the people carrying the business are developed, retained and prepared for what comes next."],
  ["Sales", "Opportunity should create healthy demand without outrunning the organization built to support it."],
  ["Operations", "Work should move through the business with clarity, consistency and enough capacity to absorb pressure."],
  ["Financial Capacity", "Growth requires resources, resilience and the discipline to support both opportunity and uncertainty."],
  ["Safety", "Strong businesses protect people, reinforce good habits and turn training into field behavior."],
  ["Systems", "Information, decisions and accountability should move through the business without unnecessary friction."],
  ["Inventory", "What's on hand should support what's coming next."],
  ["Facilities", "The physical environment should support the work rather than quietly constrain it."],
  ["Equipment", "The tools and assets carrying today's workload should be capable of supporting tomorrow's demands."],
] as const;

export default function GearsPage() {
  return <><Nav /><main>
    <section className="industrial-grid bg-[#151b21] py-24 text-white"><div className="section-shell max-w-5xl"><div className="eyebrow">Growth Synchronization™</div><h1 className="mt-5 font-display text-5xl font-bold uppercase sm:text-7xl">The Nine Growth Gears™</h1><p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">A business is not a collection of isolated departments. It is a connected system. When one Gear changes, pressure can move throughout the organization.</p></div></section>
    <section className="bg-[#f2efe8] py-24"><div className="section-shell"><div className="grid gap-px overflow-hidden border border-slate-300 bg-slate-300 md:grid-cols-2 lg:grid-cols-3">{gears.map(([name,body],i)=><article key={name} className="bg-white p-8"><div className="text-xs font-bold tracking-[.28em] text-[#c85a24]">0{i+1}</div><h2 className="mt-4 font-display text-3xl font-bold uppercase">{name}</h2><p className="mt-5 leading-7 text-slate-600">{body}</p></article>)}</div></div></section>
    <section className="bg-[#1b232b] py-24 text-white"><div className="section-shell grid gap-10 lg:grid-cols-2"><div><div className="eyebrow">The Relationship Matters</div><h2 className="mt-4 font-display text-4xl font-bold uppercase sm:text-5xl">A proven part can still fail inside a poorly synchronized system.</h2></div><div className="space-y-5 text-lg leading-8 text-slate-400"><p>More sales can expose workforce limits. New equipment can increase financial pressure. Better systems can reveal leadership gaps. Additional capacity can create demand for opportunity that does not yet exist.</p><p className="font-semibold text-white">The question is not whether each Gear works. The question is how the Gears work together.</p></div></div></section>
    <section className="bg-white py-24"><div className="section-shell text-center"><div className="eyebrow">What We Keep Private</div><h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-bold uppercase">The framework is public. The diagnostic machinery is not.</h2><p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">The Trades Pipeline does not publish its scoring mechanics, criteria, weights or internal methodology. Understanding is earned through observation, conversation and context—not a public checklist.</p><Link href="/approach" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c85a24]">See how we approach the work <ArrowRight className="h-4 w-4" /></Link></div></section>
  </main><Footer /></>;
}
