import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { navLinks, loanPrograms, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white/70">
      <div className="container-px grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={site.name}
              width={44}
              height={44}
              className="h-11 w-11 rounded-md object-contain"
            />
            <span className="font-display text-lg font-bold text-white">
              MoneyLine
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-light">
                Mortgage
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Mortgage solutions built around your MoneyLine. Competitive rates,
            expert guidance, and a smooth path home.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold-light">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Loan Programs
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {loanPrograms.map((p) => (
              <li key={p.slug}>
                <Link href="/loan-programs" className="hover:text-gold-light">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={site.phoneHref}
                className="flex items-start gap-3 hover:text-gold-light"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-3 hover:text-gold-light"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
              <span>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col gap-4 py-7 text-xs leading-relaxed text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved. NMLS #{site.nmls}.
          </p>
          <p className="max-w-2xl">
            Equal Housing Lender. This is not a commitment to lend. Rates and
            terms subject to change without notice. All loans subject to credit
            approval. NMLS #{site.nmls}.
          </p>
        </div>
      </div>
    </footer>
  );
}
