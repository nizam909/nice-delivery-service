import React from "react";
import brand from "../assets/brand.jpg"; // ✅ move import here

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
        <img
          src={brand}
          alt="Landing"
          className="w-auto max-w-[600px] h-auto object-contain rounded-2xl shadow-lg"
        />
      </div>
    </footer>
  );
}
