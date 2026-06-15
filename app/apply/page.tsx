"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import PageHero from "@/components/PageHero";

const schema = z.object({
  loanPurpose: z.enum(["purchase", "refinance", "cashout", "dscr", "nonqm"], {
    required_error: "Please select a loan purpose",
  }),
  propertyType: z.enum(["single-family", "condo", "multi-family", "investment"], {
    required_error: "Please select a property type",
  }),
  propertyState: z.string().min(2, "Please enter a state"),
  estimatedValue: z.string().min(1, "Please enter an estimated value"),
  downPayment: z.string().min(1, "Please enter a down payment amount"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  dob: z.string().min(1, "Date of birth is required"),
  ssn: z.string().optional(),
  employmentStatus: z.enum(["employed", "self-employed", "retired", "other"], {
    required_error: "Please select employment status",
  }),
  employerName: z.string().optional(),
  yearsAtJob: z.string().optional(),
  annualIncome: z.string().min(1, "Annual income is required"),
  addCoBorrower: z.boolean().optional(),
  coBorrowerName: z.string().optional(),
  coBorrowerEmail: z.string().optional(),
  coBorrowerPhone: z.string().optional(),
  coBorrowerIncome: z.string().optional(),
  creditScoreRange: z.string().min(1, "Please select a credit score range"),
  monthlyDebt: z.string().optional(),
  assets: z.string().optional(),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-card">
      <h2 className="mb-5 text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function ApplyPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { addCoBorrower: false },
  });

  const addCoBorrower = watch("addCoBorrower");

  const onSubmit = async (_data: FormValues) => {
    await new Promise((r) => setTimeout(r, 1000));
  };

  if (isSubmitSuccessful) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center container-px">
        <CheckCircle2 className="h-16 w-16 text-gold" />
        <h2 className="mt-6 font-display text-3xl font-bold text-slate-950">
          Application Submitted!
        </h2>
        <p className="mt-4 max-w-md text-slate-500">
          Thank you for submitting your loan application. A MoneyLine advisor will
          review your information and reach out within one business day.
        </p>
      </div>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Apply Now"
        title="Start Your Loan Application"
        subtitle="Fill out the form below and a licensed MoneyLine advisor will review your application and reach out within one business day."
      />

      <section className="py-16 sm:py-20">
        <div className="container-px max-w-3xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            {/* 1. Loan Purpose */}
            <SectionCard title="Loan Purpose">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  { value: "purchase", label: "Purchase" },
                  { value: "refinance", label: "Refinance" },
                  { value: "cashout", label: "Cash-Out Refinance" },
                  { value: "dscr", label: "DSCR Loan" },
                  { value: "nonqm", label: "Non-QM Loan" },
                ].map(({ value, label }) => (
                  <label
                    key={value}
                    className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:border-gold has-[:checked]:border-gold has-[:checked]:bg-gold/5"
                  >
                    <input
                      type="radio"
                      value={value}
                      {...register("loanPurpose")}
                      className="accent-gold"
                    />
                    {label}
                  </label>
                ))}
              </div>
              {errors.loanPurpose && (
                <p className="mt-2 text-xs text-red-400">{errors.loanPurpose.message}</p>
              )}
            </SectionCard>

            {/* 2. Property Information */}
            <SectionCard title="Property Information">
              <div className="space-y-4">
                <div>
                  <label className="label-field">Property Type</label>
                  <select {...register("propertyType")} className="input-field">
                    <option value="">Select property type</option>
                    <option value="single-family">Single Family</option>
                    <option value="condo">Condo</option>
                    <option value="multi-family">Multi-Family</option>
                    <option value="investment">Investment Property</option>
                  </select>
                  {errors.propertyType && (
                    <p className="mt-1 text-xs text-red-400">{errors.propertyType.message}</p>
                  )}
                </div>
                <div>
                  <label className="label-field">Property State</label>
                  <input
                    {...register("propertyState")}
                    className="input-field"
                    placeholder="FL"
                  />
                  {errors.propertyState && (
                    <p className="mt-1 text-xs text-red-400">{errors.propertyState.message}</p>
                  )}
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="label-field">Estimated Value / Purchase Price</label>
                    <input
                      {...register("estimatedValue")}
                      className="input-field"
                      placeholder="$400,000"
                    />
                    {errors.estimatedValue && (
                      <p className="mt-1 text-xs text-red-400">{errors.estimatedValue.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="label-field">Down Payment Amount</label>
                    <input
                      {...register("downPayment")}
                      className="input-field"
                      placeholder="$40,000"
                    />
                    {errors.downPayment && (
                      <p className="mt-1 text-xs text-red-400">{errors.downPayment.message}</p>
                    )}
                  </div>
                </div>
              </div>
            </SectionCard>

            {/* 3. Personal Information */}
            <SectionCard title="Personal Information">
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="label-field">First Name</label>
                    <input {...register("firstName")} className="input-field" placeholder="Jane" />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-red-400">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="label-field">Last Name</label>
                    <input {...register("lastName")} className="input-field" placeholder="Doe" />
                    {errors.lastName && (
                      <p className="mt-1 text-xs text-red-400">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="label-field">Email</label>
                    <input
                      {...register("email")}
                      type="email"
                      className="input-field"
                      placeholder="jane@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="label-field">Phone</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="input-field"
                      placeholder="(555) 555-5555"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="label-field">Date of Birth</label>
                    <input {...register("dob")} type="date" className="input-field" />
                    {errors.dob && (
                      <p className="mt-1 text-xs text-red-400">{errors.dob.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="label-field">Social Security Number</label>
                    <input
                      {...register("ssn")}
                      type="password"
                      className="input-field"
                      placeholder="XXX-XX-XXXX"
                      autoComplete="off"
                    />
                    <p className="mt-1 text-xs text-slate-400">Secured and encrypted</p>
                  </div>
                </div>
              </div>
            </SectionCard>

            {/* 4. Employment */}
            <SectionCard title="Employment">
              <div className="space-y-4">
                <div>
                  <label className="label-field">Employment Status</label>
                  <select {...register("employmentStatus")} className="input-field">
                    <option value="">Select status</option>
                    <option value="employed">Employed</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="retired">Retired</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.employmentStatus && (
                    <p className="mt-1 text-xs text-red-400">{errors.employmentStatus.message}</p>
                  )}
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="label-field">Employer Name (if applicable)</label>
                    <input
                      {...register("employerName")}
                      className="input-field"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="label-field">Years at Current Job</label>
                    <input
                      {...register("yearsAtJob")}
                      className="input-field"
                      placeholder="3"
                    />
                  </div>
                </div>
                <div>
                  <label className="label-field">Annual Income</label>
                  <input
                    {...register("annualIncome")}
                    className="input-field"
                    placeholder="$75,000"
                  />
                  {errors.annualIncome && (
                    <p className="mt-1 text-xs text-red-400">{errors.annualIncome.message}</p>
                  )}
                </div>
              </div>
            </SectionCard>

            {/* 5. Co-Borrower */}
            <SectionCard title="Co-Borrower">
              <label className="flex cursor-pointer items-center gap-3 text-sm font-medium text-slate-700">
                <input
                  {...register("addCoBorrower")}
                  type="checkbox"
                  className="h-4 w-4 accent-gold"
                />
                Add a Co-Borrower to this application
              </label>
              {addCoBorrower && (
                <div className="mt-5 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="label-field">Co-Borrower Full Name</label>
                      <input {...register("coBorrowerName")} className="input-field" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="label-field">Co-Borrower Email</label>
                      <input {...register("coBorrowerEmail")} type="email" className="input-field" placeholder="john@email.com" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="label-field">Co-Borrower Phone</label>
                      <input {...register("coBorrowerPhone")} type="tel" className="input-field" placeholder="(555) 555-5555" />
                    </div>
                    <div>
                      <label className="label-field">Co-Borrower Annual Income</label>
                      <input {...register("coBorrowerIncome")} className="input-field" placeholder="$60,000" />
                    </div>
                  </div>
                </div>
              )}
            </SectionCard>

            {/* 6. Credit & Financial */}
            <SectionCard title="Credit & Financial">
              <div className="space-y-4">
                <div>
                  <label className="label-field">Credit Score Range</label>
                  <select {...register("creditScoreRange")} className="input-field">
                    <option value="">Select range</option>
                    <option value="760+">760+ (Excellent)</option>
                    <option value="720-759">720–759 (Very Good)</option>
                    <option value="680-719">680–719 (Good)</option>
                    <option value="640-679">640–679 (Fair)</option>
                    <option value="600-639">600–639 (Below Average)</option>
                    <option value="below-600">Below 600</option>
                  </select>
                  {errors.creditScoreRange && (
                    <p className="mt-1 text-xs text-red-400">{errors.creditScoreRange.message}</p>
                  )}
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="label-field">Monthly Debt Payments</label>
                    <input
                      {...register("monthlyDebt")}
                      className="input-field"
                      placeholder="$500"
                    />
                  </div>
                  <div>
                    <label className="label-field">Assets / Savings</label>
                    <input
                      {...register("assets")}
                      className="input-field"
                      placeholder="$50,000"
                    />
                  </div>
                </div>
              </div>
            </SectionCard>

            {/* 7. Notes */}
            <SectionCard title="Message / Additional Notes">
              <textarea
                {...register("notes")}
                rows={4}
                className="input-field resize-none"
                placeholder="Tell us anything else that might be helpful — timeline, specific goals, questions, etc."
              />
            </SectionCard>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-gold w-full py-4 text-base"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </button>

            <p className="text-center text-xs text-slate-400">
              Your information is secured with 256-bit encryption. We will never sell or share your
              personal data. Licensed Mortgage Lender in the State of Florida. NMLS #391072.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
