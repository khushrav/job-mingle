import { Progress } from "@/components/ui/progress";

interface ProgressCardProps {
  completed: number;
  total: number;
}

export const ProgressCard = ({ completed, total }: ProgressCardProps) => {
  const percentage = (completed / total) * 100;

  return (
    <div className="bg-primary text-white p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Test Progress</h2>
      <p className="text-primary-light mb-4">Track your journey</p>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Completed</span>
          <span>{percentage}%</span>
        </div>
        <Progress value={percentage} className="bg-white/20" indicatorClassName="bg-white" />
        <p className="text-sm">{completed} of {total} tests completed</p>
      </div>
    </div>
  );
};