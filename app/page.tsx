import Link from "next/link";
import { ArrowRight, ShieldCheck, Users, Wrench, BarChart3, Search, MessageCircle, Activity, Target, TrendingUp, Handshake, Shield, Check, CircleX, UserRound } from "lucide-react";
import { Nav } from "@/components/nav";

const approach = [
  ["01", Search, "Understand", "Independent Executive Assessment", "We begin outside the business—studying what can be responsibly observed without assuming what cannot."],
  ["02", MessageCircle, "Discover", "Executive Growth Discovery", "Leadership gives us what public information cannot: context."],
  ["03", Activity, "Diagnose", "Internal Growth Intelligence", "The Nine Growth Gears are examined from inside the organization to identify pressure, capacity and interconnected constraints."],
  ["04", Target, "Prioritize", "Growth Synchronization™", "We determine what deserves attention first, what follows next, and what should deliberately wait."],
  ["05", Handshake, "Build", "Growth Partnership", "We work alongside leadership to strengthen the systems necessary to support sustainable growth."],
] as const;

const beliefs = [
  [Shield, "Truth Before Assumption.", "We don't prescribe before we understand."],
  [Users, "People Before Process.", "Strong systems start with strong leadership."],
  [TrendingUp, "Growth With Responsibility.", "Growth should strengthen the business and the people in it."],
  [UserRound, "Family Before Business.", "Success is measured by what matters most."],
  [Target, "Legacy Beyond Revenue.", "Build something you'll be proud to leave behind."],
] as const;

const heroImage = "/hero-growth-system.png";

export default function Home() {
  return <><Nav/><main className="bg-[#0b0d0f]">
    <section className="relative overflow-hidden bg-[#0b0d0f] text-white">
      <div className="absolute inset-0 opacity-20" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)",backgroundSize:"34px 34px"}}/>
      <div className="relative mx-auto grid max-w-[1500px] lg:grid-cols-[36%_64%]">
        <div className="z-10 flex min-h-[630px] flex-col justify-center px-6 py-10 sm:px-10 lg:px-12">
          <h1 className="font-display font-bold uppercase tracking-[-.035em]">
            <span className="block text-[clamp(4.5rem,6.1vw,6.2rem)] leading-[.83] text-[#f1f0eb]">Growth</span>
            <span className="mt-3 block whitespace-nowrap text-[clamp(2.8rem,3.95vw,4rem)] leading-[.9] text-[#ef5b0a]">Without Breaking.</span>
          </h1>
          <div className="mt-5 h-[3px] w-20 bg-[#ef5b0a]"/>
          <p className="mt-5 font-display text-[clamp(1.4rem,1.8vw,1.75rem)] uppercase leading-[1.05] tracking-[.02em] text-[#f1f0eb]">Growth creates opportunity.<br/>It also creates pressure.</p>
          <p className="mt-5 max-w-[430px] text-[14px] leading-[1.65] text-[#e6e4de]">The Trades Pipeline works with a small number of ambitious trade businesses to identify where growth is creating pressure—and help leadership build the capacity to support what comes next.</p>
          <Link href="/approach" className="mt-6 inline-flex w-fit items-center gap-5 border border-[#ef5b0a] px-6 py-3.5 font-display text-[15px] font-bold uppercase tracking-[.03em] text-white transition hover:bg-[#ef5b0a]">Explore Our Approach <ArrowRight className="h-5 w-5 text-[#ef5b0a]"/></Link>
          <div className="mt-6 flex items-start gap-3 font-display text-[13px] font-semibold uppercase leading-[1.35] tracking-[.03em] text-[#f1f0eb]"><ShieldCheck className="mt-0.5 h-7 w-7 shrink-0 text-[#ef5b0a]"/><span>One partnership per trade within<br/>overlapping service territories.</span></div>
        </div>
        <div className="relative min-h-[520px] overflow-hidden bg-[#090b0c] lg:min-h-[630px]" style={{backgroundImage:`url(${heroImage})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0b0d0f] to-transparent"/>
        </div>
      </div>
    </section>

    <section className="bg-[#f2eee6] text-[#111416]">
      <div className="mx-auto grid max-w-[1500px] gap-0 px-6 py-7 sm:px-10 lg:grid-cols-[1.35fr_repeat(4,1fr)] lg:px-12">
        <div className="pr-6"><h2 className="font-display text-[31px] font-bold uppercase leading-none">Growth Is a System.</h2><div className="mt-3 h-[3px] w-12 bg-[#ef5b0a]"/><p className="mt-5 max-w-[320px] text-[13px] leading-[1.7]">More of one thing doesn't fix the wrong constraint.<br/>Sustainable growth happens when the business supporting the opportunity grows <span className="font-semibold underline decoration-[#ef5b0a] decoration-2 underline-offset-4">with</span> it.</p></div>
        {[["More Leads","don't fix an operational bottleneck.",CircleX],["More People","don't fix weak systems.",Users],["More Equipment","doesn't fix poor financial capacity.",Wrench],["More Revenue","doesn't automatically create a stronger business.",BarChart3]].map(([t,b,I]:any)=><div key={t} className="border-black/10 px-5 text-center lg:border-l"><I className="mx-auto h-9 w-9 text-[#ef5b0a]"/><h3 className="mt-3 font-display text-[16px] font-bold uppercase">{t}</h3><p className="mx-auto mt-2 max-w-[160px] text-[13px] leading-[1.55]">{b}</p></div>)}
      </div>
    </section>

    <section className="relative overflow-hidden border-y border-white/10 bg-[#111416] text-white">
      <div className="absolute inset-0 opacity-35" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",backgroundSize:"30px 30px"}}/>
      <div className="relative mx-auto grid max-w-[1500px] items-center gap-8 px-6 py-7 sm:px-10 lg:grid-cols-[.8fr_1.7fr_.7fr] lg:px-12"><div className="hidden h-28 opacity-45 lg:block" style={{background:"radial-gradient(circle at 35% 50%, transparent 0 31px,rgba(255,255,255,.20) 32px 33px,transparent 34px 45px,rgba(255,255,255,.10) 46px 47px,transparent 48px)"}}/><div><h2 className="font-display text-[31px] font-bold uppercase leading-none">Growth Synchronization™</h2><p className="mt-3 font-display text-[18px] font-bold leading-[1.2] text-[#ef5b0a]">It's not about making each part better.<br/>It's about making the parts work better together.</p><p className="mt-4 max-w-[620px] text-[13px] leading-[1.6] text-[#e6e4de]">The strongest businesses aren't collections of strong departments. They're connected systems capable of supporting opportunity under pressure.</p></div><div className="font-display text-6xl tracking-[-.22em] text-[#ef5b0a] opacity-85">›››››</div></div>
    </section>

    <section className="bg-[#f2eee6] py-7 text-[#111416]"><div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-12"><h2 className="font-display text-[29px] font-bold uppercase leading-none">Our Approach</h2><div className="mt-3 h-[3px] w-12 bg-[#ef5b0a]"/><div className="mt-7 grid gap-7 md:grid-cols-5">{approach.map(([n,I,t,s,b],idx)=><div key={n} className="relative pr-3"><div className="flex items-center gap-3"><span className="font-display text-[28px] font-bold text-[#ef5b0a]">{n}</span><div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#171a1d] text-white"><I className="h-6 w-6"/></div>{idx<4&&<span className="ml-auto hidden text-3xl font-light text-black/30 md:block">→</span>}</div><h3 className="mt-3 font-display text-[17px] font-bold uppercase">{t}</h3><p className="mt-1 font-display text-[13px] font-semibold leading-[1.2]">{s}</p><p className="mt-3 text-[12px] leading-[1.55] text-[#2f3337]">{b}</p></div>)}</div></div></section>

    <section className="mx-auto grid max-w-[1500px] lg:grid-cols-[1fr_1fr_1.08fr]">
      <div className="bg-[#111416] p-8 text-white lg:p-9"><h2 className="font-display text-[28px] font-bold uppercase leading-none">Who We Work With</h2><div className="mt-3 h-[3px] w-12 bg-[#ef5b0a]"/><p className="mt-5 text-[13px] leading-[1.55]">We don't look for companies that need help.<br/>We look for companies capable of becoming <span className="font-semibold text-[#f1f0eb]">extraordinary.</span></p><ul className="mt-4 space-y-2 text-[12px] text-[#e6e4de]">{["Established and past survival mode","Ambitious leadership with a growth mindset","Enough opportunity to make improvement meaningful","Willing to examine the business honestly","Complex enough that growth has consequences","Committed to building something lasting"].map(x=><li key={x} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ef5b0a]"/>{x}</li>)}</ul></div>
      <div className="bg-[#171a1d] p-8 text-white lg:p-9"><h2 className="font-display text-[28px] font-bold uppercase leading-none">What We Believe</h2><div className="mt-3 h-[3px] w-12 bg-[#ef5b0a]"/><div className="mt-4 space-y-3">{beliefs.map(([I,a,b])=><div key={a} className="flex gap-3"><I className="mt-0.5 h-5 w-5 shrink-0 text-[#ef5b0a]"/><div><h3 className="font-display text-[13px] font-bold uppercase">{a}</h3><p className="text-[11px] text-[#d8d6d1]">{b}</p></div></div>)}</div></div>
      <div className="bg-[#f2eee6] p-8 text-[#111416] lg:p-9"><h2 className="font-display text-[28px] font-bold uppercase leading-none">Protected Partnerships</h2><div className="mt-3 h-[3px] w-12 bg-[#ef5b0a]"/><div className="mt-5 flex gap-5"><div className="flex h-28 w-24 shrink-0 items-center justify-center border-[4px] border-[#c95016] bg-white"><Handshake className="h-12 w-12"/></div><div><p className="text-[15px] font-semibold leading-[1.35]">We don't help you grow while helping your direct competitor do the same.</p><p className="mt-3 text-[13px] leading-[1.5]">The Trades Pipeline maintains only one active partnership per trade within overlapping service territories.</p></div></div><div className="mt-5 flex items-center justify-center gap-3 border border-[#d27a4b] px-4 py-2.5 font-display text-[15px] font-bold uppercase text-[#c94f0a]"><Users className="h-5 w-5 text-[#111416]"/> Maximum Active Partnerships: 25</div></div>
    </section>

    <section className="border-t border-white/10 bg-[#0b0d0f] text-white"><div className="mx-auto grid max-w-[1500px] items-center gap-5 px-6 py-4 sm:px-10 lg:grid-cols-[1.2fr_.9fr_1.25fr] lg:px-12"><div className="flex gap-3"><ShieldCheck className="h-7 w-7 shrink-0 text-[#ef5b0a]"/><div><div className="font-display text-[15px] font-bold uppercase">No presentation. No predetermined answers.</div><p className="mt-1 text-[11px] text-[#d0cec9]">A first conversation is exactly that—a conversation.</p></div></div><Link href="/conversation" className="inline-flex items-center justify-center gap-3 bg-[#c94f0a] px-6 py-3 font-display text-[17px] font-bold uppercase text-white transition hover:bg-[#ef5b0a]">Executive Conversation <ArrowRight className="h-5 w-5"/></Link><div className="font-display text-right text-[20px] font-semibold uppercase tracking-[.03em]">TheTradesPipeline.com<br/><span className="text-[14px] text-[#ef5b0a]">Growth Without Breaking.</span></div></div></section>
  </main></>;
}
