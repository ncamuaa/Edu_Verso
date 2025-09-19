import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "./components/Splash/Splash";
import Login from "./components/Login/Login";
import HomePage from "./components/Home/Home";
import AnnouncementPage from "./components/Announcement/AnnouncementPage"; // add this

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showSplash ? (
        <Splash />
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/announcement" element={<AnnouncementPage />} /> {/* new */}
        </Routes>
      )}
    </Router>
  );
}

export default App;
