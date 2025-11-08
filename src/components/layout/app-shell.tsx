import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";
import { MobileNav } from "@/components/layout/mobile-nav";

export function AppShell({ children }: { children: ReactNode }): ReactNode {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex w-full flex-col">
          <TopNav />
          <main className="flex-1 bg-muted/30 px-4 pb-16 pt-8 sm:px-8 lg:px-10">
            <div className="mx-auto w-full max-w-6xl space-y-10">{children}</div>
          </main>
        </div>
      </div>
      <MobileNav />
    </div>
  );
}
