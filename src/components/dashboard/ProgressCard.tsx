import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProgressCardProps {
  title?: string;
  value?: number;
  completed?: number;
  total?: number;
}

export function ProgressCard({ title, value, completed, total }: ProgressCardProps) {
  // Calculate percentage if completed and total are provided
  const percentage = value ?? (completed && total ? (completed / total) * 100 : 0);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{percentage}%</div>
        <Progress value={percentage} className="h-2" />
      </CardContent>
    </Card>
  );
}