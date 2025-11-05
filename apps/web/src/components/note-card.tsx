import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NoteCardProps {
  note: {
    id: string;
    title: string;
    excerpt: string;
    tags: string[];
  };
  isActive: boolean;
}

export function NoteCard({ note, isActive }: NoteCardProps) {
  return (
    <Card className={`cursor-pointer ${isActive ? 'border-primary' : ''}`}>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
        <CardDescription>{note.excerpt}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-2">
          {note.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardHeader>
    </Card>
  );
}
