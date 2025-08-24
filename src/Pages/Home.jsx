import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            Delivering happiness, right on time.
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Nice Delivery Service offers same-day pickups, next-day delivery, and real-time tracking for your parcels—business or personal.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/contact" className="px-5 py-3 rounded-2xl bg-black text-white font-medium hover:opacity-90">
              Book a Pickup
            </Link>
            <Link to="/track" className="px-5 py-3 rounded-2xl bg-slate-900/5 font-medium hover:bg-slate-900/10">
              Track Order
            </Link>
          </div>
          <ul className="mt-8 grid sm:grid-cols-3 gap-3 text-sm">
            <li className="p-3 rounded-xl bg-white border">24/7 Support</li>
            <li className="p-3 rounded-xl bg-white border">Live Tracking</li>
            <li className="p-3 rounded-xl bg-white border">Insurance Options</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl border bg-white shadow-sm grid place-items-center text-slate-500">
            <div className="text-center p-6">
              <div className="text-7xl mb-4">🚚</div>
              <p>Fast • Safe • Affordable</p>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-16 grid sm:grid-cols-3 gap-6">
        {[
          { t: "Same-Day Pickup", d: "Request a pickup and we’ll be there in hours." },
          { t: "Next-Day Delivery", d: "Across major cities with precise ETAs." },
          { t: "Secure Handling", d: "Tamper-proof packaging and insured options." },
        ].map((it) => (
          <div key={it.t} className="p-6 rounded-2xl bg-white border">
            <h3 className="font-semibold">{it.t}</h3>
            <p className="text-sm text-slate-600 mt-2">{it.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
