import { http, HttpResponse } from "msw";
import { db } from "./seed";
import { userSchema, taskSchema, leadSchema, poInvoiceSchema, siteIssueSchema, calendarEventSchema, moodboardItemSchema } from "@/lib/schemas";

export const handlers = [
  http.get("/api/me", () => {
    return HttpResponse.json(db.users[0]);
  }),

  http.get("/api/projects", () => {
    return HttpResponse.json(db.projects);
  }),

  http.get("/api/projects/:id", ({ params }) => {
    const project = db.projects.find((p) => p.id === params.id);
    if (project) {
      return HttpResponse.json(project);
    }
    return new HttpResponse(null, { status: 404 });
  }),

  http.post("/api/projects", async ({ request }) => {
    const newProject = await request.json();
    db.projects.push(newProject);
    return HttpResponse.json(newProject, { status: 201 });
  }),

  http.get("/api/tasks", ({ request }) => {
    const url = new URL(request.url);
    const projectId = url.searchParams.get("projectId");
    const tasks = db.tasks.filter((t) => t.projectId === projectId);
    return HttpResponse.json(tasks);
  }),

  http.patch("/api/tasks/:id", async ({ params, request }) => {
    const taskIndex = db.tasks.findIndex((t) => t.id === params.id);
    if (taskIndex !== -1) {
      const updatedTask = await request.json();
      db.tasks[taskIndex] = { ...db.tasks[taskIndex], ...updatedTask };
      return HttpResponse.json(db.tasks[taskIndex]);
    }
    return new HttpResponse(null, { status: 404 });
  }),

  http.get("/api/leads", () => {
    return HttpResponse.json(db.leads);
  }),

  http.patch("/api/leads/:id", async ({ params, request }) => {
    const leadIndex = db.leads.findIndex((l) => l.id === params.id);
    if (leadIndex !== -1) {
      const updatedLead = await request.json();
      db.leads[leadIndex] = { ...db.leads[leadIndex], ...updatedLead };
      return HttpResponse.json(db.leads[leadIndex]);
    }
    return new HttpResponse(null, { status: 404 });
  }),

  http.get("/api/vendors", () => {
    return HttpResponse.json(db.vendors);
  }),

  http.get("/api/finance/invoices", () => {
    return HttpResponse.json(db.poInvoices);
  }),

  http.patch("/api/finance/invoices/:id", async ({ params, request }) => {
    const invoiceIndex = db.poInvoices.findIndex((i) => i.id === params.id);
    if (invoiceIndex !== -1) {
      const updatedInvoice = await request.json();
      db.poInvoices[invoiceIndex] = { ...db.poInvoices[invoiceIndex], ...updatedInvoice };
      return HttpResponse.json(db.poInvoices[invoiceIndex]);
    }
    return new HttpResponse(null, { status: 404 });
  }),

  http.get("/api/site/issues", () => {
    return HttpResponse.json(db.siteIssues);
  }),

  http.patch("/api/site/issues/:id", async ({ params, request }) => {
    const issueIndex = db.siteIssues.findIndex((i) => i.id === params.id);
    if (issueIndex !== -1) {
      const updatedIssue = await request.json();
      db.siteIssues[issueIndex] = { ...db.siteIssues[issueIndex], ...updatedIssue };
      return HttpResponse.json(db.siteIssues[issueIndex]);
    }
    return new HttpResponse(null, { status: 404 });
  }),

  http.get("/api/calendar/events", () => {
    return HttpResponse.json(db.calendarEvents);
  }),

  http.post("/api/calendar/events", async ({ request }) => {
    const newEvent = await request.json();
    db.calendarEvents.push(newEvent);
    return HttpResponse.json(newEvent, { status: 201 });
  }),

  http.get("/api/moodboard/items", ({ request }) => {
    const url = new URL(request.url);
    const projectId = url.searchParams.get("projectId");
    // In a real app, you'd filter by projectId
    return HttpResponse.json(db.moodboardItems);
  }),

  http.post("/api/moodboard/items", async ({ request }) => {
    const newItem = await request.json();
    db.moodboardItems.push(newItem);
    return HttpResponse.json(newItem, { status: 201 });
  }),

  http.patch("/api/moodboard/items/:id", async ({ params, request }) => {
    const itemIndex = db.moodboardItems.findIndex((i) => i.id === params.id);
    if (itemIndex !== -1) {
      const updatedItem = await request.json();
      db.moodboardItems[itemIndex] = { ...db.moodboardItems[itemIndex], ...updatedItem };
      return HttpResponse.json(db.moodboardItems[itemIndex]);
    }
    return new HttpResponse(null, { status: 404 });
  }),
];
