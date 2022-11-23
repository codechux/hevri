import React from "react";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import { Routes, Route } from "react-router-dom";
import AdmisssionSupport from "./pages/AdmissionSupport";
import Community from "./pages/Community";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/admission-support" element={<AdmisssionSupport />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </div>
  );
}

export default App;
