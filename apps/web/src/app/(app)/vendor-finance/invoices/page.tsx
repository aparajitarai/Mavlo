"use client";

import { useQuery } from "@tanstack/react-query";
import { PoInvoice } from "@/lib/schemas";
import { DataTable } from "@/components/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

async function fetchInvoices(): Promise<PoInvoice[]> {
  const res = await fetch("/api/finance/invoices");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}

const columns: ColumnDef<PoInvoice>[] = [
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
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "vendorId",
    header: "Vendor ID",
  },
  {
    accessorKey: "projectId",
    header: "Project ID",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
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
    accessorKey: "dueDate",
    header: "Due Date",
  },
];

export default function InvoicesPage() {
  const { data: invoices, isLoading, error } = useQuery({
    queryKey: ["invoices"],
    queryFn: fetchInvoices,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredInvoices = (status: string) => {
    if (!invoices) return [];
    if (status === "all") return invoices;
    return invoices.filter((invoice) => invoice.status === status);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Invoices & POs</h1>
      <Tabs defaultValue="all" className="mt-4">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="sent">Sent</TabsTrigger>
          <TabsTrigger value="paid">Paid</TabsTrigger>
          <TabsTrigger value="overdue">Overdue</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <DataTable columns={columns} data={filteredInvoices("all")} />
        </TabsContent>
        <TabsContent value="draft">
          <DataTable columns={columns} data={filteredInvoices("draft")} />
        </TabsContent>
        <TabsContent value="sent">
          <DataTable columns={columns} data={filteredInvoices("sent")} />
        </TabsContent>
        <TabsContent value="paid">
          <DataTable columns={columns} data={filteredInvoices("paid")} />
        </TabsContent>
        <TabsContent value="overdue">
          <DataTable columns={columns} data={filteredInvoices("overdue")} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
