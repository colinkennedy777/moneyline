import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calculator as CalcIcon, CheckCircle2, Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import LoanProgramCard from "@/components/LoanProgramCard";
import TestimonialCard from "@/components/TestimonialCard";
import MortgageCalculator from "@/components/MortgageCalculator";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Icon from "@/components/Icon";
import { loanPrograms, valueProps, processSteps, testimonials, faqs, stats } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80&auto=format&fit=crop"
          alt="Modern luxury home"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/40" />

        <div className="container-px relative z-10 grid items-center gap-16 py-24 lg:grid-cols-2 lg:py-32">
          <div className="animate-fadeUp">
            <span className="eyebrow mb-4 block">
              Trusted Mortgage Advisors · NMLS #391072
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
              Florida&apos;s Trusted{" "}
              <span className="text-gold">Mortgage Experts</span>{" "}
              Since 1999.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
              From first-time buyers to refinancing homeowners, MoneyLine
              Mortgage helps you move forward with clarity, confidence, and
              competitive financing options.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold text-base px-8 py-4">
                Get Pre-Approved
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/calculator" className="btn-outline-white text-base px-8 py-4">
                <CalcIcon className="h-4 w-4" />
                Calculate Payment
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/65">
              {["Same-day pre-approval", "Competitive rates", "Close in 17 days"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-4">
            <QuickQuoteForm />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-gold">
        <div className="container-px grid grid-cols-2 gap-8 py-5 md:grid-cols-4">
          {stats.map(({ num, label }) => (
            <div key={label} className="text-center">
              <p className="font-display text-2xl font-bold text-slate-950">{num}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-950/60">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOAN PROGRAMS */}
      <section className="bg-cream py-24 sm:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="Loan Programs"
            title="Financing for Every Path Home"
            subtitle="Whatever your situation, we have a program designed to fit it."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {loanPrograms.map((p) => (
              <LoanProgramCard key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY MONEYLINE */}
      <section className="py-24 sm:py-28">
        <div className="container-px grid items-center gap-16 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl aspect-[4/3] shadow-card-lg">
            <Image
              src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=900&q=80&auto=format&fit=crop"
              alt="Modern luxury home exterior"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 backdrop-blur-sm px-5 py-4 shadow-card-lg">
              <p className="font-display text-2xl font-bold text-slate-950">17 Days</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Average Close Time</p>
            </div>
          </div>

          <div>
            <span className="eyebrow mb-3 block">Why MoneyLine</span>
            <h2 className="font-display text-3xl font-bold text-slate-950 sm:text-4xl">
              A Lender That Actually Works for You
            </h2>
            <div className="gold-bar mt-4 mb-6" />
            <p className="text-slate-600 leading-relaxed mb-8">
              We combine the buying power of a national lender with the personal
              care of a local advisor. Our clients close faster, at better rates,
              with less stress.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {valueProps.map((v) => (
                <div key={v.title} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-950 text-gold">
                    <Icon name={v.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">{v.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/about" className="btn-slate">
                Our Story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3-STEP PROCESS */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&auto=format&fit=crop"
          alt="Beautiful home at dusk"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/88" />
        <div className="container-px relative z-10">
          <SectionHeading
            eyebrow="How It Works"
            title="Three Steps to Your New Home"
            dark
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {processSteps.map((s, i) => (
              <div key={s.step} className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
                <span className="font-display text-6xl font-bold text-gold/30">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-gold text-base px-8 py-4">
              Start My Application <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-cream py-24 sm:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="Client Stories"
            title="Homeowners Who Trusted MoneyLine"
          />
          <div className="mt-6 mb-10 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-gold text-gold" />
            ))}
            <span className="ml-2 text-sm text-slate-500">4.9 / 5 from 500+ reviews</span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/testimonials" className="btn-outline-slate">
              Read All Reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="py-24 sm:py-28">
        <div className="container-px grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="eyebrow mb-3 block">Plan Ahead</span>
            <h2 className="font-display text-3xl font-bold text-slate-950 sm:text-4xl">
              See What You Could Afford
            </h2>
            <div className="gold-bar mt-4 mb-6" />
            <p className="text-slate-600 leading-relaxed mb-6">
              Adjust the sliders to estimate your monthly payment instantly.
              Then talk to us to lock in your real rate.
            </p>
            <ul className="space-y-3 mb-8">
              {["Live principal & interest calculation", "Compare 15, 20, and 30-year terms", "Total interest over loan life"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/calculator" className="btn-slate">
              Full Calculator <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <MortgageCalculator />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-24 sm:py-28">
        <div className="container-px">
          <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" />
          <div className="mt-14">
            <FAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA />
    </>
  );
}
