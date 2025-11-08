import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { RevenueChart } from "@/components/analytics/revenue-chart";
import { EfficiencyRadar } from "@/components/analytics/efficiency-radar";
import { MilestoneList } from "@/components/analytics/milestone-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { revenueSeries, efficiencySeries } from "@/mocks/analytics";

export default function AnalyticsPage(): ReactNode {
  return (
    <AppShell>
      <section className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-display font-semibold tracking-tight text-foreground">Intelligence hub</h1>
            <p className="mt-1 text-base text-muted-foreground">Forecast models, automation coverage, and program efficiency.</p>
          </div>
          <Badge variant="secondary" className="rounded-full px-4 py-2">Confidence 91%</Badge>
        </div>
      </section>
      <Tabs defaultValue="revenue" className="space-y-6">
        <TabsList>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
        </TabsList>
        <TabsContent value="revenue">
          <Card className="border-dashed">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Revenue forecast</CardTitle>
                <p className="text-sm text-muted-foreground">Projected run-rate with AI-backed scenario planning</p>
              </div>
              <Badge variant="outline">Scenario: Balanced growth</Badge>
            </CardHeader>
            <CardContent>
              <RevenueChart data={revenueSeries} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="efficiency">
          <Card className="border-dashed">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Program efficiency</CardTitle>
                <p className="text-sm text-muted-foreground">Compare satisfaction, delivery, and automation maturity.</p>
              </div>
              <Badge variant="secondary">Goal: 85%</Badge>
            </CardHeader>
            <CardContent>
              <EfficiencyRadar data={efficiencySeries} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="milestones">
          <MilestoneList />
        </TabsContent>
      </Tabs>
    </AppShell>
  );
}
