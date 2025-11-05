"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Task } from "@/lib/schemas";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TaskDetailDrawer } from "@/components/task-detail-drawer";

async function fetchTasks(projectId: string): Promise<Task[]> {
  const res = await fetch(`/api/tasks?projectId=${projectId}`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}

const columns = ["todo", "in_progress", "review", "done"];

function TaskCard({ task }: { task: Task }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card ref={setNodeRef} style={style} {...attributes} {...listeners} className="mb-4">
      <CardContent className="p-4">
        <h3 className="font-semibold">{task.title}</h3>
      </CardContent>
    </Card>
  );
}

export default function ProjectBoardPage() {
  // Hardcoding projectId for now
  const projectId = "1";
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const { data: tasks, isLoading, error } = useQuery({
    queryKey: ["tasks", projectId],
    queryFn: () => fetchTasks(projectId),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Project Board</h1>
      <DndContext collisionDetection={closestCenter}>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {columns.map((status) => (
            <div key={status}>
              <h2 className="text-lg font-semibold mb-4 capitalize">{status.replace("_", " ")}</h2>
              <SortableContext
                items={tasks?.filter((t) => t.status === status).map((t) => t.id) || []}
                strategy={verticalListSortingStrategy}
              >
                {tasks
                  ?.filter((t) => t.status === status)
                  .map((task) => (
                    <div key={task.id} onClick={() => setSelectedTask(task)}>
                      <TaskCard task={task} />
                    </div>
                  ))}
              </SortableContext>
            </div>
          ))}
        </div>
      </DndContext>
      <TaskDetailDrawer
        task={selectedTask}
        isOpen={!!selectedTask}
        onClose={() => setSelectedTask(null)}
      />
    </div>
  );
}
