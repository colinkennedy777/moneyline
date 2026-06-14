import type { Metadata } from "next";
import { valueProps } from "@/lib/site";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MoneyLine Mortgage is a premium mortgage advisory built on transparency, expertise, and genuine care for every client.",
};

const stats = [
  { value: "$1.2B+", label: "Funded in home loans" },
  { value: "4,500+", label: "Families served" },
  { value: "21 days", label: "Average time to close" },
  { value: "4.9/5", label: "Average client rating" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About MoneyLine"
        title="Mortgage Expertise with a Human Touch"
        subtitle="We started MoneyLine Mortgage to prove that getting a home loan doesn't have to be confusing or impersonal. Every client deserves clarity, fair rates, and an advisor in their corner."
      />

      <section className="py-20 sm:py-24">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Our Story"
              title="Built Around Your Bottom Line"
            />
            <div className="mt-6 space-y-4 text-navy/70">
              <p>
                MoneyLine Mortgage was founded on a simple idea: financing a home
                should feel empowering, not overwhelming. We combine the
                competitive rates of a major lender with the personal attention
                of a trusted local advisor.
              </p>
              <p>
                Our team has helped thousands of families purchase, refinance,
                and build wealth through real estate. We measure our success not
                by loan volume, but by the relationships and homes we help make
                possible.
              </p>
              <p>
                Whether you&apos;re buying your first home or your fifth, you&apos;ll
                work with a dedicated advisor who explains every option in plain
                language and fights for your best outcome.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-navy/5 bg-white p-7 text-center shadow-card"
              >
                <p className="font-display text-3xl font-bold text-gold-dark">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-navy/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lightgray py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our Values"
            title="What Sets Us Apart"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((v) => (
              <div key={v.title} className="text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-navy text-gold-light">
                  <Icon name={v.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA title="Let's Build Your MoneyLine" />
    </>
  );
}
