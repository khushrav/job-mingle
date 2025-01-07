import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Admin from "./pages/Admin";
import CollegeReport from "./pages/CollegeReport";
import { EventsSidebar } from "./components/events/EventsSidebar";
import { SidebarProvider } from "./components/ui/sidebar";

function App() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/report" element={<CollegeReport />} />
          </Routes>
          <EventsSidebar />
        </div>
      </Router>
    </SidebarProvider>
  );
}

export default App;