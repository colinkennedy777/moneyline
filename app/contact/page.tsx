import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import { site, team } from "@/lib/site";

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
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy">
                Get in Touch
              </h2>
              <div className="gold-bar mt-4" />
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-gold-light">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy">Main Line</p>
                    <a href={site.phoneHref} className="text-navy/65 hover:text-gold">
                      {site.phoneDisplay}
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

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-navy">
                Your Advisors
              </h3>
              <div className="mt-4 space-y-4">
                {team.map((member) => (
                  <div key={member.name} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-card">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-950 font-display text-sm font-bold text-gold">
                        {member.name[0]}
                      </div>
                      <p className="font-semibold text-navy">{member.name}</p>
                    </div>
                    <div className="space-y-1.5 text-sm">
                      <a href={member.phoneHref} className="flex items-center gap-2 text-navy/65 hover:text-gold">
                        <Phone className="h-3.5 w-3.5 text-gold" />
                        {member.phone}
                      </a>
                      <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-navy/65 hover:text-gold">
                        <Mail className="h-3.5 w-3.5 text-gold" />
                        {member.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <QuickQuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
