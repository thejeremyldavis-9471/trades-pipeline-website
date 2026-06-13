"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

interface NavProps {
  variant?: "residential" | "commercial";
}

export function Nav({ variant = "residential" }: NavProps) {
  const [open, setOpen] = useState(false);
  const isCommercial = variant === "commercial";

  const links = isCommercial
    ? [
        { href: "/commercial#services", label: "Services" },
        { href: "/commercial#pricing", label: "Pricing" },
        { href: "/commercial#buyers", label: "Who We Serve" },
        { href: "/contact", label: "Contact" },
      ]
    : [
        { href: "/residential#services", label: "Services" },
        { href: "/residential#pricing", label: "Pricing" },
        { href: "/residential#how-it-works", label: "How It Works" },
        { href: "/contact", label: "Contact" },
      ];

  const bg = isCommercial ? "bg-[#080D14]" : "bg-[#1A2332]";
  const ctaClass = isCommercial
    ? "border border-slate-500 hover:border-white text-white hover:bg-slate-800"
    : "bg-[#FF6B2B] hover:bg-orange-500 text-white";

  return (
    <nav className={`${bg} border-b border-slate-800 sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image src="https://galaxy-prod.tlcdn.com/gen/user_31zSEYkIqFE7G8QvjEYZMUQmYpQ/78313c7b-b190-472f-9507-794e262eaf1e.png" alt="The Trades Pipeline" width={44} height={44} className="w-10 h-10 object-contain rounded-sm" />
            <span className="font-display font-bold text-white text-base tracking-wider uppercase hidden sm:block">The Trades <span className="text-[#FF6B2B]">Pipeline</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (<Link key={l.href} href={l.href} className="text-slate-400 hover:text-white text-sm font-medium transition-colors tracking-wide">{l.label}</Link>))}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+1" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"><Phone className="w-4 h-4" /><span>Call Us</span></a>
            <Link href="/contact"><button className={`${ctaClass} font-bold px-5 py-2 text-xs tracking-widest uppercase flex items-center gap-2 transition-colors`}>Free Strategy Call <ArrowRight className="w-3 h-3" /></button></Link>
          </div>
          <button className="md:hidden text-white p-1" onClick={() => setOpen(!open)}>{open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className={`${bg} border-t border-slate-800 md:hidden overflow-hidden`}>
            <div className="px-4 py-4 space-y-1">
              {links.map((l) => (<Link key={l.href} href={l.href} className="block text-slate-300 hover:text-white py-2.5 text-sm border-b border-slate-800 last:border-0" onClick={() => setOpen(false)}>{l.label}</Link>))}
              <Link href="/contact" onClick={() => setOpen(false)}><button className={`w-full mt-4 ${ctaClass} font-bold py-3 text-xs tracking-widest uppercase transition-colors`}>Book Free Strategy Call</button></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
