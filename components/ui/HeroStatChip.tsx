type HeroStatChipProps = {
  label: string;
  value: string;
  variant?: "dark" | "light";
};

export const HeroStatChip = ({
  label,
  value,
  variant = "dark",
}: HeroStatChipProps) => {
  const styles =
    variant === "light"
      ? "border-white/30 bg-white/15 text-white backdrop-blur-sm"
      : "border-zinc-200 bg-white text-zinc-700";

  return (
    <span
      className={`inline-flex flex-col items-center rounded-xl border px-4 py-2 text-xs ${styles}`}
    >
      <span className="font-normal opacity-80">{label}</span>
      <span className="mt-0.5 text-sm font-semibold">{value}</span>
    </span>
  );
};
