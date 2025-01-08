import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";

interface ReportHeaderProps {
  onDownload: () => void;
  onShare: () => void;
}

export const ReportHeader = ({ onDownload, onShare }: ReportHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-4">
        <img
          src="/placeholder.svg"
          alt="College Logo"
          className="w-16 h-16 rounded-full border-2 border-primary/20"
        />
        <div className="text-left">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            College Performance Report
          </h1>
          <p className="text-muted-foreground">Academic Year 2023-2024</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Button onClick={onDownload} variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
        <Button onClick={onShare}>
          <Share2 className="mr-2 h-4 w-4" />
          Share Report
        </Button>
      </div>
    </div>
  );
};