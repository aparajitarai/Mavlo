"use client";

import { useQuery } from "@tanstack/react-query";
import { Vendor } from "@/lib/schemas";
import { DataTable } from "@/components/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

async function fetchVendors(): Promise<Vendor[]> {
  const res = await fetch("/api/vendors");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}

const columns: ColumnDef<Vendor>[] = [
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
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "rating",
    header: "Rating",
  },
  {
    accessorKey: "categories",
    header: "Categories",
    cell: ({ row }) => {
      const categories = row.getValue("categories") as string[];
      return (
        <div className="flex flex-wrap gap-1">
          {categories.map((category) => (
            <Badge key={category} variant="secondary">{category}</Badge>
          ))}
        </div>
      );
    },
  },
  {
      accessorKey: "contact",
      header: "Contact",
      cell: ({ row }) => {
        const contact = row.getValue("contact") as { name: string; email: string };
        return <div>{contact.name} ({contact.email})</div>;
      },
  },
  {
    accessorKey: "paymentTerms",
    header: "Payment Terms",
  },
];

export default function VendorFinancePage() {
    const { data: vendors, isLoading, error } = useQuery({
        queryKey: ["vendors"],
        queryFn: fetchVendors,
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
                    <CardTitle>Total Outstanding</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">$125,430</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Avg. Days to Pay</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">42</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Top Vendor by Spend</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">ABC Supplies</div>
                </CardContent>
            </Card>
        </div>
        <div>
            <h1 className="text-3xl font-bold">Vendors</h1>
            {vendors && <DataTable columns={columns} data={vendors} />}
        </div>
    </div>
  );
}
