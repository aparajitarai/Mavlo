import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function SettingsPage(): ReactNode {
  return (
    <AppShell>
      <section className="space-y-6">
        <h1 className="text-3xl font-display font-semibold tracking-tight text-foreground">Workspace settings</h1>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-dashed">
            <CardHeader>
              <CardTitle>Brand &amp; identity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="workspace-name">Workspace name</Label>
                <Input id="workspace-name" placeholder="Mavlo" defaultValue="Mavlo" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="accent-color">Accent color</Label>
                <Select defaultValue="violet">
                  <SelectTrigger id="accent-color">
                    <SelectValue placeholder="Choose accent" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="violet">Violet</SelectItem>
                    <SelectItem value="teal">Teal</SelectItem>
                    <SelectItem value="amber">Amber</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Update branding</Button>
            </CardFooter>
          </Card>
          <Card className="border-dashed">
            <CardHeader>
              <CardTitle>Automation &amp; alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-border bg-background/70 p-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">Weekly insights</p>
                  <p className="text-sm text-muted-foreground">Email digest with executive-ready highlights</p>
                </div>
                <Switch defaultChecked aria-label="Toggle weekly insight emails" />
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-border bg-background/70 p-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">Slack alerts</p>
                  <p className="text-sm text-muted-foreground">Notify channel when accounts move to at-risk</p>
                </div>
                <Switch defaultChecked aria-label="Toggle Slack alerts" />
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-border bg-background/70 p-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">Automation beta</p>
                  <p className="text-sm text-muted-foreground">Enable experimental guardrails for projects</p>
                </div>
                <Switch aria-label="Toggle automation beta" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="secondary">Manage channels</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </AppShell>
  );
}
