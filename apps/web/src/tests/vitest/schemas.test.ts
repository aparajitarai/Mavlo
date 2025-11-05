import { describe, it, expect } from "vitest";
import { v4 as uuidv4 } from "uuid";
import { userSchema, projectSchema, taskSchema } from "@/lib/schemas";

describe("Zod Schemas", () => {
    it("should validate a valid user", () => {
        const user = {
            id: uuidv4(),
            name: "John Doe",
            role: "architect",
            avatarUrl: "https://example.com/avatar.png",
        };
        const result = userSchema.safeParse(user);
        if (!result.success) console.error(JSON.stringify(result.error, null, 2));
        expect(result.success).toBe(true);
    });

    it("should validate a valid project", () => {
        const project = {
            id: uuidv4(),
            name: "Test Project",
            clientName: "Test Client",
            budget: 100000,
            status: "planning",
            startDate: new Date().toISOString(),
            endDate: new Date().toISOString(),
            members: [],
            tags: ["test"],
        };
        const result = projectSchema.safeParse(project);
        if (!result.success) console.error(JSON.stringify(result.error, null, 2));
        expect(result.success).toBe(true);
    });

    it("should validate a valid task", () => {
        const task = {
            id: uuidv4(),
            projectId: uuidv4(),
            title: "Test Task",
            assignees: [],
            status: "todo",
            priority: "med",
            attachments: [],
            comments: [],
        };
        const result = taskSchema.safeParse(task);
        if (!result.success) console.error(JSON.stringify(result.error, null, 2));
        expect(result.success).toBe(true);
    });
});
