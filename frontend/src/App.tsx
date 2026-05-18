import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GroundPage from "@/pages/GroundPage";
import EarthPage from "@/pages/EarthPage";
import EarthBigPage from "@/pages/EarthBigPage";
import SpacePage from "@/pages/SpacePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ground" element={<GroundPage />} />
        <Route path="/earth" element={<EarthPage />} />
        <Route path="/earth-big" element={<EarthBigPage />} />
        <Route path="/space" element={<SpacePage />} />
        <Route path="*" element={<Navigate to="/ground" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
