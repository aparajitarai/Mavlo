import type { ReactElement } from "react";
import { backlog } from "@/mocks/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function BacklogBoard(): ReactElement {
  return (
    <Card className="border-dashed">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Leadership backlog</CardTitle>
          <p className="text-sm text-muted-foreground">High leverage initiatives awaiting prioritization</p>
        </div>
        <Badge variant="secondary">Auto-ranked</Badge>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-3">
        {backlog.map((item) => (
          <article key={item.title} className="rounded-2xl border border-border bg-background/70 p-4 shadow-inner">
            <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-xs text-muted-foreground">Owned by {item.owner}</p>
            <p className="mt-2 text-xs text-muted-foreground">Due {item.due}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </article>
        ))}
      </CardContent>
    </Card>
  );
}
