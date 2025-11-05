import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Image, Video, Music, Archive } from "lucide-react";

interface FileTileProps {
  file: {
    id: string;
    name: string;
    type: string;
    size: number;
    lastUpdated: string;
    previewUrl?: string;
  };
}

function getFileIcon(type: string) {
  if (type.startsWith("image")) return <Image className="h-12 w-12 text-muted-foreground" />;
  if (type.startsWith("video")) return <Video className="h-12 w-12 text-muted-foreground" />;
  if (type.startsWith("audio")) return <Music className="h-12 w-12 text-muted-foreground" />;
  if (type === "application/zip" || type === "application/x-rar-compressed") return <Archive className="h-12 w-12 text-muted-foreground" />;
  return <FileText className="h-12 w-12 text-muted-foreground" />;
}

export function FileTile({ file }: FileTileProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center justify-center h-32 bg-muted rounded-md mb-4">
          {file.previewUrl ? (
            <img src={file.previewUrl} alt={file.name} className="max-h-full max-w-full" />
          ) : (
            getFileIcon(file.type)
          )}
        </div>
        <h3 className="font-semibold truncate">{file.name}</h3>
        <div className="flex items-center justify-between text-sm text-muted-foreground mt-2">
          <span>{file.type}</span>
          <span>{(file.size / 1024).toFixed(2)} KB</span>
        </div>
        <Badge variant="outline" className="mt-2">{new Date(file.lastUpdated).toLocaleDateString()}</Badge>
      </CardContent>
    </Card>
  );
}
