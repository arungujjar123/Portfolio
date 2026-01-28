import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Experience from "./pages/Experience";
import Publications from "./pages/Publications";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content-wrapper">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/publications" element={<Publications />} />
            </Routes>
          </main>
        </div>
        <footer className="footer">
          <p>CSE IIITS</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
