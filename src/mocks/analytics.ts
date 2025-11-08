import { addMonths, format } from "date-fns";

export const revenueSeries = Array.from({ length: 8 }).map((_, index) => {
  const base = 180 + index * 15;
  return {
    month: format(addMonths(new Date(2023, 0, 1), index), "MMM"),
    retainers: base + Math.round(Math.random() * 20),
    projects: base / 2 + Math.round(Math.random() * 25)
  };
});

export const efficiencySeries = [
  { label: "Strategic", csat: 92, delivery: 88, automation: 76 },
  { label: "Growth", csat: 86, delivery: 81, automation: 66 },
  { label: "Retention", csat: 74, delivery: 69, automation: 58 }
];

export const forecastMilestones = [
  {
    title: "Automation score 80%",
    description: "Cross-functional automations covering finance and delivery",
    eta: "May 18",
    status: "On track"
  },
  {
    title: "Strategic playbooks",
    description: "Deploy modular playbook builder to strategic pod",
    eta: "Jun 01",
    status: "At risk"
  },
  {
    title: "Client 360 rollout",
    description: "Unified profile experience across teams",
    eta: "Jun 15",
    status: "Ahead"
  }
];
