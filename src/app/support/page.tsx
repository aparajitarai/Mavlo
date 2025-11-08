import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function SupportPage(): ReactNode {
  return (
    <AppShell>
      <section className="space-y-6">
        <h1 className="text-3xl font-display font-semibold tracking-tight text-foreground">Help center</h1>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Card className="border-dashed">
            <CardHeader>
              <CardTitle>Contact our team</CardTitle>
              <p className="text-sm text-muted-foreground">We typically respond within 2 hours.</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="topic">Topic</Label>
                <Input id="topic" placeholder="Automation feedback" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="details">Details</Label>
                <Textarea id="details" placeholder="Tell us how we can help" rows={5} />
              </div>
              <Button className="rounded-full">Submit request</Button>
            </CardContent>
          </Card>
          <Card className="border-dashed">
            <CardHeader>
              <CardTitle>Guides &amp; resources</CardTitle>
              <p className="text-sm text-muted-foreground">Curated playbooks to get the most from Mavlo.</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                "Automation guardrails",
                "Client segmentation playbook",
                "Delivery readiness checklist"
              ].map((guide) => (
                <div key={guide} className="rounded-2xl border border-border/70 bg-background/60 p-4">
                  <p className="text-sm font-semibold text-foreground">{guide}</p>
                  <Button variant="link" className="px-0">View guide</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </AppShell>
  );
}
