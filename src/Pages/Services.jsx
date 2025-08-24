export default function Services() {
    const items = [
      { t: "Documents & Parcels", d: "Lightweight, urgent deliveries." },
      { t: "E-commerce Shipping", d: "COD, returns, and bulk labels." },
      { t: "Cold-Chain", d: "Temperature-controlled transport." },
      { t: "Hyperlocal", d: "In-city, under 2 hours." },
    ];
    return (
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold">Our Services</h1>
        <p className="mt-3 text-slate-600">
          Flexible options for individuals, startups, and enterprises.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.t} className="p-6 rounded-2xl bg-white border">
              <h3 className="font-semibold">{it.t}</h3>
              <p className="text-sm text-slate-600 mt-2">{it.d}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  