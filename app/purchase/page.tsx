import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import FinalCTA from "@/components/FinalCTA";
import { processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Purchase Loans",
  description:
    "Buying a home? MoneyLine Mortgage offers competitive purchase loans with fast pre-approval and expert guidance every step of the way.",
};

const benefits = [
  "Same-day pre-approval letters to strengthen your offer",
  "Low-down-payment programs starting at 3%",
  "Dedicated advisor from application to closing",
  "Rate-lock options to protect your budget",
  "Clear, upfront cost estimates with no surprises",
];

export default function PurchasePage() {
  return (
    <>
      <PageHero
        eyebrow="Purchase Loans"
        title="Buy Your Next Home with Confidence"
        subtitle="A strong pre-approval puts you in the driver's seat. We make the financing simple so you can focus on finding the right home."
        cta={{ label: "Get Pre-Approved", href: "/contact" }}
      />

      <section className="py-20 sm:py-24">
        <div className="container-px grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Why Buy With Us"
              title="Financing That Wins Offers"
            />
            <ul className="mt-8 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-navy/75">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm title="Start Your Pre-Approval" />
        </div>
      </section>

      <section className="bg-navy py-20 text-white sm:py-24">
        <div className="container-px">
          <SectionHeading dark eyebrow="The Path" title="From Application to Keys" />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {processSteps.map((s) => (
              <div key={s.step} className="rounded-2xl border border-white/10 bg-navy-light p-8">
                <span className="font-display text-5xl font-bold text-gold-light">{s.step}</span>
                <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA title="Ready to Make an Offer?" />
    </>
  );
}
