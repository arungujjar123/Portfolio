import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Publications from "./pages/Publications";
import Team from "./pages/Team";
import Resources from "./pages/Resources";
import Activities from "./pages/Activities";
import Recognitions from "./pages/Recognitions";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content-wrapper">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/research-group" element={<Team />} />
              <Route path="/recognitions" element={<Recognitions />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </main>
        </div>
        <footer className="footer">
          <p>Research Group | CSE IIITS</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
