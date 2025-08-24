import { NavLink, Link } from "react-router-dom";

const linkClass =
  "px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-100 transition";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-black text-white font-bold">N</span>
          <span className="text-lg sm:text-xl font-semibold">
            Nice <span className="text-slate-500">Delivery</span> Service
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
          <NavLink to="/track" className={linkClass}>Track</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <Link
            to="/contact"
            className="ml-2 px-4 py-2 rounded-2xl bg-black text-white text-sm font-medium hover:opacity-90"
          >
            Book Delivery
          </Link>
        </nav>
      </div>
    </header>
  );
}
