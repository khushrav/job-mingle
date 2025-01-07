import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChartContainer } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Download, Share2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { usePDF } from 'react-to-pdf';

// Mock data - replace with actual data from your backend
const mockData = {
  students: {
    aptitude: 150,
    psychological: 120,
    coding: 100,
    resumes: 180
  },
  medianScores: {
    quant: 75,
    verbal: 70,
    coding: 65
  },
  rankings: {
    city: 3,
    region: 5,
    overall: 15
  },
  topStudents: Array(50).fill(null).map((_, i) => ({
    id: i + 1,
    name: `Student ${i + 1}`,
    email: `student${i + 1}@example.com`,
    phone: `+1234567${i.toString().padStart(4, '0')}`,
    verbalRank: Math.floor(Math.random() * 100) + 1,
    quantRank: Math.floor(Math.random() * 100) + 1
  }))
};

const CollegeReport = () => {
  const { toast } = useToast();
  const { toPDF, targetRef } = usePDF({filename: 'college-report.pdf'});
  const [recruiterEmail, setRecruiterEmail] = useState("");
  const [recruiterName, setRecruiterName] = useState("");

  const handleShareReport = () => {
    if (!recruiterEmail || !recruiterName) {
      toast({
        title: "Error",
        description: "Please fill in all recruiter details",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would implement the actual sharing logic
    toast({
      title: "Success",
      description: `Report shared with ${recruiterName}`,
    });
  };

  return (
    <div className="container mx-auto py-8" ref={targetRef}>
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <img
            src="/placeholder.svg"
            alt="College Logo"
            className="w-16 h-16 rounded-full"
          />
          <h1 className="text-3xl font-bold">College Performance Report</h1>
        </div>
        <div className="flex gap-4">
          <Button onClick={() => toPDF()} variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Share2 className="mr-2 h-4 w-4" />
                Share Report
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Share with Recruiter</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Recruiter Name</Label>
                  <Input
                    id="name"
                    value={recruiterName}
                    onChange={(e) => setRecruiterName(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Recruiter Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={recruiterEmail}
                    onChange={(e) => setRecruiterEmail(e.target.value)}
                  />
                </div>
                <Button onClick={handleShareReport}>Send Report</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Test Participation</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              className="h-[300px]"
              config={{
                data: "primary",
              }}
            >
              <BarChart
                data={[
                  { name: "Aptitude", value: mockData.students.aptitude },
                  { name: "Psychological", value: mockData.students.psychological },
                  { name: "Coding", value: mockData.students.coding },
                  { name: "Resumes", value: mockData.students.resumes },
                ]}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="var(--primary)" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Median Scores</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              className="h-[300px]"
              config={{
                data: "primary",
              }}
            >
              <BarChart
                data={[
                  { name: "Quant", value: mockData.medianScores.quant },
                  { name: "Verbal", value: mockData.medianScores.verbal },
                  { name: "Coding", value: mockData.medianScores.coding },
                ]}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="var(--primary)" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>College Rankings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold">{mockData.rankings.city}</p>
              <p className="text-muted-foreground">City Rank</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{mockData.rankings.region}</p>
              <p className="text-muted-foreground">Region Rank</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{mockData.rankings.overall}</p>
              <p className="text-muted-foreground">Overall Rank</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top 50 Students</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rank</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Verbal Rank</TableHead>
                  <TableHead>Quant Rank</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockData.topStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.id}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.phone}</TableCell>
                    <TableCell>{student.verbalRank}</TableCell>
                    <TableCell>{student.quantRank}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CollegeReport;