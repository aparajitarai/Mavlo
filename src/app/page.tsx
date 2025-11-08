import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { MetricGrid } from "@/components/dashboard/metric-grid";
import { PipelineBoard } from "@/components/dashboard/pipeline-board";
import { RevenueChart } from "@/components/analytics/revenue-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { revenueSeries } from "@/mocks/analytics";
import { ClientSpotlight } from "@/components/dashboard/client-spotlight";
import { InsightHighlights } from "@/components/dashboard/insight-highlights";
import { ActivityTimeline } from "@/components/dashboard/activity-timeline";

export default function Page(): ReactNode {
  return (
    <AppShell>
      <section className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-display font-semibold tracking-tight text-foreground">Operational overview</h1>
            <p className="mt-1 text-base text-muted-foreground">Monitor the health of client programs, delivery velocity, and team focus.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="rounded-full bg-secondary px-4 py-2 font-semibold text-secondary-foreground">Week 18 insights</span>
            <span>Autopilot confidence: <strong className="text-foreground">92%</strong></span>
          </div>
        </div>
        <MetricGrid />
      </section>
      <section className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <Card className="border-dashed">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Revenue velocity</CardTitle>
              <p className="text-sm text-muted-foreground">Trailing 8 months of retainer and project revenue</p>
            </div>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase text-secondary-foreground">Updated hourly</span>
          </CardHeader>
          <CardContent>
            <RevenueChart data={revenueSeries} />
          </CardContent>
        </Card>
        <ClientSpotlight />
      </section>
      <PipelineBoard />
      <section className="grid gap-6 md:grid-cols-2">
        <InsightHighlights />
        <ActivityTimeline />
      </section>
    </AppShell>
  );
}
