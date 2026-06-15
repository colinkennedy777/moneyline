import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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

const purchaseBenefits = [
  "Same-day pre-approval letters to strengthen your offer",
  "Low-down-payment programs starting at 3%",
  "Dedicated advisor from application to closing",
  "Rate-lock options to protect your budget",
  "Clear, upfront cost estimates with no surprises",
];


const firstTimeSteps = [
  {
    title: "Understand Your Budget",
    description:
      "We help you figure out a comfortable monthly payment before you ever tour a home.",
  },
  {
    title: "Explore Programs",
    description:
      "Many first-time buyers qualify for down payment help and low-down-payment loans. We'll find them for you.",
  },
  {
    title: "Get Pre-Approved",
    description:
      "Walk into showings with a strong pre-approval that sellers take seriously.",
  },
  {
    title: "Close With Confidence",
    description:
      "We explain every document and cost so there are zero surprises at the table.",
  },
];

const firstTimeChecklist = [
  "Down payments as low as 3%",
  "FHA loans for fair credit",
  "Down payment assistance program guidance",
  "First-time buyer education and support",
];

export default function LoanProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Loan Programs"
        title="Find the Loan Built for Your Goals"
        subtitle="From low-down-payment options to high-value financing, our advisors help you choose the program that fits your life and budget."
        cta={{ label: "Get Pre-Approved", href: "/contact" }}
      />

      {/* All 6 Loan Program Cards */}
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

      {/* Purchase Section */}
      <section className="bg-lightgray py-20 sm:py-24">
        <div className="container-px grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Purchase Loans"
              title="Buy Your Next Home"
            />
            <ul className="mt-8 space-y-4">
              {purchaseBenefits.map((b) => (
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

      {/* Refinance Section */}
      <section className="bg-navy py-20 text-white sm:py-24">
        <div className="container-px">
          <SectionHeading
            dark
            eyebrow="Refinance"
            title="Is It Time to Refinance?"
          />
          <p className="mx-auto mt-6 max-w-2xl text-center text-white/70 leading-relaxed">
            Whether you want to lower your monthly payment, shorten your loan term, or tap into your
            home&apos;s equity, refinancing could be your smartest financial move. Our advisors will
            run the numbers at no cost or obligation so you can make a confident decision.
          </p>
          <div className="mt-10 text-center">
            <Link
              href="/refinance"
              className="btn-gold inline-flex items-center gap-2 text-base px-8 py-4"
            >
              Explore Refinance Options <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* First-Time Buyers Section */}
      <section className="py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="First-Time Buyers"
            title="Your First Home Starts Here"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {firstTimeSteps.map((s, i) => (
              <div
                key={s.title}
                className="flex gap-5 rounded-2xl border border-navy/5 bg-white p-7 shadow-card"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold/15 font-display text-lg font-bold text-gold-dark">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-lightgray p-8">
            <ul className="grid gap-4 sm:grid-cols-2">
              {firstTimeChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-navy/75">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom Lead Form */}
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
