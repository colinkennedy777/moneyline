import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function FinalCTA({
  title = "Ready to Move Forward?",
  subtitle = "Your next chapter is closer than you think. Apply in minutes and let a MoneyLine advisor guide you home.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80&auto=format&fit=crop"
        alt="Dream home"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/85" />
      <div className="container-px relative z-10 py-24 text-center sm:py-28">
        <span className="eyebrow mb-4 block">Get Started Today</span>
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">{subtitle}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn-gold text-base px-8 py-4">
            Apply Now — It&apos;s Free <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={site.phoneHref} className="btn-outline-white text-base px-8 py-4">
            <Phone className="h-4 w-4" />
            Call {site.phoneDisplay}
          </a>
        </div>
        <p className="mt-8 text-sm text-white/40">NMLS #{site.nmls} · Equal Housing Lender · No upfront fees</p>
      </div>
    </section>
  );
}
