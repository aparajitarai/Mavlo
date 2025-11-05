"use client";

import { useQuery } from "@tanstack/react-query";
import { SiteIssue } from "@/lib/schemas";
import { DataTable } from "@/components/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function fetchSiteIssues(): Promise<SiteIssue[]> {
  const res = await fetch("/api/site/issues");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}

const columns: ColumnDef<SiteIssue>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "projectId",
    header: "Project ID",
  },
  {
    accessorKey: "severity",
    header: "Severity",
    cell: ({ row }) => {
      const severity = row.getValue("severity") as string;
      const variant =
        severity === "high"
          ? "destructive"
          : severity === "med"
          ? "secondary"
          : "outline";
      return <Badge variant={variant}>{severity}</Badge>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return <Badge variant="outline">{status}</Badge>;
    },
  },
  {
    accessorKey: "location",
    header: "Location",
  },
];

export default function SiteManagementPage() {
    const { data: issues, isLoading, error } = useQuery({
        queryKey: ["siteIssues"],
        queryFn: fetchSiteIssues,
      });

      if (isLoading) {
        return <div>Loading...</div>;
      }

      if (error) {
        return <div>Error: {error.message}</div>;
      }

  return (
    <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            <Card>
                <CardHeader>
                    <CardTitle>Project Alpha Progress</CardTitle>
                </CardHeader>
                <CardContent>
                    <Progress value={65} />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Project Beta Progress</CardTitle>
                </CardHeader>
                <CardContent>
                    <Progress value={80} />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Project Gamma Progress</CardTitle>
                </CardHeader>
                <CardContent>
                    <Progress value={30} />
                </CardContent>
            </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Site Checklist</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <Checkbox id="task1" defaultChecked />
                            <label htmlFor="task1">Foundation Inspection</label>
                        </li>
                        <li className="flex items-center gap-2">
                            <Checkbox id="task2" defaultChecked />
                            <label htmlFor="task2">Framing Inspection</label>
                        </li>
                        <li className="flex items-center gap-2">
                            <Checkbox id="task3" />
                            <label htmlFor="task3">Plumbing Rough-in</label>
                        </li>
                        <li className="flex items-center gap-2">
                            <Checkbox id="task4" />
                            <label htmlFor="task4">Electrical Rough-in</label>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>
      <div>
        <h1 className="text-3xl font-bold">Site Issues</h1>
        {issues && <DataTable columns={columns} data={issues} />}
      </div>
    </div>
  );
}
