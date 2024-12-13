// components/ui/Badge.tsx
import React from "react";
import clsx from "clsx";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "green" | "orange"; // Custom color options
  className?: string;
};

const Badge: React.FC<BadgeProps> = ({ children, variant = "green", className }) => {
  const baseClasses = "px-2 py-1 text-xs font-semibold rounded-full";
  const variantClasses = {
    green: "bg-emerald-500 text-white hover:bg-emerald-600",
    orange: "bg-orange-500 text-white hover:bg-orange-600",
  };

  return (
    <span className={clsx(baseClasses, variantClasses[variant], className)}>
      {children}
    </span>
  );
};

export default Badge;
