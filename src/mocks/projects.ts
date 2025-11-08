import { addDays, format } from "date-fns";

export const projectTable = [
  {
    id: "PX-2041",
    client: "Northwind Logistics",
    owner: "Taylor Brooks",
    status: "In progress",
    progress: 72,
    dueDate: format(addDays(new Date(), 12), "MMM d"),
    budget: 48000
  },
  {
    id: "PX-2037",
    client: "Orion Retail",
    owner: "Nisha Patel",
    status: "Planning",
    progress: 36,
    dueDate: format(addDays(new Date(), 28), "MMM d"),
    budget: 35600
  },
  {
    id: "PX-2028",
    client: "Harbor & Co",
    owner: "Andre Walker",
    status: "Review",
    progress: 54,
    dueDate: format(addDays(new Date(), 7), "MMM d"),
    budget: 21800
  },
  {
    id: "PX-2025",
    client: "Dusk Labs",
    owner: "Kari Lawson",
    status: "At risk",
    progress: 18,
    dueDate: format(addDays(new Date(), 5), "MMM d"),
    budget: 42000
  }
];

export const backlog = [
  {
    title: "Finalize quarterly roadmap",
    owner: "Taylor Brooks",
    due: format(addDays(new Date(), 3), "MMM d"),
    tags: ["Strategy", "Leadership"]
  },
  {
    title: "Automate finance check-ins",
    owner: "Nisha Patel",
    due: format(addDays(new Date(), 6), "MMM d"),
    tags: ["Automation"]
  },
  {
    title: "Client workshop playbook",
    owner: "Andre Walker",
    due: format(addDays(new Date(), 8), "MMM d"),
    tags: ["Enablement"]
  }
];
