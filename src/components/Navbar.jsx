import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/publications", label: "Publications" },
    { path: "/activities", label: "Activities" },
    { path: "/research-group", label: "Research Group" },
    { path: "/recognitions", label: "Recognitions" },
    { path: "/resources", label: "Resources" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
