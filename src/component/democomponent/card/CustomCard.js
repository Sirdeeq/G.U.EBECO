import React from "react";

export default function CustomCard({ children }) {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
