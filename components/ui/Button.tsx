import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
> & {
  variant?: "primary" | "outline" | "dark";
};

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const base =
    "inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-3 text-base font-semibold whitespace-nowrap transition-all duration-200 w-full md:w-auto md:px-32 cursor-pointer hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-gray-100"
      : variant === "dark"
        ? "bg-zinc-900 text-white hover:bg-zinc-800"
        : "border border-zinc-300 bg-transparent text-white hover:bg-white/10";

  return (
    <button type="button" className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};

