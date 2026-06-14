"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-navy/10 rounded-2xl border border-navy/10 bg-white">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-navy">{faq.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-gold transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <p className="px-6 pb-6 text-sm leading-relaxed text-navy/65">
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
