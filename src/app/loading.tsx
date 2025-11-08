import type { ReactNode } from "react";
export default function Loading(): ReactNode {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30">
      <div className="flex items-center gap-3 rounded-full border border-border bg-background/80 px-6 py-3 text-sm font-medium text-muted-foreground shadow-soft">
        <span className="h-2.5 w-2.5 animate-ping rounded-full bg-primary" aria-hidden />
        Preparing your workspace&hellip;
      </div>
    </div>
  );
}
