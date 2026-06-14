"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function LeadForm({
  title = "Request a Free Quote",
  subtitle = "Tell us a bit about your goals and a mortgage advisor will reach out within one business day.",
  variant = "light",
}: {
  title?: string;
  subtitle?: string;
  variant?: "light" | "dark";
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormValues) => {
    await new Promise((r) => setTimeout(r, 900));
  };

  const dark = variant === "dark";

  if (isSubmitSuccessful) {
    return (
      <div
        className={`rounded-2xl p-8 text-center ${
          dark ? "bg-navy-light text-white" : "bg-white shadow-card"
        }`}
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold-light" />
        <h3 className={`mt-4 text-xl font-bold ${dark ? "text-white" : "text-navy"}`}>
          Thank you!
        </h3>
        <p className={`mt-2 text-sm ${dark ? "text-white/70" : "text-navy/70"}`}>
          Your request has been received. A MoneyLine advisor will be in touch
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`rounded-2xl p-7 sm:p-8 ${
        dark ? "bg-navy-light" : "bg-white shadow-card"
      }`}
    >
      <h3 className={`text-xl font-bold ${dark ? "text-white" : "text-navy"}`}>
        {title}
      </h3>
      <p className={`mt-1.5 text-sm ${dark ? "text-white/70" : "text-navy/60"}`}>
        {subtitle}
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label className={dark ? "label-field !text-white" : "label-field"}>
            Full Name
          </label>
          <input {...register("name")} className="input-field" placeholder="Jane Doe" />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={dark ? "label-field !text-white" : "label-field"}>
              Email
            </label>
            <input
              {...register("email")}
              className="input-field"
              placeholder="jane@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className={dark ? "label-field !text-white" : "label-field"}>
              Phone
            </label>
            <input
              {...register("phone")}
              className="input-field"
              placeholder="(555) 555-5555"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
            )}
          </div>
        </div>
        <div>
          <label className={dark ? "label-field !text-white" : "label-field"}>
            How can we help? (optional)
          </label>
          <textarea
            {...register("message")}
            rows={3}
            className="input-field resize-none"
            placeholder="I'm looking to get pre-approved for a home purchase."
          />
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-gold mt-6 w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          "Request My Quote"
        )}
      </button>
    </form>
  );
}
