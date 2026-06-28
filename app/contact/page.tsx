import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CheckCircle, Phone, Mail, MapPin, Clock, Shield, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Book a Strategy Call | The Trades Pipeline",
  description: "Schedule your free 30-minute trades growth strategy call.",
};

const tradeTypes = ["HVAC / Heating & Cooling","Plumbing","Electrical","Roofing","General Contracting","Concrete & Masonry","Landscaping & Hardscaping","Painting","Flooring","Pest Control","Garage Doors","Windows & Doors","Siding & Gutters","Foundation Repair","Tree Service","Demolition","Fire & Water Restoration","Commercial Cleaning","Other"];
const spendRanges = ["I'm not currently spending anything","Under $500/month","$500 – $1,000/month","$1,000 – $2,500/month","$2,500 – $5,000/month","$5,000+/month"];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav variant="residential" />
      <section className="bg-[#1A2332] pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#FF6B2B]/10 border border-[#FF6B2B]/30 text-[#FF6B2B] text-sm font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">Free Strategy Call &#8212; No Obligation</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white uppercase mb-6 leading-tight">Let&apos;s Build Your <span className="text-[#FF6B2B]">Growth Pipeline</span></h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">In 30 minutes, we&apos;ll show you exactly how many qualified leads are available in your market &#8212; and build a custom roadmap to capture them.</p>
        </div>
      </section>
      <section className="bg-[#0D1117] border-b border-slate-800 py-5 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[{icon: Shield, text: "100% Free &#8212; No Pitch Pressure"},{icon: Clock, text: "30-Minute Call, Max"},{icon: CheckCircle, text: "One Client Per Trade Per Market"},{icon: Phone, text: "Live Market Analysis Included"}].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center justify-center gap-2 text-slate-300 text-sm"><Icon className="w-4 h-4 text-[#FF6B2B] shrink-0" /><span dangerouslySetInnerHTML={{__html: text}} /></div>
          ))}
        </div>
      </section>
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-[#1A2332] uppercase mb-4">What Happens on the Call</h2>
              <div className="space-y-5">
                {[{step:"01",title:"Market Audit",desc:"We pull live search volume data for your trade + city to show exactly what demand exists right now."},{step:"02",title:"Competitor Analysis",desc:"We reveal what your top competitors are spending on ads, where they rank, and where the gaps are."},{step:"03",title:"Custom Roadmap",desc:"You leave with a clear, prioritized growth plan &#8212; whether you work with us or not."},{step:"04",title:"No Hard Sell",desc:"If we're a fit, we'll talk next steps. If not, the audit is yours to keep. Zero pressure."}].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4"><div className="w-10 h-10 rounded-full bg-[#FF6B2B] text-white font-display font-bold text-sm flex items-center justify-center shrink-0">{step}</div><div><p className="font-semibold text-[#1A2332] mb-1">{title}</p><p className="text-slate-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{__html: desc}} /></div></div>
                ))}
              </div>
            </div>
            <div className="bg-[#1A2332] rounded-2xl p-6 text-white">
              <h3 className="font-display text-lg font-bold uppercase mb-4">Prefer to Reach Out Directly?</h3>
              <div className="space-y-3">
                <a href="tel:+13127157977" className="flex items-center gap-3 text-slate-300 hover:text-[#FF6B2B] transition-colors text-sm"><Phone className="w-4 h-4 text-[#FF6B2B]" />(312) 715-7977</a>
                <a href="mailto:davis@thetradespipeline.com" className="flex items-center gap-3 text-slate-300 hover:text-[#FF6B2B] transition-colors text-sm"><Mail className="w-4 h-4 text-[#FF6B2B]" />davis@thetradespipeline.com</a>
                <div className="flex items-center gap-3 text-slate-300 text-sm"><MapPin className="w-4 h-4 text-[#FF6B2B]" />Serving All U.S. Markets</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10">
              <h2 className="font-display text-2xl font-bold text-[#1A2332] uppercase mb-2">Book Your Free Strategy Call</h2>
              <p className="text-slate-500 text-sm mb-8">Fill out the form below and we&apos;ll reach out within 1 business hour to schedule your call.</p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-semibold text-[#1A2332] mb-2">Your Name <span className="text-[#FF6B2B]">*</span></label><input type="text" placeholder="John Smith" className="w-full px-4 py-3 rounded-lg border border-slate-200 text-[#1A2332] text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 focus:border-[#FF6B2B] transition-all" /></div>
                  <div><label className="block text-sm font-semibold text-[#1A2332] mb-2">Business Name <span className="text-[#FF6B2B]">*</span></label><input type="text" placeholder="Smith Plumbing & Heating" className="w-full px-4 py-3 rounded-lg border border-slate-200 text-[#1A2332] text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 focus:border-[#FF6B2B] transition-all" /></div>
                </div>
                <div><label className="block text-sm font-semibold text-[#1A2332] mb-2">Trade / Service Type <span className="text-[#FF6B2B]">*</span></label><select className="w-full px-4 py-3 rounded-lg border border-slate-200 text-[#1A2332] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 focus:border-[#FF6B2B] transition-all bg-white"><option value="">Select your trade...</option>{tradeTypes.map((t) => (<option key={t} value={t}>{t}</option>))}</select></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-semibold text-[#1A2332] mb-2">City <span className="text-[#FF6B2B]">*</span></label><input type="text" placeholder="Columbus" className="w-full px-4 py-3 rounded-lg border border-slate-200 text-[#1A2332] text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 focus:border-[#FF6B2B] transition-all" /></div>
                  <div><label className="block text-sm font-semibold text-[#1A2332] mb-2">State <span className="text-[#FF6B2B]">*</span></label><input type="text" placeholder="OH" maxLength={2} className="w-full px-4 py-3 rounded-lg border border-slate-200 text-[#1A2332] text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 focus:border-[#FF6B2B] transition-all" /></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-semibold text-[#1A2332] mb-2">Phone Number <span className="text-[#FF6B2B]">*</span></label><input type="tel" placeholder="(614) 555-0100" className="w-full px-4 py-3 rounded-lg border border-slate-200 text-[#1A2332] text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 focus:border-[#FF6B2B] transition-all" /></div>
                  <div><label className="block text-sm font-semibold text-[#1A2332] mb-2">Email Address <span className="text-[#FF6B2B]">*</span></label><input type="email" placeholder="john@smithplumbing.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 text-[#1A2332] text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 focus:border-[#FF6B2B] transition-all" /></div>
                </div>
                <div><label className="block text-sm font-semibold text-[#1A2332] mb-2">Current Monthly Marketing Spend</label><select className="w-full px-4 py-3 rounded-lg border border-slate-200 text-[#1A2332] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 focus:border-[#FF6B2B] transition-all bg-white"><option value="">Select a range...</option>{spendRanges.map((r) => (<option key={r} value={r}>{r}</option>))}</select></div>
                <div><label className="block text-sm font-semibold text-[#1A2332] mb-2">What&apos;s Your Biggest Marketing Challenge Right Now?</label><textarea rows={4} placeholder="e.g. We rely entirely on word of mouth..." className="w-full px-4 py-3 rounded-lg border border-slate-200 text-[#1A2332] text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 focus:border-[#FF6B2B] transition-all resize-none" /></div>
                <button type="submit" className="w-full bg-[#FF6B2B] hover:bg-[#e55a1f] text-white font-display font-bold text-lg uppercase tracking-widest py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 group">Book My Free Strategy Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></button>
                <p className="text-center text-slate-400 text-xs leading-relaxed">By submitting, you agree to be contacted about your strategy call. We never share your information.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer variant="residential" />
    </div>
  );
}