"use client";

import { useQuery } from "@tanstack/react-query";
import { Lead } from "@/lib/schemas";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { LeadCard } from "@/components/lead-card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

async function fetchLeads(): Promise<Lead[]> {
  const res = await fetch("/api/leads");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}

const columns = ["new", "qualified", "proposal", "won", "lost"];

export default function LeadsPage() {
  const { data: leads, isLoading, error } = useQuery({
    queryKey: ["leads"],
    queryFn: fetchLeads,
  });
  const [leadData, setLeadData] = useState<Lead[]>([]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">Leads</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Lead
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Lead</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Input placeholder="Contact Name" />
              <Input placeholder="Contact Email" />
              <Input placeholder="Estimated Value" type="number" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="website">Website</SelectItem>
                  <SelectItem value="referral">Referral</SelectItem>
                  <SelectItem value="advertisement">Advertisement</SelectItem>
                  <SelectItem value="cold-call">Cold Call</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Notes" />
              <Button>Save</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-5 gap-4">
          {columns.map((stage) => (
            <div key={stage}>
              <h2 className="text-lg font-semibold mb-4 capitalize">{stage}</h2>
              <SortableContext
                items={(leadData.length > 0 ? leadData : leads)
                  ?.filter((l) => l.stage === stage)
                  .map((l) => l.id) || []}
                strategy={verticalListSortingStrategy}
              >
                {(leadData.length > 0 ? leadData : leads)
                  ?.filter((l) => l.stage === stage)
                  .map((lead) => (
                    <SortableLeadCard key={lead.id} lead={lead} />
                  ))}
              </SortableContext>
            </div>
          ))}
        </div>
      </DndContext>
    </div>
  );

  function handleDragEnd(event: any) {
    const { over, active } = event;
    if (over && active) {
      const activeId = active.id;
      const overContainer = over.id;
      const updatedLeads = (leadData.length > 0 ? leadData : leads)?.map((lead) => {
        if (lead.id === activeId) {
          return { ...lead, stage: overContainer };
        }
        return lead;
      });
      setLeadData(updatedLeads as Lead[]);
    }
  }
}

function SortableLeadCard({ lead }: { lead: Lead }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id: lead.id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

    return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <LeadCard lead={lead} />
      </div>
    );
  }
