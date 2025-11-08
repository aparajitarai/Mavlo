"use client";

import type { ReactElement } from "react";
import Link from "next/link";
import { Search, Bell, Sparkles, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";

const quickActions = [
  { label: "New client", href: "/clients", icon: Sparkles },
  { label: "Create project", href: "/projects", icon: Plus }
];

export function TopNav(): ReactElement {
  return (
    <header className="sticky top-0 z-30 hidden w-full border-b border-border/70 bg-background/95 px-4 py-5 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:px-8 lg:px-10 lg:block">
      <div className="mx-auto flex max-w-6xl items-center gap-6">
        <div className="flex flex-1 items-center gap-3 rounded-2xl border border-border bg-card px-4 py-2 shadow-soft">
          <Search className="h-4 w-4 text-muted-foreground" aria-hidden />
          <Input className="h-9 border-none bg-transparent px-0 text-sm focus-visible:ring-0" placeholder="Search clients, projects, or tasks" />
        </div>
        <nav aria-label="Quick actions" className="flex items-center gap-2">
          {quickActions.map((action) => (
            <Button key={action.label} variant="subtle" className="rounded-full px-4" asChild>
              <Link href={action.href} className="flex items-center">
                <action.icon className="mr-2 h-4 w-4" />
                {action.label}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="secondary" size="icon" className="rounded-full">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Link href="/profile" className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/100?img=13" alt="Taylor Brooks" />
              <AvatarFallback>TB</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-foreground">Taylor Brooks</span>
              <Badge variant="outline">Operations Lead</Badge>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
