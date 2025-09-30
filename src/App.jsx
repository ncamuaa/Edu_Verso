import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "./components/Splash/Splash";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import TutorPage from "./components/TutorPage/TutorPage";
import AnnouncementPage from "./components/Announce/Announce";
import Profile from "./components/Profile/Profile";
import PeerFeedback from "./components/Peer/Peer";
import QuizArena from "./components/QuizArena/QuizArena";
import Subject from "./components/Subject/Subject";
import Game from "./components/Game/Game"; // ✅ Import Game

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tutor" element={<TutorPage />} />
        <Route path="/announcement" element={<AnnouncementPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/peer-feedback" element={<PeerFeedback />} />
        <Route path="/quiz-arena" element={<QuizArena />} />
        <Route path="/subjects" element={<Subject />} />
        <Route path="/game" element={<Game />} /> {/* ✅ Route for game */}
      </Routes>
    </Router>
  );
}

export default App;
