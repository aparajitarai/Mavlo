import { faker } from "@faker-js/faker";
import {
  userSchema,
  projectSchema,
  taskSchema,
  leadSchema,
  vendorSchema,
  poInvoiceSchema,
  siteIssueSchema,
  calendarEventSchema,
  moodboardItemSchema,
  fileRefSchema,
  commentSchema,
  activitySchema,
} from "@/lib/schemas";

const createSeed = (count: number) => <T>(factory: () => T) =>
  Array.from({ length: count }, factory);

const staticUser = userSchema.parse({
    id: "a1b2c3d4-e5f6-4890-1234-567890abcdef",
    name: "John Doe",
    role: "architect",
    avatarUrl: faker.image.avatar(),
});

const createUsers = [staticUser, ...createSeed(9)(() =>
  userSchema.parse({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    role: faker.helpers.arrayElement([
      "architect",
      "designer",
      "pm",
      "client",
      "vendor",
    ]),
    avatarUrl: faker.image.avatar(),
  })
);

const createProjects = createSeed(5)(() =>
  projectSchema.parse({
    id: faker.string.uuid(),
    name: faker.company.name(),
    clientName: faker.person.fullName(),
    budget: faker.number.int({ min: 100000, max: 1000000 }),
    status: faker.helpers.arrayElement([
      "planning",
      "in_progress",
      "blocked",
      "completed",
    ]),
    startDate: faker.date.past().toISOString(),
    endDate: faker.date.future().toISOString(),
    members: faker.helpers.arrayElements(createUsers, 3),
    tags: faker.helpers.arrayElements(
      ["residential", "commercial", "hospitality", "retail"],
      2
    ),
  })
);

const createTasks = createSeed(25)(() =>
  taskSchema.parse({
    id: faker.string.uuid(),
    projectId: faker.helpers.arrayElement(createProjects).id,
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    assignees: faker.helpers.arrayElements(createUsers, 2),
    status: faker.helpers.arrayElement([
      "todo",
      "in_progress",
      "review",
      "done",
    ]),
    priority: faker.helpers.arrayElement(["low", "med", "high"]),
    startDate: faker.date.past().toISOString(),
    dueDate: faker.date.future().toISOString(),
    attachments: [],
    comments: [],
  })
);

const createLeads = createSeed(200)(() =>
  leadSchema.parse({
    id: faker.string.uuid(),
    source: faker.helpers.arrayElement([
      "Website",
      "Referral",
      "Advertisement",
      "Cold Call",
    ]),
    stage: faker.helpers.arrayElement([
      "new",
      "qualified",
      "proposal",
      "won",
      "lost",
    ]),
    estValue: faker.number.int({ min: 10000, max: 500000 }),
    contact: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
    },
    notes: faker.lorem.paragraph(),
    activities: [],
  })
);

const createVendors = createSeed(20)(() =>
  vendorSchema.parse({
    id: faker.string.uuid(),
    name: faker.company.name(),
    rating: faker.number.int({ min: 1, max: 5 }),
    categories: faker.helpers.arrayElements(
      ["Plumbing", "Electrical", "HVAC", "Flooring", "Painting"],
      2
    ),
    gstin: faker.string.alphanumeric(15).toUpperCase(),
    contact: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
    },
    paymentTerms: faker.helpers.arrayElement([
      "Net 30",
      "Net 60",
      "Due on receipt",
    ]),
  })
);

const createPoInvoices = createSeed(50)(() =>
  poInvoiceSchema.parse({
    id: faker.string.uuid(),
    vendorId: faker.helpers.arrayElement(createVendors).id,
    projectId: faker.helpers.arrayElement(createProjects).id,
    type: faker.helpers.arrayElement(["PO", "Invoice"]),
    amount: faker.number.int({ min: 1000, max: 50000 }),
    currency: "USD",
    status: faker.helpers.arrayElement(["draft", "sent", "paid", "overdue"]),
    dueDate: faker.date.future().toISOString(),
  })
);

const createSiteIssues = createSeed(30)(() =>
  siteIssueSchema.parse({
    id: faker.string.uuid(),
    projectId: faker.helpers.arrayElement(createProjects).id,
    title: faker.lorem.sentence(),
    severity: faker.helpers.arrayElement(["low", "med", "high"]),
    status: faker.helpers.arrayElement(["open", "in_progress", "resolved"]),
    location: faker.location.streetAddress(),
    photos: [],
  })
);

const createCalendarEvents = createSeed(90)(() =>
  calendarEventSchema.parse({
    id: faker.string.uuid(),
    title: faker.lorem.words(),
    projectId: faker.helpers.arrayElement(createProjects).id,
    resourceId: faker.helpers.arrayElement(createUsers).id,
    start: faker.date.recent().toISOString(),
    end: faker.date.soon().toISOString(),
    attendees: faker.helpers.arrayElements(createUsers, 3),
    type: faker.helpers.arrayElement(["Meeting", "Deadline", "Site Visit"]),
  })
);

const createMoodboardItems = createSeed(50)(() =>
  moodboardItemSchema.parse({
    id: faker.string.uuid(),
    type: faker.helpers.arrayElement(["image", "text", "shape", "color"]),
    src: faker.image.urlLoremFlickr({ category: "architecture" }),
    text: faker.lorem.sentence(),
    color: faker.color.rgb(),
    x: faker.number.int({ min: 0, max: 1000 }),
    y: faker.number.int({ min: 0, max: 1000 }),
    w: faker.number.int({ min: 100, max: 500 }),
    h: faker.number.int({ min: 100, max: 500 }),
    rotation: faker.number.int({ min: 0, max: 360 }),
  })
);

export const db = {
  users: createUsers,
  projects: createProjects,
  tasks: createTasks,
  leads: createLeads,
  vendors: createVendors,
  poInvoices: createPoInvoices,
  siteIssues: createSiteIssues,
  calendarEvents: createCalendarEvents,
  moodboardItems: createMoodboardItems,
};
