import type { ReactElement } from "react";
import { pipelineColumns } from "@/mocks/dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function PipelineBoard(): ReactElement {
  return (
    <Card className="overflow-hidden border-dashed">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Pipeline balance</CardTitle>
          <p className="text-sm text-muted-foreground">Snapshot of active workstreams by stage</p>
        </div>
        <Badge>Updated 2h ago</Badge>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-5">
          {pipelineColumns.map((column) => (
            <div
              key={column.status}
              className="rounded-2xl border border-border bg-background/80 p-4 text-sm shadow-inner"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{column.status}</p>
              <p className="mt-2 text-2xl font-semibold text-foreground">{column.count}</p>
              <p className="mt-1 text-xs text-muted-foreground">Avg. wait 2.1d</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
