import type { Metadata } from "next";
import { TrendingDown, Clock, Wallet, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import MortgageCalculator from "@/components/MortgageCalculator";
import LeadForm from "@/components/LeadForm";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Refinance Your Mortgage",
  description:
    "Lower your payment, shorten your term, or access your equity. MoneyLine Mortgage helps Florida homeowners refinance with competitive rates and fast closings.",
};

const reasons = [
  {
    icon: TrendingDown,
    title: "Lower Your Rate",
    description:
      "Even a half-point reduction in your rate can save hundreds per month. If market rates have dropped since you closed, a rate-and-term refinance could immediately improve your cash flow.",
  },
  {
    icon: Clock,
    title: "Shorten Your Term",
    description:
      "Moving from a 30-year to a 15-year mortgage builds equity dramatically faster and can save tens of thousands in lifetime interest — often with only a modest increase in monthly payment.",
  },
  {
    icon: Wallet,
    title: "Access Your Equity",
    description:
      "A cash-out refinance lets you tap the equity you've built to fund home improvements, consolidate high-interest debt, pay for education, or invest in additional real estate.",
  },
];

const checklist = [
  "Your rate is more than 0.5% above current rates",
  "You plan to stay in the home 2+ more years",
  "Your credit score has improved since you closed",
  "You want to remove PMI from your payment",
  "You need to access equity for home improvements or other goals",
];

export default function RefinancePage() {
  return (
    <>
      <PageHero
        eyebrow="Refinance"
        title="Refinance and Put Money Back in Your Pocket"
        subtitle="Whether you want a lower payment, a shorter term, or access to your equity, we'll find your best move."
        cta={{ label: "See If I Qualify", href: "/contact" }}
      />

      {/* Three Reasons */}
      <section className="py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Why Refinance"
            title="Three Reasons to Refinance"
            subtitle="Most homeowners benefit from revisiting their mortgage every few years. Here's what a refinance can do for you."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-slate-950 text-gold">
                  <r.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {r.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is Refinancing Right for You */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="container-px grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Quick Check"
              title="Is Refinancing Right for You?"
              subtitle="If any of these apply to you, it's worth having a conversation. We'll run a free analysis with no obligation."
            />
            <ul className="mt-8 space-y-4">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm title="Request My Refinance Quote" />
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Run the Numbers"
            title="Estimate Your New Payment"
            subtitle="Use our calculator to see what your payment could look like with a lower rate or different term."
          />
          <div className="mt-10 max-w-4xl mx-auto">
            <MortgageCalculator />
          </div>
        </div>
      </section>

      <FinalCTA title="Ready to Lower Your Payment?" />
    </>
  );
}
