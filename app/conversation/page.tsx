import Link from "next/link";
import { ArrowRight, CheckSquare, FileText, Handshake, LockKeyhole, Mail, MapPin, MessageSquareText, Phone, ShieldCheck, Users } from "lucide-react";
import { Nav } from "@/components/nav";
import { GhlForm } from "@/components/ghl-form";

export const metadata = {
  title: "Begin an Executive Conversation | The Trades Pipeline",
  description: "Start a confidential executive conversation with The Trades Pipeline. No presentation, predetermined answers or sales pitch.",
};

const steps = [
  ["01", CheckSquare, "We Review It.", "Your message comes directly to The Trades Pipeline—not into an automated sales sequence."],
  ["02", Phone, "We Reach Out.", "We’ll contact you to arrange an initial executive conversation."],
  ["03", Users, "We Talk.", "We ask questions, listen and determine whether there’s something worth exploring further."],
  ["04", Handshake, "We Both Decide.", "If there’s a meaningful fit, we’ll determine the appropriate next step together."],
] as const;

export default function ConversationPage() {
  return <><Nav/><main className="bg-[#eee8dc] text-[#11181d]">
    <section className="border-b border-black/20">
      <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[35%_65%]">
        <div className="relative z-10 flex flex-col justify-center bg-[#eee8dc] px-7 py-10 lg:px-10 lg:py-12">
          <h1 className="font-display text-[clamp(3.9rem,6vw,6.8rem)] font-semibold uppercase leading-[.92] tracking-[-.02em]">Begin an<br/>Executive<br/>Conversation</h1>
          <div className="mt-5 h-[2px] w-14 bg-[#d94d12]"/>
          <p className="mt-5 font-display text-[clamp(1.45rem,2vw,2.1rem)] uppercase leading-tight text-[#c94210]">No presentation.<br/>No predetermined answers.<br/>No sales pitch.</p>
          <p className="mt-5 max-w-[380px] text-[14px] leading-6">Just a conversation about your business, where you want it to go, and what may be standing between here and there.</p>
        </div>
        <div className="relative min-h-[390px] overflow-hidden lg:min-h-[540px]"><img src="/conversation-hero.png" alt="Two chairs, TTP coffee mugs and an operating blueprint prepared for an executive conversation" className="absolute inset-0 h-full w-full object-cover object-center"/></div>
      </div>
    </section>

    <section className="mx-auto grid max-w-[1500px] lg:grid-cols-[55%_45%]">
      <div className="border-black/20 px-6 py-8 lg:border-r lg:px-10">
        <h2 className="font-display text-3xl uppercase">We’ll Start by <span className="text-[#c94210]">Listening.</span></h2>
        <p className="mt-3 max-w-[590px] text-[13px] leading-5">You don’t need to prepare a presentation.<br/>You don’t need to know exactly what the problem is.<br/>And you don’t need to decide whether The Trades Pipeline is right for your business before we speak.</p>
        <p className="mt-3 font-display text-base text-[#c94210]">That’s what the conversation is for.</p>
        <div className="mt-6 overflow-hidden border border-black/15 bg-white shadow-[0_12px_35px_rgba(25,20,15,.08)]"><GhlForm/></div>
        <p className="mt-3 text-[11px] text-black/55">Your information is submitted securely through our connected conversation form.</p>
      </div>

      <aside className="bg-[#071116] px-7 py-8 text-[#f2eee6] lg:px-10">
        <h2 className="font-display text-3xl uppercase text-[#d9d2c7]">What Happens Next?</h2>
        <div className="mt-6 divide-y divide-white/20">{steps.map(([number,Icon,title,copy])=><div key={number} className="flex gap-5 py-6 first:pt-2"><div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/65"><Icon className="h-7 w-7"/></div><div><div className="flex items-baseline gap-4"><span className="font-display text-2xl text-[#e65312]">{number}</span><h3 className="font-display text-xl uppercase text-[#d9d2c7]">{title}</h3></div><p className="mt-2 text-[12px] leading-5 text-white/70">{copy}</p></div></div>)}</div>
        <div className="mt-6 border border-[#a7431a] p-5"><div className="flex gap-4"><ShieldCheck className="h-11 w-11 shrink-0 text-[#e65312]"/><div><h3 className="font-display text-xl uppercase text-[#e65312]">What This Isn’t.</h3><p className="mt-2 text-[12px] leading-5 text-white/75"><strong className="text-white">It isn’t a commitment.</strong><br/>Starting a conversation doesn’t obligate you to work with The Trades Pipeline—and it doesn’t presume we’ll recommend that you do.</p><p className="mt-3 font-display text-base text-[#e65312]">Sometimes a good conversation is simply a good conversation.</p></div></div></div>
      </aside>
    </section>

    <section className="border-y border-black/20 bg-[#f4efe6]"><div className="mx-auto grid max-w-[1500px] lg:grid-cols-2">
      <div className="flex gap-6 border-black/20 px-7 py-7 lg:border-r lg:px-10"><div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-black/50"><LockKeyhole className="h-9 w-9"/></div><div><h2 className="font-display text-2xl uppercase">Your Business Stays Your Business.</h2><p className="mt-2 max-w-[500px] text-[12px] leading-5">Anything you share with us is treated with discretion. We don’t sell your information, publish your business challenges or use your conversation as marketing material without permission.</p></div></div>
      <div className="flex gap-6 px-7 py-7 lg:px-10"><div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-black/50"><FileText className="h-9 w-9"/></div><div><h2 className="font-display text-2xl uppercase">Received an Executive Growth Intelligence Brief?</h2><p className="mt-2 max-w-[500px] text-[12px] leading-5">If we contacted you following an Independent Executive Assessment, you’re welcome to reference the document number within your message.</p></div></div>
    </div></section>

    <section className="bg-[#071116] text-white"><div className="mx-auto grid max-w-[1500px] lg:grid-cols-[40%_60%]"><div className="flex flex-col justify-center px-7 py-8 lg:px-10"><h2 className="font-display text-[clamp(2.4rem,4vw,4rem)] uppercase leading-tight text-[#d9d2c7]">Every Partnership<br/>Starts the Same Way.</h2><p className="mt-2 font-display text-3xl text-[#e65312]">With a conversation.</p></div><div className="relative min-h-[220px] overflow-hidden"><img src="/conversation-table.png" alt="TTP executive conversation table" className="absolute inset-0 h-full w-full object-cover object-center"/></div></div></section>

    <footer className="bg-[#05090b] text-white"><div className="mx-auto max-w-[1500px] px-7 py-7 lg:px-10">
      <div className="grid gap-7 border-b border-white/20 pb-6 md:grid-cols-[1fr_1fr_1.2fr]"><div><img src="/ttp-logo-site.png" alt="The Trades Pipeline" className="h-14 w-auto"/></div><div className="flex gap-3 text-[12px] leading-5 text-white/70"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#e65312]"/><span>205 North Michigan Ave., Suite 810<br/>Chicago, IL 60601</span></div><div className="grid gap-2 text-[12px] text-white/70"><a href="tel:+13127157977" className="flex items-center gap-3 hover:text-white"><Phone className="h-4 w-4 text-[#e65312]"/>(312) 715-7977</a><a href="mailto:davis@thetradespipeline.com" className="flex items-center gap-3 hover:text-white"><Mail className="h-4 w-4 text-[#e65312]"/>davis@thetradespipeline.com</a></div></div>
      <div className="flex justify-end gap-5 pt-4 text-[10px] text-white/45"><Link href="/foundation">Our Foundation</Link><Link href="/insights">Insights</Link></div>
    </div></footer>
  </main></>;
}
