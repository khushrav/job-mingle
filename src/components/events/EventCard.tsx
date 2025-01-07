import { Button } from "@/components/ui/button";
import { Event } from "@/types/event";
import { CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface EventCardProps {
  event: Event;
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={event.image}
          alt={event.name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2 line-clamp-1">{event.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {event.description}
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarDays className="mr-2 h-4 w-4" />
            {new Date(event.date).toLocaleDateString()}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4" />
            {event.location}
          </div>
        </div>
        <div className="flex gap-2">
          <Button asChild className="flex-1">
            <Link to={`/events/${event.id}`}>View Details</Link>
          </Button>
          <Button variant="secondary" className="flex-1">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};