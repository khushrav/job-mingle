import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  buttonText: string;
  onClick: () => void;
}

export const ServiceCard = ({ title, description, icon: Icon, buttonText, onClick }: ServiceCardProps) => {
  return (
    <div className="p-6 border rounded-lg bg-white">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <Button
        onClick={onClick}
        className="w-full bg-primary hover:bg-primary/90"
      >
        {buttonText}
      </Button>
    </div>
  );
};