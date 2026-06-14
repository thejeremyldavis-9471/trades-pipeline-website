import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { CheckCircle, ArrowRight, Shield, BarChart3, Zap, Users } from "lucide-react";

export default function ResidentialPage() {
  const services = [
    { num: "01", title: "Website Design & Development", body: "Your website is your #1 sales tool — and most trades websites quietly kill leads every day. We build fast, modern, conversion-optimized sites that turn visitors into phone calls.", tags: ["Mobile-first", "Built to rank", "Built to convert"] },
    { num: "02", title: "Local SEO & Google Business Profile", body: "When someone searches 'HVAC repair near me' at 10pm, your business needs to be first. We optimize your Google presence so you own your market geographically — and stay there.", tags: ["GBP Management", "Citation building", "Schema markup"] },
    { num: "03", title: "Social Media Management", body: "We create and manage platform-specific content that builds trust, showcases your work, and keeps your business top-of-mind between jobs.", tags: ["Facebook", "Instagram", "LinkedIn"] },
    { num: "04", title: "Paid Advertising", body: "When you need leads now, ads deliver. We manage Google Local Services Ads, Search campaigns, and Meta advertising — optimized for your trade and margins.", tags: ["Google LSA", "Google Ads", "Meta Ads"] },
    { num: "05", title: "Residential Lead Generation", body: "A fully tracked residential lead machine. Every form fill, every phone call captured, qualified, and routed to you in real time. You pay only for verified leads.", tags: ["Call tracking", "CRM pipeline", "SMS follow-up"] },
    { num: "06", title: "B2B Commercial Outreach", body: "We run targeted outreach to GCs, facilities managers, and municipalities — putting your company in front of decision-makers who sign six-figure contracts.", tags: ["LinkedIn outreach", "Cold email", "Project intel"] },
  ];

  const plans = [
    { name: "FOUNDATION", tagline: "Get Found. Get Trusted.", setup: "$1,997 setup", monthly: "$997", sub: "/mo", best: "Solo operators & small trades businesses", highlight: false, features: ["Professional website (up to 6 pages)", "Google Business Profile management", "Local SEO optimization", "AI chat agent (24/7 lead capture)", "Automated review request system", "Call & lead tracking", "Monthly performance report"] },
    { name: "GROWTH", tagline: "Dominate Your Local Market.", setup: "$3,497 setup", monthly: "$1,997", sub: "/mo + lead fees", best: "Established businesses ready to scale", highlight: true, features: ["Everything in Foundation", "Expanded website (up to 10 pages)", "Social media management (3×/week)", "Google LSA + Search + Meta ads", "Residential pay-per-lead system", "Lead nurture automation (SMS + email)", "GoHighLevel CRM pipeline", "Bi-weekly reporting dashboard"] },
    { name: "PIPELINE COMPLETE", tagline: "Own Residential and Commercial.", setup: "$5,997 setup", monthly: "$3,497", sub: "/mo + lead & appt fees", best: "Serious businesses targeting big contracts", highlight: false, features: ["Everything in Growth", "Full website (12+ pages)", "LinkedIn management", "Complete ad suite", "B2B commercial outreach (300–400/mo)", "Project intelligence monitoring", "Government bid tracking", "Sales qualified appointments", "Monthly strategy call"] },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Nav variant="residential" />
      <section className="bg-[#1A2332] py-24 md:py-36 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "22px 22px" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-[#FF6B2B]/10 border border-[#FF6B2B]/30 text-[#FF6B2B] text-[10px] font-bold tracking-[0.35em] uppercase px-5 py-2 mb-7">Residential Trades Marketing</div>
          <h1 className="font-display text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">Your Competitors Are<br /><span className="text-[#FF6B2B]">Stealing Jobs</span><br />That Should Be Yours.</h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">We build and run your complete marketing pipeline — website, social, ads, and leads — so you stay on the job site while we fill your schedule.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"><button className="bg-[#FF6B2B] hover:bg-orange-500 text-white font-bold px-8 py-4 text-xs tracking-widest uppercase flex items-center gap-3 transition-colors mx-auto sm:mx-0">Book Free Strategy Call <ArrowRight className="w-4 h-4" /></button></Link>
            <Link href="#how-it-works"><button className="border border-slate-500 hover:border-slate-300 text-slate-300 hover:text-white font-bold px-8 py-4 text-xs tracking-widest uppercase transition-colors">See How It Works</button></Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-slate-400 text-xs tracking-wider">
            <span>✓ No lock-in until month 13</span><span>✓ Built for trades only</span><span>✓ One client per trade per market</span>
          </div>
        </div>
      </section>
      <section className="bg-[#0D1117] py-4 px-4 border-b border-slate-800">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-slate-400 text-[10px] tracking-widest uppercase">
          {["HVAC","Plumbing","Electrical","Roofing","Concrete","Landscaping","General Contracting","Garage Doors"].map((t) => (<span key={t} className="flex items-center gap-1.5"><span className="text-[#FF6B2B]">⚙</span>{t}</span>))}
        </div>
      </section>
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[#FF6B2B] text-[10px] font-bold tracking-[0.35em] uppercase mb-3">Sound Familiar?</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1A2332]">You&apos;re Great at Your Trade.<br />Marketing Shouldn&apos;t Be a Second Job.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{icon:"📉",title:"Your website is costing you jobs.",body:"Customers Google you, land on a site that looks like it was built in 2011, and call your competitor instead. You never even knew they were there."},{icon:"📵",title:"Your phone goes quiet in slow season.",body:"Word of mouth is great — until it isn't. Without a real system behind your business, your revenue is unpredictable and slow months feel like emergencies."},{icon:"🏢",title:"Commercial contracts go to someone else.",body:"You know the big jobs exist. But facilities managers and GCs sign with whoever shows up first — and that's not you. Yet."}].map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 p-8 hover:border-[#FF6B2B]/50 transition-colors">
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="font-display font-bold text-[#1A2332] text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 max-w-2xl mx-auto">
            <p className="text-[#1A2332] font-bold text-lg">The problem isn&apos;t your work. The problem is no one can find you, trust you, or hire you before your competition does.</p>
            <p className="text-[#FF6B2B] font-bold mt-2 text-lg">That&apos;s exactly what we fix.</p>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-[#1A2332]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[#FF6B2B] text-[10px] font-bold tracking-[0.35em] uppercase mb-3">The Trades Pipeline Difference</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">We&apos;re Not a Marketing Agency.<br />We&apos;re Your Marketing Department.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{Icon:Shield,title:"Built for Trades",body:"We don't serve dentists or real estate agents. Every system is designed exclusively for trades business owners."},{Icon:BarChart3,title:"Results You Can See",body:"Every lead tracked. Every call recorded. Every ad dollar accounted for. You'll never wonder if it's working."},{Icon:Zap,title:"AI-Powered 24/7",body:"Advanced AI automation runs your pipeline around the clock so you get results even when you're on the job site."},{Icon:Users,title:"Long-Term Partner",body:"We stay with you long enough to build something that compounds. More valuable every single month."}].map(({ Icon, title, body }) => (
              <div key={title} className="text-center p-6">
                <div className="w-12 h-12 bg-[#FF6B2B]/10 border border-[#FF6B2B]/30 flex items-center justify-center mx-auto mb-4"><Icon className="w-6 h-6 text-[#FF6B2B]" /></div>
                <h3 className="font-display font-bold text-white text-lg mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[#FF6B2B] text-[10px] font-bold tracking-[0.35em] uppercase mb-3">What We Handle</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1A2332]">Everything You Need to Dominate Your Market</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.num} className="border border-gray-200 p-8 hover:border-[#FF6B2B] hover:shadow-lg transition-all group">
                <div className="font-display text-5xl font-bold text-gray-100 group-hover:text-[#FF6B2B]/20 transition-colors mb-4 leading-none">{s.num}</div>
                <h3 className="font-display font-bold text-[#1A2332] text-xl mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{s.body}</p>
                <div className="flex flex-wrap gap-2">{s.tags.map((t) => (<span key={t} className="bg-gray-100 text-gray-500 text-[10px] font-bold tracking-wider uppercase px-3 py-1">{t}</span>))}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[#FF6B2B] text-[10px] font-bold tracking-[0.35em] uppercase mb-3">Simple Process. Real Results.</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1A2332]">Up and Running in 30 Days.<br />Results That Compound for Years.</h2>
          </div>
          <div className="space-y-0">
            {[{step:"01",time:"Week 1",title:"Strategy Call",body:"30–45 minutes learning your business: your trade, service area, best customers, goals, and where you're losing jobs. No templates. Real conversation."},{step:"02",time:"Weeks 2–4",title:"Build & Launch",body:"We build your entire marketing infrastructure — website, tracking, ad accounts, CRM, social profiles. Set up correctly from day one so nothing gets rebuilt later."},{step:"03",time:"Month 1",title:"Pipeline Goes Live",body:"Your digital presence is active. Leads start flowing. We monitor every channel, optimize what's working, and cut what isn't. Your only job: answering the phone."},{step:"04",time:"Months 2–12+",title:"Growth Compounds",body:"Rankings improve. Reputation builds. Ad performance sharpens. Commercial outreach develops into long-term contracts. This is why we work on 12-month partnerships."}].map((s, i) => (
              <div key={s.step} className={`flex gap-6 p-8 border border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <div className="font-display text-6xl font-bold text-gray-100 leading-none flex-shrink-0 w-16 pt-1">{s.step}</div>
                <div className="flex-1">
                  <div className="text-[#FF6B2B] text-[10px] font-bold tracking-[0.35em] uppercase mb-1">{s.time}</div>
                  <h3 className="font-display font-bold text-[#1A2332] text-2xl mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="pricing" className="py-20 px-4 bg-[#1A2332]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[#FF6B2B] text-[10px] font-bold tracking-[0.35em] uppercase mb-3">Simple, Transparent Pricing</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">Choose the Package That Matches Where You&apos;re Going</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">All packages include a 12-month partnership. No hidden fees. No surprise add-ons.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative p-8 border ${plan.highlight ? "border-[#FF6B2B] bg-[#FF6B2B]/5" : "border-slate-700 bg-slate-900/40"}`}>
                {plan.highlight && (<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF6B2B] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-1.5 whitespace-nowrap">Most Popular</div>)}
                <div className="text-[#FF6B2B] text-[10px] font-bold tracking-widest uppercase mb-2">{plan.setup}</div>
                <h3 className="font-display text-white text-2xl font-bold mb-1">{plan.name}</h3>
                <div className="text-slate-400 text-sm mb-5">{plan.tagline}</div>
                <div className="mb-1 flex items-end gap-1"><span className="font-display text-white text-4xl font-bold">{plan.monthly}</span><span className="text-slate-400 text-sm mb-1">{plan.sub}</span></div>
                <div className="text-slate-500 text-xs italic mb-7">Best for: {plan.best}</div>
                <ul className="space-y-3 mb-8">{plan.features.map((f) => (<li key={f} className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-[#FF6B2B] flex-shrink-0 mt-0.5" /><span className="text-slate-300 text-sm">{f}</span></li>))}</ul>
                <Link href="/contact"><button className={`w-full font-bold py-3.5 text-xs tracking-widest uppercase transition-colors ${plan.highlight ? "bg-[#FF6B2B] hover:bg-orange-500 text-white" : "border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white"}`}>Get Started →</button></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-[#FF6B2B]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-5">Your Pipeline Won&apos;t Fill Itself.</h2>
          <p className="text-orange-100 text-lg mb-8 leading-relaxed max-w-xl mx-auto">Every day without a real marketing system is a day your competitors are getting calls that should be yours. The strategy call is free. Let&apos;s fix that.</p>
          <Link href="/contact"><button className="bg-white hover:bg-gray-100 text-[#FF6B2B] font-bold px-10 py-4 text-xs tracking-widest uppercase flex items-center gap-3 mx-auto transition-colors">Book Your Free Strategy Call <ArrowRight className="w-4 h-4" /></button></Link>
          <div className="mt-7 flex flex-wrap justify-center gap-6 text-orange-100 text-xs tracking-wider">
            <span>📅 Available evenings &amp; weekends</span><span>⚡ Limited spots per market</span><span>🔒 One client per trade per market</span>
          </div>
        </div>
      </section>
      <Footer variant="residential" />
    </div>
  );
}
