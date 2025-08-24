export default function Pricing() {
    const tiers = [
      { name: "Basic", price: "₹99", desc: "In-city up to 3km", features: ["Same-day pickup", "Tracking", "Support"] },
      { name: "Standard", price: "₹199", desc: "In-city up to 10km", features: ["Priority handling", "Live ETA", "Support"] },
      { name: "Plus", price: "₹399", desc: "Inter-city next-day", features: ["Insurance", "Live tracking", "Support"] },
    ];
    return (
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold">Simple Pricing</h1>
        <p className="mt-3 text-slate-600">Transparent rates with no surprises.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="p-6 rounded-2xl bg-white border">
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <div className="mt-2 text-3xl font-extrabold">{t.price}</div>
              <p className="text-sm text-slate-600 mt-1">{t.desc}</p>
              <ul className="mt-4 text-sm space-y-1">
                {t.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
              <button className="mt-5 w-full px-4 py-2 rounded-xl bg-black text-white text-sm font-medium hover:opacity-90">
                Choose {t.name}
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  