import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "First-Time Homebuyers",
  description:
    "New to buying a home? MoneyLine Mortgage guides first-time buyers through every step, from down payment assistance to closing day.",
};

const steps = [
  {
    title: "Understand Your Budget",
    description:
      "We help you figure out a comfortable monthly payment before you ever tour a home.",
  },
  {
    title: "Explore Assistance Programs",
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

export default function FirstTimeBuyersPage() {
  return (
    <>
      <PageHero
        eyebrow="First-Time Buyers"
        title="Your First Home Starts Here"
        subtitle="Buying your first home is a big step. We make it approachable with patient guidance, clear answers, and programs designed for new buyers."
        cta={{ label: "Talk to an Advisor", href: "/contact" }}
      />

      <section className="py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Your Roadmap"
            title="A Guided Path to Homeownership"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {steps.map((s, i) => (
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
        </div>
      </section>

      <section className="bg-navy py-20 text-white sm:py-24">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              dark
              center={false}
              eyebrow="Programs for You"
              title="Lower Barriers to Your First Home"
            />
            <ul className="mt-8 space-y-4 text-white/80">
              {[
                "Down payments as low as 3%",
                "FHA loans for fair credit",
                "Down payment assistance program guidance",
                "First-time buyer education and support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-light" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm variant="dark" title="Start the Conversation" />
        </div>
      </section>

      <section className="bg-lightgray py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading eyebrow="Good to Know" title="First-Time Buyer FAQs" />
          <div className="mt-14">
            <FAQ faqs={faqs} />
          </div>
        </div>
      </section>

      <FinalCTA title="Ready to Buy Your First Home?" />
    </>
  );
}
