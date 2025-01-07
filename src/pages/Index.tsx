import { FileText, Brain, TestTube, Share2, LineChart, User } from "lucide-react";
import { WelcomeHeader } from "@/components/dashboard/WelcomeHeader";
import { ProgressCard } from "@/components/dashboard/ProgressCard";
import { LatestResults } from "@/components/dashboard/LatestResults";
import { ServiceCard } from "@/components/dashboard/ServiceCard";
import { Button } from "@/components/ui/button";

const mockResults = [
  {
    testName: "RIASEC Assessment",
    completedDate: "April 15, 2024",
  },
];

const Index = () => {
  const handleServiceClick = (service: string) => {
    console.log(`Clicked ${service} service`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <WelcomeHeader name="Alex" credits={3} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <ProgressCard completed={1} total={2} />
          <LatestResults results={mockResults} />
        </div>

        <h2 className="text-2xl font-semibold mb-6">Available Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ServiceCard
            title="Build Your Resume"
            description="AI-powered resume builder"
            icon={FileText}
            buttonText="Start Now"
            onClick={() => handleServiceClick("resume")}
          />
          <ServiceCard
            title="Interview Prep"
            description="Practice with AI"
            icon={Brain}
            buttonText="Practice"
            onClick={() => handleServiceClick("interview")}
          />
          <ServiceCard
            title="Aptitude Tests"
            description="Enhance your skills"
            icon={TestTube}
            buttonText="Explore"
            onClick={() => handleServiceClick("aptitude")}
          />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Premium Features</h2>
          <p className="text-gray-600 mb-8">Get access to advanced insights and additional tests</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <User className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">Detailed Reports</h3>
                <p className="text-gray-600 text-sm">Get comprehensive insights</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <LineChart className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">Progress Tracking</h3>
                <p className="text-gray-600 text-sm">Monitor your growth</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Share2 className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">Share Results</h3>
                <p className="text-gray-600 text-sm">Export and share reports</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;