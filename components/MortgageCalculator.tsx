"use client";

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";

const currency = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

export default function MortgageCalculator({
  variant = "card",
}: {
  variant?: "card" | "plain";
}) {
  const [amount, setAmount] = useState(400000);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);

  const { monthly, totalInterest, totalPaid } = useMemo(() => {
    const principal = Math.max(amount, 0);
    const monthlyRate = rate / 100 / 12;
    const n = term * 12;
    let m: number;
    if (monthlyRate === 0) {
      m = principal / n;
    } else {
      m =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
        (Math.pow(1 + monthlyRate, n) - 1);
    }
    const total = m * n;
    return {
      monthly: isFinite(m) ? m : 0,
      totalPaid: isFinite(total) ? total : 0,
      totalInterest: isFinite(total) ? total - principal : 0,
    };
  }, [amount, rate, term]);

  return (
    <div
      className={
        variant === "card"
          ? "overflow-hidden rounded-2xl bg-white shadow-card"
          : ""
      }
    >
      <div className="grid md:grid-cols-2">
        <div className="space-y-6 p-7 sm:p-8">
          <div className="flex items-center gap-2 text-gold">
            <Calculator className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em]">
              Estimate Your Payment
            </span>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="label-field !mb-0">Loan Amount</label>
              <span className="font-semibold text-slate-900">{currency(amount)}</span>
            </div>
            <input
              type="range"
              min={50000}
              max={2000000}
              step={5000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="mt-3 w-full accent-gold"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="label-field !mb-0">Interest Rate</label>
              <span className="font-semibold text-slate-900">{rate.toFixed(2)}%</span>
            </div>
            <input
              type="range"
              min={1}
              max={12}
              step={0.05}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="mt-3 w-full accent-gold"
            />
          </div>

          <div>
            <label className="label-field">Loan Term</label>
            <div className="grid grid-cols-3 gap-2">
              {[15, 20, 30].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTerm(t)}
                  className={`rounded-lg border px-3 py-2.5 text-sm font-semibold transition ${
                    term === t
                      ? "border-gold bg-gold/10 text-slate-950"
                      : "border-slate-200 text-slate-600 hover:border-gold"
                  }`}
                >
                  {t} yr
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6 bg-slate-950 p-7 text-white sm:p-8">
          <div>
            <p className="text-sm text-white/60">Estimated Monthly Payment</p>
            <p className="mt-1 font-display text-4xl font-bold text-gold-light sm:text-5xl">
              {currency(monthly)}
            </p>
            <p className="mt-1 text-xs text-white/50">Principal &amp; interest only</p>
          </div>
          <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
            <div>
              <p className="text-xs text-white/60">Total Interest</p>
              <p className="mt-1 text-lg font-semibold">{currency(totalInterest)}</p>
            </div>
            <div>
              <p className="text-xs text-white/60">Total of Payments</p>
              <p className="mt-1 text-lg font-semibold">{currency(totalPaid)}</p>
            </div>
          </div>
          <p className="text-xs leading-relaxed text-white/45">
            Estimates exclude taxes, insurance, and HOA dues. Contact us for a
            personalized quote.
          </p>
        </div>
      </div>
    </div>
  );
}
