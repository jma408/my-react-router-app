import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
      {isAuthenticated && <Link to="/dashboard">Dashboard</Link>} |{" "}
      {!isAuthenticated ? (
        <Link to="/login">Login</Link>
      ) : (
        <button onClick={handleLogout} style={{ marginLeft: "1rem" }}>
          Logout
        </button>
      )}
    </nav>
  );
}
