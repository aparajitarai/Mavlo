import { z } from "zod";

export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  role: z.enum(["architect", "designer", "pm", "client", "vendor"]),
  avatarUrl: z.string().url().optional(),
});
export type User = z.infer<typeof userSchema>;

export const projectSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  clientName: z.string(),
  budget: z.number(),
  status: z.enum(["planning", "in_progress", "blocked", "completed"]),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  members: z.array(userSchema),
  tags: z.array(z.string()),
});
export type Project = z.infer<typeof projectSchema>;

export const fileRefSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  type: z.string(),
  size: z.number(),
  url: z.string().url().optional(),
});
export type FileRef = z.infer<typeof fileRefSchema>;

export const commentSchema = z.object({
  id: z.string().uuid(),
  author: userSchema,
  content: z.string(),
  createdAt: z.string().datetime(),
});
export type Comment = z.infer<typeof commentSchema>;

export const taskSchema = z.object({
  id: z.string().uuid(),
  projectId: z.string().uuid(),
  title: z.string(),
  description: z.string().optional(),
  assignees: z.array(userSchema),
  status: z.enum(["todo", "in_progress", "review", "done"]),
  priority: z.enum(["low", "med", "high"]),
  startDate: z.string().datetime().optional(),
  dueDate: z.string().datetime().optional(),
  attachments: z.array(fileRefSchema),
  comments: z.array(commentSchema),
});
export type Task = z.infer<typeof taskSchema>;

export const activitySchema = z.object({
  id: z.string().uuid(),
  description: z.string(),
  timestamp: z.string().datetime(),
});
export type Activity = z.infer<typeof activitySchema>;

export const leadSchema = z.object({
  id: z.string().uuid(),
  source: z.string(),
  stage: z.enum(["new", "qualified", "proposal", "won", "lost"]),
  estValue: z.number(),
  contact: z.object({ name: z.string(), email: z.string().email() }),
  notes: z.string().optional(),
  activities: z.array(activitySchema),
});
export type Lead = z.infer<typeof leadSchema>;

export const vendorSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  rating: z.number().min(1).max(5),
  categories: z.array(z.string()),
  gstin: z.string().optional(),
  contact: z.object({ name: z.string(), email: z.string().email() }),
  paymentTerms: z.string(),
});
export type Vendor = z.infer<typeof vendorSchema>;

export const poInvoiceSchema = z.object({
  id: z.string().uuid(),
  vendorId: z.string().uuid(),
  projectId: z.string().uuid(),
  type: z.enum(["PO", "Invoice"]),
  amount: z.number(),
  currency: z.string(),
  status: z.enum(["draft", "sent", "paid", "overdue"]),
  dueDate: z.string().datetime(),
});
export type PoInvoice = z.infer<typeof poInvoiceSchema>;

export const siteIssueSchema = z.object({
  id: z.string().uuid(),
  projectId: z.string().uuid(),
  title: z.string(),
  severity: z.enum(["low", "med", "high"]),
  status: z.enum(["open", "in_progress", "resolved"]),
  location: z.string(),
  photos: z.array(fileRefSchema),
});
export type SiteIssue = z.infer<typeof siteIssueSchema>;

export const calendarEventSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  projectId: z.string().uuid().optional(),
  resourceId: z.string().optional(),
  start: z.string().datetime(),
  end: z.string().datetime(),
  attendees: z.array(userSchema),
  type: z.string(),
});
export type CalendarEvent = z.infer<typeof calendarEventSchema>;

export const moodboardItemSchema = z.object({
  id: z.string().uuid(),
  type: z.enum(["image", "text", "shape", "color"]),
  src: z.string().url().optional(),
  text: z.string().optional(),
  color: z.string().optional(),
  x: z.number(),
  y: z.number(),
  w: z.number(),
  h: z.number(),
  rotation: z.number(),
});
export type MoodboardItem = z.infer<typeof moodboardItemSchema>;
