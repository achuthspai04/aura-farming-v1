
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Auth: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2 style={{ fontWeight: 600, marginBottom: 24, fontSize: "2rem" }}>Aura Farming</h2>

      <div style={{ display: "flex", gap: "5px", marginBottom: "24px" }}>
        {["pic3", "pic2", "pic1", "pic5", "pic4"].map((pic, index) => (
          <img
            key={index}
            src={`/${pic}.png`}
            alt={pic}
            style={{ width: "100px", height: "100px", objectFit: "contain", borderRadius: "2px" }}
          />
        ))}
      </div>

      <GoogleLogin
        onSuccess={credentialResponse => {
          if (credentialResponse.credential) {
            try {
              const decoded = jwtDecode(credentialResponse.credential);
              // @ts-ignore
              const name = decoded.name || "User";
              navigate("/dashboard", { state: { name } });
            } catch (e) {
              alert("Could not decode user info.");
            }
          } else {
            alert("No credential received.");
          }
        }}
        onError={() => {
          alert("Google Sign-In failed. Try again.");
        }}
      />
    </div>
  );
};

export default Auth;
