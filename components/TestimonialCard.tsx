import { Star } from "lucide-react";

export default function TestimonialCard({
  quote,
  name,
  location,
  rating,
}: {
  quote: string;
  name: string;
  location: string;
  rating: number;
}) {
  return (
    <figure className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-card border border-slate-100">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "fill-gold text-gold" : "text-slate-200"}`}
          />
        ))}
      </div>
      <blockquote className="flex-1 text-slate-600 leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-950 font-display text-sm font-bold text-gold">
          {name[0]}
        </div>
        <div>
          <p className="font-semibold text-slate-900">{name}</p>
          <p className="text-xs text-slate-400">{location}</p>
        </div>
      </figcaption>
    </figure>
  );
}
