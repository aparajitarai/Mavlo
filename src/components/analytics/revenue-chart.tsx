"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { formatCurrency } from "@/lib/utils";
import type { ComponentProps, ReactElement } from "react";

interface RevenueChartProps {
  data: Array<{ month: string; retainers: number; projects: number }>;
}

export function RevenueChart({ data }: RevenueChartProps): ReactElement {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={data} margin={{ left: 0, right: 0, top: 20, bottom: 0 }}>
        <defs>
          <linearGradient id="colorRetainers" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.35} />
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.05} />
          </linearGradient>
          <linearGradient id="colorProjects" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.4} />
            <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="4 8" stroke="rgba(148, 163, 184, 0.25)" vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "var(--tw-prose-body)", opacity: 0.7 }} />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => formatCurrency(value * 1000, { maximumFractionDigits: 0 })}
          tick={{ fontSize: 12, fill: "var(--tw-prose-body)", opacity: 0.7 }}
        />
        <Tooltip content={<RevenueTooltip />} />
        <Area type="monotone" dataKey="retainers" stroke="hsl(var(--primary))" fill="url(#colorRetainers)" strokeWidth={2} />
        <Area type="monotone" dataKey="projects" stroke="hsl(var(--accent))" fill="url(#colorProjects)" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function RevenueTooltip({ active, payload }: ComponentProps<typeof Tooltip>["content"]): ReactElement | null {
  if (!active || !payload?.length) return null;
  const entry = payload[0];
  const values = payload.map((item) => ({
    label: item.name,
    value: formatCurrency((item.value as number) * 1000, { maximumFractionDigits: 0 })
  }));

  return (
    <div className="min-w-[200px] rounded-xl border border-border bg-background/95 p-4 text-sm shadow-lg">
      <p className="text-xs font-medium uppercase text-muted-foreground">{entry.payload.month}</p>
      <div className="mt-2 space-y-1 text-sm">
        {values.map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <span className="text-muted-foreground">{item.label}</span>
            <span className="font-semibold text-foreground">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
