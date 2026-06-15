import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Conventional Home Loans",
  description:
    "Competitive rates and flexible terms for borrowers with solid credit. Down payments as low as 3%.",
};

const benefits = [
  "Low rates for good credit",
  "3–20% down payment options",
  "No upfront mortgage insurance with 20% down",
  "Fixed and adjustable rate options",
  "Loan amounts up to conforming limits",
  "Faster approval process",
];

const qualifies = [
  "Credit score 620+",
  "Stable employment history",
  "DTI typically under 45%",
  "Primary residence, second home, or investment property",
];

const steps = [
  {
    num: "01",
    title: "Apply & Get Pre-Approved",
    description:
      "Complete our secure online application. We review your credit, income, and assets to issue a strong pre-approval letter.",
  },
  {
    num: "02",
    title: "Underwriting & Appraisal",
    description:
      "Our underwriting team verifies your documentation and orders an appraisal to confirm the property value.",
  },
  {
    num: "03",
    title: "Clear to Close",
    description:
      "Once all conditions are satisfied, we issue your Clear to Close and coordinate a smooth closing.",
  },
];

export default function ConventionalPage() {
  return (
    <>
      <PageHero
        eyebrow="Conventional Loans"
        title="Conventional Home Loans"
        subtitle="Competitive rates and flexible terms for borrowers with solid credit. Down payments as low as 3%."
        cta={{ label: "Get Pre-Approved", href: "/contact" }}
      />

      {/* Key Benefits */}
      <section className="py-20 sm:py-24">
        <div className="container-px grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Key Benefits"
              title="Why Choose a Conventional Loan?"
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

          {/* Who Qualifies */}
          <div>
            <SectionHeading
              center={false}
              eyebrow="Eligibility"
              title="Who Qualifies?"
            />
            <ul className="mt-8 space-y-4">
              {qualifies.map((q) => (
                <li key={q} className="flex items-start gap-3 text-navy/75">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-lightgray py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading eyebrow="How It Works" title="Three Steps to Your Conventional Loan" />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="rounded-2xl border border-navy/10 bg-white p-7 shadow-card">
                <span className="font-display text-4xl font-bold text-gold/50">{s.num}</span>
                <h3 className="mt-3 text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-20 sm:py-24">
        <div className="container-px max-w-2xl mx-auto">
          <LeadForm title="Get Pre-Approved for a Conventional Loan" />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
