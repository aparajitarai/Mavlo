import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { SegmentCards } from "@/components/clients/segment-cards";
import { TouchpointTable } from "@/components/clients/touchpoint-table";
import { ActivityTimeline } from "@/components/dashboard/activity-timeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { clientActivities } from "@/mocks/clients";

export default function ClientsPage(): ReactNode {
  return (
    <AppShell>
      <section className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-display font-semibold tracking-tight text-foreground">Client experience</h1>
            <p className="mt-1 text-base text-muted-foreground">Segment health, touchpoints, and automation signals for every account.</p>
          </div>
          <Badge variant="secondary" className="rounded-full px-4 py-2">Playbook coverage 84%</Badge>
        </div>
        <SegmentCards />
      </section>
      <section className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <TouchpointTable />
        <Card className="border-dashed">
          <CardHeader>
            <CardTitle>Upcoming engagements</CardTitle>
            <p className="text-sm text-muted-foreground">Automated reminders for the next 7 days</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {clientActivities.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-background/70 p-4">
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                <p className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">{item.timestamp}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
      <ActivityTimeline />
    </AppShell>
  );
}
