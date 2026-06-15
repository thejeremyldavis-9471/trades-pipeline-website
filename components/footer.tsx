import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  variant?: "residential" | "commercial";
}

export function Footer({ variant = "residential" }: FooterProps) {
  const isCommercial = variant === "commercial";
  const ctaClass = isCommercial
    ? "border border-slate-500 hover:border-white text-white hover:bg-slate-800"
    : "bg-[#FF6B2B] hover:bg-orange-500 text-white";

  return (
    <footer className="bg-[#0D1117] border-t border-slate-800 py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="mb-4">
              <Image
                src="https://galaxy-prod.tlcdn.com/view/user_31zSEYkIqFE7G8QvjEYZMUQmYpQ/839f0074537d4069ae2dbf20766d21cf.png"
                alt="The Trades Pipeline"
                width={140}
                height={140}
                className="w-36 h-36 object-contain"
              />
            </div>
            <div className="text-[#FF6B2B] text-[10px] font-bold tracking-widest uppercase">One client per trade per market.</div>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs tracking-[0.25em] uppercase mb-5">Services</h4>
            <ul className="space-y-2.5">
              {["Website Design", "Local SEO & GBP", "Social Media", "Paid Advertising", "Residential Lead Gen", "B2B Commercial"].map((s) => (
                <li key={s}><Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs tracking-[0.25em] uppercase mb-5">Company</h4>
            <ul className="space-y-2.5">
              {[["Home", "/"], ["Residential", "/residential"], ["Commercial", "/commercial"], ["Contact", "/contact"]].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-slate-400 hover:text-white text-sm transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs tracking-[0.25em] uppercase mb-5">Ready to Grow?</h4>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">Free 30-minute strategy call. No pitch. No templates. Just straight talk about your pipeline.</p>
            <Link href="/contact">
              <button className={`w-full ${ctaClass} font-bold py-3 text-xs tracking-widest uppercase transition-colors`}>
                Book Strategy Call
              </button>
            </Link>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">© 2026 The Trades Pipeline. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}