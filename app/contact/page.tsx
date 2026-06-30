import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { GhlForm } from "@/components/ghl-form";
import { Phone, Mail, MapPin, Clock, Shield, CheckCircle, DollarSign, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Book a Strategy Call | The Trades Pipeline",
  description: "Schedule your free 30-minute trades growth strategy call.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav variant="residential" />
      <section className="bg-[#1A2332] pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#FF6B2B]/10 border border-[#FF6B2B]/30 text-[#FF6B2B] text-sm font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">Free Strategy Call — No Obligation</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white uppercase mb-6 leading-tight">Let&apos;s Build Your <span className="text-[#FF6B2B]">Growth Pipeline</span></h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">In 30 minutes, we&apos;ll show you exactly how many qualified leads are available in your market — and build a custom roadmap to capture them.</p>
        </div>
      </section>
      <section className="bg-[#0D1117] border-b border-slate-800 py-5 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: Shield, text: "100% Free — No Pitch Pressure" },
            { icon: Clock, text: "30-Minute Call, Max" },
            { icon: CheckCircle, text: "One Client Per Trade Per Market" },
            { icon: Phone, text: "Live Market Analysis Included" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center justify-center gap-2 text-slate-300 text-sm">
              <Icon className="w-4 h-4 text-[#FF6B2B] shrink-0" /><span>{text}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-[#1A2332] uppercase mb-4">What Happens on the Call</h2>
              <div className="space-y-5">
                {[
                  { step: "01", title: "Market Audit", desc: "We pull live search volume data for your trade + city to show exactly what demand exists right now." },
                  { step: "02", title: "Competitor Analysis", desc: "We reveal what your top competitors are spending on ads, where they rank, and where the gaps are." },
                  { step: "03", title: "Custom Roadmap", desc: "You leave with a clear, prioritized growth plan — whether you work with us or not." },
                  { step: "04", title: "No Hard Sell", desc: "If we're a fit, we'll talk next steps. If not, the audit is yours to keep. Zero pressure." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#FF6B2B] text-white font-display font-bold text-sm flex items-center justify-center shrink-0">{step}</div>
                    <div><p className="font-semibold text-[#1A2332] mb-1">{title}</p><p className="text-slate-500 text-sm leading-relaxed">{desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#FF6B2B]/5 border border-[#FF6B2B]/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="w-5 h-5 text-[#FF6B2B]" />
                <h3 className="font-display text-sm font-bold text-[#1A2332] uppercase tracking-wide">Why We Ask About Your Budget</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">We work with contractors at every stage — from $0/month in marketing spend to $5,000+. Knowing where you are helps us recommend the right starting point. There&apos;s no minimum to book a call.</p>
            </div>
            <div className="bg-[#1A2332]/5 border border-[#1A2332]/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-[#FF6B2B]" />
                <h3 className="font-display text-sm font-bold text-[#1A2332] uppercase tracking-wide">What Results Look Like at Month 3</h3>
              </div>
              <ul className="space-y-2">
                {["8–15 qualified inbound leads/month","Cost-per-lead under $85 in most markets","Google Business Profile in the top 3","Website converting 4–7% of visitors to calls"].map((item) => (
                  <li key={item} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#FF6B2B] shrink-0 mt-0.5" /><span className="text-slate-600 text-sm">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1A2332] rounded-2xl p-6 text-white">
              <h3 className="font-display text-base font-bold uppercase mb-4">Prefer to Reach Out Directly?</h3>
              <div className="space-y-3">
                <a href="tel:+13127157977" className="flex items-center gap-3 text-slate-300 hover:text-[#FF6B2B] transition-colors text-sm"><Phone className="w-4 h-4 text-[#FF6B2B]" />(312) 715-7977</a>
                <a href="mailto:davis@thetradespipeline.com" className="flex items-center gap-3 text-slate-300 hover:text-[#FF6B2B] transition-colors text-sm"><Mail className="w-4 h-4 text-[#FF6B2B]" />davis@thetradespipeline.com</a>
                <div className="flex items-center gap-3 text-slate-300 text-sm"><MapPin className="w-4 h-4 text-[#FF6B2B]" />Serving All U.S. Markets</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8">
              <h2 className="font-display text-2xl font-bold text-[#1A2332] uppercase mb-2">Book Your Free Strategy Call</h2>
              <p className="text-slate-500 text-sm mb-1">Fill out the form below and we&apos;ll follow up within 24–48 hours with your market audit.</p>
              <p className="text-slate-400 text-xs mb-6">Takes about 2 minutes. No commitment required.</p>
              <GhlForm />
            </div>
          </div>
        </div>
      </section>
      <Footer variant="residential" />
    </div>
  );
}
