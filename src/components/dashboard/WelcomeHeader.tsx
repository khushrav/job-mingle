import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

interface WelcomeHeaderProps {
  name: string;
  credits: number;
}

export const WelcomeHeader = ({ name, credits }: WelcomeHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, {name}!</h1>
        <p className="text-gray-600">Track your psychometric assessment progress</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-primary">Credits Available: {credits}</div>
        <Button className="bg-primary hover:bg-primary/90">
          <CreditCard className="mr-2 h-4 w-4" />
          Buy Credits
        </Button>
      </div>
    </div>
  );
};