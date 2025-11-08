import type { ReactElement } from "react";
import { clients } from "@/mocks/dashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";

export function ClientSpotlight(): ReactElement {
  return (
    <Card className="border-dashed">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Client spotlight</CardTitle>
          <p className="text-sm text-muted-foreground">Top accounts by engagement and revenue</p>
        </div>
        <Badge variant="secondary">4 alerts</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        {clients.map((client) => (
          <div key={client.name} className="flex items-center justify-between gap-4 rounded-2xl border border-border/70 bg-background/60 p-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-11 w-11">
                <AvatarImage src={client.avatar} alt={client.name} />
                <AvatarFallback>{client.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold text-foreground">{client.name}</p>
                <p className="text-xs text-muted-foreground">Health score {client.score}</p>
              </div>
            </div>
            <div className="flex flex-col text-right">
              <p className="text-sm font-semibold text-foreground">{formatCurrency(client.spend)}</p>
              <Badge variant={client.status === "At risk" ? "default" : "outline"}>{client.status}</Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
