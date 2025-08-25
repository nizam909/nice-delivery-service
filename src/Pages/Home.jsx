import React from "react";
import landingImage from "../assets/launch page.webp"; // adjust if path differs

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <img
        src={landingImage}
        alt="Landing"
        className="w-auto max-w-[600px] h-auto object-contain rounded-2xl shadow-lg"
      />
    </div>
  );
}
