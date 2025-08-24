import { useState } from "react";

const MOCK = {
  "NDS123456": { status: "In Transit", eta: "Tomorrow, 5–7 PM", lastSeen: "Bengaluru Hub" },
  "NDS654321": { status: "Delivered", eta: "Delivered", lastSeen: "Hyderabad — Doorstep" },
};

export default function Track() {
  const [id, setId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!/^NDS\d{6}$/.test(id.trim())) {
      setError("Enter a valid Tracking ID like NDS123456.");
      return;
    }
    // Simulate API lookup
    setTimeout(() => {
      setResult(MOCK[id.trim()] ?? { status: "Not Found", eta: "-", lastSeen: "-" });
    }, 300);
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold">Track your order</h1>
      <p className="mt-3 text-slate-600">Enter your tracking ID (e.g., NDS123456).</p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
        <input
          value={id}
          onChange={(e) => setId(e.target.value.toUpperCase())}
          placeholder="NDS123456"
          className="flex-1 px-4 py-3 rounded-2xl border bg-white"
        />
        <button className="px-5 py-3 rounded-2xl bg-black text-white font-medium hover:opacity-90">
          Track
        </button>
      </form>
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

      {result && (
        <div className="mt-8 p-6 rounded-2xl bg-white border">
          <h3 className="font-semibold">Status: {result.status}</h3>
          <p className="text-sm text-slate-600 mt-2">ETA: {result.eta}</p>
          <p className="text-sm text-slate-600">Last seen: {result.lastSeen}</p>
        </div>
      )}
    </section>
  );
}
