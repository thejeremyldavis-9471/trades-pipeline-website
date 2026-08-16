import Link from "next/link";
import { ArrowRight, Gauge, Network, Search, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const gears = ["People", "Sales", "Operations", "Financial Capacity", "Safety", "Systems", "Inventory", "Facilities", "Equipment"];

export default function Home() {
  return <><Nav />
    <main>
      <section className="industrial-grid relative overflow-hidden bg-[#151b21] text-white">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#c85a24]/10 to-transparent" />
        <div className="section-shell relative grid min-h-[690px] items-center gap-12 py-20 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <div className="eyebrow">Executive Growth Intelligence for the Trades</div>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold uppercase leading-[.95] tracking-tight sm:text-6xl lg:text-7xl">Growth is not the goal.<br/><span className="text-[#c85a24]">Growth without breaking is.</span></h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">The strongest trade businesses are not built one department at a time. They are built by understanding how the entire business performs under pressure.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/conversation" className="flex items-center gap-2 bg-[#c85a24] px-6 py-4 text-xs font-bold uppercase tracking-[0.15em]">Begin an Executive Conversation <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/approach" className="border border-white/30 px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white">Explore Our Approach</Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-full border border-white/10 bg-black/20 p-10 shadow-2xl">
              <div className="aspect-square rounded-full border-[18px] border-[#252e36] bg-[#0c1014] p-8 shadow-inner">
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <Gauge className="h-20 w-20 text-[#c85a24]" />
                  <div className="mt-5 font-display text-3xl font-bold uppercase tracking-wider">Pressure Reveals<br/>the System</div>
                  <div className="mt-4 h-1 w-24 bg-[#c85a24]" />
                  <p className="mt-5 text-sm uppercase tracking-[0.18em] text-slate-400">Observe. Understand. Build Accordingly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2efe8] py-24">
        <div className="section-shell grid gap-14 lg:grid-cols-2">
          <div><div className="eyebrow">The Premise</div><h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">Every new opportunity asks more of the system supporting it.</h2></div>
          <div className="space-y-5 text-lg leading-8 text-[#414950]"><p>More customers. More people. More equipment. More decisions. More complexity.</p><p>A business can be growing while the organization beneath that growth is becoming increasingly fragile.</p><p className="font-semibold text-[#151b21]">We help leaders see the connections before pressure turns them into breaking points.</p></div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="section-shell">
          <div className="max-w-3xl"><div className="eyebrow">Growth Synchronization™</div><h2 className="mt-4 font-display text-4xl font-bold uppercase sm:text-5xl">The Nine Growth Gears™</h2><p className="mt-6 text-lg leading-8 text-slate-600">No gear operates alone. Performance is shaped by the way each part of the business influences the others.</p></div>
          <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {gears.map((gear, i) => <div key={gear} className="bg-[#f7f5f0] p-7"><div className="font-display text-xs font-bold tracking-[0.25em] text-[#c85a24]">0{i+1}</div><div className="mt-3 font-display text-xl font-bold uppercase">{gear}</div></div>)}
          </div>
          <Link href="/nine-growth-gears" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#c85a24]">Explore the framework <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="bg-[#1b232b] py-24 text-white">
        <div className="section-shell">
          <div className="eyebrow">Truth Before Assumption</div><h2 className="mt-4 max-w-4xl font-display text-4xl font-bold uppercase sm:text-5xl">We do not diagnose businesses from the outside.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[ [Search,"Observe without speculation","Public signals can tell us where a conversation should begin—not what the answer is."], [Network,"Understand the connections","Internal understanding reveals how leadership, people, capacity and systems actually work together."], [ShieldCheck,"Build accordingly","Action should follow truth, not templates, assumptions or predetermined answers."] ].map(([Icon,title,body]: any) => <div key={title} className="border border-white/10 bg-white/[.03] p-8"><Icon className="h-8 w-8 text-[#c85a24]"/><h3 className="mt-6 font-display text-2xl font-bold uppercase">{title}</h3><p className="mt-4 leading-7 text-slate-400">{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#f2efe8] py-24">
        <div className="section-shell text-center"><div className="eyebrow">Who We Work With</div><h2 className="mx-auto mt-5 max-w-5xl font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">We don't look for companies that need help. We look for companies capable of becoming extraordinary.</h2><p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">Ambitious trade businesses. Leaders willing to look honestly at the organization. Companies determined to build something stronger than growth alone.</p><Link href="/who-we-work-with" className="mt-9 inline-flex items-center gap-2 bg-[#151b21] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white">See what fit looks like <ArrowRight className="h-4 w-4" /></Link></div>
      </section>

      <section className="bg-[#c85a24] py-20 text-white"><div className="section-shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><div><div className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">No presentation. No predetermined answers.</div><h2 className="mt-3 font-display text-4xl font-bold uppercase">Begin an Executive Conversation.</h2></div><Link href="/conversation" className="inline-flex items-center justify-center gap-2 bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#151b21]">Start the conversation <ArrowRight className="h-4 w-4" /></Link></div></section>
    </main>
    <Footer />
  </>;
}
