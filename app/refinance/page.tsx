import type { Metadata } from "next";
import { TrendingDown, Clock, Wallet } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import MortgageCalculator from "@/components/MortgageCalculator";
import LeadForm from "@/components/LeadForm";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Refinance Your Mortgage",
  description:
    "Lower your rate, shorten your term, or tap into your home's equity. MoneyLine Mortgage makes refinancing simple and rewarding.",
};

const reasons = [
  {
    icon: TrendingDown,
    title: "Lower Your Rate",
    description:
      "If rates have dropped or your credit has improved, a refinance could shrink your monthly payment significantly.",
  },
  {
    icon: Clock,
    title: "Shorten Your Term",
    description:
      "Move from a 30-year to a 15-year loan to build equity faster and save tens of thousands in interest.",
  },
  {
    icon: Wallet,
    title: "Access Your Equity",
    description:
      "A cash-out refinance lets you use your home's value for renovations, debt consolidation, or big goals.",
  },
];

export default function RefinancePage() {
  return (
    <>
      <PageHero
        eyebrow="Refinance"
        title="Refinance and Put Money Back in Your Pocket"
        subtitle="Whether you want a lower payment, a shorter term, or cash from your equity, we'll run the numbers and find the smartest move."
        cta={{ label: "See If I Qualify", href: "/contact" }}
      />

      <section className="py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Why Refinance"
            title="Three Reasons Homeowners Refinance"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-navy/5 bg-white p-8 shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-gold-light">
                  <r.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-navy">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">
                  {r.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lightgray py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Run the Numbers"
            title="Estimate Your New Payment"
          />
          <div className="mx-auto mt-14 max-w-4xl">
            <MortgageCalculator />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-px grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              center={false}
              eyebrow="No Obligation"
              title="Get a Personalized Refinance Analysis"
              subtitle="Send us your details and we'll calculate your break-even point and potential savings, free of charge."
            />
          </div>
          <LeadForm title="Request My Refinance Quote" />
        </div>
      </section>

      <FinalCTA title="Ready to Lower Your Payment?" />
    </>
  );
}
