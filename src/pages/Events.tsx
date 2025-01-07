import { EventCard } from "@/components/events/EventCard";

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

export default function Events() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">All Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}