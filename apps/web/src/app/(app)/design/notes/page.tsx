"use client";

import { useState } from "react";
import { NoteCard } from "@/components/note-card";
import RichTextEditor from "@/components/rich-text-editor";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const mockNotes = [
  { id: "1", title: "Meeting with Client", excerpt: "Discussed the initial design concepts...", tags: ["meeting", "client"] },
  { id: "2", title: "Furniture Selection", excerpt: "Finalized the sofa and chairs for the living room...", tags: ["furniture", "living-room"] },
  { id: "3", title: "Lighting Plan", excerpt: "Created a detailed lighting plan for the entire house...", tags: ["lighting"] },
];

export default function NotesPage() {
  const [activeNote, setActiveNote] = useState(mockNotes[0].id);

  return (
    <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr] gap-8">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Notes</h2>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New Note
          </Button>
        </div>
        <div className="space-y-4">
          {mockNotes.map((note) => (
            <div key={note.id} onClick={() => setActiveNote(note.id)}>
              <NoteCard note={note} isActive={activeNote === note.id} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="border rounded-lg">
          <RichTextEditor />
        </div>
      </div>
    </div>
  );
}
