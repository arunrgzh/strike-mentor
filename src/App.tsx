import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Chat from "./pages/Chat";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <div className="text-white min-h-screen">
        <Navbar />
        <div className="pt-16 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} /> {/* 👈 Добавь это */}
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
