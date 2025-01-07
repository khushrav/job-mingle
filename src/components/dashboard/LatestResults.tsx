import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Result {
  testName: string;
  completedDate: string;
}

interface LatestResultsProps {
  results: Result[];
}

export const LatestResults = ({ results }: LatestResultsProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Latest Results</h2>
      <p className="text-gray-600 mb-4">Your most recent test scores</p>
      <div className="space-y-4">
        {results.map((result, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-medium">{result.testName}</h3>
              <p className="text-sm text-gray-600">Completed on {result.completedDate}</p>
            </div>
            <Button variant="ghost" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};