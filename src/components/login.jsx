import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    navigate("/dashboard");
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        backgroundImage: 'url("your-image-url.jpg")', // Add your image URL here
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          width: "300px", // Set a fixed width for the form
        }}
      >
        <form onSubmit={handleLogin} style={{ textAlign: "center" }}>
          <h1>Login</h1>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <button type="submit" style={{ width: "100%", padding: "10px" }}>
            Login
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <span>Don't have an account?</span>
          <button
            type="button"
            onClick={goToSignup}
            style={{ marginLeft: "5px", padding: "5px 10px" }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
