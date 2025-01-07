export interface Event {
  id: string;
  name: string;
  description: string;
  type: "music" | "tech" | "placement" | "other";
  date: string;
  image: string;
  location: string;
  registrationDeadline: string;
}