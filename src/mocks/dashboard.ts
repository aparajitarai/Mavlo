import { format, subDays } from "date-fns";

export const summaryMetrics = [
  {
    label: "Active projects",
    value: 18,
    delta: 0.12,
    trend: "up",
    caption: "vs last month"
  },
  {
    label: "On-time delivery",
    value: 0.94,
    delta: 0.05,
    trend: "up",
    caption: "Deadline confidence"
  },
  {
    label: "Average CSAT",
    value: 4.7,
    delta: -0.02,
    trend: "down",
    caption: "Client surveys"
  },
  {
    label: "Net revenue",
    value: 242500,
    delta: 0.08,
    trend: "up",
    caption: "Invoiced this quarter"
  }
];

export const pipelineColumns = [
  { status: "Backlog", count: 12 },
  { status: "In progress", count: 9 },
  { status: "Review", count: 4 },
  { status: "Blocked", count: 2 },
  { status: "Completed", count: 28 }
];

export const healthTrends = Array.from({ length: 12 }).map((_, index) => ({
  label: format(subDays(new Date(), (11 - index) * 7), "MMM d"),
  delivery: 80 + Math.round(Math.sin(index / 1.5) * 8 + Math.random() * 4),
  satisfaction: 70 + Math.round(Math.cos(index / 1.4) * 6 + Math.random() * 5)
}));

export const clients = [
  { name: "Northwind Logistics", avatar: "https://i.pravatar.cc/100?img=30", spend: 62500, score: 92, status: "Expanding" },
  { name: "Orion Retail", avatar: "https://i.pravatar.cc/100?img=24", spend: 40200, score: 88, status: "On track" },
  { name: "Dusk Labs", avatar: "https://i.pravatar.cc/100?img=15", spend: 18800, score: 78, status: "At risk" },
  { name: "Harbor & Co", avatar: "https://i.pravatar.cc/100?img=45", spend: 15750, score: 85, status: "Steady" }
];

export const highlights = [
  {
    title: "Team velocity is up 18%",
    description: "Sprint throughput improved after automating client updates",
    action: "Review automation report"
  },
  {
    title: "3 projects need decision",
    description: "Scope alignment pending for Dusk Labs &amp; Northwind",
    action: "Open decision tracker"
  }
];
