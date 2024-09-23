import React from "react";
import Img from "../assets/women.jpg";
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div
      className="sidenav"
      style={{
        position: "fixed", // Fixed position to make it sticky
        top: 0, // Stick to the top of the viewport
        left: 0, // Stick to the left side
        height: "100vh", // Full height of the viewport
        width: "250px", // Sidebar width
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4", // Background color
        textAlign: "center",
        padding: "20px", // Padding for the sidebar
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)", // Optional shadow for a 3D effect
      }}
    >
      <p>Hello</p>
      <img src={Img} alt="User" style={{ width: "100px", borderRadius: "50%" }} />

      <div style={{ marginTop: "20px" }}>
        <Link to="/dashboard">
          <button
            style={{
              width: "150px",
              padding: "10px",
              margin: "10px 0",
              backgroundColor: "white", // Button color
              color: "#007BFF", // Text color
              border: "2px solid #007BFF", // Border
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Dashboard
          </button>
        </Link>

        <Link to="/statistics">
          <button
            style={{
              width: "150px",
              padding: "10px",
              margin: "10px 0",
              backgroundColor: "white", // Button color
              color: "#007BFF", // Text color
              border: "2px solid #007BFF", // Border
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Statistics
          </button>
        </Link>

        <Link to="/payments">
          <button
            style={{
              width: "150px",
              padding: "10px",
              margin: "10px 0",
              backgroundColor: "white", // Button color
              color: "#007BFF", // Text color
              border: "2px solid #007BFF", // Border
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Payments
          </button>
        </Link>

        <Link to="/billings">
          <button
            style={{
              width: "150px",
              padding: "10px",
              margin: "10px 0",
              backgroundColor: "white", // Button color
              color: "#007BFF", // Text color
              border: "2px solid #007BFF", // Border
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Billings
          </button>
        </Link>
      </div>

      <Link to="/">
        <button
          style={{
            marginTop: "20px",
            width: "150px",
            padding: "10px",
            backgroundColor: "white", 
            color: "red", // Text color for logout
            border: "2px solid red", // Red border for logout
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </Link>
    </div>
  );
}

export default Sidenav;
