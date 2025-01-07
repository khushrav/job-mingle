import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { EventCard } from "./EventCard";

const mockEvents = [
  {
    id: "1",
    name: "Annual Tech Fest 2024",
    description: "Join us for the biggest tech festival of the year featuring workshops, hackathons, and exciting competitions.",
    type: "tech",
    date: "2024-05-15",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    location: "Main Campus Auditorium",
    registrationDeadline: "2024-05-01"
  },
  {
    id: "2",
    name: "Spring Music Festival",
    description: "A celebration of music featuring performances from talented students and guest artists.",
    type: "music",
    date: "2024-04-20",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea",
    location: "College Amphitheater",
    registrationDeadline: "2024-04-10"
  },
  {
    id: "3",
    name: "Pre-Placement Talk: Tech Giants",
    description: "Learn about career opportunities from leading tech companies.",
    type: "placement",
    date: "2024-03-30",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
    location: "Virtual Event",
    registrationDeadline: "2024-03-25"
  }
] as const;

export const EventsSidebar = () => {
  return (
    <Sidebar side="right" variant="floating">
      <SidebarHeader className="border-b px-4 py-2">
        <h2 className="text-lg font-semibold">Upcoming Events</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="p-4 space-y-4">
            {mockEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};