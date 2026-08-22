import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Database,
  Eye,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Privacy Policy | The Trades Pipeline",
  description:
    "How The Trades Pipeline collects, uses, protects and respects information shared through our website and executive conversation process.",
};

const updated = "August 22, 2026";

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    body: (
      <>
        <p>We collect information you choose to provide when you begin an executive conversation, communicate with us or otherwise use the website. This may include:</p>
        <ul>
          <li>Your name, company name, company website, email address and phone number.</li>
          <li>The message or business context you choose to share.</li>
          <li>Whether you received a Brief from The Trades Pipeline and, if provided, its BGIB document number.</li>
          <li>Records of our communications and any information you later provide during a business relationship.</li>
        </ul>
        <p>Our website and service providers may also collect limited technical information automatically, such as IP address, browser type, device type, referring pages, pages visited and general website activity.</p>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Information",
    body: (
      <>
        <p>We use information for legitimate business purposes, including to:</p>
        <ul>
          <li>Review and respond to an executive-conversation request.</li>
          <li>Prepare for a conversation, including reviewing a referenced Executive Growth Intelligence Brief.</li>
          <li>Communicate about potential or active work with your business.</li>
          <li>Operate, protect, maintain and improve our website, systems and services.</li>
          <li>Keep appropriate business records, prevent misuse and comply with legal obligations.</li>
        </ul>
        <p>Submitting the conversation form does not enroll you in a broad automated sales sequence. We may contact you by email or phone to respond to your request and continue the conversation you initiated.</p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "3. How Information Is Shared",
    body: (
      <>
        <p><strong>We do not sell your personal information.</strong> We do not publish your business challenges or use your private conversation as marketing material without permission.</p>
        <p>Information may be shared only when reasonably necessary with trusted service providers that help us operate the website, manage communications, maintain records or deliver services. Our conversation form and related workflow are supported by HighLevel. These providers may process information on our behalf under their own contractual, security and privacy obligations.</p>
        <p>We may also disclose information when required by law, to protect legal rights or safety, in connection with a business reorganization, or with your direction or consent.</p>
      </>
    ),
  },
  {
    id: "confidentiality",
    title: "4. Business Confidentiality",
    body: (
      <>
        <p>Your business stays your business. Information shared during an inquiry or working relationship is treated with discretion and used for the purpose for which it was provided.</p>
        <p>The Trades Pipeline maintains protected-partnership principles and does not intentionally share one company&apos;s confidential information with a direct competitor. This Privacy Policy does not replace any separate confidentiality or professional-services agreement that may apply to an engagement.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "5. Cookies and Website Technology",
    body: (
      <>
        <p>Our website and its service providers may use cookies, embedded forms, server logs and similar technologies needed to operate the site, remember preferences, protect forms and understand basic website performance.</p>
        <p>You can limit cookies through your browser settings. Blocking some technologies may affect how parts of the website or embedded forms function. We do not currently use personal information from the site for cross-context behavioral advertising.</p>
      </>
    ),
  },
  {
    id: "security-retention",
    title: "6. Security and Retention",
    body: (
      <>
        <p>We use reasonable administrative, technical and organizational safeguards appropriate to the information we maintain. No website, transmission or storage system can be guaranteed completely secure.</p>
        <p>We retain information only as long as reasonably necessary for the purposes described here, to maintain appropriate business records, resolve disputes, enforce agreements and satisfy legal obligations. Retention periods vary according to the nature of the information and relationship.</p>
      </>
    ),
  },
  {
    id: "choices",
    title: "7. Your Choices and Privacy Rights",
    body: (
      <>
        <p>You may ask us to access, correct or delete personal information associated with you, or to stop non-essential communications. Depending on where you live, applicable law may provide additional rights concerning access, correction, deletion, portability, restriction or appeal.</p>
        <p>To make a request, email <a href="mailto:davis@thetradespipeline.com">davis@thetradespipeline.com</a>. We may need to verify your identity before completing a request. Certain information may be retained when required by law or needed for legitimate business purposes.</p>
      </>
    ),
  },
  {
    id: "children",
    title: "8. Children&apos;s Privacy",
    body: (
      <p>The website and our services are intended for business owners, executives and other adults. They are not directed to children under 13, and we do not knowingly collect personal information from children under 13.</p>
    ),
  },
  {
    id: "external-links",
    title: "9. External Links and Services",
    body: (
      <p>The website may link to third-party websites, publications or services. Their privacy practices are governed by their own policies. We encourage you to review those policies before providing information directly to a third party.</p>
    ),
  },
  {
    id: "changes",
    title: "10. Changes to This Policy",
    body: (
      <p>We may update this Privacy Policy as our website, services or legal obligations evolve. The updated date at the top of this page identifies the current version. Material changes will be posted here.</p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#eee9df] text-[#151b20]">
        <section className="relative overflow-hidden border-b border-black/15 bg-[#0c1013] text-[#f4f0e8]">
          <div className="industrial-grid absolute inset-0 opacity-70" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_35%,rgba(200,90,36,.18),transparent_58%)]" />
          <div className="section-shell relative py-16 sm:py-20 lg:py-24">
            <div className="flex items-center gap-3 text-[#ef5b0a]">
              <ShieldCheck className="h-6 w-6" />
              <p className="font-display text-sm font-semibold uppercase tracking-[.18em]">Trust Requires Clarity.</p>
            </div>
            <h1 className="mt-5 font-display text-[clamp(3.5rem,8vw,7.25rem)] font-bold uppercase leading-[.84] tracking-[-.035em]">
              Privacy<br /><span className="text-[#ef5b0a]">Policy.</span>
            </h1>
            <div className="mt-7 h-[3px] w-20 bg-[#ef5b0a]" />
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              Truth before assumption applies to information, too. This policy explains what we collect, why we collect it and how we treat what you share.
            </p>
            <p className="mt-5 font-display text-xs uppercase tracking-[.16em] text-white/50">Effective and last updated: {updated}</p>
          </div>
        </section>

        <section className="section-shell py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
            <article className="min-w-0">
              <div className="border-l-4 border-[#c85a24] bg-[#f8f5ee] px-6 py-5 shadow-[0_8px_30px_rgba(20,25,29,.06)] sm:px-8">
                <p className="text-[15px] leading-7 text-[#30383e]">
                  This Privacy Policy describes how The Trades Pipeline collects, uses, shares and protects information through <strong>thetradespipeline.com</strong>, our executive-conversation form and related business communications.
                </p>
              </div>

              <div className="mt-10 space-y-11">
                {sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28 border-b border-black/10 pb-10 last:border-0">
                    <h2 className="font-display text-2xl font-semibold uppercase tracking-[.015em] text-[#172028] sm:text-3xl">{section.title}</h2>
                    <div className="legal-copy mt-4 space-y-4 text-[15px] leading-7 text-[#3b4348]">{section.body}</div>
                  </section>
                ))}

                <section id="contact" className="scroll-mt-28 bg-[#151b20] p-7 text-[#f5f1e9] sm:p-9">
                  <p className="eyebrow">Questions or Privacy Requests</p>
                  <h2 className="mt-3 font-display text-3xl font-semibold uppercase">Contact The Trades Pipeline.</h2>
                  <div className="mt-6 grid gap-5 text-sm text-white/75 sm:grid-cols-2">
                    <div>
                      <p className="font-display uppercase text-white">The Trades Pipeline</p>
                      <p className="mt-2">205 North Michigan Ave., Suite 810<br />Chicago, IL 60601</p>
                    </div>
                    <div className="space-y-2">
                      <a className="flex items-center gap-2 transition hover:text-[#ef5b0a]" href="mailto:davis@thetradespipeline.com"><Mail className="h-4 w-4 text-[#ef5b0a]" />davis@thetradespipeline.com</a>
                      <a className="block transition hover:text-[#ef5b0a]" href="tel:+13127157977">(312) 715-7977</a>
                    </div>
                  </div>
                </section>
              </div>
            </article>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-black/15 bg-[#171d21] p-6 text-white shadow-[0_18px_50px_rgba(13,17,19,.13)]">
                <p className="font-display text-lg uppercase text-[#ef5b0a]">The Short Version.</p>
                <div className="mt-5 space-y-5">
                  {[
                    [Eye, "We collect only what supports a real business conversation."],
                    [Database, "We use trusted systems to receive, organize and protect it."],
                    [LockKeyhole, "We do not sell your personal information."],
                  ].map(([Icon, text]) => {
                    const ItemIcon = Icon as typeof Eye;
                    return <div key={text as string} className="flex gap-3"><ItemIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#ef5b0a]" /><p className="text-sm leading-6 text-white/75">{text as string}</p></div>;
                  })}
                </div>
              </div>

              <nav aria-label="Privacy policy sections" className="mt-6 border border-black/15 bg-[#f8f5ee] p-6">
                <p className="font-display text-sm font-semibold uppercase tracking-[.12em] text-[#c85a24]">In This Policy</p>
                <ol className="mt-4 space-y-2.5 text-sm text-[#4b5358]">
                  {sections.map((section) => <li key={section.id}><a className="transition hover:text-[#c85a24]" href={`#${section.id}`}>{section.title.replace(/^\d+\. /, "")}</a></li>)}
                  <li><a className="transition hover:text-[#c85a24]" href="#contact">Contact Us</a></li>
                </ol>
              </nav>
            </aside>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0c1013] text-white">
          <div className="section-shell flex flex-col items-start justify-between gap-6 py-8 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-2xl uppercase">A Conversation Begins With Trust.</p>
              <p className="mt-1 text-sm text-white/60">No presentation. No predetermined answers. No sales pitch.</p>
            </div>
            <Link href="/conversation" className="inline-flex items-center gap-4 bg-[#c94f0a] px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-[.04em] transition hover:bg-[#ef5b0a]">Begin an Executive Conversation <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>
      </main>

    </>
  );
}
