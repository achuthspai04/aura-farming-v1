import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard: React.FC = () => {
  const location = useLocation();
  // Get name from navigation state
  const name = location.state?.name || "User";
  return (
    <div
      style={{
        position: "absolute",
        top: "1rem",
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 1rem",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div style={{ fontWeight: 700, fontSize: "2rem" }}>Aura dashboard</div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {name === "Achuth S Pai" ? (
          <div style={{ textAlign: "center" }}>
            <img
              src="./pic4.png"
              alt="Achuth"
              style={{ width: "40px", borderRadius: "50%", marginBottom: "0.05rem" }}
            />
            <h1 style={{ fontWeight: 600, fontSize: "0.9rem", margin: 0 }}>{name}</h1>
          </div>
        ) : name === "Jopaul Jose" ? (
          <div style={{ textAlign: "center" }}>
            <img
              src="./pic1.png"
              alt="Jopaul"
              style={{ width: "40px", borderRadius: "50%", marginBottom: "0.05rem" }}
            />
            <h1 style={{ fontWeight: 600, fontSize: "0.9rem", margin: 0 }}>{name}</h1>
          </div>
        ) : name === "Vasudev Varma" ? (
          <div style={{ textAlign: "center" }}>
            <img
              src="./pic2.png"
              alt="Vasudev"
              style={{ width: "40px", borderRadius: "50%", marginBottom: "0.05rem" }}
            />
            <h1 style={{ fontWeight: 600, fontSize: "0.9rem", margin: 0 }}>{name}</h1>
          </div>
        ) : name === "Vishnu Prasad G" ? (
          <div style={{ textAlign: "center" }}>
            <img
              src="./pic3.png"
              alt="Vishnu"
              style={{ width: "40px", borderRadius: "50%", marginBottom: "0.05rem" }}
            />
            <h1 style={{ fontWeight: 600, fontSize: "0.9rem", margin: 0 }}>{name}</h1>
          </div>
        ) : name === "Johan Biju Paul" ? (
          <div style={{ textAlign: "center" }}>
            <img
              src="./pic5.png"
              alt="Johan"
              style={{ width: "40px", borderRadius: "50%", marginBottom: "0.05rem" }}
            />
            <h1 style={{ fontWeight: 600, fontSize: "0.9rem", margin: 0 }}>{name}</h1>
          </div>
        ) : (
          <h1 style={{ fontWeight: 600, fontSize: "0.9rem", margin: 0 }}>{name}</h1>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
