import type { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound(): ReactNode {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-muted/30 p-6 text-center">
      <div className="max-w-md space-y-3">
        <h1 className="text-3xl font-display font-semibold text-foreground">Page unavailable</h1>
        <p className="text-sm text-muted-foreground">The screen you&rsquo;re looking for isn&rsquo;t part of this workspace yet.</p>
      </div>
      <Button asChild className="rounded-full">
        <Link href="/">Return to overview</Link>
      </Button>
    </div>
  );
}
