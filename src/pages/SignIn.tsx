import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Trophy } from "lucide-react";

const SignIn = () => {
  const handleSignIn = () => {
    console.log("Sign in clicked");
  };

  const handleSignUp = () => {
    console.log("Sign up clicked");
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-4 md:p-8"
      style={{
        backgroundImage: "url('/college-campus.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" /> {/* Slightly darker overlay for better contrast */}
      
      <div className="container max-w-6xl grid gap-8 lg:grid-cols-2 relative z-10">
        {/* Left side - Benefits */}
        <div className="text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Unlock Your Career Potential
          </h1>
          <p className="text-xl text-gray-100">
            Your gateway to professional success starts here
          </p>
          
          <div className="space-y-4 mt-8">
            <div className="flex items-start gap-3">
              <GraduationCap className="w-6 h-6 mt-1 text-primary-light" />
              <div>
                <h3 className="font-semibold text-lg">Personalized Career Guidance</h3>
                <p className="text-gray-100">Get expert advice tailored to your goals and interests</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Users className="w-6 h-6 mt-1 text-primary-light" />
              <div>
                <h3 className="font-semibold text-lg">Industry Connections</h3>
                <p className="text-gray-100">Connect with leading companies and professionals</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <BookOpen className="w-6 h-6 mt-1 text-primary-light" />
              <div>
                <h3 className="font-semibold text-lg">Skill Development</h3>
                <p className="text-gray-100">Access comprehensive practice tests and learning resources</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Trophy className="w-6 h-6 mt-1 text-primary-light" />
              <div>
                <h3 className="font-semibold text-lg">Track Your Progress</h3>
                <p className="text-gray-100">Monitor your growth with detailed performance analytics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Auth Card */}
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md bg-white/95">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
              <CardDescription className="text-center">
                Sign in to access your career dashboard
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <Button
                  onClick={handleSignIn}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Sign In
                </Button>
                <Button
                  onClick={handleSignUp}
                  variant="outline"
                  className="w-full"
                >
                  Create Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignIn;