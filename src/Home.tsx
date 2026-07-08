import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-card">
        <h2>🛒 Welcome to Fresh Mart</h2>
        <p>Choose a category to start shopping</p>

        <div className="button-group">
          <button onClick={() => navigate("/veg")}>
            🥦 Shop Veg
          </button>

          <button onClick={() => navigate("/nonveg")}>
            🍗 Shop Non-Veg
          </button>

          <button onClick={() => navigate("/dairy")}>
            🥛 Shop Dairy
          </button>
        </div>
      </div>
    </div>
  );
}