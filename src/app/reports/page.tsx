import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const reports = [
  {
    title: "Executive briefing",
    description: "Weekly snapshot combining revenue, delivery, and sentiment insights",
    cadence: "Delivered every Monday"
  },
  {
    title: "Automation performance",
    description: "Impact of guardrails on time-to-value and risk prevention",
    cadence: "Updated daily"
  },
  {
    title: "Client journey map",
    description: "Unified timeline for each strategic account with recommended next steps",
    cadence: "On demand"
  }
];

export default function ReportsPage(): ReactNode {
  return (
    <AppShell>
      <section className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-display font-semibold tracking-tight text-foreground">Reports &amp; briefing center</h1>
            <p className="mt-1 text-base text-muted-foreground">Share human-ready intelligence with leadership and clients.</p>
          </div>
          <Button className="rounded-full">Schedule delivery</Button>
        </div>
      </section>
      <div className="grid gap-6 md:grid-cols-2">
        {reports.map((report) => (
          <Card key={report.title} className="border-dashed">
            <CardHeader className="flex flex-row items-start justify-between">
              <div>
                <CardTitle>{report.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{report.description}</p>
              </div>
              <Badge variant="secondary">{report.cadence}</Badge>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="rounded-full px-4">
                Generate preview
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
