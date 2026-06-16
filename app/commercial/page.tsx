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
    {
      num: "01",
      title: "Decision-Maker Research & Outreach",
      body: "We identify and verify the specific person who signs contracts at your target companies — then run a 5-7 touch sequence across email and LinkedIn until we get a response. Every contact is researched by hand or confirmed by AI and human-reviewed before outreach begins. This is quality over spray-and-pray.",
      tags: ["Verified contacts", "Multi-touch sequences", "Human-reviewed"]
    },
    {
      num: "02",
      title: "Construction Project Intelligence",
      body: "We monitor Dodge Construction Network and ConstructConnect for active commercial projects in your trade and geography. You’re introduced to the GC or owner before the bid goes out — before your competitors even know the project exists.",
      tags: ["Dodge Data", "ConstructConnect", "Pre-bid introductions"]
    },
    {
      num: "03",
      title: "Government & Municipal Bid Tracking",
      body: "SAM.gov, state procurement portals, school districts, municipalities — we monitor every relevant bid opportunity in your area and deliver a weekly report of the ones worth pursuing. No more manually hunting portals.",
      tags: ["SAM.gov", "State portals", "Weekly hot-lead report"]
    },
    {
      num: "04",
      title: "Sales Qualified Appointments",
      body: "When outreach produces a warm response, we handle scheduling and qualification. You only pay the per-appointment fee for attended meetings with verified decision-makers who have a documented project need in your area — not for tire-kickers or no-shows.",
      tags: ["Verified decision-makers", "Attended meetings only", "Project-qualified"]
    },
    {
      num: "05",
      title: "Commercial Website & Credentials",
      body: "A dedicated commercial services section, project portfolio pages, certifications, bonding and insurance display, and vendor prequalification documentation — the digital proof that enterprise buyers require before they’ll take a meeting.",
      tags: ["Commercial pages", "Project portfolio", "Prequalification docs"]
    },
  ];

  const timeline = [
    {
      phase: "Month 1–2",
      label: "Foundation",
      color: "border-slate-600",
      accent: "text-slate-400",
      items: [
        "Target list built and verified",
        "Outreach sequences written and tested",
        "Email infrastructure warmed up",
        "LinkedIn profile optimized",
        "First contacts hit inboxes",
      ]
    },
    {
      phase: "Month 2–3",
      label: "First Conversations",
      color: "border-[#FF6B2B]/40",
      accent: "text-[#FF6B2B]",
      items: [
        "2–8 positive replies per month",
        "1–3 qualified conversations",
        "Messaging refined from real responses",
        "Pipeline CRM populated",
        "First SQAs booked",
      ]
    },
    {
      phase: "Month 3–6",
      label: "Pipeline Builds",
      color: "border-[#FF6B2B]/70",
      accent: "text-[#FF6B2B]",
      items: [
        "3–8 qualified meetings per month",
        "Active proposals in circulation",
        "Referral momentum begins",
        "First contract discussions",
        "Retargeting warms cold contacts",
      ]
    },
    {
      phase: "Month 6+",
      label: "Compounding ROI",
      color: "border-[#FF6B2B]",
      accent: "text-[#FF6B2B]",
      items: [
        "Relationships converting to contracts",
        "Referral network active",
        "Repeat-contact wins increase",
        "Brand known in your market",
        "Each contract funds the next 12 months",
      ]
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#080D14" }}>
      <Nav variant="commercial" />

      {/* Hero */}
      <section className="py-24 md:py-36 px-4 relative overflow-hidden" style={{ backgroundColor: "#080D14" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 40px)" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 0,transparent 40px)" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-slate-700/30 border border-slate-600 text-slate-300 text-[10px] font-bold tracking-[0.35em] uppercase px-5 py-2 mb-7">Commercial &amp; Enterprise Lead Generation</div>
          <h1 className="font-display text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            The Six-Figure Contracts<br /><span className="text-slate-300">Are Going to</span><br /><span style={{ color: "#FF6B2B" }}>Someone Else.</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            We research the decision-makers who sign the contracts in your trade and geography, build a verified outreach pipeline, and run multi-touch sequences until we get you in the room. Commercial sales cycles are long — we’ll be honest about the timeline and show you exactly what to expect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"><button className="bg-white hover:bg-gray-100 text-[#080D14] font-bold px-8 py-4 text-xs tracking-widest uppercase flex items-center gap-3 transition-colors mx-auto sm:mx-0">Book Free Strategy Call <ArrowRight className="w-4 h-4" /></button></Link>
            <Link href="#buyers"><button className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-bold px-8 py-4 text-xs tracking-widest uppercase transition-colors">See Who We Target</button></Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-slate-500 text-xs tracking-wider">
            <span>&#10003; Retainer + per-appointment pricing</span>
            <span>&#10003; Verified decision-makers only</span>
            <span>&#10003; Honest timelines, not hype</span>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="border-y border-slate-800 py-6 px-4" style={{ backgroundColor: "#0D1117" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { stat: "60–90", label: "Days to first qualified conversations (typical)" },
            { stat: "5–7", label: "Touches required before most B2B responses" },
            { stat: "$150K+", label: "Average commercial trade contract value" },
            { stat: "3–12mo", label: "Typical commercial sales cycle — we don’t hide this" },
          ].map((s) => (
            <div key={s.stat}>
              <div className="font-display text-3xl font-bold" style={{ color: "#FF6B2B" }}>{s.stat}</div>
              <div className="text-slate-500 text-xs mt-1 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Buyer Universe */}
      <section id="buyers" className="py-20 px-4" style={{ backgroundColor: "#0D1117" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[#FF6B2B] text-[10px] font-bold tracking-[0.35em] uppercase mb-3">The Buyer Universe</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">We Know Exactly Who to Call.<br />And What to Say.</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">These are the decision-makers controlling the contracts your business should be winning.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left text-[#FF6B2B] text-[10px] font-bold tracking-[0.25em] uppercase py-4 px-4">Sector</th>
                  <th className="text-left text-[#FF6B2B] text-[10px] font-bold tracking-[0.25em] uppercase py-4 px-4">Decision Maker</th>
                  <th className="text-left text-[#FF6B2B] text-[10px] font-bold tracking-[0.25em] uppercase py-4 px-4 hidden md:table-cell">What They Buy</th>
                  <th className="text-right text-[#FF6B2B] text-[10px] font-bold tracking-[0.25em] uppercase py-4 px-4">Contract Size</th>
                </tr>
              </thead>
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

      {/* Services */}
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
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (<span key={t} className="bg-slate-800 text-slate-400 text-[10px] font-bold tracking-wider uppercase px-3 py-1">{t}</span>))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realistic Timeline */}
      <section className="py-20 px-4" style={{ backgroundColor: "#080D14" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[#FF6B2B] text-[10px] font-bold tracking-[0.35em] uppercase mb-3">Straight Talk</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">What to Realistically Expect</h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              We’re not going to promise you 500 warm leads in month one. Commercial B2B is a long game — but when it pays off, one contract can fund a year of marketing. Here’s what the pipeline actually looks like.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {timeline.map((t) => (
              <div key={t.phase} className={`border ${t.color} p-7 bg-slate-900/20`}>
                <div className={`text-[10px] font-bold tracking-[0.3em] uppercase mb-1 ${t.accent}`}>{t.phase}</div>
                <div className="font-display text-white text-xl font-bold mb-5">{t.label}</div>
                <ul className="space-y-2.5">
                  {t.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="w-3.5 h-3.5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-400 text-xs leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 border border-slate-700 p-5 bg-slate-900/30">
            <p className="text-slate-400 text-sm text-center leading-relaxed">
              <span className="text-white font-bold">The bottom line:</span> Commercial outreach is not a faucet you turn on and leads pour out. It’s a pipeline you build. The contractors who stick with it past month three are the ones landing the contracts their competitors can’t figure out how to get.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4" style={{ backgroundColor: "#0D1117" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[#FF6B2B] text-[10px] font-bold tracking-[0.35em] uppercase mb-3">B2B Pricing</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">Retainer + Performance.<br />You Only Pay for Attended Meetings.</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">The monthly retainer covers research, outreach, and pipeline management. Sales Qualified Appointments are billed separately — only when a verified decision-maker attends.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                name: "ESSENTIAL",
                setup: "$2,997 setup",
                monthly: "$1,250",
                sub: "/mo",
                highlight: false,
                features: [
                  "50–75 researched, verified targets/mo",
                  "Email outreach sequences",
                  "Reply handling + scheduling",
                  "$300–$450 per attended SQA",
                  "Monthly pipeline report",
                  "Typical: 1–3 conversations/mo by month 3",
                ],
                outcome: "Best for: Testing B2B outreach in your market before scaling."
              },
              {
                name: "GROWTH",
                setup: "$4,997 setup",
                monthly: "$2,000",
                sub: "/mo",
                highlight: true,
                features: [
                  "100–150 researched, verified targets/mo",
                  "Email + LinkedIn multi-touch",
                  "Reply handling + scheduling",
                  "$400–$600 per attended SQA",
                  "Monthly pipeline report + CRM access",
                  "Typical: 3–6 conversations/mo by month 3",
                ],
                outcome: "Best for: Contractors ready to actively build a commercial pipeline."
              },
              {
                name: "DOMINANT",
                setup: "$7,997 setup",
                monthly: "$3,500",
                sub: "/mo",
                highlight: false,
                features: [
                  "200–300 researched, verified targets/mo",
                  "Email + LinkedIn + phone follow-up",
                  "Project intelligence monitoring",
                  "$500–$1,000 per attended SQA",
                  "Weekly reporting + dedicated strategist",
                  "Typical: 6–12 conversations/mo by month 3",
                ],
                outcome: "Best for: Established contractors targeting large-scale contract growth."
              },
            ].map((plan) => (
              <div key={plan.name} className={`relative p-8 border ${plan.highlight ? "border-[#FF6B2B]" : "border-slate-700"}`} style={plan.highlight ? { backgroundColor: "rgba(255,107,43,0.05)" } : { backgroundColor: "rgba(255,255,255,0.02)" }}>
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF6B2B] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-1.5 whitespace-nowrap">Most Popular</div>
                )}
                <div className="text-[#FF6B2B] text-[10px] font-bold tracking-widest uppercase mb-2">{plan.setup}</div>
                <h3 className="font-display text-white text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-1 flex items-end gap-1">
                  <span className="font-display text-white text-4xl font-bold">{plan.monthly}</span>
                  <span className="text-slate-400 text-sm mb-1">{plan.sub}</span>
                </div>
                <div className="text-slate-500 text-xs mb-6">+ per Sales Qualified Appointment</div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#FF6B2B] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-slate-500 text-xs italic mb-6 border-t border-slate-800 pt-4">{plan.outcome}</div>
                <Link href="/contact">
                  <button className={`w-full font-bold py-3.5 text-xs tracking-widest uppercase transition-colors ${plan.highlight ? "bg-[#FF6B2B] hover:bg-orange-500 text-white" : "border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white"}`}>
                    Get Started →
                  </button>
                </Link>
              </div>
            ))}
          </div>
          <div className="border border-slate-700 p-6 bg-slate-900/30">
            <p className="text-slate-400 text-sm text-center leading-relaxed">
              <span className="text-white font-bold">What&apos;s a Sales Qualified Appointment?</span> A confirmed, attended meeting of 20+ minutes between your team and a verified decision-maker who has a documented project need within your service area and trade capabilities. No-shows don&apos;t count. Tire-kickers don&apos;t count. You pay for real conversations only.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 border-t border-slate-800" style={{ backgroundColor: "#1A2332" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-5">
            Ready to Start Building<br />Your Commercial Pipeline?
          </h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-xl mx-auto">
            The strategy call is free, honest, and specific to your trade and geography. We’ll show you exactly which buyers we’d target, what a realistic 6-month pipeline looks like, and what it would cost — no pressure, no pitch deck, no BS.
          </p>
          <Link href="/contact">
            <button className="bg-[#FF6B2B] hover:bg-orange-500 text-white font-bold px-10 py-4 text-xs tracking-widest uppercase flex items-center gap-3 mx-auto transition-colors">
              Book Your Free Strategy Call <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <div className="mt-7 flex flex-wrap justify-center gap-6 text-slate-500 text-xs tracking-wider">
            <span>&#128197; Available evenings &amp; weekends</span>
            <span>&#128274; Confidential — your competitors won’t know</span>
          </div>
        </div>
      </section>

      <Footer variant="commercial" />
    </div>
  );
}