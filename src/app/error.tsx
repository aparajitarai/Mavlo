"use client";

import type { ReactElement } from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }): ReactElement {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-muted/30 p-6 text-center">
      <div className="max-w-md space-y-3">
        <h1 className="text-2xl font-display font-semibold text-foreground">We hit a snag</h1>
        <p className="text-sm text-muted-foreground">
          Something unexpected happened while loading the workspace. Try again and the autopilot will pick up where you left off.
        </p>
      </div>
      <Button className="rounded-full" onClick={reset}>
        Retry loading
      </Button>
    </div>
  );
}
