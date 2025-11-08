import type { ReactElement } from "react";
import { clientTouchpoints } from "@/mocks/clients";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function TouchpointTable(): ReactElement {
  return (
    <Card className="border-dashed">
      <CardHeader>
        <CardTitle>Touchpoint tracker</CardTitle>
        <p className="text-sm text-muted-foreground">Ensure proactive engagement across pods</p>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Last interaction</TableHead>
              <TableHead>Health</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clientTouchpoints.map((touchpoint) => (
              <TableRow key={touchpoint.name}>
                <TableCell className="font-semibold text-foreground">{touchpoint.name}</TableCell>
                <TableCell>{touchpoint.owner}</TableCell>
                <TableCell>{touchpoint.lastInteraction}</TableCell>
                <TableCell>
                  <Badge variant={touchpoint.health === "At risk" ? "default" : "secondary"}>{touchpoint.health}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
