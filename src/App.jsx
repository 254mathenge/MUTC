import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/assets/global.css";
import Home from "@/pages/Home";
import Events from "@/pages/Events";
import Leadership from "@/pages/Leadership";
import Tracks from "@/pages/Tracks";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/tracks" element={<Tracks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
