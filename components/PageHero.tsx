import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  cta,
  image = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80&auto=format&fit=crop",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden min-h-[52vh] flex items-center">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-950/50" />
      <div className="container-px relative z-10 py-24 sm:py-28">
        {eyebrow && <span className="eyebrow mb-3 block">{eyebrow}</span>}
        <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-white text-balance sm:text-5xl lg:text-[3.25rem]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            {subtitle}
          </p>
        )}
        {cta && (
          <Link href={cta.href} className="btn-gold mt-8 text-base px-8 py-4">
            {cta.label} <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </section>
  );
}
