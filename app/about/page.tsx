import type { Metadata } from "next";
import { Star } from "lucide-react";
import { valueProps, testimonials, stats } from "@/lib/site";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import TestimonialCard from "@/components/TestimonialCard";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MoneyLine Mortgage is a family-owned Florida mortgage company founded in 1999. Scott and Chad Kennedy — 27+ years helping families finance their homes.",
};

const aboutStats = [
  { value: stats[0].num, label: "Loans Funded" },
  { value: stats[1].num, label: "Families Served" },
  { value: stats[2].num, label: "Average Close Time" },
  { value: stats[3].num, label: "In Business" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About MoneyLine"
        title="Mortgage Expertise with a Human Touch"
        subtitle="A family-owned Florida mortgage company built on 27+ years of trust, expertise, and genuine care for every client."
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
                MoneyLine Mortgage is a family-owned and operated business founded in 1999 — over 27
                years of helping Florida families achieve homeownership. Scott and Chad Kennedy,
                brothers and business partners, both earned finance degrees from the University of
                Florida and have built their careers on the belief that every client deserves honest
                advice and competitive rates.
              </p>
              <p>
                Scott Kennedy is based on Florida&apos;s West Coast, where he lives with his wife
                Kris. Their family includes son Colin — a fellow real estate professional working as
                a Realtor — daughter Devan, and five grandchildren. Scott&apos;s deep roots in the
                Tampa Bay market give his clients a real edge.
              </p>
              <p>
                Chad Kennedy is based in Central Florida, where he lives with his wife Lynsey and
                their two boys — Chase, the family genius, and Noah, the hockey extraordinaire.
                Chad&apos;s expertise in the Orlando and Central Florida market makes him a go-to
                resource for buyers and investors alike.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {aboutStats.map((s) => (
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

      {/* Testimonials Section */}
      <section className="py-20 sm:py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Client Stories"
            title="Loved by Homeowners Across Florida"
          />
          <div className="mx-auto mb-14 mt-8 flex max-w-md flex-col items-center text-center">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-3 font-display text-2xl font-bold text-navy">
              5.0 out of 5
            </p>
            <p className="text-sm text-navy/55">
              Based on verified client reviews from the Tampa Bay and Orlando areas
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA title="Let's Build Your MoneyLine" />
    </>
  );
}
