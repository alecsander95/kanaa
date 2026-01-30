import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassPanel({ children, className, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-2xl p-6 md:p-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
