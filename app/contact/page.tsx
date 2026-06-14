import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Apply Now",
  description:
    "Apply now or contact MoneyLine Mortgage. Get pre-approved fast with a dedicated mortgage advisor. Call, email, or submit your details online.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Apply Now"
        title="Let's Get You Pre-Approved"
        subtitle="Fill out the form and a licensed MoneyLine advisor will reach out within one business day. Prefer to talk now? Give us a call."
      />

      <section className="py-20 sm:py-24">
        <div className="container-px grid items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-navy">
              Get in Touch
            </h2>
            <div className="gold-bar mt-4" />
            <p className="mt-5 text-navy/65">
              We&apos;re here to answer questions, run scenarios, and help you take
              the next step with confidence.
            </p>

            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-gold-light">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">Call or Text</p>
                  <a href={site.phoneHref} className="text-navy/65 hover:text-gold">
                    {site.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-gold-light">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-navy/65 hover:text-gold"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-gold-light">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">Office</p>
                  <p className="text-navy/65">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-gold-light">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy">Hours</p>
                  <p className="text-navy/65">
                    Mon–Fri: 8am – 7pm
                    <br />
                    Sat: 9am – 3pm
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <QuickQuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
