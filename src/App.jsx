import { useState } from "react";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/DashBoard";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (success) => {
    if (success) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="app-container">
      <h1>Project Gatekeeper</h1>

      {isLoggedIn ? <Dashboard /> : <LoginForm onLogin={handleLogin} />}

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default App;
