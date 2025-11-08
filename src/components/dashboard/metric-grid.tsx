import type { ReactElement } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { summaryMetrics } from "@/mocks/dashboard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatNumber, formatPercent } from "@/lib/utils";

export function MetricGrid(): ReactElement {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {summaryMetrics.map((metric) => (
        <Card key={metric.label} className="border-dashed" data-theme-card>
          <CardHeader>
            <CardTitle className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              {metric.label}
            </CardTitle>
            <CardDescription>{metric.caption}</CardDescription>
          </CardHeader>
          <CardContent className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-semibold text-foreground">
                {metric.label === "Net revenue"
                  ? formatCurrency(metric.value)
                  : metric.label === "Average CSAT"
                    ? formatNumber(metric.value, { minimumFractionDigits: 1 })
                    : metric.value}
              </p>
            </div>
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${metric.trend === "up" ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"}`}
            >
              {metric.trend === "up" ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
              {formatPercent(Math.abs(metric.delta))}
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
