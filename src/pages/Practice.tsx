import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { CheckCircle, Brain, Target, BookOpen } from "lucide-react";

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
            Select a subject and the number of questions to get started.
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
                We offer a variety of subjects to help you prepare thoroughly.
              </p>
              <Select
                value={subject}
                onValueChange={setSubject}
                placeholder="Select subject"
              >
                <option value="math">Mathematics</option>
                <option value="verbal">Verbal Reasoning</option>
                <option value="logical">Logical Reasoning</option>
                <option value="data">Data Interpretation</option>
              </Select>
            </CardContent>
          </Card>

          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                Select Number of Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Decide how many questions you want to practice. 
                You can start small and gradually increase the number as you get more comfortable.
              </p>
              <Input
                type="number"
                value={questionCount}
                onChange={(e) => setQuestionCount(e.target.value)}
                min="5"
                max="50"
                className="w-full"
              />
            </CardContent>
          </Card>
        </div>

        {/* Submit Button */}
        <div className="text-center mb-16">
          <Button
            onClick={handleSubmit}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
          >
            Start Practice
          </Button>
        </div>

        {/* Why Practice Section */}
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              Why Practice Aptitude Questions?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              Aptitude tests are designed to evaluate your logical reasoning, 
              problem-solving, and analytical skills. Regular practice can help you:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Improve Speed and Accuracy</h3>
                  <p className="text-gray-600">
                    Practice regularly to enhance your problem-solving speed while maintaining accuracy
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Build Confidence</h3>
                  <p className="text-gray-600">
                    Get comfortable with different question types and exam patterns
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Identify Weak Areas</h3>
                  <p className="text-gray-600">
                    Focus on topics where you need more practice and improvement
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Track Progress</h3>
                  <p className="text-gray-600">
                    Monitor your improvement over time with detailed performance analytics
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Practice;