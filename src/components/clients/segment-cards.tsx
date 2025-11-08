import type { ReactElement } from "react";
import { clientSegments } from "@/mocks/clients";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SegmentCards(): ReactElement {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {clientSegments.map((segment) => (
        <Card key={segment.name} className="border-dashed">
          <CardHeader>
            <CardTitle className="text-base">{segment.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{segment.description}</p>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Accounts</span>
              <span className="text-lg font-semibold text-foreground">{segment.accounts}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Satisfaction</span>
              <span className="text-lg font-semibold text-foreground">{segment.satisfaction}%</span>
            </div>
            <Badge variant={segment.trend >= 0 ? "secondary" : "default"}>
              {segment.trend >= 0 ? "+" : ""}
              {segment.trend}% this quarter
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
