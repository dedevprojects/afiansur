import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    const variantClasses = {
      default:
        "bg-[#121313] text-white shadow-sm hover:bg-neutral-800 active:scale-[0.99]",
      outline:
        "border border-neutral-300/80 bg-white/80 backdrop-blur-sm text-[#121313] shadow-sm hover:bg-neutral-100/80 hover:border-neutral-400 active:scale-[0.99]",
      secondary:
        "bg-neutral-100 text-[#121313] shadow-sm hover:bg-neutral-200",
      ghost:
        "hover:bg-neutral-100 hover:text-neutral-900",
      link:
        "text-[#121313] underline-offset-4 hover:underline",
    }[variant];

    const sizeClasses = {
      default: "h-9 px-4 py-2 rounded-lg",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-11 rounded-full px-6 text-sm",
      icon: "h-9 w-9 rounded-lg",
    }[size];

    const combinedClassName = cn(
      baseClasses,
      variantClasses,
      sizeClasses,
      className
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(
        children as React.ReactElement<{ className?: string }>,
        {
          className: cn(
            combinedClassName,
            (children as React.ReactElement<{ className?: string }>).props.className
          ),
          ...props,
        }
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
