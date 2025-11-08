import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { ProjectTable } from "@/components/projects/project-table";
import { BacklogBoard } from "@/components/projects/backlog-board";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectsPage(): ReactNode {
  return (
    <AppShell>
      <section className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-display font-semibold tracking-tight text-foreground">Delivery control tower</h1>
            <p className="mt-1 text-base text-muted-foreground">Live status, automation coverage, and leadership backlog.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary" className="rounded-full px-4 py-2">Automation coverage 68%</Badge>
            <Button className="rounded-full">Create initiative</Button>
          </div>
        </div>
      </section>
      <ProjectTable />
      <BacklogBoard />
      <Card className="border-dashed">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Workflow guardrails</CardTitle>
            <p className="text-sm text-muted-foreground">Automations preventing scope risk &amp; compliance gaps</p>
          </div>
          <Badge variant="outline">4 active</Badge>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Kickoff readiness",
              description: "Auto-checklists ensure every client kickoff includes security &amp; finance approvals"
            },
            {
              title: "Scope drift monitor",
              description: "Daily variance alerts for burn vs value delivered across pods"
            },
            {
              title: "Stakeholder pulse",
              description: "Aggregates meeting notes to surface sentiment changes in under 12h"
            },
            {
              title: "Compliance autopilot",
              description: "Maps project artifacts to requirements and flags missing deliverables"
            }
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border/60 bg-background/70 p-4">
              <p className="text-sm font-semibold text-foreground">{item.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </AppShell>
  );
}
