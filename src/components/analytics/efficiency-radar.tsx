"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts";
import type { ComponentProps, ReactElement } from "react";

interface EfficiencyRadarProps {
  data: Array<{ label: string; csat: number; delivery: number; automation: number }>;
}

export function EfficiencyRadar({ data }: EfficiencyRadarProps): ReactElement {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <RadarChart data={data} outerRadius={90}>
        <PolarGrid stroke="rgba(148, 163, 184, 0.3)" />
        <PolarAngleAxis dataKey="label" tick={{ fontSize: 12, fill: "var(--tw-prose-body)", opacity: 0.8 }} />
        <Tooltip content={<EfficiencyTooltip />} />
        <Radar name="CSAT" dataKey="csat" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.25} />
        <Radar name="Delivery" dataKey="delivery" stroke="hsl(var(--accent))" fill="hsl(var(--accent))" fillOpacity={0.2} />
        <Radar name="Automation" dataKey="automation" stroke="hsl(var(--info))" fill="hsl(var(--info))" fillOpacity={0.2} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

function EfficiencyTooltip({ active, payload }: ComponentProps<typeof Tooltip>["content"]): ReactElement | null {
  if (!active || !payload?.length) return null;
  const item = payload[0];

  return (
    <div className="rounded-xl border border-border bg-background/95 p-4 text-xs shadow-lg">
      <p className="text-xs font-semibold uppercase text-muted-foreground">{item.payload.label}</p>
      <ul className="mt-2 space-y-1">
        {payload.map((entry) => (
          <li key={entry.name} className="flex items-center justify-between gap-4 text-sm">
            <span className="text-muted-foreground">{entry.name}</span>
            <span className="font-semibold text-foreground">{entry.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
