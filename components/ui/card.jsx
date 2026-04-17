import React from "react";
import { cn } from "@/lib/utils";

/**
 * Shared Card Component - Updated for Wezgo Brand
 * Supports interactive glass states and display typography
 */
export const Card = ({ children, className, hover = true }) => {
  return (
    <div className={cn(
      "glass p-6 rounded-3xl transition-all duration-300",
      hover && "glass-card",
      className
    )}>
      {children}
    </div>
  );
};

export const CardHeader = ({ title, subtitle, gradientTitle = false }) => {
  return (
    <div className="mb-6">
      <h3 className={cn(
        "text-3xl font-display font-black tracking-tight",
        gradientTitle ? "gradient-text-coral" : "text-white"
      )}>
        {title}
      </h3>
      {subtitle && <p className="text-base text-slate-400 mt-1 font-body">{subtitle}</p>}
    </div>
  );
};
