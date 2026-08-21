import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Cog,
  Cross,
  Flag,
  Gauge,
  Handshake,
  Network,
  Shield,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import { Nav } from "@/components/nav";

const orange = "#e65312";

function IconLine({ icon: Icon, children }: { icon: typeof Wrench; children: React.ReactNode }) {
  return <div className="flex gap-4"><Icon className="mt-0.5 h-7 w-7 shrink-0" style={{ color: orange }}/><div className="text-[13px] leading-5 text-white/80">{children}</div></div>;
}

export default function AboutPage() {
  return <><Nav/><main className="overflow-hidden bg-[#071116] text-[#f2eee6]">
    <section className="border-b border-white/15 bg-[#061016]">
      <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[34%_44%_22%]">
        <div className="flex flex-col justify-center px-7 py-10 lg:px-10 lg:py-12">
          <p className="font-display text-lg uppercase tracking-wide" style={{ color: orange }}>About JL Davis</p>
          <h1 className="mt-2 font-display text-[clamp(3.4rem,5.4vw,6rem)] font-semibold uppercase leading-[.94] tracking-[-.02em] text-[#d8d2c7]">Experience.<br/>Perspective.<br/>Purpose.</h1>
          <p className="mt-5 max-w-[330px] text-[17px] leading-6 text-white/90">Why The Trades Pipeline exists—and why we do things differently.</p>
          <div className="mt-6 flex max-w-[360px] items-center gap-5 border px-5 py-4" style={{ borderColor: orange }}>
            <Shield className="h-11 w-11 shrink-0" style={{ color: orange }}/>
            <div><div className="font-display text-lg uppercase">Truth Before Assumption.</div><div className="mt-1 text-[12px] text-white/75">Better decisions rarely begin with pretending we already know.</div></div>
          </div>
        </div>
        <div className="relative min-h-[440px] overflow-hidden lg:min-h-[590px]"><img src="/about-hero.png" alt="JL Davis in a TTP hard hat inside an industrial facility" className="absolute inset-0 h-full w-full object-cover object-center"/></div>
        <div className="flex items-center bg-[radial-gradient(circle_at_20%_40%,rgba(230,83,18,.12),transparent_48%)] px-7 py-10 lg:px-8">
          <blockquote className="relative border-y border-[#8e3818] py-8">
            <div className="absolute -top-7 left-0 font-serif text-7xl leading-none" style={{ color: orange }}>“</div>
            <p className="font-display text-[clamp(1.65rem,2.3vw,2.5rem)] uppercase leading-[1.45] text-[#d8d2c7]">Business problems rarely stay in the department where they first appear.</p>
            <div className="absolute -bottom-11 right-0 font-serif text-7xl leading-none" style={{ color: orange }}>”</div>
          </blockquote>
        </div>
      </div>
    </section>

    <section className="border-b border-white/15">
      <div className="mx-auto grid max-w-[1500px] lg:grid-cols-3">
        <article className="border-white/15 px-7 py-9 lg:border-r lg:px-10">
          <h2 className="font-display text-3xl uppercase leading-tight text-[#d8d2c7]">Experience Changes How<br/>You See a Business.</h2>
          <p className="mt-5 text-[13px] leading-5 text-white/80">I’ve spent more than 30 years in management and leadership roles with some of the Midwest’s most respected companies.</p>
          <p className="mt-4 text-[13px] leading-5 text-white/80">I’ve served as a Plant Manager, Store Manager and Supervisor across manufacturing, warehousing and retail—working behind the scenes where growth has to be supported by people, operations, systems, equipment and financial discipline.</p>
          <div className="mt-6 space-y-5">
            <IconLine icon={TrendingUp}><strong className="font-display uppercase" style={{ color: orange }}>I’ve experienced businesses growing.</strong><br/>Expansion, new opportunities, more demand, bigger teams, greater complexity.</IconLine>
            <IconLine icon={TrendingDown}><strong className="font-display uppercase" style={{ color: orange }}>I’ve experienced what happens when they aren’t.</strong><br/>Downturns, pressure, tough decisions, tight margins, hard lessons.</IconLine>
            <IconLine icon={Cog}><strong className="font-display uppercase" style={{ color: orange }}>I’ve seen the whole picture.</strong><br/>People. Processes. Systems. Customers. Equipment. Money. Strategy. They’re all connected.</IconLine>
          </div>
          <p className="mt-6 text-[13px] leading-5 text-white/75">The industries may change. The fundamentals of building an organization capable of performing under pressure often don’t. <strong style={{ color: orange }}>That’s the experience I bring to The Trades Pipeline.</strong></p>
        </article>

        <article className="border-white/15 lg:border-r">
          <div className="px-7 py-9 lg:px-10">
            <h2 className="font-display text-3xl uppercase leading-tight text-[#d8d2c7]">You Know Your Trade.<br/>I’m Not Here to Teach It to You.</h2>
            <div className="mt-7 space-y-7">
              <IconLine icon={Wrench}>A plumber knows plumbing better than I do. An electrician knows electrical work better than I do. An HVAC professional knows HVAC better than I do.</IconLine>
              <IconLine icon={Users}>They should.</IconLine>
              <IconLine icon={Target}>The Trades Pipeline exists for a different reason.</IconLine>
            </div>
          </div>
          <div className="border-t border-white/15 bg-[#0b171d] px-7 py-7 text-[15px] leading-7 text-white/80 lg:px-10">My role is to bring decades of leadership and operating experience to the questions surrounding the trade itself—the people, capacity, systems, resources and decisions that determine what the business can support next.</div>
        </article>

        <article className="px-7 py-9 lg:px-10">
          <h2 className="font-display text-3xl uppercase leading-tight text-[#d8d2c7]">Why “The Trades Pipeline”?</h2>
          <div className="mt-7 space-y-6">
            <IconLine icon={Wrench}>A pipeline isn’t valuable because something enters it.</IconLine>
            <IconLine icon={Gauge}>It’s valuable because the entire system can carry what enters it to where it needs to go.</IconLine>
            <IconLine icon={AlertTriangle}>Increase demand beyond capacity and pressure rises.</IconLine>
            <IconLine icon={Network}>Restrict one point and the entire system behaves differently.</IconLine>
            <IconLine icon={Cog}>Strengthen one component without understanding the others and you may simply move the constraint.</IconLine>
          </div>
          <p className="mt-7 font-display text-xl leading-7" style={{ color: orange }}>That’s how we think about business.<br/>That’s how we help leaders grow without breaking.</p>
        </article>
      </div>
    </section>

    <section className="relative border-b border-white/15">
      <div className="absolute inset-0"><img src="/about-industry.png" alt="American industrial facility at sunset" className="h-full w-full object-cover object-right"/><div className="absolute inset-0 bg-[linear-gradient(90deg,#071116_0%,rgba(7,17,22,.94)_35%,rgba(7,17,22,.2)_78%)]"/></div>
      <div className="relative mx-auto max-w-[1500px] px-7 py-10 lg:px-10 lg:py-12">
        <h2 className="font-display text-4xl uppercase text-[#d8d2c7]">I Don’t Have All the Answers.</h2>
        <p className="mt-3 max-w-[700px] text-[13px] leading-5 text-white/85">And anyone who claims to understand your business before listening to you probably doesn’t either.</p>
        <p className="mt-2 max-w-[700px] text-[13px] leading-5 text-white/85">What I bring is a disciplined way of asking questions, examining connections, challenging assumptions and helping leadership get closer to the truth.</p>
        <p className="mt-2 font-display text-base" style={{ color: orange }}>Because better decisions rarely begin with pretending we already know.</p>
      </div>
    </section>

    <section className="border-b border-white/15">
      <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[31%_36%_33%]">
        <article className="border-white/15 px-7 py-9 lg:border-r lg:px-10">
          <h2 className="font-display text-3xl uppercase text-[#d8d2c7]">What I’m Building</h2>
          <p className="mt-4 text-[13px] leading-5 text-white/80">I’m building The Trades Pipeline around a deliberately small number of partnerships.</p>
          <p className="mt-3 text-[13px] leading-5 text-white/80">Not because there aren’t more companies we could serve. Because depth matters.</p>
          <p className="mt-3 text-[13px] leading-5 text-white/80">I want to know the businesses we work with. I want to understand their leadership, their opportunities and their constraints. And I want our involvement to continue only while we’re creating meaningful value.</p>
          <div className="mt-6 flex items-center gap-4 border px-4 py-3" style={{ borderColor: orange }}><Handshake className="h-9 w-9 shrink-0" style={{ color: orange }}/><p className="font-display text-base leading-5">The goal isn’t to collect clients.<br/>It’s to build partnerships worth keeping.</p></div>
        </article>

        <article className="relative min-h-[390px] overflow-hidden border-white/15 lg:border-r">
          <img src="/about-family.png" alt="Family walking together at sunset" className="absolute inset-0 h-full w-full object-cover object-right"/>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#071116_0%,rgba(7,17,22,.95)_48%,rgba(7,17,22,.3)_100%)]"/>
          <div className="relative px-7 py-9 lg:px-10">
            <h2 className="font-display text-3xl uppercase text-[#d8d2c7]">Beyond the Business.</h2>
            <div className="mt-6 space-y-6">
              <IconLine icon={Cross}>I’m a husband, father, Christian and proud American.</IconLine>
              <IconLine icon={Users}>Those roles matter more to me than any business title ever will.</IconLine>
              <IconLine icon={Flag}>They’re also part of why I believe businesses should create more than revenue—they should create freedom, opportunity, stronger families and something worth leaving behind.</IconLine>
            </div>
            <Link href="/foundation" className="mt-7 inline-flex items-center gap-3 px-5 py-3 font-display text-sm uppercase text-white" style={{ backgroundColor: orange }}>Explore Our Foundation <ArrowRight className="h-4 w-4"/></Link>
          </div>
        </article>

        <article className="px-7 py-9 lg:px-10">
          <h2 className="font-display text-3xl uppercase leading-tight text-[#d8d2c7]">What You Can Expect<br/>When We Work Together.</h2>
          <div className="mt-6 space-y-4">
            {["Honest assessment, even when it’s uncomfortable.","Questions that get to the real issues.","Strategic thinking tied to practical, implementable actions.","Partnership built on trust, confidentiality and accountability.","Involvement that continues only while we’re creating meaningful value."].map((item)=><div key={item} className="flex gap-3 text-[13px] leading-5 text-white/80"><CheckCircle2 className="h-5 w-5 shrink-0" style={{ color: orange }}/><span>{item}</span></div>)}
          </div>
          <div className="mt-8 border-t border-white/15 pt-7"><img src="/ttp-logo-site.png" alt="The Trades Pipeline" className="h-16 w-auto"/><Link href="/conversation" className="mt-5 inline-flex items-center gap-3 px-5 py-3 font-display text-sm uppercase text-white" style={{ backgroundColor: orange }}>Begin an Executive Conversation <ArrowRight className="h-4 w-4"/></Link></div>
        </article>
      </div>
    </section>

    <section className="bg-[#050b0e]"><div className="mx-auto grid max-w-[1500px] gap-7 px-7 py-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10">
      <div><h2 className="font-display text-3xl uppercase text-[#d8d2c7]">I’m Not Asking You to Trust a Website.</h2><p className="mt-2 max-w-[760px] text-[13px] leading-5 text-white/75">If something you’ve seen here causes you to look at your business differently, let’s have a conversation. You can decide whether our way of thinking brings value to yours. And we’ll do the same.</p><p className="mt-2 font-display text-base" style={{ color: orange }}>No presentation. No predetermined answers. No sales pitch.</p></div>
      <div className="text-left lg:text-right"><div className="font-serif text-4xl italic">JL Davis</div><div className="mt-2 font-display uppercase" style={{ color: orange }}>JL Davis</div><div className="text-[12px] text-white/65">Founder<br/>The Trades Pipeline</div></div>
    </div></section>
  </main></>;
}
