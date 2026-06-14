"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="container-px flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label={site.name}>
          <Image
            src="/logo.png"
            alt={site.name}
            width={48}
            height={48}
            className="h-11 w-11 rounded-xl object-contain"
            priority
          />
          <span className="hidden font-display text-lg font-bold leading-none text-slate-950 sm:block">
            MoneyLine
            <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold">
              Mortgage
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-slate-700 hover:text-gold transition xl:flex"
          >
            <Phone className="h-4 w-4 text-gold" />
            {site.phoneDisplay}
          </a>
          <Link href="/contact" className="btn-gold !px-5 !py-2.5 text-sm">
            Apply Now
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="container-px flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="mt-2 flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gold"
            >
              <Phone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-gold mt-2 w-full justify-center">
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
