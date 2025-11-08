import type { ReactElement } from "react";
import { highlights } from "@/mocks/dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function InsightHighlights(): ReactElement {
  return (
    <Card className="border-dashed">
      <CardHeader className="flex flex-row items-start justify-between">
        <div>
          <CardTitle>Decision highlights</CardTitle>
          <p className="text-sm text-muted-foreground">AI-curated focus for the week</p>
        </div>
        <Button variant="ghost">See all</Button>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2">
        {highlights.map((item) => (
          <div key={item.title} className="rounded-2xl border border-border/70 bg-background/60 p-5 shadow-inner">
            <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            <Button variant="link" className="mt-3 px-0 text-primary">
              {item.action}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
