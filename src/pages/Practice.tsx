import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Brain, Calculator, Building2, BookOpen } from "lucide-react";

const Practice = () => {
  const [subject, setSubject] = useState("");
  const [questionCount, setQuestionCount] = useState("10");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Starting practice with:", { subject, questionCount });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Practice Questions for Aptitude Exam
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Prepare for your upcoming aptitude exams with our extensive collection of practice questions. 
            Select a subject and start practicing!
          </p>
        </div>

        {/* Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Select a Subject
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Choose a subject from the list below to focus your practice.
              </p>
              <Select value={subject} onValueChange={setSubject}>
                <SelectTrigger>
                  <SelectValue defaultValue="" placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="verbal">Verbal Reasoning</SelectItem>
                  <SelectItem value="logical">Logical Reasoning</SelectItem>
                  <SelectItem value="data">Data Interpretation</SelectItem>
                </SelectContent>
              </Select>
              <div className="mt-4">
                <p className="text-gray-600 mb-2">Number of Questions:</p>
                <Select value={questionCount} onValueChange={setQuestionCount}>
                  <SelectTrigger>
                    <SelectValue defaultValue="10" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10 Questions</SelectItem>
                    <SelectItem value="20">20 Questions</SelectItem>
                    <SelectItem value="30">30 Questions</SelectItem>
                    <SelectItem value="40">40 Questions</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button 
                onClick={handleSubmit}
                className="w-full mt-4"
                disabled={!subject}
              >
                Start Practice
              </Button>
            </CardContent>
          </Card>

          {/* Nudge Cards for Different Test Types */}
          <div className="grid grid-cols-1 gap-6">
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-primary" />
                  Quantitative Aptitude
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Master mathematical concepts with our curated set of quantitative questions.
                </p>
                <Button variant="secondary">Start Practice</Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-6 w-6 text-primary" />
                  Verbal Aptitude
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Enhance your verbal reasoning and comprehension skills.
                </p>
                <Button variant="secondary">Start Practice</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Company-Specific Practice Tests */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Company-Specific Practice Tests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Infosys', 'TCS', 'Wipro'].map((company) => (
              <Card key={company} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-6 w-6 text-primary" />
                    {company}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Practice with previous year questions from {company}.
                  </p>
                  <Button variant="outline" className="w-full">
                    Start Test
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;