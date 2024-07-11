import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        textAlign: "center",
      }}
      onClick={() => navigate("/")}
    >
      <h1 style={{ cursor: "pointer", color: "orangered" }}>
        Contact Manager || Practice-1
      </h1>
    </div>
  );
};
