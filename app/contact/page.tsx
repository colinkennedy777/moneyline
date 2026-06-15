import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import { site, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Apply Now",
  description:
    "Apply now or contact MoneyLine Mortgage. Get pre-approved fast with a dedicated mortgage advisor. Call, email, or submit your details online.",
};

const teamPhotos: Record<string, string> = {
  "Scott Kennedy": "/scott.jpg",
  "Chad Kennedy": "/chad.jpg",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Apply Now"
        title="Let's Get You Pre-Approved"
        subtitle="Fill out the form and a licensed MoneyLine advisor will reach out within one business day. Prefer to talk now? Give us a call."
      />

      {/* Advisor Cards */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="container-px">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <span className="eyebrow mb-2 block">Your Team</span>
            <h2 className="font-display text-3xl font-bold text-slate-950">Meet Your Advisors</h2>
            <div className="gold-bar mx-auto mt-4" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="overflow-hidden rounded-2xl bg-white shadow-card-lg border border-slate-100">
                <div className="relative h-80 w-full bg-slate-100">
                  <Image
                    src={teamPhotos[member.name]}
                    alt={member.name}
                    fill
                    className="object-cover object-[center_20%]"
                    style={{ filter: "saturate(0.7) brightness(1.05)" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-slate-950">{member.name}</h3>
                  <p className="text-sm text-gold font-semibold">Mortgage Advisor</p>
                  <p className="text-xs text-slate-400 mb-4">NMLS #{(member as typeof member & { nmls?: string }).nmls}</p>
                  <div className="space-y-2.5">
                    <a href={member.phoneHref} className="flex items-center gap-3 text-sm text-slate-600 hover:text-gold transition">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-slate-950 text-gold">
                        <Phone className="h-3.5 w-3.5" />
                      </span>
                      {member.phone}
                    </a>
                    <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-sm text-slate-600 hover:text-gold transition">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-slate-950 text-gold">
                        <Mail className="h-3.5 w-3.5" />
                      </span>
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="py-20 sm:py-24">
        <div className="container-px grid items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy">Get in Touch</h2>
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
                      {site.address.street}<br />
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
                      Mon–Fri: 8am – 7pm<br />
                      Sat: 9am – 3pm
                    </p>
                  </div>
                </li>
              </ul>
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
