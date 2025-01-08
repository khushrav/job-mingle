import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { usePDF } from 'react-to-pdf';
import { ReportHeader } from "@/components/report/ReportHeader";
import { ShareReportDialog } from "@/components/report/ShareReportDialog";
import { StatisticsCharts } from "@/components/report/StatisticsCharts";

// Mock data - keep existing mock data definition
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
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [recruiterName, setRecruiterName] = useState("");
  const [recruiterEmail, setRecruiterEmail] = useState("");
  const [recruiterCompany, setRecruiterCompany] = useState("");
  const [recruiterPhone, setRecruiterPhone] = useState("");

  const handleShareReport = () => {
    if (!recruiterEmail || !recruiterName || !recruiterCompany || !recruiterPhone) {
      toast({
        title: "Error",
        description: "Please fill in all recruiter details",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Success",
      description: `Report shared with ${recruiterName} from ${recruiterCompany}`,
    });
    setIsShareDialogOpen(false);
  };

  const participationData = [
    { name: "Aptitude", value: mockData.students.aptitude },
    { name: "Psychological", value: mockData.students.psychological },
    { name: "Coding", value: mockData.students.coding },
    { name: "Resumes", value: mockData.students.resumes },
  ];

  const scoresData = [
    { name: "Quant", value: mockData.medianScores.quant },
    { name: "Verbal", value: mockData.medianScores.verbal },
    { name: "Coding", value: mockData.medianScores.coding },
  ];

  return (
    <div className="container mx-auto py-8" ref={targetRef}>
      <ReportHeader 
        onDownload={toPDF}
        onShare={() => setIsShareDialogOpen(true)}
      />

      <Card className="mb-8 bg-gradient-to-br from-primary/5 to-transparent">
        <CardHeader>
          <CardTitle>College Rankings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <p className="text-4xl font-bold text-primary">{mockData.rankings.city}</p>
              <p className="text-muted-foreground mt-2">City Rank</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <p className="text-4xl font-bold text-primary">{mockData.rankings.region}</p>
              <p className="text-muted-foreground mt-2">Region Rank</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <p className="text-4xl font-bold text-primary">{mockData.rankings.overall}</p>
              <p className="text-muted-foreground mt-2">Overall Rank</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <StatisticsCharts 
        participationData={participationData}
        scoresData={scoresData}
      />

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

      <ShareReportDialog
        open={isShareDialogOpen}
        onOpenChange={setIsShareDialogOpen}
        recruiterName={recruiterName}
        recruiterEmail={recruiterEmail}
        recruiterCompany={recruiterCompany}
        recruiterPhone={recruiterPhone}
        onRecruiterNameChange={setRecruiterName}
        onRecruiterEmailChange={setRecruiterEmail}
        onRecruiterCompanyChange={setRecruiterCompany}
        onRecruiterPhoneChange={setRecruiterPhone}
        onShare={handleShareReport}
      />
    </div>
  );
};

export default CollegeReport;
