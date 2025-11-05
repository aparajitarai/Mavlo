import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lead } from "@/lib/schemas";

export function LeadCard({ lead }: { lead: Lead }) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="text-base">{lead.contact.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{lead.source}</p>
        <p className="text-lg font-semibold mt-2">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(lead.estValue)}
        </p>
      </CardContent>
    </Card>
  );
}
