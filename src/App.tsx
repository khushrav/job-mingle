import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Admin from "./pages/Admin";
import CollegeReport from "./pages/CollegeReport";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/report" element={<CollegeReport />} />
      </Routes>
    </Router>
  );
}

export default App;