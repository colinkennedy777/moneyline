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
  const [purchasePrice, setPurchasePrice] = useState(400000);
  const [downPct, setDownPct] = useState(10);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [taxes, setTaxes] = useState(300);
  const [insurance, setInsurance] = useState(150);
  const [hoa, setHoa] = useState(0);

  const downDollars = Math.round((downPct / 100) * purchasePrice);
  const loanAmount = Math.max(purchasePrice - downDollars, 0);
  const hasPmi = downPct < 20;
  const pmiMonthly = hasPmi ? 100 : 0;

  const { piMonthly, totalInterest, totalPaid } = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = rate / 100 / 12;
    const n = term * 12;
    let m: number;
    if (monthlyRate === 0 || principal === 0) {
      m = principal / (n || 1);
    } else {
      m =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
        (Math.pow(1 + monthlyRate, n) - 1);
    }
    const total = m * n;
    return {
      piMonthly: isFinite(m) ? m : 0,
      totalPaid: isFinite(total) ? total : 0,
      totalInterest: isFinite(total) ? total - principal : 0,
    };
  }, [loanAmount, rate, term]);

  const totalMonthly = piMonthly + taxes + insurance + hoa + pmiMonthly;

  return (
    <div
      className={
        variant === "card"
          ? "overflow-hidden rounded-2xl bg-white shadow-card"
          : ""
      }
    >
      <div className="grid md:grid-cols-2">
        {/* LEFT — Inputs */}
        <div className="space-y-5 p-7 sm:p-8">
          <div className="flex items-center gap-2 text-gold">
            <Calculator className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em]">
              Estimate Your Payment
            </span>
          </div>

          {/* Purchase Price */}
          <div>
            <div className="flex items-center justify-between">
              <label className="label-field !mb-0">Purchase Price</label>
              <span className="font-semibold text-slate-900">{currency(purchasePrice)}</span>
            </div>
            <input
              type="range"
              min={50000}
              max={2000000}
              step={5000}
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(Number(e.target.value))}
              className="mt-3 w-full accent-gold"
            />
          </div>

          {/* Down Payment */}
          <div>
            <div className="flex items-center justify-between">
              <label className="label-field !mb-0">Down Payment</label>
              <span className="font-semibold text-slate-900">
                {downPct}% &nbsp;
                <span className="text-slate-400 font-normal text-sm">({currency(downDollars)})</span>
              </span>
            </div>
            <input
              type="range"
              min={3}
              max={30}
              step={1}
              value={downPct}
              onChange={(e) => setDownPct(Number(e.target.value))}
              className="mt-3 w-full accent-gold"
            />
            <p className="mt-1 text-xs text-slate-500">
              Loan Amount: <span className="font-semibold text-slate-700">{currency(loanAmount)}</span>
            </p>
          </div>

          {/* Interest Rate */}
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

          {/* Loan Term */}
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

          {/* Monthly extras */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="label-field">Property Taxes / Mo</label>
              <input
                type="number"
                min={0}
                value={taxes}
                onChange={(e) => setTaxes(Number(e.target.value))}
                className="input-field"
              />
            </div>
            <div>
              <label className="label-field">Insurance / Mo</label>
              <input
                type="number"
                min={0}
                value={insurance}
                onChange={(e) => setInsurance(Number(e.target.value))}
                className="input-field"
              />
            </div>
          </div>
          <div>
            <label className="label-field">HOA / Month (if applicable)</label>
            <input
              type="number"
              min={0}
              value={hoa}
              onChange={(e) => setHoa(Number(e.target.value))}
              className="input-field"
            />
          </div>
        </div>

        {/* RIGHT — Output */}
        <div className="flex flex-col justify-center gap-5 bg-slate-950 p-7 text-white sm:p-8">
          <div>
            <p className="text-sm text-white/60">Estimated Monthly Payment</p>
            <p className="mt-1 font-display text-4xl font-bold text-gold-light sm:text-5xl">
              {currency(totalMonthly)}
            </p>
          </div>

          {/* Breakdown */}
          <div className="space-y-2 border-t border-white/10 pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Principal &amp; Interest</span>
              <span className="font-semibold">{currency(piMonthly)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Property Taxes</span>
              <span className="font-semibold">{currency(taxes)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Insurance</span>
              <span className="font-semibold">{currency(insurance)}</span>
            </div>
            {hoa > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-white/60">HOA</span>
                <span className="font-semibold">{currency(hoa)}</span>
              </div>
            )}
            {hasPmi && (
              <div className="flex justify-between text-sm">
                <span className="text-amber-400/80">Est. PMI</span>
                <span className="font-semibold text-amber-400">{currency(pmiMonthly)}</span>
              </div>
            )}
          </div>

          {hasPmi && (
            <p className="rounded-lg bg-amber-500/10 border border-amber-500/20 px-3 py-2 text-xs text-amber-300 leading-relaxed">
              PMI applies when down payment is below 20%. This is an estimate — contact us for exact figures.
            </p>
          )}

          {/* P&I totals */}
          <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
            <div>
              <p className="text-xs text-white/60">Total Interest (P&amp;I)</p>
              <p className="mt-1 text-base font-semibold">{currency(totalInterest)}</p>
            </div>
            <div>
              <p className="text-xs text-white/60">Total of Payments (P&amp;I)</p>
              <p className="mt-1 text-base font-semibold">{currency(totalPaid)}</p>
            </div>
          </div>

          <p className="text-xs leading-relaxed text-white/40">
            Estimates are for illustration only. Contact us for a personalized rate quote.
          </p>
        </div>
      </div>
    </div>
  );
}
