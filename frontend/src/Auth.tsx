import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const Auth: React.FC = () => {
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
          console.log(credentialResponse);
          alert("Google Sign-In successful!");
        }}
        onError={() => {
          alert("Google Sign-In failed. Try again.");
        }}
      />
    </div>
  );
};

export default Auth;
