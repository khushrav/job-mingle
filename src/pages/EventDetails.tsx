import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function EventDetails() {
  const { id } = useParams();
  // In a real app, we would fetch the event details based on the ID
  // For now, we'll use mock data
  const event = {
    id: "1",
    name: "Annual Tech Fest 2024",
    description: "Join us for the biggest tech festival of the year featuring workshops, hackathons, and exciting competitions. Network with industry professionals, showcase your projects, and win amazing prizes!",
    type: "tech",
    date: "2024-05-15",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    location: "Main Campus Auditorium",
    registrationDeadline: "2024-05-01"
  };

  return (
    <div className="container mx-auto py-8">
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/events" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Events
        </Link>
      </Button>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-4">{event.name}</h1>
            <p className="text-muted-foreground">{event.description}</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center text-muted-foreground">
              <CalendarDays className="mr-2 h-5 w-5" />
              <div>
                <p>Event Date: {new Date(event.date).toLocaleDateString()}</p>
                <p>Registration Deadline: {new Date(event.registrationDeadline).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="mr-2 h-5 w-5" />
              {event.location}
            </div>
          </div>
          
          <Button size="lg" className="w-full md:w-auto">
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
}