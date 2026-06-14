import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import FinalCTA from "@/components/FinalCTA";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Resources & Blog",
  description:
    "Mortgage tips, homebuying guides, and refinance insights from the experts at MoneyLine Mortgage.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Mortgage Insights & Homebuying Guides"
        subtitle="Practical, jargon-free advice to help you make confident decisions about financing your home."
      />

      <section className="py-20 sm:py-24">
        <div className="container-px">
          <article className="grid overflow-hidden rounded-2xl border border-navy/5 bg-white shadow-card lg:grid-cols-2">
            <div className="bg-navy p-10 text-white">
              <span className="eyebrow">{featured.category}</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight">
                {featured.title}
              </h2>
            </div>
            <div className="flex flex-col justify-center p-10">
              <p className="text-navy/70">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-4 text-sm text-navy/45">
                <span>{featured.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {featured.readTime}
                </span>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark hover:text-gold"
              >
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-2xl border border-navy/5 bg-white p-7 shadow-card transition hover:-translate-y-1"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-dark">
                  {post.category}
                </span>
                <h3 className="mt-3 text-lg font-bold leading-snug text-navy">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/60">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-navy/5 pt-4 text-xs text-navy/45">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {post.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA title="Have a Question We Haven't Answered?" />
    </>
  );
}
