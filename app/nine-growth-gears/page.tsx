"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Users, BarChart3, Settings, DollarSign, ShieldCheck, Network, Package, Building2, HardHat, Target, MapPin, Clock3 } from "lucide-react";
import { Nav } from "@/components/nav";

const gears = [
  {name:"People",Icon:Users,copy:"Growth eventually asks more of people—not simply more people."},
  {name:"Sales",Icon:BarChart3,copy:"More opportunity only creates value when the business can support it."},
  {name:"Operations",Icon:Settings,copy:"Operations determine how effectively opportunity becomes completed work."},
  {name:"Financial Capacity",Icon:DollarSign,copy:"Growth consumes resources before it creates returns."},
  {name:"Safety",Icon:ShieldCheck,copy:"Sustainable growth cannot come at the expense of the people creating it."},
  {name:"Systems",Icon:Network,copy:"A business becomes stronger when capability exists beyond individual memory."},
  {name:"Inventory",Icon:Package,copy:"What's on hand should support what's coming next."},
  {name:"Facilities",Icon:Building2,copy:"Physical infrastructure should support the business—not quietly constrain it."},
  {name:"Equipment",Icon:HardHat,copy:"Equipment creates leverage when it matches the work being asked of it."},
] as const;

type GearName = typeof gears[number]["name"];
const gearByName = Object.fromEntries(gears.map(g=>[g.name,g])) as Record<GearName, typeof gears[number]>;

const paths: Record<GearName,{name:GearName,title:string,copy:string}[]> = {
  "Sales":[
    {name:"Sales",title:"Opportunity enters the system.",copy:"Demand increases and more is asked of the business."},
    {name:"Operations",title:"Operations absorbs more work.",copy:"Scheduling, coordination and throughput come under pressure."},
    {name:"People",title:"People carry more load.",copy:"Leadership, field capacity and development become more critical."},
    {name:"Equipment",title:"Equipment & inventory respond.",copy:"More output requires more supporting capacity and readiness."},
    {name:"Inventory",title:"Inventory must support output.",copy:"Availability and replenishment become part of the constraint."},
    {name:"Financial Capacity",title:"Financial capacity is tested.",copy:"Growth requires resources before all of its returns arrive."},
  ],
  "People":[
    {name:"People",title:"People capacity changes.",copy:"More responsibility, leadership and field capability are required."},
    {name:"Operations",title:"Operations feels the effect.",copy:"Capacity changes alter scheduling, throughput and execution."},
    {name:"Systems",title:"Systems carry more weight.",copy:"Repeatability matters more as responsibility spreads."},
    {name:"Safety",title:"Safety pressure changes.",copy:"Growth must remain supportable for the people doing the work."},
    {name:"Financial Capacity",title:"Investment is required.",copy:"Hiring, development and support consume resources before returns arrive."},
  ],
  "Operations":[
    {name:"Operations",title:"Work pressure changes.",copy:"Scheduling, coordination and throughput become more demanding."},
    {name:"People",title:"People absorb the load.",copy:"Leadership and field capacity determine what can actually be carried."},
    {name:"Systems",title:"Systems are tested.",copy:"Weak handoffs and tribal knowledge become more visible."},
    {name:"Equipment",title:"Equipment must keep pace.",copy:"The work may require more or different supporting capability."},
    {name:"Financial Capacity",title:"Capacity has a cost.",copy:"Operational expansion requires resources before it creates returns."},
  ],
  "Financial Capacity":[
    {name:"Financial Capacity",title:"Resources define the boundary.",copy:"Growth consumes cash and capacity before all returns arrive."},
    {name:"People",title:"People decisions respond.",copy:"Hiring and development depend on what the business can responsibly support."},
    {name:"Equipment",title:"Equipment choices respond.",copy:"Capital availability affects leverage and readiness."},
    {name:"Inventory",title:"Inventory is constrained.",copy:"Working capital influences what can be held for future demand."},
    {name:"Facilities",title:"Expansion must be supportable.",copy:"Physical capacity often requires long-horizon investment."},
  ],
  "Safety":[
    {name:"Safety",title:"Safe capacity sets the boundary.",copy:"Growth cannot sustainably exceed what people can execute safely."},
    {name:"People",title:"People carry the exposure.",copy:"Training, supervision and workload become more important."},
    {name:"Operations",title:"Operations must adapt.",copy:"Throughput cannot come at the expense of disciplined execution."},
    {name:"Systems",title:"Systems reinforce consistency.",copy:"Clear processes reduce dependence on memory and improvisation."},
    {name:"Financial Capacity",title:"Protection requires investment.",copy:"Training, equipment and controls require resources."},
  ],
  "Systems":[
    {name:"Systems",title:"Repeatability changes.",copy:"The business either carries knowledge consistently or depends on individuals."},
    {name:"People",title:"People gain—or lose—leverage.",copy:"Good systems expand what capable people can reliably carry."},
    {name:"Operations",title:"Operations becomes more predictable.",copy:"Handoffs, scheduling and throughput improve when information flows."},
    {name:"Inventory",title:"Inventory becomes more visible.",copy:"Better information changes purchasing and readiness decisions."},
    {name:"Financial Capacity",title:"Waste becomes measurable.",copy:"System quality influences how efficiently resources are used."},
  ],
  "Inventory":[
    {name:"Inventory",title:"Availability changes.",copy:"What is on hand affects what the business can execute next."},
    {name:"Operations",title:"Operations feels shortages first.",copy:"Missing material disrupts scheduling and throughput."},
    {name:"People",title:"People lose productive time.",copy:"Teams compensate when the right material is not ready."},
    {name:"Financial Capacity",title:"Working capital is committed.",copy:"Too much and too little inventory both carry a cost."},
    {name:"Sales",title:"Customer promises are affected.",copy:"Availability can influence lead times and what can responsibly be sold."},
  ],
  "Facilities":[
    {name:"Facilities",title:"Physical capacity sets limits.",copy:"Space and layout influence what the business can support."},
    {name:"Operations",title:"Workflow responds.",copy:"Movement, staging and throughput depend on the environment."},
    {name:"People",title:"People work inside the constraint.",copy:"Layout and capacity affect productivity and supervision."},
    {name:"Equipment",title:"Equipment needs a home.",copy:"New capability may require space, utilities and access."},
    {name:"Financial Capacity",title:"Expansion requires capital.",copy:"Physical growth often creates significant investment decisions."},
  ],
  "Equipment":[
    {name:"Equipment",title:"Leverage changes.",copy:"Capability rises only when equipment matches the work being asked of it."},
    {name:"Operations",title:"Throughput responds.",copy:"Equipment availability can accelerate—or constrain—completed work."},
    {name:"People",title:"People capacity changes.",copy:"The right equipment can reduce burden and expand productive capability."},
    {name:"Inventory",title:"Supporting material follows.",copy:"More output changes what must be available and when."},
    {name:"Financial Capacity",title:"Capital is tested.",copy:"Equipment creates leverage only when the investment is supportable."},
  ],
};

function GearDisc({Icon,active=false,size="md"}:{Icon:any,active?:boolean,size?:"sm"|"md"|"lg"}){
  const dim=size==="lg"?"h-24 w-24":size==="sm"?"h-16 w-16":"h-20 w-20";
  const inner=size==="lg"?"h-11 w-11":size==="sm"?"h-8 w-8":"h-10 w-10";
  return <div className={`${dim} relative flex shrink-0 items-center justify-center rounded-full border-[8px] transition-all duration-300 ${active?"border-[#ef5b0a] shadow-[0_0_24px_rgba(239,91,10,.7)]":"border-[#4b4d4a]"} bg-[#151819]`}><div className="absolute inset-[-8px] rounded-full border border-[#8a887f]/50"/><Icon className={`${inner} relative z-10 text-[#ef5b0a]`}/></div>
}

export default function NineGrowthGearsPage(){
  const [active,setActive]=useState<GearName>("Sales");
  const flow=paths[active];
  return <><Nav/><main className="bg-[#0d1012] text-[#f2efe7]">
<section className="border-b border-white/10"><div className="mx-auto grid max-w-[1500px] lg:grid-cols-[36%_64%]"><div className="px-7 py-10 lg:px-12 lg:py-12"><h1 className="font-display text-[clamp(3.6rem,5vw,5.6rem)] font-bold uppercase leading-[.92]">The Nine<br/>Growth Gears™</h1><h2 className="mt-4 font-display text-2xl uppercase text-[#ef5b0a]">A Business Doesn't Grow One Part at a Time.</h2><p className="mt-5 max-w-[440px] text-[14px] leading-6 text-white/85">Every area of a business influences another. Growth in Sales affects Operations. Operations places demands on People. People require Systems. Systems affect Financial Capacity. Financial Capacity determines what the business can support next.</p><p className="mt-5 font-display text-xl">The question isn't whether each part works.</p><p className="mt-1 font-display text-xl text-[#ef5b0a]">It's whether they work together.</p></div><div className="min-h-[470px] bg-[#0a0c0e]" style={{backgroundImage:"url(/hero-growth-system.png)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain"}}/></div></section>

<section className="bg-[#f2eee6] text-[#111416]"><div className="mx-auto max-w-[1500px] px-7 py-7 lg:px-12"><h2 className="font-display text-3xl uppercase">The Nine Growth Gears™</h2><div className="mt-3 h-[3px] w-12 bg-[#ef5b0a]"/><div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{gears.map(({name,Icon,copy})=><div key={name} className="flex min-h-[126px] items-center gap-4 rounded-sm border border-black/15 bg-white/35 px-5 py-4 shadow-sm"><GearDisc Icon={Icon}/><div><h3 className="font-display text-xl uppercase">{name}</h3><p className="mt-1 text-[13px] leading-5">{copy}</p></div></div>)}</div></div></section>

<section className="relative overflow-hidden border-y border-white/10 bg-[#101315]"><div className="absolute inset-0 opacity-20" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",backgroundSize:"30px 30px"}}/><div className="relative mx-auto max-w-[1500px] px-7 py-9 lg:px-12"><div className="grid gap-8 lg:grid-cols-[245px_1fr]"><aside><h2 className="font-display text-3xl uppercase">No Gear Operates Alone.</h2><div className="mt-3 h-[3px] w-12 bg-[#ef5b0a]"/><p className="mt-4 text-[14px] leading-5 text-white/80">Click a Gear to see how influence travels through the system.</p><div className="mt-5 space-y-1">{gears.map(({name,Icon})=><button type="button" key={name} onClick={()=>setActive(name)} className={`flex w-full items-center gap-2 border px-2 py-1.5 text-left text-[12px] uppercase transition ${active===name?"border-[#ef5b0a] bg-[#ef5b0a]/10 text-[#ef5b0a]":"border-transparent text-white/75 hover:border-white/20 hover:text-white"}`}><Icon className="h-4 w-4"/>{name}</button>)}</div></aside><div className="min-w-0"><div className="flex items-center gap-3 overflow-x-auto pb-3 lg:overflow-visible">{flow.map(({name,title,copy},i)=>{const Icon=gearByName[name].Icon;return <div key={`${active}-${name}-${i}`} className="contents"><div className="min-w-[145px] flex-1"><div className="flex justify-center"><GearDisc Icon={Icon} active={i===0} size="lg"/></div><div className="mt-4 min-h-[38px] text-center font-display text-[13px] uppercase text-[#ef5b0a]">{title}</div><p className="mx-auto mt-2 max-w-[165px] text-center text-[12px] leading-5 text-white/75">{copy}</p></div>{i<flow.length-1&&<div className="relative h-[2px] min-w-8 flex-1 bg-[#ef5b0a] shadow-[0_0_10px_rgba(239,91,10,.8)]"><ArrowRight className="absolute -right-1 -top-[11px] h-6 w-6 text-[#ef5b0a]"/></div>}</div>})}</div><div className="mx-auto mt-7 max-w-[820px] border border-[#a74316] px-5 py-2 text-center font-display text-xl uppercase">The Bottleneck May Not Be Where The Growth Began.</div><p className="mt-2 text-center text-[11px] text-white/50">Every business responds differently. These connections illustrate influence—not predetermined outcomes.</p></div></div></div></section>

<section className="bg-[#f2eee6] text-[#111416]"><div className="mx-auto grid max-w-[1500px] gap-8 px-7 py-8 lg:grid-cols-2 lg:px-12"><div className="border-r-0 lg:border-r lg:border-black/20 lg:pr-10"><h2 className="font-display text-3xl uppercase">Pressure Doesn't Always Stay Where It Starts.</h2><div className="mt-3 h-[3px] w-12 bg-[#ef5b0a]"/><div className="mt-5 space-y-3 text-[13px]">{[[BarChart3,"A Sales problem may actually be a People problem."],[Settings,"An Operations problem may originate in Systems."],[DollarSign,"An Equipment constraint may really be Financial Capacity."],[Users,"A hiring problem may actually be Leadership."]].map(([I,t]:any)=><div key={t} className="flex gap-3"><I className="h-5 w-5 shrink-0 text-[#ef5b0a]"/><span>{t}</span></div>)}</div><div className="mt-6 border border-[#c95016] p-4"><div className="font-display uppercase">Treating the symptom can strengthen the wrong gear.</div><div className="mt-1 text-[13px] font-semibold">Truth before assumption.</div><div className="text-[13px]">Before prescribing a solution, understand the system.</div></div></div><div><h2 className="font-display text-3xl uppercase">Synchronization ≠ Perfection.</h2><div className="mt-3 h-[3px] w-12 bg-[#ef5b0a]"/><p className="mt-5 text-[14px] leading-6">The goal isn't nine perfect gears.<br/>That's impossible. And probably undesirable.</p><p className="mt-4 text-[14px] leading-6">A business doesn't need maximum capability everywhere. It needs the right capability, in the right places, at the right time, to support where leadership intends to go.</p><div className="mt-5 bg-[#111416] p-5 text-white"><div className="font-display text-center text-2xl uppercase">That's Growth Synchronization™.</div><div className="mt-4 grid grid-cols-3 divide-x divide-white/20 text-center text-[12px]"><div><Target className="mx-auto mb-2 h-7 w-7 text-[#ef5b0a]"/>Right capability</div><div><MapPin className="mx-auto mb-2 h-7 w-7 text-[#ef5b0a]"/>Right places</div><div><Clock3 className="mx-auto mb-2 h-7 w-7 text-[#ef5b0a]"/>Right time</div></div></div></div></div></section>

<section className="bg-[#0d1012]"><div className="mx-auto grid max-w-[1500px] items-center gap-6 px-7 py-5 lg:grid-cols-[1.3fr_1fr_.8fr] lg:px-12"><div className="flex items-center gap-4"><ShieldCheck className="h-14 w-14 text-white"/><div><h2 className="font-display text-2xl uppercase">Every Business Has Nine Gears.</h2><p className="font-display text-xl uppercase text-[#ef5b0a]">They Don't All Need Attention at Once.</p></div></div><p className="text-[12px] leading-5 text-white/75">Understanding which ones do—and how they influence the rest—is where better growth decisions begin.</p><div className="text-right"><Link href="/approach" className="inline-flex items-center gap-4 bg-[#c94f0a] px-7 py-3 font-display uppercase">Explore Our Approach <ArrowRight className="h-4 w-4"/></Link><Link href="/conversation" className="mt-3 inline-flex items-center gap-3 font-display text-sm uppercase">Begin an Executive Conversation <ArrowRight className="h-4 w-4"/></Link></div></div></section>
</main></>}
