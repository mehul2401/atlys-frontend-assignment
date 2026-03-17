type DocumentItemProps = {
  title: string;
  tag: string;
  isActive: boolean;
};

export const DocumentItem = ({ title, tag, isActive }: DocumentItemProps) => (
  <div
    className={`w-full rounded-xl border px-4 py-3 transition-colors ${
      isActive
        ? "border-emerald-200 bg-emerald-50 shadow-sm"
        : "border-zinc-100 bg-zinc-50"
    }`}
  >
    <p
      className={`text-sm font-semibold ${
        isActive ? "text-zinc-900" : "text-zinc-500"
      }`}
    >
      {title}
    </p>
    <p
      className={`mt-0.5 text-xs ${
        isActive ? "text-emerald-600" : "text-zinc-400"
      }`}
    >
      {tag}
    </p>
  </div>
);
