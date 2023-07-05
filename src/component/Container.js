import React from "react";

export default function Container({ children }) {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const innerStyle = {
    position: "relative",
    top: "35%",
    left: "23%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div style={containerStyle}>
      <div style={innerStyle}>{children}</div>
    </div>
  );
}
