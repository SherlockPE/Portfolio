interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  number,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 sm:mb-16 ${isCenter ? "text-center" : "text-left"}`}>
      <div className={`flex items-center gap-2 mb-2 ${isCenter ? "justify-center" : "justify-start"}`}>
        <span className="font-mono text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400">
          // {number}
        </span>
        <span className="h-px w-8 bg-blue-500/30" />
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

