import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { CheckCircle, ArrowRight, Building } from "lucide-react";

export default function CommercialPage() {
  const buyers = [
    { sector: "Commercial Real Estate", title: "Facilities Director, Property Manager", buys: "HVAC, plumbing, electrical, roofing", contract: "$50K–$500K/yr" },
    { sector: "General Contractors", title: "Project Manager, VP Operations", buys: "All trade subcontractors", contract: "$100K–$5M/project" },
    { sector: "Property Management Cos.", title: "Regional Facilities Manager", buys: "Preventive maintenance, emergency services", contract: "$75K–$750K/yr" },
    { sector: "Healthcare / Hospitals", title: "Director of Facilities", buys: "HVAC, electrical, plumbing, compliance", contract: "$150K–$2M/yr" },
    { sector: "School Districts", title: "Director of Facilities, Procurement", buys: "All trades, compliance upgrades", contract: "$50K–$500K/project" },
    { sector: "Industrial / Manufacturing", title: "Plant Manager, Maintenance Director", buys: "Electrical, HVAC, plumbing, fabrication", contract: "$100K–$1M+/yr" },
  ];

  const services = [
    { num: "01", title: "Decision-Maker Outreach", body: "300–400 qualified decision-makers per month via LinkedIn + cold email. AI-personalized at scale, human-reviewed before sending.", tags: ["LinkedIn", "Cold Email", "AI Personalization"] },
    { num: "02", title: "Construction Project Intelligence", body: "We monitor Dodge Construction Network and ConstructConnect for commercial projects matching your trade and geography — you're introduced before the bid goes out.", tags: ["Dodge Data", "ConstructConnect", "Real-time alerts"] },
    { num: "03", title: "Government & Municipal Bid Tracking", body: "SAM.gov, state procurement portals, school districts, municipalities — we monitor every relevant bid opportunity and send you a weekly hot-lead report.", tags: ["SAM.gov", "State portals", "Weekly reports"] },
    { num: "04", title: "Sales Qualified Appointments", body: "We don't just send leads. We book confirmed meetings with verified decision-makers who have a real project need — then hand the meeting to you. Billed per attended appointment.", tags: ["Verified decision-makers", "Per appointment", "Attended meetings only"] },
    { num: "05", title: "Commercial Website & Credentials", body: "A dedicated commercial services section, case studies, certifications, and credential pages that signal enterprise readiness and build trust with facilities teams.", tags: ["Commercial pages", "Case studies", "Credential display"] },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#080D14" }}>
      <Nav variant="commercial" />
      <section className="py-24 md:py-36 px-4 relative overflow-hidden" style={{ backgroundColor: "#080D14" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 40px)" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 40px)" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-slate-700/30 border border-slate-600 text-slate-300 text-[10px] font-bold tracking-[0.35em] uppercase px-5 py-2 mb-7">Commercial &amp; Enterprise Lead Generation</div>
          <h1 className="font-display text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">The Six-Figure Contracts<br /><span className="text-slate-300">Are Going to</span><br /><span style={{ color: "#FF6B2B" }}>Someone Else.</span></h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">We run targeted outreach to GCs, facilities directors, property managers, and government procurement officers — putting your company in front of the decision-makers who sign the big contracts.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"><button className="bg-white hover:bg-gray-100 text-[#080D14] font-bold px-8 py-4 text-xs tracking-widest uppercase flex items-center gap-3 transition-colors mx-auto sm:mx-0">Book Free Strategy Call <ArrowRight className="w-4 h-4" /></button></Link>
            <Link href="#buyers"><button className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-bold px-8 py-4 text-xs tracking-widest uppercase transition-colors">See Who We Target</button></Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-slate-500 text-xs tracking-wider">
            <span>✓ Retainer + per-appointment pricing</span><span>✓ Verified decision-makers only</span><span>✓ Project intelligence included</span>
          </div>
        </div>
      </section>
      <div className="border-y border-slate-800 py-6 px-4" style={{ backgroundColor: "#0D1117" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[{stat:"$213",label:"Avg B2B cost-per-lead in 2026"},{stat:"3.4×",label:"Intent-sourced lead conversion rate"},{stat:"$94",label:"AI-assisted cost-per-meeting"},{stat:"9–12mo",label:"Typical B2B buying cycle"}].map((s) => (
            <div key={s.stat}><div className="font-display text-3xl font-bold" style={{ color: "#FF6B2B" }}>{s.stat}</div><div className="text-slate-500 text-xs mt-1 leading-snug">{s.label}</div></div>
          ))}
        </div>
      </div>
      <section id="buyers" className="py-20 px-4" style={{ backgroundColor: "#0D1117" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[#FF6B2B] text-[10px] font-bold tracking-[0.35em] uppercase mb-3">The Buyer Universe</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">We Know Exactly Who to Call.<br />And What to Say.</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">These are the decision-makers controlling the contracts your business should be winning.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead><tr className="border-b border-slate-700">
                <th className="text-left text-[#FF6B2B] text-[10px] font-bold tracking-[0.25em] uppercase py-4 px-4">Sector</th>
                <th className="text-left text-[#FF6B2B] text-[10px] font-bold tracking-[0.25em] uppercase py-4 px-4">Decision Maker</th>
                <th className="text-left text-[#FF6B2B] text-[10px] font-bold tracking-[0.25em] uppercase py-4 px-4 hidden md:table-cell">What They Buy</th>
                <th className="text-right text-[#FF6B2B] text-[10px] font-bold tracking-[0.25em] uppercase py-4 px-4">Contract Size</th>
              </tr></thead>
              <tbody>
                {buyers.map((b, i) => (
                  <tr key={b.sector} className={`border-b border-slate-800 hover:bg-slate-800/30 transition-colors ${i % 2 === 0 ? "" : "bg-slate-900/30"}`}>
                    <td className="py-4 px-4 text-white font-bold text-sm">{b.sector}</td>
                    <td className="py-4 px-4 text-slate-400 text-sm">{b.title}</td>
                    <td className="py-4 px-4 text-slate-500 text-sm hidden md:table-cell">{b.buys}</td>
                    <td className="py-4 px-4 text-right"><span className="text-[#FF6B2B] text-xs font-bold bg-[#FF6B2B]/10 px-3 py-1 whitespace-nowrap">{b.contract}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section id="services" className="py-20 px-4" style={{ backgroundColor: "#1A2332" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[#FF6B2B] text-[10px] font-bold tracking-[0.35em] uppercase mb-3">What We Run For You</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">The Complete B2B Commercial Engine</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.num} className="border border-slate-700 p-8 hover:border-[#FF6B2B]/60 transition-colors group bg-slate-900/30">
                <div className="font-display text-5xl font-bold text-slate-800 group-hover:text-[#FF6B2B]/20 transition-colors mb-4 leading-none">{s.num}</div>
                <h3 className="font-display font-bold text-white text-xl mb-3">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{s.body}</p>
                <div className="flex flex-wrap gap-2">{s.tags.map((t) => (<span key={t} className="bg-slate-800 text-slate-400 text-[10px] font-bold tracking-wider uppercase px-3 py-1">{t}</span>))}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="pricing" className="py-20 px-4" style={{ backgroundColor: "#0D1117" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[#FF6B2B] text-[10px] font-bold tracking-[0.35em] uppercase mb-3">B2B Pricing</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">Retainer + Performance.<br />You Only Pay for Results.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[{name:"ESSENTIAL",setup:"$2,997 setup",monthly:"$1,250",sub:"/mo",contacts:"150–200/mo",channels:"Email only",sqa:"$300–$450/appt",highlight:false},{name:"GROWTH",setup:"$4,997 setup",monthly:"$2,000",sub:"/mo",contacts:"300–400/mo",channels:"Email + LinkedIn",sqa:"$400–$600/appt",highlight:true},{name:"DOMINANT",setup:"$7,997 setup",monthly:"$3,500",sub:"/mo",contacts:"500–750/mo",channels:"Email + LinkedIn + Project Intel",sqa:"$500–$1,000/appt",highlight:false}].map((plan) => (
              <div key={plan.name} className={`relative p-8 border ${plan.highlight ? "border-[#FF6B2B]" : "border-slate-700"}`} style={plan.highlight ? { backgroundColor: "rgba(255,107,43,0.05)" } : { backgroundColor: "rgba(255,255,255,0.02)" }}>
                {plan.highlight && (<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF6B2B] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-1.5 whitespace-nowrap">Most Popular</div>)}
                <div className="text-[#FF6B2B] text-[10px] font-bold tracking-widest uppercase mb-2">{plan.setup}</div>
                <h3 className="font-display text-white text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-1 flex items-end gap-1"><span className="font-display text-white text-4xl font-bold">{plan.monthly}</span><span className="text-slate-400 text-sm mb-1">{plan.sub}</span></div>
                <div className="text-slate-500 text-xs mb-6">+ per Sales Qualified Appointment</div>
                <ul className="space-y-3 mb-8">
                  {[plan.contacts+" contacts/mo",plan.channels,"Reply handling + scheduling",plan.sqa+" per SQA","Monthly campaign report"].map((f) => (
                    <li key={f} className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-[#FF6B2B] flex-shrink-0 mt-0.5" /><span className="text-slate-300 text-sm">{f}</span></li>
                  ))}
                </ul>
                <Link href="/contact"><button className={`w-full font-bold py-3.5 text-xs tracking-widest uppercase transition-colors ${plan.highlight ? "bg-[#FF6B2B] hover:bg-orange-500 text-white" : "border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white"}`}>Get Started →</button></Link>
              </div>
            ))}
          </div>
          <div className="border border-slate-700 p-6 bg-slate-900/30">
            <p className="text-slate-400 text-sm text-center leading-relaxed"><span className="text-white font-bold">What&apos;s a Sales Qualified Appointment?</span> A confirmed, attended meeting of 20+ minutes between your team and a verified decision-maker with a documented project need within your service area and capabilities.</p>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 border-t border-slate-800" style={{ backgroundColor: "#1A2332" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-5">Ready to Start Landing<br />Commercial Contracts?</h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-xl mx-auto">The strategy call is free, honest, and specific to your trade and geography. We&apos;ll show you exactly which buyers we&apos;d target and what a realistic 6-month pipeline looks like.</p>
          <Link href="/contact"><button className="bg-[#FF6B2B] hover:bg-orange-500 text-white font-bold px-10 py-4 text-xs tracking-widest uppercase flex items-center gap-3 mx-auto transition-colors">Book Your Free Strategy Call <ArrowRight className="w-4 h-4" /></button></Link>
          <div className="mt-7 flex flex-wrap justify-center gap-6 text-slate-500 text-xs tracking-wider">
            <span>📅 Available evenings &amp; weekends</span><span>🔒 Confidential — your competitors won&apos;t know</span>
          </div>
        </div>
      </section>
      <Footer variant="commercial" />
    </div>
  );
}
