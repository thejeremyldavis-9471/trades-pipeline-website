"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Home, Building } from "lucide-react";

export function GatewayPage() {
  const [hovered, setHovered] = useState<"residential" | "commercial" | null>(null);

  const residentialTrades = ["HVAC", "Plumbing", "Electrical", "Roofing", "Concrete", "More"];
  const commercialTypes = ["GC & Sub", "Property Mgmt", "Government", "Industrial", "Healthcare"];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#0D1117]">
      {/* Logo Header */}
      <div className="absolute top-0 left-0 right-0 z-30 flex flex-col items-center pt-6 pb-4 pointer-events-none">
        <Image
          src="https://galaxy-prod.tlcdn.com/view/user_31zSEYkIqFE7G8QvjEYZMUQmYpQ/4972675eac784e168821288e8eb72782.png"
          alt="The Trades Pipeline"
          width={220}
          height={220}
          className="w-36 h-36 md:w-52 md:h-52 object-contain drop-shadow-2xl"
          priority
        />
      </div>

      <div className="flex flex-col md:flex-row flex-1 min-h-screen">
        {/* LEFT: Residential */}
        <motion.div
          className="relative flex items-center justify-center cursor-pointer overflow-hidden"
          style={{ backgroundColor: "#1A2332", minHeight: "50vh" }}
          animate={{ flex: hovered === "residential" ? 1.55 : hovered === "commercial" ? 0.45 : 1 }}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          onMouseEnter={() => setHovered("residential")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
          <motion.div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 35% 55%, rgba(255,107,43,0.14) 0%, transparent 65%)" }} animate={{ opacity: hovered === "residential" ? 1 : 0 }} transition={{ duration: 0.35 }} />
          <div className="absolute right-0 top-[20%] bottom-[20%] w-px bg-[#FF6B2B] opacity-30 hidden md:block" />
          <Link href="/residential" className="relative z-10 w-full block">
            <motion.div className="text-center px-8 md:px-14 max-w-lg mx-auto pt-48 pb-12 md:pt-24 md:pb-0" animate={{ scale: hovered === "residential" ? 1.03 : 1 }} transition={{ duration: 0.35 }}>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#FF6B2B] bg-[#FF6B2B]/10 flex items-center justify-center mx-auto mb-5">
                <Home className="w-8 h-8 md:w-9 md:h-9 text-[#FF6B2B]" />
              </div>
              <div className="text-[#FF6B2B] text-[10px] font-bold tracking-[0.35em] uppercase mb-3">Residential Services</div>
              <h2 className="font-display text-white text-3xl md:text-5xl font-bold leading-tight mb-5">Trades Business<br />Owner?</h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-sm mx-auto">Website, SEO, social media, paid ads, and a residential lead pipeline that fills your schedule — all handled for you.</p>
              <motion.div className="bg-[#FF6B2B] hover:bg-orange-500 text-white font-bold px-7 py-4 text-xs tracking-[0.2em] uppercase inline-flex items-center gap-3 transition-colors mx-auto" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                I Need More Residential Jobs <ArrowRight className="w-4 h-4" />
              </motion.div>
              <div className="mt-7 flex flex-wrap justify-center gap-2">
                {residentialTrades.map((t) => (<span key={t} className="border border-slate-600 text-slate-400 text-[10px] tracking-wider px-2 py-1">✓ {t}</span>))}
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* RIGHT: Commercial */}
        <motion.div
          className="relative flex items-center justify-center cursor-pointer overflow-hidden"
          style={{ backgroundColor: "#080D14", minHeight: "50vh" }}
          animate={{ flex: hovered === "commercial" ? 1.55 : hovered === "residential" ? 0.45 : 1 }}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          onMouseEnter={() => setHovered("commercial")}
          onMouseLeave={() => setHovered(null)}
        >
          <motion.div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(148,163,184,0.07) 0%, transparent 55%)" }} animate={{ opacity: hovered === "commercial" ? 1 : 0.35 }} transition={{ duration: 0.35 }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 0,transparent 40px)" }} />
          <Link href="/commercial" className="relative z-10 w-full block">
            <motion.div className="text-center px-8 md:px-14 max-w-lg mx-auto pt-10 pb-16 md:pt-24 md:pb-0" animate={{ scale: hovered === "commercial" ? 1.03 : 1 }} transition={{ duration: 0.35 }}>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-slate-500 bg-slate-500/10 flex items-center justify-center mx-auto mb-5">
                <Building className="w-8 h-8 md:w-9 md:h-9 text-slate-300" />
              </div>
              <div className="text-slate-400 text-[10px] font-bold tracking-[0.35em] uppercase mb-3">Commercial &amp; Enterprise</div>
              <h2 className="font-display text-white text-3xl md:text-5xl font-bold leading-tight mb-5">Targeting Big<br />Contracts?</h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-sm mx-auto">B2B outreach to GCs, property managers, facilities directors, and government procurement. We land the six-figure meetings.</p>
              <motion.div className="border border-slate-400 hover:border-white hover:bg-slate-800 text-white font-bold px-7 py-4 text-xs tracking-[0.2em] uppercase inline-flex items-center gap-3 transition-colors mx-auto" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                I Need Commercial Contracts <ArrowRight className="w-4 h-4" />
              </motion.div>
              <div className="mt-7 flex flex-wrap justify-center gap-2">
                {commercialTypes.map((t) => (<span key={t} className="border border-slate-700 text-slate-500 text-[10px] tracking-wider px-2 py-1">✓ {t}</span>))}
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-5 left-0 right-0 flex justify-center z-20 pointer-events-none">
        <p className="text-slate-600 text-[10px] tracking-[0.45em] uppercase animate-pulse">Select Your Path to Growth</p>
      </div>
    </div>
  );
}