import type { ReactElement } from "react";
import { clientActivities } from "@/mocks/clients";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ActivityTimeline(): ReactElement {
  return (
    <Card className="border-dashed">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Activity feed</CardTitle>
          <p className="text-sm text-muted-foreground">Recent updates from high-priority clients</p>
        </div>
        <Badge variant="outline">Live</Badge>
      </CardHeader>
      <CardContent>
        <ol className="space-y-5">
          {clientActivities.map((activity) => (
            <li key={activity.title} className="relative pl-6">
              <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
              <p className="text-sm font-semibold text-foreground">{activity.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{activity.description}</p>
              <p className="mt-1 text-xs text-muted-foreground">{activity.timestamp}</p>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
