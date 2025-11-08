import { type LucideIcon } from "lucide-react";
import {
  BarChart3,
  BriefcaseBusiness,
  CircleHelp,
  Home,
  LineChart,
  Settings,
  Users
} from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
};

export const mainNav: NavItem[] = [
  { title: "Overview", href: "/", icon: Home },
  { title: "Clients", href: "/clients", icon: Users },
  { title: "Projects", href: "/projects", icon: BriefcaseBusiness },
  { title: "Analytics", href: "/analytics", icon: LineChart },
  { title: "Reports", href: "/reports", icon: BarChart3, badge: "New" }
];

export const secondaryNav: NavItem[] = [
  { title: "Settings", href: "/settings", icon: Settings },
  { title: "Help Center", href: "/support", icon: CircleHelp }
];
