import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, AlertTriangle } from "lucide-react";
import { navLinks, loanPrograms, site, team } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white/70">
      <div className="container-px grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/">
            <Image
              src="/updatedlogo.png"
              alt={site.name}
              width={130}
              height={52}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            {site.tagline}
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
                8028 12th Avenue South<br />
                St. Petersburg, FL 33707
              </span>
            </li>
            <li className="pt-2 border-t border-white/10 text-xs text-white/50 space-y-1">
              {team.map((member) => (
                <p key={member.name}>
                  {member.name} · NMLS #{(member as typeof member & { nmls?: string }).nmls}
                </p>
              ))}
            </li>
          </ul>
        </div>
      </div>

      {/* Wire Fraud Warning */}
      <div className="border-t border-white/10">
        <div className="container-px py-5">
          <div className="flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
            <p className="text-xs leading-relaxed text-amber-200/80">
              <span className="font-bold text-amber-300">BEWARE OF WIRE FRAUD:</span> MoneyLine
              Mortgage will NEVER send last-minute changes to wire instructions via email or phone.
              Always verify wiring instructions directly with your settlement agent by calling a
              known, verified number before transferring any funds.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col gap-4 py-7 text-xs leading-relaxed text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved. NMLS #{site.nmls}.
          </p>
          <p className="max-w-2xl">
            NMLS #{site.nmls} | Scott Kennedy NMLS #366031 | Chad Kennedy NMLS #388262.
            Licensed Mortgage Lender in the State of Florida. Equal Housing Lender.
            This is not a commitment to lend. Rates and terms subject to change without notice.
            All loans subject to credit approval and underwriting guidelines.
          </p>
        </div>
      </div>
    </footer>
  );
}
