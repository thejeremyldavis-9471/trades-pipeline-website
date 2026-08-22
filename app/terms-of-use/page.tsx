import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  FileCheck2,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Terms of Use | The Trades Pipeline",
  description:
    "Terms governing access to and use of The Trades Pipeline website, content, resources and executive conversation process.",
};

const updated = "August 22, 2026";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of These Terms",
    body: <p>These Terms of Use govern your access to and use of <strong>thetradespipeline.com</strong> and the public content, resources and forms made available by The Trades Pipeline. By using the website, you agree to these Terms and our <Link href="/privacy-policy">Privacy Policy</Link>. If you do not agree, please do not use the website.</p>,
  },
  {
    id: "website-purpose",
    title: "2. Website Purpose",
    body: (
      <>
        <p>The website provides general information about The Trades Pipeline, our principles, perspective, public frameworks and approach to executive growth partnerships for trade businesses.</p>
        <p>Website content is provided for general informational and discussion purposes. It is not legal, accounting, tax, investment, engineering, safety or other regulated professional advice. You remain responsible for decisions affecting your business and should consult qualified professionals when appropriate.</p>
      </>
    ),
  },
  {
    id: "no-relationship",
    title: "3. No Client or Partnership Relationship",
    body: (
      <>
        <p>Viewing the website, receiving a Brief, submitting a form or beginning a conversation does not create a client, advisory, fiduciary, agency, employment, joint-venture or partnership relationship.</p>
        <p>A working relationship exists only after The Trades Pipeline and the applicable business enter into a separate written agreement. Until then, either party may decide not to proceed.</p>
      </>
    ),
  },
  {
    id: "assessments",
    title: "4. Assessments, Briefs and Public Observations",
    body: (
      <>
        <p>The Trades Pipeline may prepare Independent Executive Assessments, Executive Growth Intelligence Briefs, BGIB materials or other observations using publicly available information. These materials are intended to identify questions worthy of executive discussion—not to claim knowledge of a company&apos;s internal operations.</p>
        <p>Public observations may be incomplete, become outdated or differ from internal circumstances. They are not audits, valuations, certifications, guarantees or final diagnoses. Mention of a company does not imply endorsement, sponsorship, affiliation or an existing business relationship.</p>
      </>
    ),
  },
  {
    id: "results",
    title: "5. No Guarantee of Results",
    body: (
      <>
        <p>Business outcomes depend on leadership decisions, market conditions, execution, resources, timing and many factors outside our control. The Trades Pipeline does not guarantee revenue, profit, leads, valuation, cost savings, operational performance or any other specific result.</p>
        <p>Examples, scenarios, forecasts and statements about opportunity are illustrative unless a separate written agreement expressly says otherwise. Past outcomes do not guarantee future performance.</p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "6. Intellectual Property",
    body: (
      <>
        <p>The website and its original text, graphics, photographs, reports, layouts, videos, downloads, frameworks and other materials are owned by or licensed to The Trades Pipeline and are protected by applicable intellectual-property laws.</p>
        <p>The Trades Pipeline name and logo, <strong>Growth Without Breaking</strong>, <strong>The Nine Growth Gears™</strong>, <strong>Growth Synchronization™</strong>, and related names, marks, report formats and brand elements may not be used in a way that suggests affiliation, approval or ownership without written permission.</p>
        <p>You may view and print reasonable portions of public website content for your own internal, noncommercial evaluation. No other license is granted. You may not copy, publish, sell, license, modify, remove attribution from, reverse engineer or create competing materials from our protected expression, reports or proprietary methodology without written permission.</p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "7. Acceptable Use",
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Use the website for unlawful, fraudulent, deceptive or harmful activity.</li>
          <li>Attempt to gain unauthorized access to the website, forms, systems or data.</li>
          <li>Interfere with security, availability or normal website operation.</li>
          <li>Introduce malicious code, scrape the site at an unreasonable rate or use automated systems to extract protected content for resale, competitive replication or model training.</li>
          <li>Impersonate another person or business, misrepresent affiliation or submit information you are not authorized to provide.</li>
          <li>Use our name, content or materials to contact, mislead or solicit others as though acting for The Trades Pipeline.</li>
        </ul>
      </>
    ),
  },
  {
    id: "information-you-submit",
    title: "8. Information You Submit",
    body: (
      <>
        <p>You retain ownership of information you submit. You authorize The Trades Pipeline and its service providers to receive, store, review and use that information as reasonably necessary to respond to you, evaluate a potential relationship, provide requested services and operate our systems, subject to our <Link href="/privacy-policy">Privacy Policy</Link>.</p>
        <p>You represent that the information you provide is accurate to the best of your knowledge and that you have authority to share it. Please do not submit trade secrets, regulated data or another party&apos;s confidential information through a public website form unless you are authorized and we have agreed on an appropriate method.</p>
      </>
    ),
  },
  {
    id: "communications",
    title: "9. Communications",
    body: (
      <p>When you request a conversation, you authorize us to respond using the contact information you provide. A response may include operational messages related to your request. Submitting the form does not, by itself, enroll you in an unrelated promotional text-message campaign. You may ask us to stop non-essential communications at any time.</p>
    ),
  },
  {
    id: "third-party-content",
    title: "10. Third-Party Content and Links",
    body: (
      <>
        <p>Our Insights page and other areas may reference or link to third-party articles, publications, companies, tools or websites. Their content belongs to their respective owners and is governed by their own terms and policies.</p>
        <p>Curation or commentary does not imply endorsement, sponsorship or responsibility for third-party content, availability, accuracy, products or practices. Access third-party services at your own discretion.</p>
      </>
    ),
  },
  {
    id: "protected-partnerships",
    title: "11. Protected Partnerships",
    body: (
      <p>Statements concerning one active partnership per trade within overlapping service territories describe a core operating principle of The Trades Pipeline. A specific territory, exclusivity commitment or reservation is binding only when defined in a separate written agreement. Website content alone does not reserve a geography or prevent us from speaking with another business.</p>
    ),
  },
  {
    id: "availability",
    title: "12. Website Availability and Changes",
    body: (
      <p>We may change, suspend or discontinue any part of the website, correct errors or update content without notice. We do not promise that the website will always be available, uninterrupted, secure or free from errors. We are not responsible for delays or failures outside our reasonable control.</p>
    ),
  },
  {
    id: "disclaimers",
    title: "13. Disclaimers",
    body: (
      <p>To the fullest extent permitted by law, the website and its public content are provided on an “as is” and “as available” basis without warranties of any kind, whether express, implied or statutory. We disclaim implied warranties of merchantability, fitness for a particular purpose, title and non-infringement. Some jurisdictions do not allow certain exclusions, so portions of this section may not apply to you.</p>
    ),
  },
  {
    id: "liability",
    title: "14. Limitation of Liability",
    body: (
      <p>To the fullest extent permitted by law, The Trades Pipeline and its owners, personnel and service providers will not be liable for indirect, incidental, special, consequential, exemplary or punitive damages, or for lost revenue, profits, data, goodwill or business opportunity arising from website use or reliance on public content. Nothing in these Terms excludes liability that cannot lawfully be excluded.</p>
    ),
  },
  {
    id: "indemnification",
    title: "15. Responsibility for Misuse",
    body: (
      <p>You agree to be responsible for claims, losses or reasonable costs arising from your unlawful misuse of the website, your violation of these Terms, or information you submit without authorization. This obligation does not apply to the extent a claim results from The Trades Pipeline&apos;s own unlawful conduct.</p>
    ),
  },
  {
    id: "governing-law",
    title: "16. Governing Law",
    body: (
      <p>These Terms are governed by the laws of the State of Illinois, without regard to conflict-of-law principles, except where applicable law requires otherwise. Any dispute concerning only these website Terms will be brought in a court of competent jurisdiction serving Cook County, Illinois, unless the parties agree to another lawful forum.</p>
    ),
  },
  {
    id: "general",
    title: "17. General Terms",
    body: (
      <p>If any provision is found unenforceable, the remaining provisions will remain in effect and the affected provision will be enforced to the greatest lawful extent. Our failure to enforce a provision is not a waiver. These Terms and the Privacy Policy form the entire agreement concerning use of the public website, but they do not replace a separate written agreement governing paid or confidential work.</p>
    ),
  },
  {
    id: "changes",
    title: "18. Changes to These Terms",
    body: (
      <p>We may revise these Terms as the website, services or legal requirements evolve. The date at the top identifies the current version. Continued use of the website after updated Terms are posted means you accept the revised Terms.</p>
    ),
  },
];

export default function TermsOfUsePage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#eee9df] text-[#151b20]">
        <section className="relative overflow-hidden border-b border-black/15 bg-[#0c1013] text-[#f4f0e8]">
          <div className="industrial-grid absolute inset-0 opacity-70" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_35%,rgba(200,90,36,.18),transparent_58%)]" />
          <div className="section-shell relative py-16 sm:py-20 lg:py-24">
            <div className="flex items-center gap-3 text-[#ef5b0a]">
              <Scale className="h-6 w-6" />
              <p className="font-display text-sm font-semibold uppercase tracking-[.18em]">Clear Terms. Honest Expectations.</p>
            </div>
            <h1 className="mt-5 font-display text-[clamp(3.5rem,8vw,7.25rem)] font-bold uppercase leading-[.84] tracking-[-.035em]">
              Terms<br /><span className="text-[#ef5b0a]">of Use.</span>
            </h1>
            <div className="mt-7 h-[3px] w-20 bg-[#ef5b0a]" />
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              The same principle applies here as everywhere else: clarity before commitment. These terms define what this website is—and what it is not.
            </p>
            <p className="mt-5 font-display text-xs uppercase tracking-[.16em] text-white/50">Effective and last updated: {updated}</p>
          </div>
        </section>

        <section className="section-shell py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
            <article className="min-w-0">
              <div className="border-l-4 border-[#c85a24] bg-[#f8f5ee] px-6 py-5 shadow-[0_8px_30px_rgba(20,25,29,.06)] sm:px-8">
                <p className="text-[15px] leading-7 text-[#30383e]">
                  These Terms apply to the public website and its resources. Any paid engagement, confidential assessment or executive partnership will be governed by its own written agreement.
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
                  <p className="eyebrow">Questions About These Terms</p>
                  <h2 className="mt-3 font-display text-3xl font-semibold uppercase">Contact The Trades Pipeline.</h2>
                  <div className="mt-6 grid gap-5 text-sm text-white/75 sm:grid-cols-2">
                    <div><p className="font-display uppercase text-white">The Trades Pipeline</p><p className="mt-2">205 North Michigan Ave., Suite 810<br />Chicago, IL 60601</p></div>
                    <div className="space-y-2"><a className="block transition hover:text-[#ef5b0a]" href="mailto:davis@thetradespipeline.com">davis@thetradespipeline.com</a><a className="block transition hover:text-[#ef5b0a]" href="tel:+13127157977">(312) 715-7977</a></div>
                  </div>
                </section>
              </div>
            </article>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-black/15 bg-[#171d21] p-6 text-white shadow-[0_18px_50px_rgba(13,17,19,.13)]">
                <p className="font-display text-lg uppercase text-[#ef5b0a]">The Short Version.</p>
                <div className="mt-5 space-y-5">
                  {[
                    [BookOpenCheck, "The website informs and starts conversations; it does not replace professional advice."],
                    [FileCheck2, "A working relationship begins only with a separate written agreement."],
                    [ShieldCheck, "TTP content, reports, frameworks and brand elements remain protected."],
                  ].map(([Icon, text]) => {
                    const ItemIcon = Icon as typeof ShieldCheck;
                    return <div key={text as string} className="flex gap-3"><ItemIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#ef5b0a]" /><p className="text-sm leading-6 text-white/75">{text as string}</p></div>;
                  })}
                </div>
              </div>

              <nav aria-label="Terms of use sections" className="mt-6 border border-black/15 bg-[#f8f5ee] p-6">
                <p className="font-display text-sm font-semibold uppercase tracking-[.12em] text-[#c85a24]">In These Terms</p>
                <ol className="mt-4 max-h-[55vh] space-y-2.5 overflow-y-auto pr-2 text-sm text-[#4b5358]">
                  {sections.map((section) => <li key={section.id}><a className="transition hover:text-[#c85a24]" href={`#${section.id}`}>{section.title.replace(/^\d+\. /, "")}</a></li>)}
                  <li><a className="transition hover:text-[#c85a24]" href="#contact">Contact Us</a></li>
                </ol>
              </nav>
            </aside>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0c1013] text-white">
          <div className="section-shell flex flex-col items-start justify-between gap-6 py-8 sm:flex-row sm:items-center">
            <div><p className="font-display text-2xl uppercase">Clarity Before Commitment.</p><p className="mt-1 text-sm text-white/60">A first conversation is exactly that—a conversation.</p></div>
            <Link href="/conversation" className="inline-flex items-center gap-4 bg-[#c94f0a] px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-[.04em] transition hover:bg-[#ef5b0a]">Begin an Executive Conversation <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>
      </main>
    </>
  );
}
