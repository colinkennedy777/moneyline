import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import LoanProgramCard from "@/components/LoanProgramCard";
import LeadForm from "@/components/LeadForm";
import FinalCTA from "@/components/FinalCTA";
import { loanPrograms } from "@/lib/site";

export const metadata: Metadata = {
  title: "Loan Programs",
  description:
    "Explore MoneyLine Mortgage loan programs: Conventional, FHA, VA, Jumbo, USDA, and Refinance options tailored to your goals.",
};

export default function LoanProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Loan Programs"
        title="Find the Loan Built for Your Goals"
        subtitle="From low-down-payment options to high-value financing, our advisors help you choose the program that fits your life and budget."
        cta={{ label: "Get Pre-Approved", href: "/contact" }}
      />

      <section className="py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Compare Options"
            title="Six Ways to Finance Your Home"
            subtitle="Each program has unique benefits. We'll match you with the right one."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {loanPrograms.map((p) => (
              <LoanProgramCard key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lightgray py-20 sm:py-24">
        <div className="container-px grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Not Sure Which Fits?"
              title="Let's Find Your Best Option Together"
              subtitle="Tell us about your goals and a licensed advisor will recommend the programs you qualify for, with no obligation."
            />
            <ul className="mt-8 space-y-4 text-navy/70">
              <li>Personalized program recommendations</li>
              <li>Transparent rate and cost comparisons</li>
              <li>Guidance on down payment assistance</li>
            </ul>
          </div>
          <LeadForm />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
