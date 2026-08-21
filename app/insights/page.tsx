"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, BarChart3, Cog, MessageSquareText, Search, Send, Users, Wrench } from "lucide-react";
import { Nav } from "@/components/nav";

const categories = ["All","People","Sales","Operations","Financial Capacity","Safety","Systems","Inventory","Facilities","Equipment"] as const;

const articles = [
  {
    category: "People", label: "Leadership", image: "/insight-leadership.png", source: "Forbes", date: "Jan. 16, 2025", read: "6 min read",
    title: "How Tech, AI and Leadership Are Shaping the Future of Skilled Trades",
    summary: "The trades are changing quickly, but leadership capacity—not technical skill alone—will determine which companies can turn that change into durable growth.",
    why: "Growth can create opportunity faster than it creates leadership capacity. The question is whether your company is developing people quickly enough to carry what comes next.",
    href: "https://www.forbes.com/sites/brentgleeson/2025/01/16/how-tech-ai-and-leadership-are-shaping-the-future-of-skilled-trades/",
  },
  {
    category: "People", label: "Workforce", image: "/insight-workforce.png", source: "McKinsey & Company", date: "Jan. 12, 2026", read: "9 min read",
    title: "Building the Future Workforce for U.S. Shipbuilding",
    summary: "A high-pressure skilled-trades sector is confronting retention, training and workforce-development challenges that reach far beyond shipyards.",
    why: "The workforce shortage is not only a hiring problem. It raises a harder question: how intentionally are you building tomorrow’s capability from the experience you have today?",
    href: "https://www.mckinsey.com/industries/aerospace-and-defense/our-insights/helming-a-sea-change-building-the-future-workforce-for-us-shipbuilding",
  },
  {
    category: "Facilities", label: "Growth", image: "/insight-growth.png", source: "McKinsey & Company", date: "Mar. 27, 2026", read: "11 min read",
    title: "The $7 Trillion Race for AI Data-Center Infrastructure",
    summary: "One of the largest infrastructure build-outs in modern history is creating extraordinary demand across construction, electrical, cooling and industrial systems.",
    why: "Opportunity and capacity are not the same thing. Before asking how much you can grow, understand what your organization is currently built to carry.",
    href: "https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-7-trillion-dollar-data-center-build-out-how-industrials-can-capture-their-share",
  },
  {
    category: "Systems", label: "Technology", image: "/insight-technology.png", source: "Forbes", date: "Oct. 14, 2025", read: "6 min read",
    title: "How AI Is Changing Skilled-Trades Work for the Better",
    summary: "AI is improving planning, workflows, safety and training while allowing skilled professionals to focus more attention on the work only they can do.",
    why: "Technology creates leverage when it improves the system—not simply because it is new. Ask where AI can remove friction, strengthen judgment or return time to the field.",
    href: "https://www.forbes.com/sites/markcperna/2025/10/14/how-ai-is-changing-skilled-trades-work-for-the-better/",
  },
  {
    category: "Financial Capacity", label: "Market Pressure", image: "/insight-pressure.png", source: "Construction Dive", date: "Jan. 5, 2026", read: "8 min read",
    title: "How Contractors Can Navigate Cost, Labor and Regulatory Pressure in 2026",
    summary: "Contractors face several pressures simultaneously: cost, labor availability, regulation and project delivery. None stays isolated for long.",
    why: "Pressure rarely arrives one area at a time. Leadership decisions become more important when workforce, cost, capacity and opportunity are all moving together.",
    href: "https://www.constructiondive.com/news/construction-cost-labor-regulations-2026/808629/",
  },
  {
    category: "Operations", label: "Opportunity + Capacity", image: "/insight-capacity.png", source: "The Wall Street Journal", date: "Nov. 30, 2025", read: "7 min read",
    title: "Data Centers Are a ‘Gold Rush’ for Construction Workers",
    summary: "AI-driven data-center construction is creating exceptional demand for electricians, plumbers, welders and project leaders—while stretching the workforce available to deliver it.",
    why: "Demand is not the same as capacity. The biggest growth risk is not finding more opportunity. It is winning more than your business is prepared to carry.",
    href: "https://www.wsj.com/business/data-centers-are-a-gold-rush-for-construction-workers-6e3c5ce0",
  },
  {
    category: "People", label: "Workforce Demand", image: "/insight-workforce.png", source: "Construction Dive", date: "Jan. 28, 2026", read: "3 min read",
    title: "Construction Needs 350,000 New Workers in 2026",
    summary: "The projected labor gap has narrowed from recent years, but retirement, policy and regional demand could make the headline number deceptively optimistic.",
    why: "A smaller national gap does not guarantee available capability in your trade, territory or leadership pipeline. Workforce depth must be understood locally.",
    href: "https://www.constructiondive.com/news/labor-demand-gap-shrinks-abc-construction-staff/810681/",
  },
] as const;

export default function InsightsPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => articles.filter((article) => (active === "All" || article.category === active) && `${article.title} ${article.summary} ${article.source} ${article.label}`.toLowerCase().includes(query.toLowerCase())), [active, query]);

  return <><Nav/><main className="min-h-screen bg-[#071116] text-[#f3eee5]">
    <section className="border-b border-white/15">
      <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[35%_65%]">
        <div className="flex flex-col justify-center px-7 py-10 lg:px-10 lg:py-12">
          <h1 className="font-display text-[clamp(4.8rem,8vw,8rem)] font-semibold uppercase leading-none tracking-[-.03em] text-[#d7d0c5]">Insights</h1>
          <p className="mt-2 font-display text-[clamp(1.4rem,2vw,2rem)] uppercase leading-tight text-[#e65312]">What we’re reading.<br/>What we’re watching.<br/>Why it matters.</p>
          <div className="mt-5 h-[2px] w-12 bg-[#e65312]"/>
          <p className="mt-5 max-w-[390px] text-[13px] leading-5 text-white/80">Growth rarely breaks a business because of one issue. Workforce. Leadership. Technology. Capital. Operations. Markets. Customers.</p>
          <p className="mt-3 max-w-[390px] text-[13px] leading-5 text-white/80">We follow the forces shaping trade businesses—and surface the ideas we believe deserve an executive’s attention.</p>
        </div>
        <div className="relative min-h-[330px] overflow-hidden lg:min-h-[430px]"><img src="/insights-hero.png" alt="TTP hard hat, notebook and coffee in an American industrial facility" className="absolute inset-0 h-full w-full object-cover object-center"/><div className="absolute inset-0 bg-gradient-to-r from-[#071116]/30 to-transparent"/></div>
      </div>
    </section>

    <section className="sticky top-[76px] z-30 border-b border-white/15 bg-[#081319]/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-4 px-5 py-3 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex gap-1 overflow-x-auto pb-1 lg:pb-0">{categories.map((category)=><button key={category} onClick={()=>setActive(category)} className={`shrink-0 border-b-2 px-3 py-2 font-display text-xs uppercase tracking-wide transition ${active === category ? "border-[#e65312] text-[#e65312]" : "border-transparent text-white/80 hover:text-white"}`}>{category}</button>)}</div>
        <label className="flex min-w-[220px] items-center gap-2 border border-white/25 px-3 py-2"><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search insights..." className="w-full bg-transparent text-xs text-white outline-none placeholder:text-white/45"/><Search className="h-4 w-4 text-white/70"/></label>
      </div>
    </section>

    <section className="mx-auto max-w-[1500px] px-5 py-6 lg:px-8">
      {filtered.length ? <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{filtered.map((article)=><article key={article.href} className="flex h-full flex-col border border-white/25 bg-[#081319] transition hover:-translate-y-0.5 hover:border-[#e65312]/70">
        <div className="relative aspect-[2.9/1] overflow-hidden"><img src={article.image} alt="" className="h-full w-full object-cover"/><span className="absolute left-3 top-3 bg-[#cf4714] px-2.5 py-1 font-display text-xs uppercase tracking-wide text-white">{article.label}</span></div>
        <div className="flex items-center justify-between border-y border-white/20 px-3 py-2 text-[10px] text-white/65"><span className="font-serif text-sm text-white/90">{article.source}</span><span>{article.date} <b className="mx-1 text-[#e65312]">•</b> {article.read}</span></div>
        <div className="flex flex-1 flex-col p-4">
          <h2 className="font-display text-[1.45rem] uppercase leading-tight text-[#e1dbd0]">{article.title}</h2>
          <p className="mt-3 text-[12px] leading-5 text-white/75">{article.summary}</p>
          <div className="mt-4 border border-[#a8421e] p-3"><div className="flex gap-3"><Cog className="h-7 w-7 shrink-0 text-[#e65312]"/><div><div className="font-display text-xs uppercase tracking-wide text-[#e65312]">Why We’re Reading It</div><p className="mt-1 text-[11px] leading-4 text-white/75">{article.why}</p></div></div></div>
          <a href={article.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 font-display text-xs uppercase tracking-wide text-[#e65312]">Read the original article <ArrowRight className="h-3.5 w-3.5"/></a>
        </div>
      </article>)}</div> : <div className="border border-white/20 px-6 py-14 text-center text-white/65">No insights match that search yet.</div>}
    </section>

    <section className="mx-auto grid max-w-[1500px] gap-4 px-5 pb-6 lg:grid-cols-[2fr_1fr] lg:px-8">
      <div className="grid border border-white/25 bg-[radial-gradient(circle_at_20%_50%,rgba(230,83,18,.12),transparent_38%)] lg:grid-cols-[1fr_220px]">
        <div className="p-6"><p className="font-display text-lg uppercase text-[#e65312]">The Signal We’re Watching</p><h2 className="mt-2 max-w-[720px] font-display text-[clamp(2rem,3.3vw,3.6rem)] uppercase leading-tight text-[#d8d1c6]">The Trades Don’t Appear to Have a Demand Problem. They May Have a Capacity Problem.</h2><p className="mt-4 max-w-[760px] text-[12px] leading-5 text-white/75">AI infrastructure, industrial investment and an aging workforce are converging. The opportunity is real—but more work does not automatically create stronger companies.</p></div>
        <div className="border-t border-white/20 p-6 text-[12px] leading-5 text-white/75 lg:border-l lg:border-t-0"><p>For some contractors, the coming opportunity may test workforce depth, leadership capacity, equipment, financial capacity, systems and operations simultaneously.</p><p className="mt-4 font-display text-base text-[#e65312]">The winners may not be the companies that find the most work. They may be the companies best prepared to carry it.</p></div>
      </div>
      <div className="border border-white/25 p-6"><h2 className="font-display text-2xl uppercase text-[#d8d1c6]">More Ways to Stay Informed</h2><div className="mt-4 divide-y divide-white/15">{[[Send,"The Insight Brief","A short, curated update on the trends and pressures shaping trade businesses."],[MessageSquareText,"Executive Perspectives","Conversations with leaders, operators and experts building businesses that last."],[BarChart3,"Resource Library","Tools, frameworks and templates to strengthen your business."]].map(([Icon,title,copy]:any)=><div key={title} className="flex gap-4 py-4"><Icon className="h-7 w-7 shrink-0 text-[#e65312]"/><div><div className="font-display uppercase">{title}</div><div className="mt-1 text-[11px] leading-4 text-white/65">{copy}</div></div></div>)}</div></div>
    </section>

    <section className="mx-auto max-w-[1500px] px-5 pb-7 lg:px-8"><div className="flex flex-col gap-5 border border-white/25 px-6 py-5 lg:flex-row lg:items-center lg:justify-between"><div className="flex gap-5"><MessageSquareText className="h-11 w-11 shrink-0 text-[#e65312]"/><div><h2 className="font-display text-2xl uppercase text-[#d8d1c6]">See Something Here That Makes You Think Differently?</h2><p className="mt-1 text-base text-[#e65312]">Let’s have a conversation about what’s possible for your business.</p></div></div><div><Link href="/conversation" className="inline-flex items-center gap-3 bg-[#cf4714] px-6 py-3 font-display text-sm uppercase text-white">Begin an Executive Conversation <ArrowRight className="h-4 w-4"/></Link><p className="mt-2 text-center text-[10px] text-white/55">No presentation. No predetermined answers. No sales pitch.</p></div></div></section>
  </main></>;
}
