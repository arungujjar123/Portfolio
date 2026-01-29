import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Experience from "./pages/Experience";
import Publications from "./pages/Publications";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <AuthProvider>
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
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
          </div>
          <footer className="footer">
            <p>CSE IIITS</p>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
