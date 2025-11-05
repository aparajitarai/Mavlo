"use client";

import { useQuery } from "@tanstack/react-query";
import { MoodboardItem as MoodboardItemSchema } from "@/lib/schemas";
import { DndContext, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

async function fetchMoodboardItems(projectId: string): Promise<MoodboardItemSchema[]> {
  const res = await fetch(`/api/moodboard/items?projectId=${projectId}`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}

function MoodboardItem({ item }: { item: MoodboardItemSchema }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item.id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="absolute"
    >
      {item.type === "image" && <img src={item.src} alt="" className="pointer-events-none" />}
      {item.type === "text" && <p>{item.text}</p>}
      {/* Add other item types here */}
    </div>
  );
}

export default function MoodboardPage() {
  const projectId = "1"; // Hardcoded for now
  const { data: items, isLoading, error } = useQuery({
    queryKey: ["moodboardItems", projectId],
    queryFn: () => fetchMoodboardItems(projectId),
  });
  const [moodboardItems, setMoodboardItems] = useState<MoodboardItemSchema[]>([]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold">Moodboard</h1>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="relative w-full h-[800px] bg-muted mt-4 rounded-lg">
          {(moodboardItems.length > 0 ? moodboardItems : items)?.map((item) => (
            <MoodboardItem key={item.id} item={item} />
          ))}
        </div>
      </DndContext>
    </div>
  );

  function handleDragEnd(event: any) {
    const { over, active, delta } = event;
    const activeId = active.id;
    const updatedItems = (moodboardItems.length > 0 ? moodboardItems : items)?.map((item) => {
      if (item.id === activeId) {
        return {
          ...item,
          x: item.x + delta.x,
          y: item.y + delta.y,
        };
      }
      return item;
    });
    setMoodboardItems(updatedItems as MoodboardItemSchema[]);
  }
}
