import type { ReactElement } from "react";
import { forecastMilestones } from "@/mocks/analytics";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function MilestoneList(): ReactElement {
  return (
    <Card className="border-dashed">
      <CardHeader>
        <CardTitle>Strategic milestones</CardTitle>
        <p className="text-sm text-muted-foreground">Autonomous forecast with alignment status</p>
      </CardHeader>
      <CardContent className="space-y-5">
        {forecastMilestones.map((item) => (
          <div key={item.title} className="flex items-start justify-between gap-4 rounded-2xl border border-border/70 bg-background/60 p-4">
            <div>
              <p className="text-sm font-semibold text-foreground">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            </div>
            <div className="text-right">
              <Badge variant="outline">{item.eta}</Badge>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{item.status}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
