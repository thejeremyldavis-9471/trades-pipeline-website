"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

// PASTE YOUR GHL WEBHOOK URL BELOW
const GHL_WEBHOOK_URL = "PASTE_WEBHOOK_URL_HERE";

const tradeTypes = [
  "HVAC / Heating & Cooling","Plumbing","Electrical","Roofing",
  "General Contracting","Concrete & Masonry","Landscaping & Hardscaping",
  "Painting","Flooring","Pest Control","Garage Doors","Windows & Doors",
  "Siding & Gutters","Foundation Repair","Tree Service","Demolition",
  "Fire & Water Restoration","Commercial Cleaning","Other"
];

const spendRanges = [
  "I'm not currently spending anything","Under $500/month",
  "$500 – $1,000/month","$1,000 – $2,500/month",
  "$2,500 – $5,000/month","$5,000+/month"
];

interface FormData {
  firstName: string; lastName: string; businessName: string;
  tradeType: string; city: string; state: string;
  phone: string; email: string; marketingSpend: string; challenge: string;
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    firstName: "", lastName: "", businessName: "", tradeType: "",
    city: "", state: "", phone: "", email: "", marketingSpend: "", challenge: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const set = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: form.firstName,
          last_name: form.lastName,
          full_name: `${form.firstName} ${form.lastName}`,
          business_name: form.businessName,
          trade_type: form.tradeType,
          city: form.city,
          state: form.state,
          phone: form.phone,
          email: form.email,
          marketing_spend: form.marketingSpend,
          challenge: form.challenge,
          source: "Website Contact Form",
          tags: ["website-lead", "strategy-call-request"]
        })
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-[#FF6B2B]/10 flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-[#FF6B2B]" />
        </div>
        <h2 className="font-display text-2xl font-bold text-[#1A2332] uppercase mb-3">
          You&apos;re on the List
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-2">
          We received your information and will be in touch within 1 business hour to schedule your free strategy call.
        </p>
        <p className="text-slate-400 text-xs">Check your email for a confirmation from davis@thetradespipeline.com</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10">
      <h2 className="font-display text-2xl font-bold text-[#1A2332] uppercase mb-2">
        Book Your Free Strategy Call
      </h2>
      <p className="text-slate-500 text-sm mb-8">
        Fill out the form below and we&apos;ll reach out within 1 business hour to schedule your call.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-[#1A2332] mb-2">
              First Name <span className="text-[#FF6B2B]">*</span>
            </label>
            <input required type="text" placeholder="John" value={form.firstName} onChange={set("firstName")}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 text-[#1A2332] text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 focus:border-[#FF6B2B] transition-all" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#1A2332] mb-2">
              Last Name <span className="text-[#FF6B2B]">*</span>
            </label>
            <input required type="text" placeholder="Smith" value={form.lastName} onChange={set("lastName")}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 text-[#1A2332] text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 focus:border-[#FF6B2B] transition-all" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#1A2332] mb-2">
            Business Name <span className="text-[#FF6B2B]">*</span>
          </label>
          <input required type="text" placeholder="Smith Plumbing & Heating" value={form.businessName} onChange={set("businessName")}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 text-[#1A2332] text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 focus:border-[#FF6B2B] transition-all" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#1A2332] mb-2">
            Trade / Service Type <span className="text-[#FF6B2B]">*</span>
          </label>
          <select required value={form.tradeType} onChange={set("tradeType")}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 text-[#1A2332] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 focus:border-[#FF6B2B] transition-all bg-white">
            <option value="">Select your trade...</option>
            {tradeTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-[#1A2332] mb-2">
              City <span className="text-[#FF6B2B]">*</span>
            </label>
            <input required type="text" placeholder="Columbus" value={form.city} onChange={set("city")}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 text-[#1A2332] text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 focus:border-[#FF6B2B] transition-all" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#1A2332] mb-2">
              State <span className="text-[#FF6B2B]">*</span>
            </label>
            <input required type="text" placeholder="OH" maxLength={2} value={form.state} onChange={set("state")}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 text-[#1A2332] text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 focus:border-[#FF6B2B] transition-all" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-[#1A2332] mb-2">
              Phone Number <span className="text-[#FF6B2B]">*</span>
            </label>
            <input required type="tel" placeholder="(614) 555-0100" value={form.phone} onChange={set("phone")}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 text-[#1A2332] text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 focus:border-[#FF6B2B] transition-all" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#1A2332] mb-2">
              Email Address <span className="text-[#FF6B2B]">*</span>
            </label>
            <input required type="email" placeholder="john@smithplumbing.com" value={form.email} onChange={set("email")}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 text-[#1A2332] text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 focus:border-[#FF6B2B] transition-all" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#1A2332] mb-2">
            Current Monthly Marketing Spend
          </label>
          <select value={form.marketingSpend} onChange={set("marketingSpend")}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 text-[#1A2332] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 focus:border-[#FF6B2B] transition-all bg-white">
            <option value="">Select a range...</option>
            {spendRanges.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#1A2332] mb-2">
            What&apos;s Your Biggest Marketing Challenge Right Now?
          </label>
          <textarea rows={4} placeholder="e.g. We rely entirely on word of mouth and need consistent leads..." value={form.challenge} onChange={set("challenge")}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 text-[#1A2332] text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 focus:border-[#FF6B2B] transition-all resize-none" />
        </div>

        {status === "error" && (
          <p className="text-red-500 text-sm text-center">
            Something went wrong. Please try again or call us directly at (312) 715-7977.
          </p>
        )}

        <button type="submit" disabled={status === "submitting"}
          className="w-full bg-[#FF6B2B] hover:bg-[#e55a1f] disabled:opacity-60 disabled:cursor-not-allowed text-white font-display font-bold text-lg uppercase tracking-widest py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 group">
          {status === "submitting" ? "Sending..." : (
            <>Book My Free Strategy Call <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
          )}
        </button>

        <p className="text-center text-slate-400 text-xs leading-relaxed">
          By submitting, you agree to be contacted about your strategy call. We never share your information.
        </p>
      </form>
    </div>
  );
}
