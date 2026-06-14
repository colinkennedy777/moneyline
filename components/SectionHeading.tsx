export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && (
        <span className="eyebrow mb-3 block">{eyebrow}</span>
      )}
      <h2
        className={`font-display text-3xl font-bold text-balance sm:text-4xl ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      <div className={`gold-bar mt-4 ${center ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/65" : "text-slate-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
