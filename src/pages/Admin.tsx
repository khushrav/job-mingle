import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Download, Plus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

export default function Admin() {
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Handle CSV upload
      toast({
        title: "Success",
        description: "Students list uploaded successfully",
      });
    }
  };

  const handleDownloadReport = () => {
    // Handle report download
    toast({
      title: "Success",
      description: "Report downloaded successfully",
    });
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Link to="/report">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> View College Report
          </Button>
        </Link>
      </div>
      
      <Tabs defaultValue="events" className="space-y-4">
        <TabsList>
          <TabsTrigger value="events">Events Management</TabsTrigger>
          <TabsTrigger value="students">Students Management</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Events
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Create Event
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">No events found</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="students">
          <Card>
            <CardHeader>
              <CardTitle>Add Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Student name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="student@example.com" />
                    </div>
                  </div>
                  <Button>Add Student</Button>
                </div>

                <div className="space-y-4">
                  <Label>Bulk Upload</Label>
                  <div className="grid gap-4">
                    <Input
                      type="file"
                      accept=".csv"
                      onChange={handleFileUpload}
                    />
                    <Button variant="secondary">
                      <Upload className="mr-2 h-4 w-4" /> Upload CSV
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Performance Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <Button onClick={handleDownloadReport}>
                <Download className="mr-2 h-4 w-4" /> Download College Performance Report
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}