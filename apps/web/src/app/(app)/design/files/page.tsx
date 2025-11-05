"use client";

import { FileTile } from "@/components/file-tile";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

const mockFiles = [
  { id: "1", name: "Floor Plan.pdf", type: "application/pdf", size: 1200, lastUpdated: "2023-10-26T10:00:00Z" },
  { id: "2", name: "Kitchen-Render.jpg", type: "image/jpeg", size: 2400, lastUpdated: "2023-10-25T14:30:00Z", previewUrl: "https://via.placeholder.com/150" },
  { id: "3", name: "Material-Palette.png", type: "image/png", size: 850, lastUpdated: "2023-10-25T11:15:00Z", previewUrl: "https://via.placeholder.com/150" },
  { id: "4", name: "Client-Brief.docx", type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", size: 5600, lastUpdated: "2023-10-24T09:00:00Z" },
  { id: "5", name: "3D-Walkthrough.mp4", type: "video/mp4", size: 25600, lastUpdated: "2023-10-23T16:45:00Z" },
  { id: "6", name: "Inspiration-Images.zip", type: "application/zip", size: 12800, lastUpdated: "2023-10-22T12:00:00Z" },
];

const mockFolders = [
  { id: "1", name: "Floor Plans" },
  { id: "2", name: "Renderings" },
  { id: "3", name: "Inspiration" },
  { id: "4", name: "Documents" },
];

export default function FilesPage() {
  return (
    <div className="grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] gap-8">
      <div className="hidden md:block">
        <h2 className="text-xl font-semibold mb-4">Folders</h2>
        <nav>
          <ul>
            {mockFolders.map((folder) => (
              <li key={folder.id} className="mb-2">
                <Button variant="ghost" className="w-full justify-start">{folder.name}</Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">Files</h1>
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockFiles.map((file) => (
            <FileTile key={file.id} file={file} />
          ))}
        </div>
      </div>
    </div>
  );
}
