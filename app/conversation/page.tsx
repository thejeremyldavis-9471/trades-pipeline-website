import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { GhlForm } from "@/components/ghl-form";

const next = [
  ["01", "We review it.", "Your message comes directly to The Trades Pipeline—not into an automated sales sequence."],
  ["02", "We reach out.", "We'll contact you to arrange an initial executive conversation."],
  ["03", "We talk.", "We ask questions, listen and determine whether there is something worth exploring further."],
  ["04", "We both decide.", "If there is a meaningful fit, we'll determine the appropriate next step together."],
] as const;

export default function ConversationPage() {
  return <><Nav /><main>
    <section className="bg-[#f2efe8] py-20"><div className="section-shell"><div className="max-w-5xl"><div className="eyebrow">Begin an Executive Conversation</div><h1 className="mt-5 font-display text-5xl font-bold uppercase leading-tight sm:text-7xl">No presentation.<br/>No predetermined answers.<br/><span className="text-[#c85a24]">No sales pitch.</span></h1><p className="mt-7 max-w-3xl text-xl leading-9 text-slate-600">Just a conversation about your business, where you want it to go, and what may be standing between here and there.</p></div></div></section>
    <section className="bg-white py-20"><div className="section-shell grid gap-12 lg:grid-cols-[1.1fr_.9fr]"><div><div className="eyebrow">We'll Start by Listening</div><h2 className="mt-4 font-display text-4xl font-bold uppercase">You don't need to diagnose the problem before we speak.</h2><p className="mt-6 text-lg leading-8 text-slate-600">You don't need to prepare a presentation. You don't need to decide whether The Trades Pipeline is right for your business before we speak. That's what the conversation is for.</p><div className="mt-10 border border-slate-200 bg-[#f7f5f0] p-7"><h3 className="font-display text-2xl font-bold uppercase">Your business stays your business.</h3><p className="mt-4 leading-7 text-slate-600">Anything you share with us is treated with discretion. We don't sell your information, publish your business challenges or use your conversation as marketing material without permission.</p></div></div><div className="overflow-hidden border border-slate-200 bg-white p-2 shadow-xl"><GhlForm /></div></div></section>
    <section className="bg-[#1b232b] py-20 text-white"><div className="section-shell"><div className="eyebrow">What Happens Next?</div><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{next.map(([n,title,body])=><div key={n} className="border border-white/10 p-7"><div className="text-xs font-bold tracking-[.25em] text-[#c85a24]">{n}</div><h2 className="mt-4 font-display text-2xl font-bold uppercase">{title}</h2><p className="mt-4 text-sm leading-7 text-slate-400">{body}</p></div>)}</div><div className="mt-10 border-l-4 border-[#c85a24] pl-6"><div className="font-display text-2xl font-bold uppercase">What this isn't.</div><p className="mt-3 max-w-3xl text-slate-400">It isn't a commitment. Starting a conversation doesn't obligate you to work with The Trades Pipeline—and it doesn't presume we'll recommend that you do. Sometimes a good conversation is simply a good conversation.</p></div></div></section>
    <section className="bg-[#f2efe8] py-20"><div className="section-shell text-center"><h2 className="font-display text-4xl font-bold uppercase">Every partnership starts the same way.</h2><div className="mt-4 font-display text-3xl text-[#c85a24]">With a conversation.</div></div></section>
  </main><Footer /></>;
}
