"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";

const schema = z.object({
  purpose: z.string().min(1, "Select a loan purpose"),
  homePrice: z.string().min(1, "Enter an amount"),
  downPayment: z.string().min(1, "Enter an amount"),
  creditScore: z.string().min(1, "Select a range"),
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone"),
});

type FormValues = z.infer<typeof schema>;

export default function QuickQuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 900));
  };

  if (isSubmitSuccessful) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-14 w-14 text-gold" />
        <h3 className="mt-4 text-2xl font-bold text-navy">Quote Request Received</h3>
        <p className="mx-auto mt-3 max-w-md text-navy/60">
          Thanks for reaching out. A MoneyLine advisor will review your details
          and contact you within one business day with personalized options.
        </p>
      </div>
    );
  }

  const Err = ({ name }: { name: keyof FormValues }) =>
    errors[name] ? (
      <p className="mt-1 text-xs text-red-500">{errors[name]?.message as string}</p>
    ) : null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl bg-white p-7 shadow-card sm:p-9">
      <h3 className="text-2xl font-bold text-navy">Get Your Free Quote</h3>
      <p className="mt-1.5 text-sm text-navy/60">
        Answer a few quick questions and we&apos;ll match you with the right loan.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label-field">Loan Purpose</label>
          <select {...register("purpose")} className="input-field" defaultValue="">
            <option value="" disabled>
              Select...
            </option>
            <option value="purchase">Purchase a Home</option>
            <option value="refinance">Refinance</option>
            <option value="cash-out">Cash-Out Refinance</option>
            <option value="first-time">First-Time Buyer</option>
          </select>
          <Err name="purpose" />
        </div>
        <div>
          <label className="label-field">Credit Score</label>
          <select {...register("creditScore")} className="input-field" defaultValue="">
            <option value="" disabled>
              Select...
            </option>
            <option value="excellent">Excellent (740+)</option>
            <option value="good">Good (680-739)</option>
            <option value="fair">Fair (620-679)</option>
            <option value="building">Building (&lt; 620)</option>
          </select>
          <Err name="creditScore" />
        </div>
        <div>
          <label className="label-field">Home Price</label>
          <input
            {...register("homePrice")}
            className="input-field"
            placeholder="$400,000"
            inputMode="numeric"
          />
          <Err name="homePrice" />
        </div>
        <div>
          <label className="label-field">Down Payment</label>
          <input
            {...register("downPayment")}
            className="input-field"
            placeholder="$80,000"
            inputMode="numeric"
          />
          <Err name="downPayment" />
        </div>
        <div>
          <label className="label-field">Full Name</label>
          <input {...register("name")} className="input-field" placeholder="Jane Doe" />
          <Err name="name" />
        </div>
        <div>
          <label className="label-field">Phone</label>
          <input
            {...register("phone")}
            className="input-field"
            placeholder="(555) 555-5555"
          />
          <Err name="phone" />
        </div>
        <div className="sm:col-span-2">
          <label className="label-field">Email</label>
          <input
            {...register("email")}
            className="input-field"
            placeholder="jane@email.com"
          />
          <Err name="email" />
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-gold mt-6 w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
          </>
        ) : (
          "Get My Free Quote"
        )}
      </button>
      <p className="mt-3 text-center text-xs text-navy/45">
        By submitting, you agree to be contacted about mortgage options. No
        impact to your credit score.
      </p>
    </form>
  );
}
