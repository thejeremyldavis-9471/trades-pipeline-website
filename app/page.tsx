import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Users, Wrench, BarChart3, Search, MessageCircle, Activity, Target, TrendingUp, Handshake, Settings2, DollarSign, Boxes, Building2, HardHat, Network } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const gears = [
  [Users, "People"], [Handshake, "Sales"], [Settings2, "Operations"], [DollarSign, "Financial Capacity"], [ShieldCheck, "Safety"], [Network, "Systems"], [Boxes, "Inventory"], [Building2, "Facilities"], [HardHat, "Equipment"],
] as const;

const approach = [
  ["01", Search, "Understand", "Independent Executive Assessment", "We begin outside the business—studying what can be responsibly observed without assuming what cannot."],
  ["02", MessageCircle, "Discover", "Executive Growth Discovery", "Leadership gives us what public information cannot: context."],
  ["03", Activity, "Diagnose", "Internal Growth Intelligence", "The Nine Growth Gears are examined from inside the organization to identify pressure, capacity and interconnected constraints."],
  ["04", Target, "Prioritize", "Growth Synchronization™", "We determine what deserves attention first, what follows next, and what should deliberately wait."],
  ["05", TrendingUp, "Build", "Growth Partnership", "We work alongside leadership to strengthen the systems necessary to support sustainable growth."],
] as const;

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-[#0d0f12]">
        <section className="relative overflow-hidden border-b border-white/10 bg-[#101214] text-white">
          <div className="absolute inset-0 opacity-25" style={{backgroundImage:"radial-gradient(circle at 20% 10%, rgba(255,106,0,.18), transparent 26%), linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px)",backgroundSize:"auto,38px 38px,38px 38px"}} />
          <div className="relative mx-auto grid max-w-[1500px] lg:grid-cols-[.88fr_1.12fr]">
            <div className="flex min-h-[620px] flex-col justify-center px-6 py-16 sm:px-10 lg:px-12 xl:px-16">
              <h1 className="font-display text-[clamp(4rem,7vw,7.6rem)] font-bold uppercase leading-[.82] tracking-[-.03em] text-[#f2f2ef]">
                Growth<br/><span className="text-[#ff6a00]">Without Breaking.</span>
              </h1>
              <div className="mt-6 h-1 w-28 bg-[#ff6a00]" />
              <p className="mt-7 font-display text-2xl uppercase leading-tight tracking-wide text-white sm:text-3xl">Growth creates opportunity.<br/>It also creates pressure.</p>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">The Trades Pipeline works with a small number of ambitious trade businesses to identify where growth is creating pressure—and help leadership build the capacity to support what comes next.</p>
              <Link href="/approach" className="mt-9 inline-flex w-fit items-center gap-3 border border-[#ff6a00] px-6 py-4 font-display text-base font-bold uppercase tracking-[.08em] text-white transition hover:bg-[#ff6a00]">Explore Our Approach <ArrowRight className="h-5 w-5"/></Link>
              <div className="mt-8 flex items-start gap-3 text-sm font-semibold uppercase tracking-[.08em] text-slate-200"><ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-[#ff6a00]"/><span>One partnership per trade within<br className="hidden sm:block"/> overlapping service territories.</span></div>
            </div>
            <div className="relative min-h-[520px] lg:min-h-[620px]">
              <Image src="/hero-growth-system.jpg" alt="Growth Synchronization pressure system illustrating The Nine Growth Gears" fill priority className="object-cover object-center" sizes="(min-width:1024px) 58vw, 100vw" />
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#101214] to-transparent" />
            </div>
          </div>
        </section>

        <section className="bg-[#f3efe7] text-[#121417]">
          <div className="mx-auto max-w-[1500px] px-6 py-10 sm:px-10 lg:px-12 xl:px-16">
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">Growth Is a System.</h2>
            <div className="mt-3 h-1 w-16 bg-[#ff6a00]" />
            <div className="mt-8 grid gap-8 lg:grid-cols-[repeat(4,1fr)_1.35fr]">
              {[
                ["More Leads", "don't fix an operational bottleneck.", Wrench],
                ["More People", "don't fix weak leadership systems.", Users],
                ["More Equipment", "doesn't fix poor financial capacity.", Wrench],
                ["More Revenue", "doesn't automatically create a stronger business.", BarChart3],
              ].map(([title, body, Icon]: any) => <div key={title} className="text-center lg:border-r lg:border-black/15 lg:pr-6"><Icon className="mx-auto h-10 w-10 text-[#ff6a00]"/><h3 className="mt-3 font-display text-xl font-bold uppercase">{title}</h3><p className="mx-auto mt-2 max-w-[180px] text-sm leading-6">{body}</p></div>)}
              <div className="flex items-center border-t border-black/15 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"><p className="text-xl leading-8">Sustainable growth happens when the business supporting the opportunity grows <span className="font-semibold underline decoration-[#ff6a00] decoration-2 underline-offset-4">with</span> it.</p></div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#111416] py-16 text-white">
          <div className="absolute inset-0 opacity-20" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",backgroundSize:"32px 32px"}} />
          <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-12 xl:px-16">
            <div className="text-center"><h2 className="font-display text-4xl font-bold uppercase sm:text-5xl">The Nine Growth Gears™</h2><div className="mx-auto mt-3 h-1 w-16 bg-[#ff6a00]"/></div>
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-9">
              {gears.map(([Icon,label]) => <div key={label} className="text-center"><div className="mx-auto grid h-20 w-20 place-items-center rounded-full border-2 border-[#777067] bg-[#171a1d] shadow-[inset_0_0_0_5px_#26292b]"><Icon className="h-9 w-9 text-[#ff6a00]"/></div><div className="mt-3 font-display text-sm font-bold uppercase leading-tight">{label}</div></div>)}
            </div>
            <div className="mx-auto mt-8 max-w-4xl text-center"><p className="font-display text-xl font-bold text-[#ff6a00]">Every Gear influences another.</p><p className="mt-1 text-base text-slate-200">Growth in one area can create pressure somewhere else.</p><p className="mt-1 text-base text-slate-200">We help leadership understand those connections <span className="font-semibold text-[#ff6a00]">before</span> pressure becomes a breaking point.</p></div>
          </div>
        </section>

        <section className="bg-[#f3efe7] py-14 text-[#111416]">
          <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-12 xl:px-16">
            <h2 className="font-display text-4xl font-bold uppercase">Our Approach</h2><div className="mt-3 h-1 w-16 bg-[#ff6a00]"/>
            <div className="mt-9 grid gap-8 md:grid-cols-5">
              {approach.map(([n,Icon,title,sub,body]) => <div key={n} className="relative"><div className="flex items-center gap-3"><span className="font-display text-3xl font-bold text-[#ff6a00]">{n}</span><Icon className="h-8 w-8"/></div><h3 className="mt-4 font-display text-2xl font-bold uppercase">{title}</h3><p className="mt-1 font-display text-sm font-semibold leading-tight">{sub}</p><p className="mt-4 text-sm leading-6 text-[#33383d]">{body}</p></div>)}
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-[1fr_1fr_1fr]">
          <div className="bg-[#111416] p-8 text-white lg:p-12"><h2 className="font-display text-3xl font-bold uppercase">Who We Work With</h2><div className="mt-3 h-1 w-16 bg-[#ff6a00]"/><p className="mt-6 leading-7 text-slate-300">We partner with established, ambitious trade businesses past survival mode—leaders who are willing to examine their business honestly and build for what's next.</p><ul className="mt-6 space-y-3 text-sm text-slate-200">{["Enough opportunity to make improvement meaningful","Enough complexity that growth has consequences","Leadership committed to long-term success","A desire to build a business worth leaving behind"].map(x=><li key={x} className="flex gap-2"><span className="text-[#ff6a00]">✓</span>{x}</li>)}</ul><p className="mt-7 text-sm">The Trades Pipeline isn't designed for every trade business.<br/><span className="font-semibold text-[#ff6a00]">Neither should it be.</span></p></div>
          <div className="bg-[#181b1e] p-8 text-white lg:p-12"><h2 className="font-display text-3xl font-bold uppercase">What We Believe</h2><div className="mt-3 h-1 w-16 bg-[#ff6a00]"/><div className="mt-6 space-y-5">{[["Truth Before Assumption.","We don't prescribe before we understand."],["People Before Process.","Strong systems start with strong leadership."],["Growth With Responsibility.","Growth should strengthen the business and the people in it."],["Family Before Business.","Success is measured by what matters most."],["Legacy Beyond Revenue.","Build something you'll be proud to leave behind."]].map(([a,b])=><div key={a}><h3 className="font-display text-lg font-bold uppercase text-[#ff6a00]">{a}</h3><p className="mt-1 text-sm text-slate-300">{b}</p></div>)}</div></div>
          <div className="bg-[#f3efe7] p-8 text-[#111416] lg:p-12"><h2 className="font-display text-3xl font-bold uppercase">Protected Partnerships</h2><div className="mt-3 h-1 w-16 bg-[#ff6a00]"/><ShieldCheck className="mt-7 h-20 w-20 text-[#ff6a00]"/><p className="mt-5 text-xl font-semibold leading-8">We don't help you grow while helping your direct competitor do the same.</p><p className="mt-5 leading-7">The Trades Pipeline maintains only one active partnership per trade within overlapping service territories.</p></div>
        </section>

        <section className="border-t border-white/10 bg-[#0d0f12] text-white"><div className="mx-auto flex max-w-[1500px] flex-col gap-6 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12 xl:px-16"><div><div className="font-display text-xl font-bold uppercase">No presentation. No predetermined answers.</div><p className="mt-1 text-sm text-slate-400">A first conversation is exactly that—a conversation.</p></div><Link href="/conversation" className="inline-flex items-center justify-center gap-3 border border-[#ff6a00] px-7 py-4 font-display text-lg font-bold uppercase text-[#ff6a00] transition hover:bg-[#ff6a00] hover:text-white">Executive Conversation <ArrowRight className="h-5 w-5"/></Link></div></section>
      </main>
      <Footer />
    </>
  );
}
