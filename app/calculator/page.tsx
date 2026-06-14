import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import MortgageCalculator from "@/components/MortgageCalculator";
import LeadForm from "@/components/LeadForm";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Mortgage Calculator",
  description:
    "Estimate your monthly mortgage payment with the MoneyLine Mortgage calculator. Adjust loan amount, rate, and term to plan your budget.",
};

export default function CalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Mortgage Calculator"
        title="Estimate Your Monthly Payment"
        subtitle="Use the interactive calculator below to see how loan amount, interest rate, and term affect your payment. Then get a real quote from our advisors."
      />

      <section className="py-20 sm:py-24">
        <div className="container-px">
          <div className="mx-auto max-w-4xl">
            <MortgageCalculator />
          </div>
        </div>
      </section>

      <section className="bg-lightgray py-20 sm:py-24">
        <div className="container-px grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Beyond the Estimate"
              title="Ready for Real Numbers?"
              subtitle="A calculator is a great start, but your true rate depends on your full financial picture. Request a personalized quote and we'll give you exact figures, no obligation."
            />
          </div>
          <LeadForm title="Get a Personalized Quote" />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
