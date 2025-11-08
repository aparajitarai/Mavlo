import type { ReactElement } from "react";
import { projectTable } from "@/mocks/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";

const statusVariant: Record<string, "default" | "secondary" | "outline"> = {
  "In progress": "default",
  Planning: "secondary",
  Review: "outline",
  "At risk": "default"
};

export function ProjectTable(): ReactElement {
  return (
    <Card className="border-dashed">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Delivery control</CardTitle>
          <p className="text-sm text-muted-foreground">Active programs with budget and schedule confidence</p>
        </div>
        <Badge variant="outline">Export</Badge>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead className="text-right">Budget</TableHead>
              <TableHead>Due</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projectTable.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-semibold text-foreground">
                  <div>{project.id}</div>
                  <p className="text-xs text-muted-foreground">{project.client}</p>
                </TableCell>
                <TableCell>{project.owner}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant[project.status] ?? "secondary"}>{project.status}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress className="h-2 flex-1" value={project.progress} />
                    <span className="text-xs font-semibold text-muted-foreground">{project.progress}%</span>
                  </div>
                </TableCell>
                <TableCell className="text-right font-semibold text-foreground">{formatCurrency(project.budget)}</TableCell>
                <TableCell className="text-muted-foreground">{project.dueDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
