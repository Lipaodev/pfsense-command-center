import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Graphs() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Graphs</h1>

        <Card>
          <CardHeader>
            <CardTitle>Performance Graphs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Global performance graphs across all devices will be displayed here
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
