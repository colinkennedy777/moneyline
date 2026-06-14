import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Icon from "./Icon";

export default function LoanProgramCard({
  icon,
  title,
  description,
  href = "/loan-programs",
}: {
  icon: string;
  title: string;
  description: string;
  href?: string;
}) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-lg hover:border-gold/30">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-slate-950 text-gold transition group-hover:bg-gold group-hover:text-slate-950">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
        {description}
      </p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark hover:text-gold transition"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
