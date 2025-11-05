"use client";

import { useQuery } from "@tanstack/react-query";
import { CalendarEvent } from "@/lib/schemas";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import { useState } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

async function fetchEvents(): Promise<CalendarEvent[]> {
  const res = await fetch("/api/calendar/events");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}

export default function CalendarPage() {
  const { data: events, isLoading, error } = useQuery({
    queryKey: ["calendarEvents"],
    queryFn: fetchEvents,
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleEventClick = (clickInfo: any) => {
    setSelectedEvent(clickInfo.event);
    setIsDrawerOpen(true);
  };

  const handleDateSelect = (selectInfo: any) => {
    setSelectedEvent({ start: selectInfo.startStr, end: selectInfo.endStr });
    setIsDrawerOpen(true);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Calendar</h1>
      <div className="mt-4">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, resourceTimelinePlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,resourceTimelineDay",
          }}
          initialView="dayGridMonth"
          events={events}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          eventClick={handleEventClick}
          select={handleDateSelect}
        />
      </div>
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{selectedEvent?.title ? "Edit Event" : "Create Event"}</DrawerTitle>
          </DrawerHeader>
          <div className="p-4">
            <Input placeholder="Event Title" defaultValue={selectedEvent?.title || ""} />
            <Input type="datetime-local" defaultValue={selectedEvent?.start || ""} className="mt-2" />
            <Input type="datetime-local" defaultValue={selectedEvent?.end || ""} className="mt-2" />
            <Button className="mt-4">Save</Button>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
