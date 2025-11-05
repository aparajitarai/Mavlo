import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ArchitectDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Active Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Budget Variance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+5%</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Pending Approvals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Team Utilization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">85%</div>
        </CardContent>
      </Card>
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Project Burn-down</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Chart placeholder */}
          <div className="h-64 bg-muted" />
        </CardContent>
      </Card>
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>My Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Table placeholder */}
          <div className="h-64 bg-muted" />
        </CardContent>
      </Card>
    </div>
  );
}
