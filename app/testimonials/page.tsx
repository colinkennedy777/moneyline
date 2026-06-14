import type { Metadata } from "next";
import { Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import FinalCTA from "@/components/FinalCTA";
import { testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "Read what MoneyLine Mortgage clients say about their home loan and refinance experiences. Real reviews from real homeowners.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Loved by Homeowners Across the Country"
        subtitle="Our greatest reward is the trust of the families we serve. Here's what they have to say."
      />

      <section className="py-20 sm:py-24">
        <div className="container-px">
          <div className="mx-auto mb-14 flex max-w-md flex-col items-center text-center">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-3 font-display text-2xl font-bold text-navy">
              4.9 out of 5
            </p>
            <p className="text-sm text-navy/55">
              Based on hundreds of verified client reviews
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lightgray py-16">
        <div className="container-px">
          <SectionHeading
            eyebrow="Join Them"
            title="Your Success Story Starts Here"
          />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
