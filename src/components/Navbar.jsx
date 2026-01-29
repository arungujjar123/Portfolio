import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAdmin, logout } = useAuth();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "Courses" },
    { path: "/experience", label: "Experience" },
    { path: "/publications", label: "Publications" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

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
      <div className="admin-controls">
        {isAdmin ? (
          <>
            <span className="admin-badge">Admin Mode</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="login-link">
            Admin Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
